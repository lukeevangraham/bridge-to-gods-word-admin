module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '449f077c519f0499127bae7ac9e83f2f'),
  },
});
