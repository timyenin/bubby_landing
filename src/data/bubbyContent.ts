import type { BubbyAnimation } from './bubbySprites';

export const navLinks = [
  { label: 'how it works', href: '#how-it-works' },
  { label: 'rooms', href: '#rooms' },
  { label: 'make it yours', href: '#make-it-yours' },
  { label: 'faq', href: '#faq' },
];

export const rooms = {
  kitchen: { src: '/assets/rooms/kitchen_idle_day_pink.jpg', alt: "bubby's pink kitchen in daylight" },
  kitchenEating: { src: '/assets/rooms/kitchen_eating_day_pink.jpg', alt: "bubby's kitchen, set for a meal" },
  gym: { src: '/assets/rooms/gym_lifting_day_pink.jpg', alt: "bubby's home gym with the weights out" },
  bedroomNight: { src: '/assets/rooms/bedroom_sleeping_pink.jpg', alt: "bubby's bedroom at night" },
  kitchenDark: { src: '/assets/rooms/kitchen_idle_dark.jpg', alt: "bubby's kitchen in the dark mint theme" },
} as const;

export type RoomId = keyof typeof rooms;

export const hero = {
  title: 'meet bubby',
  tagline: ['chat to log meals.', 'bubby does the math.'],
  body: 'bubby is a tiny pixel pet that lives on your iPhone. tell it what you ate, in your own words, with a photo or a barcode, and it adds up the calories, protein, carbs and fat. eat well and bubby thrives.',
  status: {
    in_review: 'in App Review · coming soon to iPhone',
    live: 'out now on the App Store',
  },
  finePrint: 'iPhone · free 14-day trial · no sign-up',
  greeting: "hi! i'm bubby",
};

export const startingChat = [
  { from: 'you', text: 'chicken burrito bowl for lunch' },
  { from: 'bubby', text: 'logged chicken burrito bowl: 620 cal, 45p, 68c, 18f.' },
] as const;

export type ChatMessage = { from: 'you' | 'bubby'; text: string };

export type Vitals = { vit: number; mood: number; str: number; nrg: number };

export const startingVitals: Vitals = { vit: 8, mood: 8, str: 6, nrg: 7 };

export const vitalLabels = [
  { key: 'vit', name: 'vitality' },
  { key: 'mood', name: 'mood' },
  { key: 'str', name: 'strength' },
  { key: 'nrg', name: 'energy' },
] as const satisfies ReadonlyArray<{ key: keyof Vitals; name: string }>;

// Each chip plays the animation the app would, for the app's minimum time:
// a requested spin lasts at least 5 s, other tricks at least 1.5 s. 0 keeps it going.
export const chatChips = [
  {
    message: 'spin for me!',
    animation: 'spin',
    durationMs: 5000,
    room: null,
    says: 'wheee!',
    reply: 'wheee! one spin, coming up.',
    boost: { mood: 1 },
  },
  {
    message: 'had a berry yogurt bowl',
    animation: 'eating',
    durationMs: 2500,
    room: 'kitchenEating',
    says: 'nom nom',
    reply: 'logged berry yogurt bowl: 340 cal, 28p, 41c, 9f.',
    boost: { vit: 1, nrg: 1 },
  },
  {
    message: 'leg day today',
    animation: 'workout',
    durationMs: 3000,
    room: 'gym',
    says: "let's lift!",
    reply: "leg day! i'll lift with you.",
    boost: { str: 2 },
  },
  {
    message: 'goodnight bubby',
    animation: 'sleepy',
    durationMs: 0,
    room: 'bedroomNight',
    says: 'zzz...',
    reply: 'night night. see you at breakfast.',
    boost: { nrg: 1 },
  },
  {
    message: 'do the x eyes',
    animation: 'tap_x_eyes',
    durationMs: 1500,
    room: null,
    says: 'x_x',
    reply: 'x_x',
    boost: {},
  },
] as const satisfies ReadonlyArray<{
  message: string;
  animation: BubbyAnimation;
  durationMs: number;
  room: RoomId | null;
  says: string;
  reply: string;
  boost: Partial<Vitals>;
}>;

export const howItWorks = [
  {
    step: '1',
    title: 'just tell bubby',
    body: 'type it, snap a photo, or scan a barcode. "two eggs and toast" is plenty.',
    animation: 'idle',
  },
  {
    step: '2',
    title: 'bubby does the math',
    body: 'calories, protein, carbs and fat, added up and saved to your day.',
    animation: 'eating',
  },
  {
    step: '3',
    title: 'keep bubby happy',
    body: "bubby's vitals follow your day. eat well and it bounces around; skip meals and it starts to feel sick.",
    animation: 'happy_bounce',
  },
] as const satisfies ReadonlyArray<{ step: string; title: string; body: string; animation: BubbyAnimation }>;

