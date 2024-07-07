import React, { useEffect, useState } from "react";
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

  const skills =  [ "Java", "JavaScript", "PHP", "C", "HTML", "CSS", "Python", "SQL", "MySQL", "C#", "Kotlin", "Swift", "Go", "Ruby", "Haskell", "Assembly Language", "Scala", "Dart", "TypeScript", "VB.Net", "R", "Matlab", "Arduino", "Bash/Shell Scripting", "Java EE", "Spring Framework", "Node.js", "React.js", "Angular.js", "Vue.js", "Django", "Laravel", "Express.js", "Flask", "ASP.NET", "ASP.NET MVC", "Ruby on Rails", "Perl", "C++", "Objective-C", "Smalltalk", "LOGO", "Prolog", "Lisp", "Scheme", "Erlang", "Elixir", "Rust", "Lua", "Julia", "Nim", "Clojure", "Haskell", "Malbolge", "Whitespace", "Befunge", "Chef", "Puppet", "Ansible", "SaltStack", "Terraform", "Docker", "Kubernetes", "Jenkins", "Git", "GitHub", "Bitbucket", "LabVIEW", "MATLAB Simulink", "Octave", "SciPy", "NumPy", "Pandas", "TensorFlow", "Keras", "PyTorch", "Scikit-learn", "OpenCV", "Matplotlib", "Seaborn", "Jupyter Notebook", "Colab", "Apache Spark", "Hadoop", "Flink", "Spark Streaming", "Kafka", "Zookeeper", "HBase", "Cassandra", "Neo4j", "MongoDB", "Couchbase", "Redis", "GraphQL", "API Gateway", "AWS Lambda", "Azure Functions", "Google Cloud Functions", "Serverless", "Cloud Computing", "AWS", "Microsoft Azure", "Google Cloud Platform", "Heroku", "DigitalOcean", "Vagrant", "VirtualBox", "VMware", "Linux", "Windows", "macOS", "UNIX", "BSD", "DOS", "Android", "iOS", "Windows Mobile", "BlackBerry OS", "WebAssembly", "Assembly Language (ARM)", "Brainfuck", "Whitespace", "Befunge" ]
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const handleSkillSelect = (skill) => {
    if (selectedSkills.length < 9) {
      setSelectedSkills([...selectedSkills, skill]);
    }
    setIsOpen(false);
  };

  const handleSkillRemove = (skill) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };
  const availableSkills = skills.filter(
    (skill) => !selectedSkills.includes(skill)
  );
  const [email,setemail] = useState("")
  const [projectname, setprojectname] = useState("");
  const [projectdescription, setprojectdescription] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(()=>{
    const useremail = localStorage.getItem("email");
    if (useremail){
      setemail(useremail);
    }
  },[])

  const handlecreate = async () => {
    if (
      projectname &&
      projectdescription &&
      isChecked &&
      selectedSkills.length != 0
    ) {
      let result = await fetch("http://192.168.29.250:5000/create_project", {
        method: "post",
        body: JSON.stringify({
          email,
          projectname,
          projectdescription,
          selectedSkills,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.log(result);
      navigate('/landing')
    } else {
      alert("Enter valid details");
    }
  };
  return (
    <div>
      <NavIn />
      <div className="py-5 ">
        <div className="flex h-[84vh] mx-64 font-poppins border-[1px] border-[#7D5A5A] rounded-[50px] bg-[#FAF2F2] ">
          <div className="w-1/2 flex flex-wrap justify-center  my-5">
            <Card color="transparent" shadow={false}>
              <div className="flex flex-row">
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="text-[#503C3C] text-[23px] font-poppins"
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
                className="font-normal text-[#7D5A5A]  font-poppins"
              >
                Let's get started! Enter your project details below.
              </Typography>
              <form className="mt-3 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-5 text-[#7D5A5A] font-poppins"
                  >
                    Project Name
                  </Typography>
                  <Input
                    type="text"
                    value={projectname}
                    onChange={(e) => {
                      setprojectname(e.target.value);
                    }}
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
                    className="-mb-5 -mt-3 text-[#7D5A5A] font-poppins"
                  >
                    Project Description
                  </Typography>
                  <div className="w-96">
                    <Textarea
                      value={projectdescription}
                      onChange={(e) => {
                        setprojectdescription(e.target.value);
                      }}
                      className="border-[#7D5A5A] focus:border-[#7D5A5A] text-[#7D5A5A] focus:ring-0 "
                      label="Enter 10-50 words"
                    />
                  </div>
                  <div>
                    {/* <div className="flex"> */}
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
                        className="absolute z-10 min-w-[180px] overflow-scroll h-[200px] rounded-md border-[1px] border-[#7D5A5A] bg-[#FAF2F2] p-3 font-sans text-sm font-normal text-[#503C3C] shadow-lg shadow-blue-gray-500/10 focus:outline-none"
                      >
                        {availableSkills.map((skill, index) => (
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
                    {selectedSkills.length > 0 ? (
                      <div className="flex flex-wrap h-[100px]">
                        {selectedSkills.map((skill, index) => (
                          <div
                            key={index}
                            className="w-[120px] h-[40px] bg-[#F1D1D1] rounded-2xl text-[#503C3C] flex items-center border p-2 m-1 text-[15px]"
                          >
                            <span className="w-[100px] overflow-hidden text-overflow-ellipsis whitespace-nowrap">
                              {skill}
                            </span>
                            <svg
                              onClick={() => handleSkillRemove(skill)}
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 ml-2 cursor-pointer "
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="#503C3C"
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
                    ) : (
                      <div className="h-[100px]"></div>
                    )}
                  </div>
                  {/* </div> */}
                  <div className="mt-10">
                    <Checkbox
                      checked={isChecked}
                      onChange={(e) => setIsChecked(e.target.checked)}
                      label={
                        <Typography
                          variant="small"
                          color="gray"
                          className="flex items-center font-normal text-[#7D5A5A] font-poppins -mt-3"
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
                      containerProps={{ className: "-ml-2.5 -mt-3 " }}
                    />
                  </div>
                </div>

                <Button
                  onClick={handlecreate}
                  className="text-[14px] bg-[#F1D1D1] text-[#503C3C] border-[#503C3C] border-[1px] font-poppins"
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
