import React from "react";
import signup from "../images/signup.jpg";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

const Signup = () => {
  const navigate = useNavigate();

  const handlesignup = () => {
    navigate("/login");
  };

  return (
    <div>
      <Nav/>
      <div className="py-10 ">
        <div className="flex h-[80vh] mx-64 font-poppins border-[1px] border-[#7D5A5A] rounded-[50px] bg-[#FAF2F2] ">
          <div className="w-1/2 flex flex-wrap justify-center pt-5">
            <Card color="transparent" shadow={false}>
              <div className="flex flex-row">
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="text-[#503C3C] text-[25px] font-poppins"
                >
                  Sign Up
                </Typography>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#503C3C"
                  class="w-6 h-6 mt-[6px] ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </div>
              <Typography
                color="gray"
                className="mt- font-normal text-[#7D5A5A]  font-poppins"
              >
                Nice to meet you! Enter your details to register.
              </Typography>
              <form className="mt-5 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-5 text-[#7D5A5A] font-poppins"
                  >
                    Your Name
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="name"
                    className=" !border-[#7D5A5A] focus:!border-[#7D5A5A] font-poppins bg-[#FAF2F2]"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-5 -mt-2 text-[#7D5A5A] font-poppins"
                  >
                    Your Email
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="name@mail.com"
                    className=" !border-[#7D5A5A] focus:!border-[#7D5A5A] font-poppins bg-[#FAF2F2]"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-5 -mt-2 text-[#7D5A5A] font-poppins"
                  >
                    Password
                  </Typography>
                  <Input
                    type="password"
                    size="lg"
                    placeholder="********"
                    className=" !border-[#7D5A5A] focus:!border-[#7D5A5A] font-poppins bg-[#FAF2F2]"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-5 -mt-2 text-[#7D5A5A] font-poppins"
                  >
                    Confirm Password
                  </Typography>
                  <Input
                    type="password"
                    size="lg"
                    placeholder="********"
                    className=" !border-[#7D5A5A] focus:!border-[#7D5A5A] font-poppins bg-[#FAF2F2]"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <Checkbox
                  label={
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center font-normal text-[#7D5A5A] font-poppins"
                    >
                      I agree the
                      <a
                        href="#"
                        className="font-medium transition-colors hover:text-gray-900 text-[#7D5A5A] font-poppins"
                      >
                        &nbsp;Terms and Conditions
                      </a>
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5 " }}
                />
                <Button
                  onClick={handlesignup}
                  className="mt-4 text-[14px] bg-[#F1D1D1] text-[#503C3C] border-[#503C3C] border-[1px] font-poppins"
                  fullWidth
                >
                  sign up
                </Button>
                <Typography
                  color="gray"
                  className="mt-4 text-center font-normal text-[#7D5A5A]  font-poppins"
                >
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="font-medium text-[#7D5A5A] font-poppins"
                  >
                    Sign In
                  </a>
                </Typography>
              </form>
            </Card>
          </div>
          <div className="w-1/2 ">
            <img
              className="w-auto float-right h-full object-cover rounded-tr-[50px] rounded-br-[50px] "
              src={signup}
              alt="Signup"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
