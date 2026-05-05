import type { BubbyState } from './bubbySprites';

export const navLinks = [
  { label: 'features', href: '#features' },
  { label: 'how it works', href: '#how-it-works' },
  { label: 'demo', href: '#demo' },
  { label: 'about', href: '#about' },
];

export const hero = {
  headlinePrefix: 'meet bubby -',
  headlineEmphasis: 'your stress-free',
  headlineSuffix: 'meal planning companion.',
  subheadline: 'plan simple meals, stay in good habits, and stop overthinking what to eat.',
  primaryCta: 'try demo',
  secondaryCta: 'join waitlist',
  socialProof: 'join 2,847+ future bubby buddies',
  defaultSpeech: 'bubby is ready to make dinner feel lighter.',
};

export const actionButtons = [
  {
    label: 'plan dinner',
    state: 'happy_bounce',
    icon: '/assets/icons/bowl.svg',
    response: 'easy. i found a low-effort dinner path.',
    tone: 'pink',
  },
  {
    label: 'log meal',
    state: 'eating',
    icon: '/assets/icons/pencil.svg',
    response: 'nice. i saved it without making it a chore.',
    tone: 'gold',
  },
  {
    label: 'need easy food',
    state: 'recovery',
    icon: '/assets/icons/star.svg',
    response: 'low-pressure mode. let us keep food simple.',
    tone: 'violet',
  },
  {
    label: 'check in',
    state: 'idle',
    icon: '/assets/icons/heart.svg',
    response: 'still here. one tiny check-in counts.',
    tone: 'blue',
  },
] as const satisfies ReadonlyArray<{
  label: string;
  state: BubbyState;
  icon: string;
  response: string;
  tone: 'pink' | 'gold' | 'violet' | 'blue';
}>;

export const painPoints = [
  { title: 'decision fatigue', body: 'too many choices, not enough clarity.', icon: '/assets/icons/cloud.svg' },
  { title: 'overcomplicated tracking', body: 'logging everything feels like another job.', icon: '/assets/icons/clipboard.svg' },
  { title: 'inconsistent habits', body: 'you start strong, then life gets in the way.', icon: '/assets/icons/sad-face.svg' },
  { title: 'meal planning stress', body: 'planning, prepping, repeat. it is exhausting.', icon: '/assets/icons/swirl.svg' },
];

export const features = [
  {
    title: 'stress-free meal planning',
    body: 'simple, balanced meal ideas based on what you like and what you have.',
    icon: '/assets/icons/bowl.svg',
    spriteState: 'eating',
  },
  {
    title: 'easy daily check-ins',
    body: 'a quick mood, energy, and hunger check - that is it.',
    icon: '/assets/icons/heart.svg',
    spriteState: 'idle',
  },
  {
    title: 'habit support without pressure',
    body: 'gentle nudges and streaks that celebrate progress, not perfection.',
    icon: '/assets/icons/star.svg',
    spriteState: 'happy_bounce',
  },
  {
    title: 'smart grocery guidance',
    body: 'get what you need. skip what you do not. save time and money.',
    icon: '/assets/icons/grocery.svg',
    spriteState: 'workout',
  },
] as const satisfies ReadonlyArray<{
  title: string;
  body: string;
  icon: string;
  spriteState: BubbyState;
}>;

export const mealDemo = {
  introTitle: 'chat with bubby about dinner',
  introBody: 'tell bubby what you need. get simple, delicious ideas in seconds.',
  userMessage: 'i need dinner but do not want to think.',
  bubbyMessage: 'easy. make a simple chicken bowl with buckwheat and vegetables.',
  mealTitle: 'simple chicken bowl',
  ingredients: ['chicken breast', 'buckwheat', 'roasted veggies', 'olive oil & lemon'],
  macros: ['protein 34g', 'carbs 48g', 'fat 14g', '510 kcal', 'balanced'],
};

export const howItWorks = [
  { step: '1', title: 'tell bubby your basics', body: 'share your goals, likes, dietary needs, and schedule.', state: 'idle' },
  { step: '2', title: 'get simple meal ideas', body: 'bubby offers easy meals that fit your life and what you have.', state: 'happy_bounce' },
  { step: '3', title: 'check in and adjust', body: 'quick daily check-ins help bubby adapt and support you.', state: 'recovery' },
] as const satisfies ReadonlyArray<{
  step: string;
  title: string;
  body: string;
  state: BubbyState;
}>;

export const DEFAULT_BUBBY_COLOR_ID = 'clear';

export const bubbyColors = [
  { id: DEFAULT_BUBBY_COLOR_ID, name: 'clear', fillColor: null },
  { id: 'pastel_pink', name: 'pink', fillColor: '#f8bfd6' },
  { id: 'pastel_lavender', name: 'lavender', fillColor: '#d7c5ff' },
  { id: 'pastel_mint', name: 'mint', fillColor: '#bdf5cf' },
  { id: 'pastel_baby_blue', name: 'baby blue', fillColor: '#bfe4ff' },
  { id: 'pastel_peach', name: 'peach', fillColor: '#ffd0b8' },
  { id: 'pastel_yellow', name: 'yellow', fillColor: '#fff2a8' },
  { id: 'pastel_cream', name: 'cream', fillColor: '#fff5dd' },
  { id: 'pastel_aqua', name: 'aqua', fillColor: '#aeeeed' },
  { id: 'pastel_berry', name: 'berry', fillColor: '#ef9fc5' },
] as const;

export type BubbyColorId = (typeof bubbyColors)[number]['id'];

export const personalityStates = [
  { label: 'idle', state: 'idle', colorName: 'clear', colorId: DEFAULT_BUBBY_COLOR_ID },
  { label: 'eating', state: 'eating', colorName: 'pink', colorId: 'pastel_pink' },
  { label: 'happy', state: 'happy_bounce', colorName: 'lavender', colorId: 'pastel_lavender' },
  { label: 'sleepy', state: 'sleepy', colorName: 'mint', colorId: 'pastel_mint' },
  { label: 'sick', state: 'sick', colorName: 'baby blue', colorId: 'pastel_baby_blue' },
  { label: 'recovery', state: 'recovery', colorName: 'peach', colorId: 'pastel_peach' },
  { label: 'workout', state: 'workout', colorName: 'aqua', colorId: 'pastel_aqua' },
] as const satisfies ReadonlyArray<{
  label: string;
  state: BubbyState;
  colorName: string;
  colorId: BubbyColorId;
}>;
