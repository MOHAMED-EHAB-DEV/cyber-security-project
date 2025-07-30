export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::rate-limit',
    config: {
      interval: 60 * 1000,
      max: 6,
      message: 'Too many requests, please try again later.',
    },
  },
  {
    name: 'strapi::rate-limit',
    config: {
      interval: 5 * 60 * 1000,
      max: 10,
      message: 'Too many requests, please try again later.',
    },
  },
];
