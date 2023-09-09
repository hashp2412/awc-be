'use strict';
module.exports = {
  // Generate and send OTP to the user's phone
CreateOtp: async() => {
      // Extract the user's phone number and user ID from the request body
      

      // Generate a random six-digit OTP
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
      const data = {
        "data":{
          'otp':otp
        }
      }
      const createdOTP = await strapi.query('api::generated-otp.generated-otp').create(data);
      const userid =  createdOTP.id;
    return {otp,userid};
    },

FindOtp : async(id) =>{
 
  const createdOTP = await strapi.entityService.findOne('api::generated-otp.generated-otp',id);
  return createdOTP.otp
}
};



/**
 * otp service
 */

