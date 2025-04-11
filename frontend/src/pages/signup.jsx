import React, { useEffect, useState } from "react";
import Header from "../components/header";
import logo from "../assets/images/logo-2.png";
import { Link } from "react-router-dom";
import { useRegisterUserMutation } from "../redux/features/auth";
import { useAlert } from "react-alert";

const initialInput = {
  name: "",
  email: "",
  password: "",
};

const LoginPage = () => {
  const alert = useAlert();
  const [registerUser, { isLoading, isError, error, isSuccess }] =
    useRegisterUserMutation();

  const [inputChange, setInputChange] = useState({
    ...initialInput,
  });

  const handleChange = (e) => {
    setInputChange({ ...inputChange, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    registerUser(inputChange);
  };

  const inputFields = [
    {
      placeholder: "Full Name",
      value: inputChange.name,
      onChange: (e) => handleChange(e),
      name: "name",
    },
    {
      placeholder: "Email",
      value: inputChange.email,
      onChange: (e) => handleChange(e),
      name: "email",
    },
    {
      placeholder: "Password",
      value: inputChange.password,
      onChange: (e) => handleChange(e),
      name: "password",
    },
  ];

  useEffect(() => {
    if (isError) {
      alert.error(error.data.message);
    }

    if (isSuccess) {
      alert.success("Login successfully");
      setInputChange({ ...initialInput });
    }
  }, [isError, isSuccess, alert]);

  return (
    <div className="bg-black pb-20 min-h-screen">
      <div className="max-w-screen-xl m-auto">
        <Header />
        <div className="h-[86vh] flex justify-center items-center">
          <div className="flex flex-col gap-y-2">
            <img
              src={logo}
              className="w-[136px] h-[141px] block m-auto"
              alt=""
            />
            <form onSubmit={submit}>
              <div className="flex flex-col gap-y-3">
                {inputFields.map((field, index) => (
                  <input
                    key={index}
                    type="text"
                    className="bg-transparent placeholder:text-[#48D6DF] rounded-full  focus:outline-none focus:ring-0 border border-[#48D6DF] text-white pl-6 pr-1 text-sm h-[46px] w-[442px]"
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={field.onChange}
                    name={field.name}
                  />
                ))}
              </div>
              <br />
              <div className="flex justify-center">
                <button
                  disabled={isLoading}
                  type="submit"
                  className="py-[9px] text-white-false px-[40px] items-start gap-[18px] rounded-[100px] bg-violet-700"
                >
                  {(isLoading && "laoding...") || "Register"}
                </button>
              </div>
            </form>
            <div className="text-center">
              <span className="text-[#5E5E5E]">Already registered?</span>{" "}
              <Link to="/login">
                <span className="text-[#48D6DF]">Sign in</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
