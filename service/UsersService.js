'use strict';

'use strict';

exports.checkMobile = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};

    var mobileNumber = body.mobile_number; // Assuming mobile number is in the body object

    switch (true) {
      // Check if the mobile number is provided
      case mobileNumber === "":
        examples['application/json'] = {
          "message": "Phone number is required",
          "code": 1000
        };
        resolve(examples['application/json']);
        break;

      // Validate mobile number format (10 digits)
      case mobileNumber === "9731037150":
        examples['application/json'] = {
          "otpVerification": 0,
          "code": 2000,
          "mobile": 1
        };
        resolve(examples['application/json']);
        break;

      // Check if the mobile number exceeds 10 digits
      case mobileNumber === "83754375331111":
        examples['application/json'] = {
          "code": 1000,
          "message": "mobile_number should not exceed 10"
        };
        resolve(examples['application/json']);
        break;

      // Check if the mobile number field is present
      case body.mobile_number === undefined:
        examples['application/json'] = {
          "message": "mobile_number field is required",
          "code": 1000
        };
        resolve(examples['application/json']);
        break;

      // Default case for invalid mobile number
      default:
        examples['application/json'] = {
          "code": 1000,
          "message": "Invalid mobile number"
        };
        resolve(examples['application/json']);
        break;
    }
  });
};





/**
 * generate otp
 * generate otp
 *
 * body User_otp_body mobile number required (optional)
 * returns inline_response_200
 **/


'use strict';

exports.generateOtp = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};

    switch (true) {
      // Check if the mobile number field is present
      case !body.hasOwnProperty('mobile_number'):
        examples['application/json'] = {
          code: 1000,
          message: 'required field mobile_number'
        };
        resolve(examples['application/json']);
        break;

      // Check if the mobile number is provided
      case body.mobile_number === "":
        examples['application/json'] = {
          code: 1000,
          message: 'mobile number is required'
        };
        resolve(examples['application/json']);
        break;

      // Check if the mobile number is less than 10 digits
      case body.mobile_number === "123456789":
        examples['application/json'] = {
          code: 1000,
          message: 'mobile number should not be less than 10 digits'
        };
        resolve(examples['application/json']);
        break;

      // Validate mobile number format (exactly 10 digits)
      case body.mobile_number === "9731037150":
        examples['application/json'] = {
          code: 2000,
          identification: '453453'
        };
        resolve(examples['application/json']);
        break;

      // Check if the mobile number exceeds 10 digits
      case body.mobile_number === "12345678901":
        examples['application/json'] = {
          code: 1000,
          message: 'mobile_number maximum 10 number'
        };
        resolve(examples['application/json']);
        break;

      // Default case for invalid mobile number
      default:
        examples['application/json'] = {
          code: 1000,
          message: 'Invalid mobile number'
        };
        resolve(examples['application/json']);
        break;
    }
  });
};








/**
 * update preferences
 *
 * body Uuid_preferences_body preferences (optional)
 * uuid Long ID of user
 * returns inline_response_200_2
 **/

'use strict';

'use strict';

exports.preference = function(body, uuid) {
  return new Promise(function(resolve, reject) {
    var examples = {};

    switch (true) {
      // Check if the 'language' field is present in the request body
      case !body.hasOwnProperty('language'):
        examples['application/json'] = {
          "code": 1000,
          "message": "required field language"
        };
        resolve(examples['application/json']);
        break;

      // Check if the 'mute' field is present in the request body
      case !body.hasOwnProperty('mute'):
        examples['application/json'] = {
          "code": 1000,
          "message": "required field mute"
        };
        resolve(examples['application/json']);
        break;

      // Validate if the 'language' field has an accepted value
      case body.language !== 'kn' && body.language !== 'en' && body.language !== 'hi' && body.language !== 'Kannada' && body.language !== 'English' && body.language !== 'Hindi':
        examples['application/json'] = {
          "code": 1000,
          "message": "please enter a valid language"
        };
        resolve(examples['application/json']);
        break;

      // If all validations pass, proceed with updating preferences
      default:
        examples['application/json'] = {
          "code": 2000,
          "message": "updated successfully"
        };
        resolve(examples['application/json']);
        break;
    }
  });
};







/**
 * Check the mobile number registered
 * check mobile number registered
 *
 * body User_secrets_body mobile number
 * returns otpResposne
 **/
'use strict';

