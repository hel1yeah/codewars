"use strict";
const pin = '1s3467'

function validatePIN(pin) {
  //return true or false
  if (pin.length === 4 && pin.length === 6 && Number(pin) && Math.sign(Number(pin))) {
    return true;
  }
  else {
    return false;
  }
}
validatePIN(pin);