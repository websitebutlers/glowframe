// No upcoming workshops scheduled at this time
export const WORKSHOP_CATEGORIES = [];

export const PREVIOUS_WORKSHOPS = [
  {
    id: 'producing-workshop-jun13',
    title: 'Producing in the Industry',
    description: 'An exclusive conversation with Marine Corps veteran and Arizona Production Association affiliate Parco Richardson on producing in the industry. Expert in digital filmmaking & video production, Issa Rae\'s Color Creative FYPP Year 2 producer for Toro de Oro (2022) and Plus 1 (2022).',
    completedDate: 'June 13, 2024',
    instructor: 'Parco Richardson - Producer & Writer',
    location: 'Downtown Phoenix',
    image: '/images/1.png'
  },
  {
    id: 'led-video-wall-feb15',
    title: 'LED Video Wall Level One',
    description: 'Two-part class leading to employment opportunities. The first class covers stagehand and electrical basics, teaching backstage work with power and grip. The second focuses on building LED walls.',
    completedDate: 'February 15, 2024',
    instructor: 'Jared and Joe',
    location: 'Downtown Phoenix',
    maxStudents: 25,
    partner: 'ShowBoss AV',
    image: '/images/2.png'
  },
  {
    id: 'scriptwriting-intro-dec14',
    title: 'Scriptwriting Introduction',
    description: 'Beginner-friendly workshop with a professional instructor. Get hands-on training on scriptwriting and understanding Final Draft scriptwriting basics.',
    completedDate: 'December 14, 2023',
    instructor: 'Jermaine A. Shoulders',
    location: 'Downtown Phoenix',
    image: '/images/3.png'
  },
  {
    id: 'special-event-audio-nov16',
    title: 'Special Event Audio Production',
    description: 'Learn how to do special event audio production from industry expert Chris Grimsley, Co-Owner of Flawless Frequency and Owner of Sideline Records. Has done live sound and video for Kanye West, Erykah Badu, and many more.',
    completedDate: 'November 16, 2023',
    instructor: 'Chris Grimsley',
    location: 'Downtown Phoenix',
    image: '/images/4.png'
  },
  {
    id: 'special-fx-makeup-apr12',
    title: 'Special FX Makeup Workshop',
    description: 'Learn how to do special FX makeup including bruises, cuts, burns, basic embellishments (aging, acne, rosacea, dark circles), bullet wounds, and scrapes with industry professional Toy Taylor Goodgame.',
    completedDate: 'April 12, 2023',
    instructor: 'Toy Taylor Goodgame - Owner of Motivating Beauty Coach, Published Author, Content Creator, Celebrity Makeup Artist, Licensed Hairstylist, Certified Makeup Artist, and SFX Artist',
    location: 'Downtown Phoenix',
    image: '/images/5.png'
  },
  {
    id: 'lighting-interviews-nov9',
    title: 'Lighting for Interviews & Documentaries',
    description: 'Learn how to do lighting for interviews and documentaries from Emmy-nominated writer/director/DP Irin Daniels. Credits include work with Churchy BET, Spectrum, NIKE, EBay, PayPal, Netflix, Hartbeat Studios, Meta, and more.',
    completedDate: 'November 9, 2022',
    instructor: 'Irin Daniels - Writer/Director/DP',
    location: 'Downtown Phoenix',
    image: '/images/6.png'
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
