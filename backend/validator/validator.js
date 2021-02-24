import { body, check, validationResult } from "express-validator";

const loginiValidationRules = () => {
  return [
    // username must be an email
    check("email").isEmail(),
    // password must be at least 5 chars long
    check("password").exists(),
  ];
};

const registerValidationRules = () => {
  return [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check(
      "password",
      "Password should be alphanumeric and has minimun length of 6"
    )
      .isLength({ min: 6 })
      .isAlphanumeric(),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(400).json({
    errors: extractedErrors,
  });
};

export { loginiValidationRules, registerValidationRules, validate };
