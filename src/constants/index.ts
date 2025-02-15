export const HEADER_HEIGHT = 150;
export const FOOTER_HEIGHT = 150;

export const BREAKPOINTS = {
  xxs: 270,
  mobile: 390,
  xs: 480,
  sm: 576,
  tablet: 768,
  tabletUp: 820,
  laptopLow: 1100,
  laptop: 1440,
  desktopLow: 1640,
  desktop: 1920,
} as const;

export enum SECTION_IDS {
  "BANNER" = "banner",
  "BONUSES" = "bonuses",
  "CONACTS" = "contacts",
  "MEMES" = "memes",
  "MESSAGES" = "messages",
  "MOTIVATION" = "motivation",
  "NATVIE_TEACHER" = "native_teacher",
  "PRICES" = "prices",
  "TEACHERS" = "teachers",
  "VIDEO_REVIEWS" = "video_reviews",
  "WHY_WE" = "why_we",
}
