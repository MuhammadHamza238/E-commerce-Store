
const fnameRules = [
     (v) => !!v || " first Name is required",
     (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
];
const lnameRules = [
     (v) => !!v || " last Name is required",
     (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
];
const emailRules = [
     (v) => !!v || "Email Address is required",
     (v) =>
          /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$/.test(v) || "E-mail must be valid",
];
const passwordRules = [
     (v) => !!v || "Password is required",
     (v) =>
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(v) ||
          "Minimum eight characters, at least one letter and one number",
];
const userNameRules = [
     (v) => !!v || "Username is required",
     (v) => /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/.test(v) || "",
];

export {
     fnameRules,
     lnameRules,
     emailRules,
     userNameRules,
     passwordRules,
};


