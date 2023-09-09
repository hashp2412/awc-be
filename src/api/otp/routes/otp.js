module.exports = {
  routes: [
    {
      method: "POST",
      path: "/otp",
      handler: "otp.SendOtp",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/otp/verify",
      handler: "otp.VerifyOtp",
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/otp/checkUsername",
      handler: "otp.isUsernameAvailable",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};