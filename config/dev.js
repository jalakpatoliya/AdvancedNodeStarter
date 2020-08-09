module.exports = {
  googleClientID:
    `${process.env.GOOGLE_CLIENT_ID}`,
  googleClientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
  mongoURI: `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@ds159546.mlab.com:59546/blogpost`,
  cookieKey: "123123123",
};
