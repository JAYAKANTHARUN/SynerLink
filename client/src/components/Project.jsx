import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import NavIn from "./NavIn";

import Home1 from "../images/project.jpg";
import Footer from "./Footer";

const Project = () => {
  const navigate = useNavigate();
  const { projectName } = useParams();
  const [project, setproject] = useState({});

  const handleapply = () => {
    alert("Applied for the Project");
  };

  useEffect(() => {
    fetchproject(projectName);
  }, [projectName]);

  const fetchproject = async (projectname) => {
    let result = await fetch("http://192.168.29.250:5000/fetch_project", {
      method: "post",
      body: JSON.stringify({ projectname }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    setproject(result);
  };

  return (
    <>
      <NavIn />
      <div>
        <section className="">
          <div className="sm:h-[89vh] h-[87vh] sm:flex justify-evenly items-center sm:p-[50px] p-[20px] sm:text-left text-center">
            <div className="sm:w-1/2 mx-[20px]">
              <h1 className="font-poppins font-bold text-[#7D5A5A] sm:text-[30px] text-[22px] sm:my-[20px] my-[10px] ">
                {project.project_name}
              </h1>
              <h1 className="font-poppins text-[#7D5A5A] sm:text-[20px] text-[15px] mb-2 ">
                Description :
              </h1>
              <h1 className="font-poppins text-[#7D5A5A] sm:text-[17px] text-[15px] mb-5 font-light ">
                {project.description}
              </h1>
              <h1 className="font-poppins text-[#7D5A5A] sm:text-[18px] text-[15px] mb-2 ">
                Domain : {project.predicted_job}
              </h1>
              <h1 className="font-poppins text-[#7D5A5A] sm:text-[18px] text-[15px] mb-2 ">
                Skills required :
              </h1>
              {project && Array.isArray(project.skills) && (
                <ul className="list-disc pl-5 font-poppins text-[#7D5A5A] font-light ">
                  {project.skills.map((skill, index) => (
                    <li key={index} className="text-[#503C3C]">
                      {skill}
                    </li>
                  ))}
                </ul>
              )}
              <h1 className="font-poppins text-[#7D5A5A] sm:text-[18px] text-[15px] my-2 ">
                Contact :
              </h1>
              <h1 className="font-poppins text-[#7D5A5A] sm:text-[18px] text-[15px] font-light ">
                Project Organiser - {project.owner_name}
              </h1>
              <h1 className="font-poppins text-[#7D5A5A] sm:text-[18px] text-[15px] font-light  ">
                Email - {project.owner_email}
              </h1>
              <Button
                onClick={handleapply}
                variant="text"
                className="flex items-center gap-2 text-lg font-poppins my-5 bg-[#F1D1D1] border-[1px] border-[#7D5A5A] "
              >
                Apply{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </div>
            <div className="sm:w-1/2 ">
              <img
                className="rounded-br-[100px] rounded-tl-[100px] shadow-2xl "
                src={Home1}
                alt="wait"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Project;
