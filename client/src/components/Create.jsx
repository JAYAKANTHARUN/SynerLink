import React, { useState } from "react";
import NavIn from "./NavIn";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
  Dropdown,
} from "@material-tailwind/react";
import create from "../images/create.jpg";

const Create = () => {
  const navigate = useNavigate();

  const handlecreate = () => {
    navigate("/landing");
  };
  const skills = [
    "Skill 1",
    "Skill 2",
    "Skill 3",
    "Skill 4",
    "Skill 5",
    "Skill 6",
    "Skill 7",
    "Skill 8",
    "Skill 9",
    "Skill 10",
  ];
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const handleSkillSelect = (skill) => {
    setSelectedSkills([...selectedSkills, skill]);
    setIsOpen(false);
  };

  const handleSkillRemove = (skill) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };
  return (
    <div>
      <NavIn />
      <div className="py-10 ">
        <div className="flex h-[80vh] mx-64 font-poppins border-[1px] border-[#7D5A5A] rounded-[50px] bg-[#FAF2F2] ">
          <div className="w-1/2 flex flex-wrap justify-center  my-5">
            <Card color="transparent" shadow={false}>
              <div className="flex flex-row">
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="text-[#503C3C] text-[25px] font-poppins"
                >
                  Create New Project
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
                className="mt-1 font-normal text-[#7D5A5A]  font-poppins"
              >
                Let's get started! Enter your project details below.
              </Typography>
              <form className="mt-5 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-5 text-[#7D5A5A] font-poppins"
                  >
                    Project Name
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="Name"
                    className=" focus:!border-[#7D5A5A] font-poppins bg-[#FAF2F2]"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-5 text-[#7D5A5A] font-poppins"
                  >
                    Project Description
                  </Typography>
                  <div className="w-96">
                    <Textarea
                      className="border-[#7D5A5A] focus:border-[#7D5A5A] text-[#7D5A5A] focus:ring-0 "
                      label="Enter 10-50 words"
                    />
                  </div>
                  <div>
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        setIsOpen(!isOpen);
                      }}
                      data-ripple-light="true"
                      data-popover-target="menu"
                      className="select-none rounded-lg bg-[#F1D1D1] border-[1px] border-[#7D5A5A] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-[#503C3C] shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                      Select Skills
                    </button>
                    {isOpen && (
                      <ul
                        role="menu"
                        data-popover="menu"
                        data-popover-placement="bottom"
                        className="absolute z-10 min-w-[180px] overflow-auto rounded-md border border-[#7D5A5A] bg-[#FAF2F2] p-3 font-sans text-sm font-normal text-[#503C3C] shadow-lg shadow-blue-gray-500/10 focus:outline-none"
                      >
                        {skills.map((skill, index) => (
                          <li
                            role="menuitem"
                            className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-[#F1D1D1] hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                            onClick={() => handleSkillSelect(skill)}
                            key={index}
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="flex flex-wrap">
                      {selectedSkills.map((skill, index) => (
                        <div
                          key={index}
                          className="flex items-center border rounded p-2 m-1"
                        >
                          <span>{skill}</span>
                          <svg
                            onClick={() => handleSkillRemove(skill)}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2 cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      ))}
                    </div>
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
                </div>

                <Button
                  onClick={handlecreate}
                  className="mt-2 text-[14px] bg-[#F1D1D1] text-[#503C3C] border-[#503C3C] border-[1px] font-poppins"
                  fullWidth
                >
                  Create
                </Button>
              </form>
            </Card>
          </div>

          <div className="w-1/2 ">
            <img
              className="w-auto float-right h-full object-cover rounded-tr-[50px] rounded-br-[50px] "
              src={create}
              alt="Login"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Create;
