module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    // keys: env.array('APP_KEYS'),
    keys: env.array('APP_KEYS', ['7a006609dcdecc5b', '424308b58181ae7f'])

  },
});
