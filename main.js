/**
 * main.js
 * -----------------------------------------------------------------------
 * Orchestrator. Wires the intake form to the calculation layer
 * (birthChartService) and the content layer (contentGenerator), then
 * hands the result to the rendering layer (ui). Also owns page-level
 * concerns: nav, loading state, reduced-motion handling.
 * -----------------------------------------------------------------------
 */

import { calculateBirthChart } from './birthchartservice.js';
import { generateIssue } from './contentgen.js';
import { renderIssue, initScrollReveal, scrollToSection } from './ui.js';

const form = document.getElementById('intake-form');
const submitButton = form.querySelector('.intake-submit');
const intakeSection = document.getElementById('intake');
const issueSection = document.getElementById('issue');
const nav = document.getElementById('running-nav');
const restartButton = document.getElementById('restart-button');

function setLoading(isLoading) {
  submitButton.classList.toggle('is-loading', isLoading);
  submitButton.disabled = isLoading;

  if (isLoading) {
    submitButton.textContent = 'Typesetting your issue…';
  }
}

function resetSubmitButton() {
  submitButton.textContent = 'Make My Issue';
}

async function handleSubmit(event) {
  event.preventDefault();

  const date = document.getElementById('birth-date').value;
  const time = document.getElementById('birth-time').value;
  const locationText = document.getElementById('birth-location').value;

  if (!date || !time || !locationText) {
    form.reportValidity();
    return;
  }

  setLoading(true);

  try {
    const chart = await calculateBirthChart({
      date,
      time,
      city: locationText
    });
    const issue = generateIssue(chart);

    renderIssue(issue);

    issueSection.hidden = false;
    nav.hidden = false;
    intakeSection.classList.add('is-complete');

    requestAnimationFrame(() => {
      issueSection.classList.add('is-visible');
      initScrollReveal(issueSection);
      scrollToSection('cover');
    });
  } catch (err) {
    console.error('Could not generate birth chart:', err);
    submitButton.textContent = err.message || 'Something went wrong — try again';
  } finally {
    setLoading(false);
  }
}

function handleNavClick(event) {
  const link = event.target.closest('[data-scroll-target]');
  if (!link) return;
  event.preventDefault();
  scrollToSection(link.dataset.scrollTarget);
}

function handleRestart() {
  resetSubmitButton();
  issueSection.classList.remove('is-visible');
  issueSection.hidden = true;
  nav.hidden = true;
  intakeSection.classList.remove('is-complete');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

form.addEventListener('input', resetSubmitButton);
form.addEventListener('submit', handleSubmit);
nav.addEventListener('click', handleNavClick);
restartButton.addEventListener('click', handleRestart);

// Reveal the intake section itself on load
initScrollReveal(document);