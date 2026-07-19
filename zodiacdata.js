export const SIGNS = [
  'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo',
  'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'
];

export const SUN_SIGN_RANGES = [
  { sign: 'capricorn', start: [1, 1], end: [1, 19] },
  { sign: 'aquarius', start: [1, 20], end: [2, 18] },
  { sign: 'pisces', start: [2, 19], end: [3, 20] },
  { sign: 'aries', start: [3, 21], end: [4, 19] },
  { sign: 'taurus', start: [4, 20], end: [5, 20] },
  { sign: 'gemini', start: [5, 21], end: [6, 20] },
  { sign: 'cancer', start: [6, 21], end: [7, 22] },
  { sign: 'leo', start: [7, 23], end: [8, 22] },
  { sign: 'virgo', start: [8, 23], end: [9, 22] },
  { sign: 'libra', start: [9, 23], end: [10, 22] },
  { sign: 'scorpio', start: [10, 23], end: [11, 21] },
  { sign: 'sagittarius', start: [11, 22], end: [12, 21] },
  { sign: 'capricorn', start: [12, 22], end: [12, 31] }
];

export const ZODIAC = {
  aries: {
    label: 'Aries',
    symbol: '♈',
    element: 'Fire',
    modality: 'Cardinal',
    ruler: 'Mars',
    essence: 'the one who moves before doubt arrives',
    traits: ['bold', 'immediate', 'impossible to ignore'],
    accent: '#F06D58',

    style: {
      palette: ['tomato red', 'ink black', 'powder pink'],
      fabrics: ['crisp poplin', 'broken-in denim', 'glossy leather'],
      jewellery: [
        'one sculptural cuff',
        'tiny silver hoops',
        'a ring that looks borrowed from a band'
      ],
      signature:
        'A tiny top, oversized trousers and one unapologetically red detail.'
    },

    comfort: {
      foods: [
        'chilli crisp noodles',
        'crispy potatoes with too much seasoning',
        'a warm brownie eaten straight from the pan'
      ],
      drinks: [
        'an iced americano',
        'sparkling lime soda'
      ],
      cafe:
        'somewhere fast, bright and loud enough that nobody expects you to whisper',
      scent:
        'pink pepper, citrus peel and cedar',
      flower:
        'coral tulips',
      hobby:
        'turning a casual plan into a challenge'
    },

    playlist: {
      mood:
        'sharp, sweaty, confidence-before-the-mirror music',
      tracks: [
        { title: '360', artist: 'Charli xcx' },
        { title: 'Rush', artist: 'Troye Sivan' },
        { title: 'XS', artist: 'Rina Sawayama' },
        { title: 'Von dutch', artist: 'Charli xcx' }
      ]
    },

    home: {
      aesthetic:
        'The Red Chair Theory',
      description:
        'Mostly clean and neutral, until one object interrupts the room on purpose. Good speakers, open floor space, nothing too precious.',
      materials: [
        'chrome',
        'dark wood',
        'high-gloss lacquer'
      ]
    },

    weekend: {
      morning:
        'leave the house before overthinking it, dressed in five minutes but somehow looking intentional',
      day:
        'say yes to the plan that has the best story attached to it',
      evening:
        'order something spicy, play music too loudly and make tomorrow’s problem tomorrow’s problem'
    }
  },

  taurus: {
    label: 'Taurus',
    symbol: '♉',
    element: 'Earth',
    modality: 'Fixed',
    ruler: 'Venus',
    essence: 'the one with excellent taste and no desire to rush',
    traits: ['sensory', 'steady', 'selective'],
    accent: '#7C9A72',

    style: {
      palette: [
        'pistachio',
        'butter cream',
        'espresso brown'
      ],
      fabrics: [
        'soft suede',
        'ribbed cotton',
        'silk with weight'
      ],
      jewellery: [
        'chunky gold hoops',
        'a pendant worn every day',
        'rings collected slowly'
      ],
      signature:
        'A fitted knit, long skirt and shoes chosen for both beauty and an actual walk.'
    },

    comfort: {
      foods: [
        'warm focaccia with herbed butter',
        'mushroom pasta',
        'strawberries and cream'
      ],
      drinks: [
        'iced matcha with vanilla',
        'thick hot chocolate'
      ],
      cafe:
        'a bakery with real plates, linen napkins and a pastry worth travelling for',
      scent:
        'fig leaf, sandalwood and vanilla bean',
      flower:
        'garden roses',
      hobby:
        'making one ordinary ritual unnecessarily beautiful'
    },

    playlist: {
      mood:
        'velvety, slow and slightly lovesick',
      tracks: [
        { title: 'Snooze', artist: 'SZA' },
        {
          title: 'Nothing Even Matters',
          artist: 'Lauryn Hill & D’Angelo'
        },
        {
          title: 'Sweet',
          artist: 'Cigarettes After Sex'
        },
        {
          title: 'My Love Mine All Mine',
          artist: 'Mitski'
        }
      ]
    },

    home: {
      aesthetic:
        'The Softest Seat in the House',
      description:
        'Warm lamps, tactile fabrics, ceramics you want to hold and a dining table that quietly becomes the centre of everything.',
      materials: [
        'oak',
        'linen',
        'glazed ceramic'
      ]
    },

    weekend: {
      morning:
        'stay in bed long enough for it to become a decision, then make a beautiful breakfast',
      day:
        'browse a market with no urgency and come home with flowers and one perfect snack',
      evening:
        'cook for people you like, light the nice candle and refuse to hurry dessert'
    }
  },

  gemini: {
    label: 'Gemini',
    symbol: '♊',
    element: 'Air',
    modality: 'Mutable',
    ruler: 'Mercury',
    essence: 'the one with three tabs open in every part of life',
    traits: ['curious', 'quick', 'socially inventive'],
    accent: '#E8C94E',

    style: {
      palette: [
        'butter yellow',
        'cobalt blue',
        'silver'
      ],
      fabrics: [
        'striped cotton',
        'sheer layers',
        'mixed prints'
      ],
      jewellery: [
        'a charm necklace',
        'mismatched earrings',
        'stacked thin rings'
      ],
      signature:
        'A schoolgirl skirt with a graphic tee, tiny sunglasses and something that makes people ask where it is from.'
    },

    comfort: {
      foods: [
        'dumplings to share',
        'chaat with every texture',
        'three desserts instead of one'
      ],
      drinks: [
        'iced coffee with an extra shot',
        'peach soda'
      ],
      cafe:
        'a window seat with people to watch, magazines to flip through and enough noise to think in',
      scent:
        'bergamot, green tea and paper',
      flower:
        'yellow ranunculus',
      hobby:
        'starting a new niche before the old one has even cooled down'
    },

    playlist: {
      mood:
        'bright, talkative and impossible to keep in one genre',
      tracks: [
        {
          title: 'Super Shy',
          artist: 'NewJeans'
        },
        {
          title: 'Silk Chiffon',
          artist: 'MUNA feat. Phoebe Bridgers'
        },
        {
          title: 'The Spins',
          artist: 'Mac Miller'
        },
        {
          title: 'BIZCOCHITO',
          artist: 'ROSALÍA'
        }
      ]
    },

    home: {
      aesthetic:
        'The Rotating Moodboard',
      description:
        'Books in unstable stacks, postcards taped to the wall, chairs that do not match and evidence of several ongoing obsessions.',
      materials: [
        'glass',
        'chrome',
        'printed paper'
      ]
    },

    weekend: {
      morning:
        'make two plans, cancel one, resurrect a third and somehow still have time for coffee',
      day:
        'wander into a shop for five minutes and leave forty minutes later with a new fixation',
      evening:
        'move between group chats, dinner and one excellent accidental conversation'
    }
  },

  cancer: {
    label: 'Cancer',
    symbol: '♋',
    element: 'Water',
    modality: 'Cardinal',
    ruler: 'Moon',
    essence: 'the one who keeps the emotional receipts',
    traits: ['tender', 'protective', 'quietly funny'],
    accent: '#7EA3BA',

    style: {
      palette: [
        'dusty blue',
        'shell pink',
        'soft grey'
      ],
      fabrics: [
        'brushed cotton',
        'fine knits',
        'washed satin'
      ],
      jewellery: [
        'a locket',
        'pearl drops',
        'something inherited or made by a friend'
      ],
      signature:
        'A soft cardigan over a slip dress, ballet flats and a bag full of tiny necessities.'
    },

    comfort: {
      foods: [
        'tomato soup and grilled cheese',
        'steaming dumplings',
        'rice pudding with cardamom'
      ],
      drinks: [
        'honey milk',
        'jasmine tea'
      ],
      cafe:
        'somewhere that feels like a living room, with warm lamps and a corner nobody rushes you out of',
      scent:
        'rice steam, white musk and sea salt',
      flower:
        'white peonies',
      hobby:
        'archiving memories nobody else realised were important'
    },

    playlist: {
      mood:
        'soft-focus nostalgia for a life you may or may not have lived',
      tracks: [
        {
          title: 'Moon Song',
          artist: 'Phoebe Bridgers'
        },
        {
          title: 'Glue Song',
          artist: 'beabadoobee'
        },
        {
          title: 'Sparks',
          artist: 'Coldplay'
        },
        {
          title: 'Ribs',
          artist: 'Lorde'
        }
      ]
    },

    home: {
      aesthetic:
        'The Memory Drawer',
      description:
        'Photos tucked into mirrors, blankets within reach, little lamps instead of overhead light and a kitchen that always has something comforting.',
      materials: [
        'washed wood',
        'cotton',
        'hand-painted ceramic'
      ]
    },

    weekend: {
      morning:
        'make tea before speaking to anyone and stay close to whatever feels familiar',
      day:
        'turn a casual visit into snacks, stories and three extra hours together',
      evening:
        'rewatch something beloved while wrapped in the softest thing you own'
    }
  },

  leo: {
    label: 'Leo',
    symbol: '♌',
    element: 'Fire',
    modality: 'Fixed',
    ruler: 'Sun',
    essence: 'the one who understands that getting dressed can be an event',
    traits: ['warm', 'expressive', 'generous'],
    accent: '#E9A13B',

    style: {
      palette: [
        'marigold',
        'cherry',
        'deep plum'
      ],
      fabrics: [
        'satin',
        'velvet ribbon',
        'sun-warmed linen'
      ],
      jewellery: [
        'statement earrings',
        'a glossy watch',
        'gold stacked at the wrist'
      ],
      signature:
        'A dramatic neckline, excellent hair and one piece that deserves its own entrance.'
    },

    comfort: {
      foods: [
        'burnt basque cheesecake',
        'truffle fries for the table',
        'mango with chilli salt'
      ],
      drinks: [
        'iced saffron latte',
        'blood orange soda'
      ],
      cafe:
        'the table with the best light, a dramatic dessert and enough room for everyone to join',
      scent:
        'amber, orange blossom and warm skin',
      flower:
        'orange ranunculus',
      hobby:
        'making a small occasion feel worth dressing up for'
    },

    playlist: {
      mood:
        'glossy, theatrical and built for walking into a room',
      tracks: [
        {
          title: 'ALIEN SUPERSTAR',
          artist: 'Beyoncé'
        },
        {
          title: 'Good Luck, Babe!',
          artist: 'Chappell Roan'
        },
        {
          title: 'Primadonna',
          artist: 'MARINA'
        },
        {
          title: 'Maneater',
          artist: 'Nelly Furtado'
        }
      ]
    },

    home: {
      aesthetic:
        'The Main Character Lamp',
      description:
        'A room organised around flattering light, one oversized artwork and seating that makes staying for another hour feel inevitable.',
      materials: [
        'brass',
        'lacquer',
        'plush upholstery'
      ]
    },

    weekend: {
      morning:
        'take your time getting ready because the outfit is part of the plan',
      day:
        'turn lunch into an entire afternoon and make sure everybody is included',
      evening:
        'go somewhere with music, flattering light and at least one reason to take a photo'
    }
  },

  virgo: {
    label: 'Virgo',
    symbol: '♍',
    element: 'Earth',
    modality: 'Mutable',
    ruler: 'Mercury',
    essence: 'the one who spots the tiny thing that changes everything',
    traits: ['observant', 'considered', 'devoted'],
    accent: '#799082',

    style: {
      palette: [
        'sage',
        'cream',
        'graphite'
      ],
      fabrics: [
        'crisp poplin',
        'fine rib knit',
        'matte silk'
      ],
      jewellery: [
        'a fine chain',
        'small sculptural studs',
        'one precise watch'
      ],
      signature:
        'A perfect white shirt, tailored shorts and a bag whose pockets actually make sense.'
    },

    comfort: {
      foods: [
        'lemon rice with crunchy peanuts',
        'a neat little fruit tart',
        'buttered toast with flaky salt'
      ],
      drinks: [
        'sencha',
        'sparkling water with cucumber'
      ],
      cafe:
        'a calm place with a short menu, clean tables and exactly the right amount of background music',
      scent:
        'green fig, linen and eucalyptus',
      flower:
        'chamomile and feverfew',
      hobby:
        'refining a system until everyday life feels noticeably easier'
    },

    playlist: {
      mood:
        'clean lines, hidden detail and lyrics worth reading twice',
      tracks: [
        {
          title: 'Garden Song',
          artist: 'Phoebe Bridgers'
        },
        {
          title: 'Bags',
          artist: 'Clairo'
        },
        {
          title: 'Good Days',
          artist: 'SZA'
        },
        {
          title: 'Linger',
          artist: 'The Cranberries'
        }
      ]
    },

    home: {
      aesthetic:
        'The Beautiful System',
      description:
        'Open shelves, hidden storage, lovely stationery and objects placed where they are actually used. Calm, not sterile.',
      materials: [
        'pale oak',
        'brushed steel',
        'linen'
      ]
    },

    weekend: {
      morning:
        'reset the room, shower properly and make a list that leaves space for pleasure',
      day:
        'visit one carefully chosen place and notice details everyone else walks past',
      evening:
        'read, annotate or arrange something until your mind feels quiet again'
    }
  },

  libra: {
    label: 'Libra',
    symbol: '♎',
    element: 'Air',
    modality: 'Cardinal',
    ruler: 'Venus',
    essence: 'the one who can turn taste into a social skill',
    traits: ['charming', 'romantic', 'visually fluent'],
    accent: '#D99DBB',

    style: {
      palette: [
        'powder pink',
        'dove grey',
        'wine red'
      ],
      fabrics: [
        'silk',
        'soft tailoring',
        'sheer chiffon'
      ],
      jewellery: [
        'pearl studs',
        'a delicate pendant',
        'a vintage-looking ring'
      ],
      signature:
        'A bias-cut skirt, fitted cardigan and a colour combination that looks effortless but was absolutely considered.'
    },

    comfort: {
      foods: [
        'strawberry shortcake',
        'pretty little sandwiches',
        'pasta served in the nicest bowl'
      ],
      drinks: [
        'rose milk',
        'vanilla iced latte'
      ],
      cafe:
        'the beautiful one you saved months ago, preferably with fresh flowers and a bathroom mirror worth using',
      scent:
        'rosewater, iris and clean musk',
      flower:
        'blush sweet peas',
      hobby:
        'making a moodboard for a plan that could have been a text message'
    },

    playlist: {
      mood:
        'romantic, polished and slightly cinematic',
      tracks: [
        {
          title: 'Sofia',
          artist: 'Clairo'
        },
        {
          title: 'Lovefool',
          artist: 'The Cardigans'
        },
        {
          title: 'From The Start',
          artist: 'Laufey'
        },
        {
          title: 'Supercut',
          artist: 'Lorde'
        }
      ]
    },

    home: {
      aesthetic:
        'The Pretty Conversation',
      description:
        'Soft symmetry, curved furniture, fresh flowers and objects arranged so the room feels welcoming from every angle.',
      materials: [
        'travertine',
        'brushed brass',
        'bouclé'
      ]
    },

    weekend: {
      morning:
        'choose the outfit before the plan and let the outfit improve the plan',
      day:
        'meet someone somewhere beautiful and somehow stay long enough for another meal',
      evening:
        'set the table, pick the playlist and make an ordinary night feel composed'
    }
  },

  scorpio: {
    label: 'Scorpio',
    symbol: '♏',
    element: 'Water',
    modality: 'Fixed',
    ruler: 'Pluto/Mars',
    essence: 'the one who notices what everyone carefully did not say',
    traits: ['magnetic', 'private', 'all-or-nothing'],
    accent: '#722D48',

    style: {
      palette: [
        'oxblood',
        'black cherry',
        'smoke'
      ],
      fabrics: [
        'liquid satin',
        'soft leather',
        'fine mesh'
      ],
      jewellery: [
        'a dark stone ring',
        'a thin chain at the throat',
        'silver that looks slightly antique'
      ],
      signature:
        'A long dark skirt, tiny top, severe shoes and one detail visible only up close.'
    },

    comfort: {
      foods: [
        'dark chocolate cake',
        'miso butter noodles',
        'blackberries straight from the fridge'
      ],
      drinks: [
        'cherry cola over ice',
        'a very dark mocha'
      ],
      cafe:
        'low light, corner table, excellent music and nobody hovering with the bill',
      scent:
        'black tea, plum and incense',
      flower:
        'burgundy calla lilies',
      hobby:
        'following a mystery, fictional or otherwise, until it gives up'
    },

    playlist: {
      mood:
        'dark gloss, controlled intensity and a very good bass line',
      tracks: [
        {
          title: 'West Coast',
          artist: 'Lana Del Rey'
        },
        {
          title: 'After Dark',
          artist: 'Mr.Kitty'
        },
        {
          title: 'Glory Box',
          artist: 'Portishead'
        },
        {
          title: 'CHIHIRO',
          artist: 'Billie Eilish'
        }
      ]
    },

    home: {
      aesthetic:
        'The Door That Closes Properly',
      description:
        'Deep colour, low pools of light, private corners and objects chosen because they mean something, not because they match.',
      materials: [
        'dark walnut',
        'smoked glass',
        'velvet'
      ]
    },

    weekend: {
      morning:
        'protect the first hour from messages, plans and anyone else’s emotional weather',
      day:
        'choose one person or one subject and give it your full attention',
      evening:
        'disappear into a film, a conversation or a playlist deep enough to change the room'
    }
  },

  sagittarius: {
    label: 'Sagittarius',
    symbol: '♐',
    element: 'Fire',
    modality: 'Mutable',
    ruler: 'Jupiter',
    essence: 'the one who treats curiosity like a travel document',
    traits: ['open', 'restless', 'refreshingly honest'],
    accent: '#D97843',

    style: {
      palette: [
        'burnt orange',
        'turquoise',
        'sun-faded cream'
      ],
      fabrics: [
        'linen',
        'suede',
        'worn denim'
      ],
      jewellery: [
        'a charm from somewhere real',
        'beaded necklaces',
        'mixed metals without concern'
      ],
      signature:
        'A printed shirt, relaxed trousers and a jacket that looks better slightly rumpled.'
    },

    comfort: {
      foods: [
        'pani puri from the trusted place',
        'wood-fired pizza',
        'cinnamon rolls on a road trip'
      ],
      drinks: [
        'cold brew in a paper cup',
        'ginger lime soda'
      ],
      cafe:
        'the accidental find with a handwritten menu and a story you will repeat for months',
      scent:
        'wild herbs, orange peel and warm dust',
      flower:
        'loose wildflowers',
      hobby:
        'planning the next escape while still unpacking from the last one'
    },

    playlist: {
      mood:
        'open-window, missed-exit, worth-the-detour music',
      tracks: [
        {
          title: 'The Adults Are Talking',
          artist: 'The Strokes'
        },
        {
          title: 'Dog Days Are Over',
          artist: 'Florence + The Machine'
        },
        {
          title: 'Sweet Disposition',
          artist: 'The Temper Trap'
        },
        {
          title: 'End of Beginning',
          artist: 'Djo'
        }
      ]
    },

    home: {
      aesthetic:
        'The Souvenir Shelf',
      description:
        'Collected rather than decorated: prints, textiles, books and odd little objects that all come with a story.',
      materials: [
        'woven cotton',
        'raw wood',
        'coloured glass'
      ]
    },

    weekend: {
      morning:
        'wake up wanting a different view and find one, even if it is only across town',
      day:
        'take the long route, try the thing you cannot pronounce and collect a story on the way',
      evening:
        'bring people together and tell one tale with unnecessary but excellent detail'
    }
  },

  capricorn: {
    label: 'Capricorn',
    symbol: '♑',
    element: 'Earth',
    modality: 'Cardinal',
    ruler: 'Saturn',
    essence: 'the one quietly making the moodboard real',
    traits: ['self-possessed', 'dry-witted', 'intentional'],
    accent: '#59544E',

    style: {
      palette: [
        'charcoal',
        'espresso',
        'icy blue'
      ],
      fabrics: [
        'structured wool',
        'smooth leather',
        'dense cotton'
      ],
      jewellery: [
        'a slim watch',
        'understated gold',
        'one architectural ring'
      ],
      signature:
        'A long tailored coat, square-toe shoes and a bag that means business without looking corporate.'
    },

    comfort: {
      foods: [
        'mushroom toast',
        'a perfect plain croissant',
        'dark chocolate with sea salt'
      ],
      drinks: [
        'flat white',
        'roasted barley tea'
      ],
      cafe:
        'the one that opens early, has excellent chairs and never plays music too loudly',
      scent:
        'cedar, paper and tonka bean',
      flower:
        'deep brown cosmos',
      hobby:
        'building something slowly enough that it actually lasts'
    },

    playlist: {
      mood:
        'restrained, expensive-sounding and secretly sentimental',
      tracks: [
        {
          title: 'Nights',
          artist: 'Frank Ocean'
        },
        {
          title: 'Borderline',
          artist: 'Tame Impala'
        },
        {
          title: 'Motion Sickness',
          artist: 'Phoebe Bridgers'
        },
        {
          title: '505',
          artist: 'Arctic Monkeys'
        }
      ]
    },

    home: {
      aesthetic:
        'The Serious Desk, Soft Lamp',
      description:
        'Good bones, useful objects, no trend without a reason and one indulgent material that makes the whole room feel considered.',
      materials: [
        'walnut',
        'stone',
        'brushed metal'
      ]
    },

    weekend: {
      morning:
        'wake up early enough to enjoy the quiet rather than merely be productive in it',
      day:
        'finish one useful thing, then spend money on one beautiful thing that will last',
      evening:
        'choose a restaurant, book or film with confidence and enjoy not having to reconsider it'
    }
  },

  aquarius: {
    label: 'Aquarius',
    symbol: '♒',
    element: 'Air',
    modality: 'Fixed',
    ruler: 'Uranus/Saturn',
    essence: 'the one whose odd idea becomes everyone else’s reference later',
    traits: ['independent', 'inventive', 'selectively social'],
    accent: '#5A91B3',

    style: {
      palette: [
        'electric blue',
        'silver',
        'washed lilac'
      ],
      fabrics: [
        'technical nylon',
        'sheer knits',
        'unexpected vintage'
      ],
      jewellery: [
        'mismatched earrings',
        'chrome rings',
        'one object that may not technically be jewellery'
      ],
      signature:
        'A strange little top, oversized denim and shoes that make the rest of the outfit suddenly make sense.'
    },

    comfort: {
      foods: [
        'blueberry pancakes at night',
        'a surprisingly good fusion bowl',
        'salted popcorn with chocolate'
      ],
      drinks: [
        'sparkling yuzu',
        'oat cortado'
      ],
      cafe:
        'the experimental one inside a gallery, record store or building with an unclear original purpose',
      scent:
        'ozone, violet leaf and cold air',
      flower:
        'blue delphiniums',
      hobby:
        'finding a niche internet corner and becoming its temporary expert'
    },

    playlist: {
      mood:
        'left-of-centre, electronic around the edges and impossible to predict',
      tracks: [
        {
          title: 'Genesis',
          artist: 'Grimes'
        },
        {
          title: 'Faceshopping',
          artist: 'SOPHIE'
        },
        {
          title: 'Midnight City',
          artist: 'M83'
        },
        {
          title: 'Everything is romantic',
          artist: 'Charli xcx'
        }
      ]
    },

    home: {
      aesthetic:
        'The Future Vintage Flat',
      description:
        'Chrome beside old wood, an unusual lamp, art from friends and furniture arranged for conversation rather than convention.',
      materials: [
        'chrome',
        'recycled plastic',
        'vintage plywood'
      ]
    },

    weekend: {
      morning:
        'do the routine in the wrong order just to see whether it works better',
      day:
        'visit somewhere oddly specific and leave with a new idea instead of a souvenir',
      evening:
        'choose the plan nobody else suggested and meet exactly the right people there'
    }
  },

  pisces: {
    label: 'Pisces',
    symbol: '♓',
    element: 'Water',
    modality: 'Mutable',
    ruler: 'Neptune/Jupiter',
    essence: 'the one who can make a whole world out of a feeling',
    traits: ['dreamy', 'perceptive', 'artistically slippery'],
    accent: '#7896B9',

    style: {
      palette: [
        'sea glass',
        'lilac grey',
        'pearlescent white'
      ],
      fabrics: [
        'washed silk',
        'soft chiffon',
        'fine translucent knits'
      ],
      jewellery: [
        'layered delicate chains',
        'moonstone drops',
        'a charm shaped like something from the sea'
      ],
      signature:
        'A long fluid skirt, tiny knit, silver shoes and something sheer moving over everything.'
    },

    comfort: {
      foods: [
        'udon in a warm broth',
        'strawberry mochi',
        'buttered rice with something crunchy'
      ],
      drinks: [
        'lavender milk',
        'peach iced tea'
      ],
      cafe:
        'somewhere near water, rain or at least a window large enough to imagine both',
      scent:
        'water lily, white tea and skin musk',
      flower:
        'pale blue hydrangeas',
      hobby:
        'turning an emotion into a playlist, drawing, paragraph or entire imaginary life'
    },

    playlist: {
      mood:
        'hazy, romantic and best heard while looking out of a moving window',
      tracks: [
        {
          title: 'Heaven or Las Vegas',
          artist: 'Cocteau Twins'
        },
        {
          title: 'Space Song',
          artist: 'Beach House'
        },
        {
          title: 'Sailor Song',
          artist: 'Gigi Perez'
        },
        {
          title: 'Fade Into You',
          artist: 'Mazzy Star'
        }
      ]
    },

    home: {
      aesthetic:
        'The Soft-Focus Bedroom',
      description:
        'Gauzy curtains, art leaning instead of hanging, tiny lamps and enough softness for the room to feel slightly unreal.',
      materials: [
        'sheer linen',
        'opal glass',
        'washed cotton'
      ]
    },

    weekend: {
      morning:
        'let the morning arrive slowly, with music on before notifications',
      day:
        'follow the nicest feeling available rather than the most efficient route',
      evening:
        'end up near water, in a bath, inside a film or deep in a song that sounds like one'
    }
  }
};

