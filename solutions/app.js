import checkIP from "./ip.js";
import checkMac from "./mac.js";
import checkVisa from "./visa.js";

let checker = {
  rules: {
    ip: checkIP,
    mac: checkMac,
    visa: checkVisa
  },
  validate(string, type) {
    return this.rules[type](string)
  }
};

export default checker;