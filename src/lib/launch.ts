// Flip to the launch-day page by setting VITE_BUBBY_LAUNCH_STATUS=live in Vercel.
export type LaunchStatus = 'in_review' | 'live';

export const launchStatus: LaunchStatus =
  import.meta.env.VITE_BUBBY_LAUNCH_STATUS === 'live' ? 'live' : 'in_review';

export const isLive = launchStatus === 'live';

export const appStoreUrl = 'https://apps.apple.com/app/id6793163127';
