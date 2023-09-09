const axios = require('axios').default;

module.exports = {
  async SendOtp(ctx, next) {
    try {
      const { phoneNumber } = await ctx.request.body;
      const {otp,userid} = await strapi.service("api::otp.otp").CreateOtp();
      console.log(phoneNumber);
      
      const url = 'https://www.fast2sms.com/dev/bulkV2';
      const headers = {
        'authorization': 'pkElyVg0Y39z2O8rPCvx856qdcpFozCwARtg3n3RKZpRnz2gnZz1FEW5dwg3',
        'Content-Type': 'application/json'
      };
      
      const data = {
        route: 'otp',
        variables_values: otp,
        numbers: String(phoneNumber)
      };

      let returnmsg; // Define returnmsg here

      await axios.post(url, data, { headers })
        .then(response => {
          returnmsg = { 'data': response.data,'userid':userid };
        })
        .catch(error => {
          returnmsg = { 'Error': error };
        });

      ctx.body = returnmsg;
      
    } catch (err) {
      ctx.badRequest(err);
    }
  },
  async VerifyOtp(ctx, next) {
    try {
      const { otp,userid } = await ctx.request.body;
      const storedotp = await strapi.service("api::otp.otp").FindOtp(userid);
      if(storedotp===otp)ctx.body = "correct otp"
      else ctx.body = "incorrect otp"
    } catch (err) {
      ctx.badRequest(err);
    }
  },
  async isUsernameAvailable(ctx) {
    const {username} = await ctx.request.body;
    let users = await strapi.entityService.findMany(
      "plugin::users-permissions.user", { filters: { username: username }}
    );

    ctx.body = users.length === 0;
  }
};