export const PLANET_MEANINGS = {
  sun: {
    label: 'Sun',
    symbol: '☉',
    tagline:
      'The version of you that takes the lead',
    explain:
      'The Sun is the simplest one: it’s who you are at the center, the version of you that doesn’t change with the room.'
  },

  moon: {
    label: 'Moon',
    symbol: '☾',
    tagline:
      'The version only close people really know',
    explain:
      'The Moon is your emotional weather — how you feel, comfort yourself, and what you need when no one is watching.'
  },

  rising: {
    label: 'Rising',
    symbol: '↑',
    tagline:
      'The version strangers meet first',
    explain:
      'Your Rising sign is the cover of the book — the energy people read off you before they know anything else.'
  },

  mercury: {
    label: 'Mercury',
    symbol: '☿',
    tagline:
      'How your brain sends the message',
    explain:
      'Mercury shapes how your mind works — how you process ideas, argue a point, and get your thoughts across.'
  },

  venus: {
    label: 'Venus',
    symbol: '♀',
    tagline:
      'Your taste, crushes and saved folder',
    explain:
      'Venus is your taste and your heart in one — what draws you in, romantically and aesthetically.'
  },

  mars: {
    label: 'Mars',
    symbol: '♂',
    tagline:
      'How you chase things and lose patience',
    explain:
      'Mars is your drive — how you go after what you want, and what you look like when you’re fired up.'
  },

  jupiter: {
    label: 'Jupiter',
    symbol: '♃',
    tagline:
      'Where life tends to get bigger',
    explain:
      'Jupiter points to where life tends to open up for you — your natural sense of luck, growth, and excess.'
  }
};