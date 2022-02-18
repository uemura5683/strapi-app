module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7b411698a08f05e0a67054e53fe5a2c0'),
  },
});
