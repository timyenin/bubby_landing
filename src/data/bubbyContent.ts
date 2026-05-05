export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Demo', href: '#demo' },
  { label: 'About', href: '#about' },
];

export const hero = {
  eyebrow: 'Meet Bubby',
  headline: 'Meet Bubby — your stress-free meal planning companion.',
  subheadline: 'Plan simple meals, stay in good habits, and stop overthinking what to eat.',
  primaryCta: 'Try Demo',
  secondaryCta: 'Join Waitlist',
  socialProof: 'Join 2,847+ future Bubby buddies',
};

export const actionButtons = [
  { label: 'Plan Dinner', state: 'happy_bounce', icon: '/assets/icons/bowl.svg', response: 'Easy. Let’s make dinner simple.' },
  { label: 'Log Meal', state: 'eating', icon: '/assets/icons/pencil.svg', response: 'Nice. I’ll keep track.' },
  { label: 'Need Easy Food', state: 'recovery', icon: '/assets/icons/star.svg', response: 'Low-effort mode. I got you.' },
  { label: 'Check In', state: 'idle', icon: '/assets/icons/heart.svg', response: 'Still here. Let’s keep it simple.' },
] as const;

export const painPoints = [
  { title: 'Decision fatigue', body: 'Too many choices, not enough clarity.', icon: '/assets/icons/cloud.svg' },
  { title: 'Overcomplicated tracking', body: 'Logging everything feels like another job.', icon: '/assets/icons/clipboard.svg' },
  { title: 'Inconsistent habits', body: 'You start strong, then life gets in the way.', icon: '/assets/icons/sad-face.svg' },
  { title: 'Meal planning stress', body: 'Planning, prepping, repeat. It’s exhausting.', icon: '/assets/icons/swirl.svg' },
];

export const features = [
  {
    title: 'Stress-Free Meal Planning',
    body: 'Simple, balanced meal ideas based on what you like and what you have.',
    icon: '/assets/icons/bowl.svg',
    spriteState: 'eating',
  },
  {
    title: 'Easy Daily Check-ins',
    body: 'A quick mood, energy, and hunger check — that’s it.',
    icon: '/assets/icons/heart.svg',
    spriteState: 'idle',
  },
  {
    title: 'Habit Support Without Pressure',
    body: 'Gentle nudges and streaks that celebrate progress, not perfection.',
    icon: '/assets/icons/star.svg',
    spriteState: 'happy_bounce',
  },
  {
    title: 'Smart Grocery Guidance',
    body: 'Get what you need. Skip what you don’t. Save time and money.',
    icon: '/assets/icons/grocery.svg',
    spriteState: 'workout',
  },
] as const;

export const mealDemo = {
  introTitle: 'Chat with Bubby about dinner',
  introBody: 'Tell Bubby what you need. Get simple, delicious ideas in seconds.',
  userMessage: "I need dinner but don’t want to think.",
  bubbyMessage: 'Easy. Make a simple chicken bowl with buckwheat and vegetables.',
  mealTitle: 'Simple Chicken Bowl',
  ingredients: ['Chicken breast', 'Buckwheat', 'Roasted veggies', 'Olive oil & lemon'],
  macros: ['Protein 34g', 'Carbs 48g', 'Fat 14g', '510 kcal', 'Balanced'],
};

export const howItWorks = [
  { step: '1', title: 'Tell Bubby your basics', body: 'Share your goals, likes, dietary needs, and schedule.', state: 'idle' },
  { step: '2', title: 'Get simple meal ideas', body: 'Bubby offers easy meals that fit your life and what you have.', state: 'happy_bounce' },
  { step: '3', title: 'Check in and adjust', body: 'Quick daily check-ins help Bubby adapt and support you.', state: 'recovery' },
] as const;

export const personalityStates = [
  { label: 'Idle', state: 'idle' },
  { label: 'Eating', state: 'eating' },
  { label: 'Happy', state: 'happy_bounce' },
  { label: 'Sleepy', state: 'sleepy' },
  { label: 'Sick', state: 'sick' },
  { label: 'Recovery', state: 'recovery' },
  { label: 'Workout', state: 'workout' },
] as const;
