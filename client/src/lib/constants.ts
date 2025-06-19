export const WORKSHOP_CATEGORIES = [
  {
    id: 'content-creation',
    title: 'Content Creation for Business',
    description: 'Discover the secrets to creating high-quality, impactful content tailored for business success. Whether you\'re a beginner or have some experience, this event will empower you with hands-on knowledge from the best in the industry.',
    status: 'available',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400'
  },
  {
    id: 'audio-production',
    title: 'Special Events Audio Production',
    description: 'Gain expert insights into live audio and event production from industry veteran Chris Grimsley. Whether you\'re planning a corporate gathering, concert, or special event, this workshop will provide the technical skills and insider knowledge to make it a success.',
    status: 'available',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400'
  },
  {
    id: 'av-staging',
    title: 'AV Staging Workshop',
    description: 'Dive into the world of AV staging with expert-led sessions on LED wall, stage lighting design, setup, and live event production. Perfect for those interested in the behind-the-scenes magic of live performances and events.',
    status: 'coming-soon',
    image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400'
  },
  {
    id: 'camera-lighting',
    title: 'Camera & Lighting Workshop',
    description: 'Explore the art of cinematography and lighting design. Learn from industry professionals how to capture stunning visuals and create the perfect lighting setup for any scene.',
    status: 'coming-soon',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400'
  },
  {
    id: 'grip-electric',
    title: 'Grip & Electric Intensive',
    description: 'Get hands-on with the essential tools of the trade in this intensive workshop focused on the grip and electric departments. Learn the skills needed to support camera rigs, lighting setups, and more.',
    status: 'coming-soon',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400'
  },
  {
    id: 'filmmaking',
    title: 'Two-Day Filmmaking Workshop',
    description: 'Join us for an exciting day where you\'ll learn the basics of filmmaking from start to finish. Perfect for beginners or those looking to get a taste of the filmmaking process, this workshop will cover everything from scriptwriting to directing and editing.',
    status: 'coming-soon',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400'
  }
];

export const DONATION_AMOUNTS = [
  { value: 25, description: 'Workshop materials for one student' },
  { value: 100, description: 'Equipment access for one month' },
  { value: 500, description: 'Full workshop sponsorship' },
  { value: 1000, description: 'Support multiple students' }
];

export const SPONSORS = [
  'The Governor\'s Office – Youth, Family & Faith',
  'APS',
  'Show Boss AV',
  'The Garment League',
  'The Arizona Center',
  'Artlink',
  'Flawless Frequency',
  'Marmera Films'
];

export const APPLICATION_FIELDS = {
  ageRanges: ['13-16', '17-19', '20-24', '24-34', '35+'],
  genders: ['Male', 'Female', 'Other'],
  races: ['Black', 'White', 'Asian', 'Native Hawaiian or Pacific Islander', 'Hispanic'],
  professionalBackgrounds: [
    'Producer/Writer/Director',
    'Cameras/Lighting',
    'Gaffer/Grip',
    'PA',
    'Live Sound',
    'AV Staging and Lighting',
    'LED Wall',
    'FX Make Up',
    'DJ (Disc Jockey)',
    'Other'
  ],
  primaryFields: [
    'Camera',
    'Film',
    'Writing',
    'Content Creation',
    'Visual Arts',
    'Concert Production/DMX Controllers/Sound',
    'Digital Arts',
    'Other'
  ],
  workshopTopics: [
    'Live Switching',
    'News Cast',
    'Talk Show',
    'Entrepreneurship in the Creative Industries',
    'Audio Visuals/Stage Crew',
    'Cameras/Lighting/Grip/Gaffing',
    'The Creative Process',
    'Writing Scripts',
    'Acting',
    'Other'
  ],
  connectWith: [
    'Fellow Artists',
    'Producers',
    'Industry Executives',
    'Writers',
    'Filmmakers/Videographers',
    'Financial Strategists',
    'Other'
  ],
  hearAbout: [
    'Social Media (Instagram, Facebook, Twitter)',
    'Online Search',
    'Referral from a Friend or Colleague',
    'Email Newsletter',
    'Other'
  ]
};
