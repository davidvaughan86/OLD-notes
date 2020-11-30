const getName = () => {
  // make sure your functions return something
  return "David";
};
const getLocation = () => {
  return "Atlanta";
};
const dateOfBirth = "03.17.86";

exports.getName = getName;
exports.getLocation = getLocation;
exports.dob = dateOfBirth; // the variable name does not have to match
