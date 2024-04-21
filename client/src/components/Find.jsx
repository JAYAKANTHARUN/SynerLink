import React from 'react'
import NavIn from "./NavIn";
import Footer from "./Footer";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
const Find = () => {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A full-featured e-commerce website built with React and Node.js. Features include user authentication, product search, shopping cart, and secure payment processing."
    },
    {
      title: "Weather App",
      description: "A weather forecasting app that uses the OpenWeatherMap API to display current weather conditions and forecasts for cities around the world."
    },
    {
      title: "Task Tracker",
      description: "A task tracking app built with React. Users can add, delete, and mark tasks as completed. The app uses local storage to persist data."
    },
    {
      title: "Blog Platform",
      description: "A blogging platform where users can create, edit, and delete their own blog posts. Built with Django and React."
    },
    {
      title: "Social Media Dashboard",
      description: "A dashboard for monitoring social media metrics across multiple platforms. Built with Vue.js and the APIs of various social media platforms."
    },
    {
      title: "Online Learning Platform",
      description: "An online learning platform where users can enroll in courses, watch videos, and take quizzes. Built with Angular and Firebase."
    },
    {
      title: "Recipe Finder",
      description: "A recipe search app that uses the Spoonacular API to find recipes based on ingredients the user has on hand."
    },
    {
      title: "Fitness Tracker",
      description: "A fitness tracking app that allows users to log their workouts and track their progress over time. Built with React Native."
    },
    {
      title: "Movie Recommendation Engine",
      description: "A movie recommendation engine that uses machine learning to suggest movies based on user preferences. Built with Python and Flask."
    },
    {
      title: "Personal Finance App",
      description: "A personal finance app that allows users to track their income, expenses, and savings goals. Built with React and Express.js."
    }
  ];

  return (
    <div>
      <NavIn />
      <div className="grid grid-cols-2 gap-10 my-20 mx-10">
        {projects.map((project, index) => (
          <Card key={index} className="w-full max-w-[48rem] flex-row bg-[#F3E1E1] rounded-tl-[80px] rounded-r-none rounded-b-none ">
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
              <Typography variant="h6" color="gray" className="mb-4 uppercase text-[#7D5A5A] ">
                Project
              </Typography>
              <Typography variant="h4" color="blue-gray" className="mb-2 text-[#3E3232]">
              {project.title}
              </Typography>
              <Typography color="gray" className="mb-8 font-normal text-[#503C3C]">
              {project.description}
              </Typography>
              <a href="#" className="inline-block">
                <Button variant="text" className="flex items-center gap-2 text-[#503C3C] ">
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
}

export default Find