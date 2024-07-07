import React, { useEffect, useState } from "react";
import NavIn from "./NavIn";
import Footer from "./Footer";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [projects, setprojects] = useState([]);

  useEffect(() => {
    getprojects();
  }, []);

  const getprojects = async () => {
    let result = await fetch("http://192.168.29.250:5000/get_projects", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.log(result);
    setprojects(result);
  };

  const goToProjectPage = (projectName,event) => {
    if (event) event.preventDefault();
    navigate(`/project/${projectName}`);
  };

  return (
    <div>
      <NavIn />
      <div className="grid grid-cols-2 gap-10 my-20 mx-10">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="w-full max-w-[48rem] flex-row bg-[#F3E1E1] rounded-tl-[80px] rounded-r-none rounded-b-none "
          >
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 rounded-r-none rounded-b-none"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="card-image"
                className="h-full w-full object-cover rounded-tl-[80px] "
              />
            </CardHeader>
            <CardBody>
              <Typography
                variant="h6"
                color="gray"
                className="mb-4 uppercase text-[#7D5A5A] "
              >
                Project
              </Typography>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2 text-[#3E3232]"
              >
                {project.project_name}
              </Typography>
              <Typography
                color="gray"
                className="mb-8 font-normal text-[#503C3C]"
              >
                {project.description}
              </Typography>
              <a href="#" className="inline-block">
                <Button
                  onClick={(e) => goToProjectPage(project.project_name,e)}
                  variant="text"
                  className="flex items-center gap-2 text-[#503C3C] "
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </a>
            </CardBody>
          </Card>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