export const roomCards = [
  { room: 'kitchenEating', animation: 'eating', title: 'kitchen', body: 'meals, snacks and morning coffee.' },
  { room: 'gym', animation: 'workout', title: 'gym', body: 'lifting, stretching and rest days.' },
  { room: 'bedroomNight', animation: 'sleepy', title: 'bedroom', body: 'reading, resting and sleeping.' },
] as const satisfies ReadonlyArray<{ room: RoomId; animation: BubbyAnimation; title: string; body: string }>;

export const themes = [
  { id: 'light_pink', name: 'light pink', room: 'kitchen' },
  { id: 'dark_mint', name: 'dark mint', room: 'kitchenDark' },
] as const satisfies ReadonlyArray<{ id: string; name: string; room: RoomId }>;

export type ThemeId = (typeof themes)[number]['id'];

export const savedMeal = {
  name: 'berry yogurt bowl',
  photo: '/assets/food/berry_yogurt_bowl.png',
  ingredients: 'greek yogurt, mixed berries, granola, honey',
  macros: '340 cal / 28p / 41c / 9f',
};

export const bubbyPhotos = [
  'apple',
  'berry_yogurt_bowl',
  'burrito_bowl',
  'coffee',
  'cookie',
  'eggs_toast',
  'oatmeal',
  'pancakes',
  'pantry_avocado',
  'pantry_bananas',
  'pantry_blueberries',
  'pantry_bread',
  'pantry_chicken',
  'pantry_eggs',
  'pantry_oats',
  'pantry_peanut_butter',
  'pantry_rice',
  'pantry_salmon',
  'pantry_spinach',
  'pantry_yogurt',
  'pasta',
  'pb_banana_toast',
  'pizza',
  'salad',
  'salmon_rice',
  'sandwich',
  'smoothie',
  'soup',
].map((id) => ({
  src: `/assets/food/${id}.png`,
  name: id.replace('pantry_', '').replace('pb_', 'peanut butter ').replaceAll('_', ' '),
}));

export const moods = [
  { animation: 'idle', title: 'idle', note: 'blinks and looks around' },
  { animation: 'eating', title: 'eating', note: 'when you log food' },
  { animation: 'happy_bounce', title: 'happy', note: 'a good day, boing' },
  { animation: 'spin', title: 'spin', note: '"spin for me!"' },
  { animation: 'workout', title: 'workout', note: 'gym days' },
  { animation: 'sleepy', title: 'sleepy', note: 'bedtime' },
  { animation: 'sick', title: 'sick', note: 'too many skipped meals' },
  { animation: 'recovery', title: 'recovery', note: 'feeling better' },
  { animation: 'tap_x_eyes', title: 'x eyes', note: 'just for fun' },
] as const satisfies ReadonlyArray<{ animation: BubbyAnimation; title: string; note: string }>;

export const faqs = [
  {
    question: 'when can i get bubby?',
    answer: "bubby is in App Review right now. leave your email and we'll tell you the day it's on the App Store.",
    liveAnswer: 'right now! bubby is on the App Store for iPhone.',
  },
  {
    question: 'what does it cost?',
    answer: 'every new bubby starts with a free 14-day trial. after that, bubby pro is $19.99 a month or $199.99 a year.',
  },
  {
    question: 'do i need an account?',
    answer: 'no sign-up. your food log, saved meals and pantry live on your phone.',
  },
  {
    question: 'how does bubby know the numbers?',
    answer: "bubby estimates calories and macros from what you tell it. when you log a saved meal, it uses that meal's exact numbers.",
  },
  {
    question: 'is bubby on android?',
    answer: 'not yet. bubby is iPhone only for now.',
  },
];

export const finalCta = {
  says: 'see you soon!',
  title: { in_review: "bubby's almost here", live: 'bubby is here!' },
  body: {
    in_review: "bubby is in App Review right now. leave your email and we'll tell you the day it lands on the App Store.",
    live: 'download bubby, say hi, and log your first meal in one message.',
  },
};

export const footerLinks = [
  { label: 'privacy', href: 'https://mybubby.app/privacy' },
  { label: 'terms', href: 'https://mybubby.app/terms' },
  { label: 'support', href: 'https://mybubby.app/support' },
];
