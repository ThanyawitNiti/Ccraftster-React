import Joi from "joi";
import RegisterInput from "./RegisterInput";
import { useState } from "react";
import { useAuth } from "../../hooks/use-auth";
import InputErrorMessage from "./InputErrorMessage";

const registerSchema = Joi.object({
  first_name: Joi.string().trim().required().label('First Name'),
  last_name: Joi.string().trim().required().label('Last Name'),
  email: Joi.string().required().label("E-mail"),
  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required().label('Phone Number'),
  password: Joi.string()
    .pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,30}$/)
    .trim()
    .required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
});



const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, {
    abortEarly: false,
  });

  if (error) {
    console.log(error.details[1].message);
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
    
}

};


export default function RegisterForm() {
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

//   console.log(input)
  const [error, setError] = useState({});

  const { register } = useAuth();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const validationErrorObj = validateRegister(input);
    if (validationErrorObj) {
      return setError(validationErrorObj);
    }
    setError({});

    register(input).catch((err) => {
      console.log(`this err is form register(input) : ${err}`);
    });
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form
        className="flex justify-center flex-1 align-middle  h-full items-center flex-col gap-3
    "
        onSubmit={handleSubmitForm}
      >
        <div>
          <RegisterInput
            placeholder="First name"
            value={input.first_name}
            onChange={handleChangeInput}
            name="first_name"
            hasError={error.first_name}
          />
        </div>
          {error.first_name && <InputErrorMessage message={error.first_name}/> }
        <div>
          <RegisterInput
            placeholder="Last name"
            value={input.last_name}
            onChange={handleChangeInput}
            name="last_name"
            hasError={error.last_name}
          />
        </div>
          {error.last_name && <InputErrorMessage message={error.last_name}/> }
        <div>
          <RegisterInput
            placeholder="example@gmail.com"
            value={input.email}
            onChange={handleChangeInput}
            name="email"
            hasError={error.email}
          />
        </div>
        {error.email && <InputErrorMessage message={error.email}/> }

        <div>
          <RegisterInput
            placeholder="Phone Number"
            value={input.phone}
            onChange={handleChangeInput}
            name="phone"
            hasError={error.phone}
          />
        </div>
        {error.phone && <InputErrorMessage message={error.phone}/> }

        <div>
          <RegisterInput
            placeholder="Password"
            type="password"
            value={input.password}
            onChange={handleChangeInput}
            name="password"
            hasError={error.password}
          />
        </div>
        {error.password && <InputErrorMessage message={error.password}/> }
        <div>
          <RegisterInput
            placeholder="Confirm password"
            type="password"
            value={input.confirmPassword}
            onChange={handleChangeInput}
            name="confirmPassword"
            hasError={error.confirmPassword}
          />
        </div>
        {error.confirmPassword && <InputErrorMessage message={error.confirmPassword}/> }

        <div className="gap-2 mt-5 flex flex-col bordeborder-red-400 items-center  w-full">
          <button className=" bg-green-300 w-52 h-10 rounded-md hover:bg-green-500">
            Create Account
          </button>
        </div>
      </form>
    </>
  );
}
