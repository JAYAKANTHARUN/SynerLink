import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import Nav from "./Nav";

import Home1 from '../images/home1.jpg'

const Home = () => {
  const navigate = useNavigate()
  
  const handlegetstarted = () => {
    navigate('/login')    
  }

  return (
    <>
      <Nav />
      <div>
        <section className="border-b-[10px] border-[#7D5A5A]">
          <div className="sm:h-[89vh] h-[87vh] sm:flex justify-evenly items-center sm:p-[50px] p-[20px] sm:text-left text-center">
            <div className="sm:w-1/2 mx-[20px]">
              <h1 className="font-poppins font-bold text-[#7D5A5A] sm:text-[30px] text-[22px] sm:my-[20px] my-[10px] ">
                Are you a project organizer looking for skilled collaborators?
                Or perhaps you're a professional seeking exciting projects to
                contribute to?
              </h1>
              <h1 className="font-poppins text-[#7D5A5A] sm:text-[24px] text-[15px] ">
                Look no further! Discover new opportunities, contribute to
                exciting projects, and make meaningful connections.
              </h1>
              <Button onClick={handlegetstarted} variant="text" className="flex items-center gap-2 text-lg font-poppins my-5 bg-[#F1D1D1] border-[1px] border-[#7D5A5A]  ">
                Get Started{" "}
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
              <img className="rounded-br-[100px] rounded-tl-[100px] shadow-2xl " src={Home1} alt="wait" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