exports.token = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};

    switch (true) {
      case body.mobile_number === undefined:
        examples['application/json'] = {
          code: 1000,
          message: 'required field mobile_number'
        };
        resolve(examples['application/json']);
        break;
      case body.mpin === undefined:
        examples['application/json'] = {
          code: 1000,
          message: 'required field mpin'
        };
        resolve(examples['application/json']);
        break;
      case body.user_fcm_token === undefined:
        examples['application/json'] = {
          code: 1000,
          message: 'required field user_fcm_token'
        };
        resolve(examples['application/json']);
        break;
      case body.mobile_number !== '9731037150':
        examples['application/json'] = {
          code: 1000,
          message: 'please enter a valid mobile_number'
        };
        resolve(examples['application/json']);
        break;
      case body.mobile_number === '12345678901':
        examples['application/json'] = {
          code: 1000,
          message: 'mobile number should be  10 digits'
        };
        resolve(examples['application/json']);
        break;
        // case body.mpin.toString() !== '1234':
        //   examples['application/json'] = {
        //     code: 1000,
        //     message: 'please enter a valid mpin'
        //   };
        //   resolve(examples['application/json']);
        //   break;
      // case body.user_fcm_token !== '23dsjfvmfd vdfnvi34543546nvnkkkkkk dbffns dm fjvndfgdfsdf':
      //   examples['application/json'] = {
      //     code: 1000,
      //     message: 'please enter valid user_fcm_token'
      //   };
      //   resolve(examples['application/json']);
      //   break;
      default:
        examples['application/json'] = {
          code: 2000,
          data: {
            access_token: "iVBORw0KGgoAAAANSUhEUgAAAlgAAAQaCAIAAAAQRJHWAACAAElEQVR42uzdebQV1Z33/ /vHs1avleTX/azn6d/KahXBCZO2FaJJJ4b8YkfMk8e222hit9HE2CYYTdoMKlwVEASTiKjgEHECUQ ERZXAAHBhFRFBEAQ0oMyhXLncegAt3+H3P3",
            refresh_token: "iVBORw0KGgoAAAANSUhEUgAAAlgAAAQaCAIAAAAQRJHWAACAAElEQVR42uzdebQV1Z33/ /vHs1avleTX/azn6d/KahXBCZO2FaJJJ4b8YkfMk8e222hit9HE2CYYTdoMKlwVEASTiKjgEHECUQ ERZXAAHBhFRFBEAQ0oMyhXLncegAt3+H3P3",
            preferences: {
              language: "en",
              mute: "true"
            },
            customer_vpa: "JSFidb012345678bd12345p6128125ded45",
            customer_name: "abc",
            mobile_number: "9731037150",
            uuid: 12,
            base64qrcode: "iVBORw0KGgoAAAANSUhEUgAAAlgAAAQaCAIAAAAQRJHWAACAAElEQVR42uzdebQV1Z33/ /vHs1avleTX/azn6d/KahXBCZO2FaJJJ4b8YkfMk8e222hit9HE2CYYTdoMKlwVEASTiKjgEHECUQ ERZXAAHBhFRFBEAQ0oMyhXLncegAt3+H3P3"
          }
        };
        resolve(examples['application/json']);
        break;
    }
  });
};





/**
 * verify otp registered
 * verify otp
 *
 * body OtpBody verifyotp
 * returns inline_response_200_1
 **/
'use strict';

'use strict';

exports.verifyotp = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};

    // Check for required fields
    switch (true) {
      case body.otp === undefined:
        examples['application/json'] = {
          code: 1000,
          message: 'required field otp'
        };
        resolve(examples['application/json']);
        break;
      case body.mobile_number === undefined:
        examples['application/json'] = {
          code: 1000,
          message: 'required field mobile_number'
        };
        resolve(examples['application/json']);
        break;
      case body.device_id === undefined:
        examples['application/json'] = {
          code: 1000,
          message: 'required field device_id'
        };
        resolve(examples['application/json']);
        break;
      case body.identification === undefined:
        examples['application/json'] = {
          code: 1000,
          message: 'required field identification'
        };
        resolve(examples['application/json']);
        break;
        case body.otp.toString() !== '1234':
          examples['application/json'] = {
            code: 1000,
            message: 'Please enter a valid OTP'
          };
          resolve(examples['application/json']);
          break;
          case body.otp.toString() === "":
            examples['application/json'] = {
              code: 1000,
              message: 'Please enter a valid OTP'
            };
            resolve(examples['application/json']);
            break;
      case body.mobile_number !== '9731037150':
        examples['application/json'] = {
          code: 1000,
          message: 'Please enter a valid mobile number'
        };
        resolve(examples['application/json']);
        break;
      case body.mobile !== '9731037150':
        examples['application/json'] = {
          code: 2000,
          message: 'ok'
        };
        resolve(examples['application/json']);
        break;
    }
  });
};

/**
 * get account details
 * Account Details
 *
 * body Accounts_get_body  (optional)
 * returns inline_response_200_2
 **/
exports.accountDetails = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 2000,
  "data" : {
    "accounts" : "[{\"customerId\":\"11111111\",\"customerReferenceNumber\":\"5674267906535678\",\"customerFullName\":\"Sample Kumar\",\"mobileNumber\":\"9999999999\",\"accountId\":\"xxxxxxxxxxxx3984\",\"accountType\":\"CURRENT\",\"accountStatus\":\"ACCOUNT OPEN REGULAR\",\"IFSCCode\":\"JSFB0004534\",\"aeba\":\"Y\"},{\"customerId\":\"2222222\",\"customerReferenceNumber\":\"5674267906535678\",\"customerFullName\":\"Sample Kumar\",\"mobileNumber\":\"9999999999\",\"accountId\":\"xxxxxxxxxxxx3984\",\"accountType\":\"CURRENT\",\"accountStatus\":\"ACCOUNT OPEN REGULAR\",\"IFSCCode\":\"JSFB0004534\",\"aeba\":\"Y\"}]"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

/**
 * get static qrcode
 *  
 *
 * body Auth mobile number (optional)
 * returns upi
 **/
exports.chcekMobile = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 2000,
  "data" : {
    "customer_vpa" : "JSFidb012345678bd12345p6128125ded45",
    "customer_name" : "abc",
    "base64qrcode" : "iVBORw0KGgoAAAANSUhEUgAAAlgAAAQaCAIAAAAQRJHWAACAAElEQVR42uzdebQV1Z33/ /vHs1avleTX/azn6d/KahXBCZO2FaJJJ4b8YkfMk8e222hit9HE2CYYTdoMKlwVEASTiKjgEHECUQ ERZXAAHBhFRFBEAQ0oMyhXLncegAt3+H3P3"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}





