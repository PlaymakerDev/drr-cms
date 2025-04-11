// source from email validate
export const validateEmail = (email) => {
  if (!email) return false;

  const regex = new RegExp(/^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/);
  let emailParts = email.split('@');

  if (emailParts.length !== 2) return false;

  let account = emailParts[0];
  let address = emailParts[1];

  if (account.length > 64) return false;

  else if (address.length > 255) return false;

  let domainParts = address.split('.');

  if (domainParts.some(function (part) {
    return part.length > 63;
  })) return false;

  return regex.test(email);
}

export const validateName = (name, limit = 50) => {
  if (name.trim().length > limit) {
    return false;
  }
  return true;
}

export const validatePhoneNumber = (phoneNumber) => {
  const validatePhoneNumber = new RegExp(/^\d+$/); 
  if (!validatePhoneNumber.test(phoneNumber)) {
    return false;
  }
  if (
    (phoneNumber.startsWith("06") || phoneNumber.startsWith("08") || phoneNumber.startsWith("09")) &&
    phoneNumber.length === 10
  ) {
    return true; 
  }
  if (phoneNumber.startsWith("02") && phoneNumber.length === 9) {
    return true; 
  }
  return false; 
};


export const validateDateOfBirth = (birthDateSelect, limitDateString) => {
  const userDate = new Date(birthDateSelect);
  const limitDate = new Date(limitDateString);
  return userDate <= limitDate;
}


export * as formValidator from "./validate"