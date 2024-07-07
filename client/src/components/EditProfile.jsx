import React, { useState, useRef, useEffect } from "react";
import NavIn from "./NavIn";
import Footer from "./Footer";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import edit from "../images/edit.webp";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

const EditProfile = () => {
  const [newname, setnewname] = useState("");
  const [newemail, setnewemail] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [email, setemail] = useState("");

  const navigate = useNavigate();

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  const fileInputRef = useRef(null);

  const [filename, setFilename] = useState("No file selected");
  const [file, setFile] = useState(null);
  const [file64, setFile64] = useState("");

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    // console.log(selectedFile);
    if (selectedFile) {
      setFilename(selectedFile.name);
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        // console.log(base64String);
        setFile64(base64String);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setFilename("No file selected");
      setFile(null);
      setFile64("");
    }
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) setemail(storedEmail);
  }, []);

  const handleedit = async () => {
    if (email && file64) {
      let result = await fetch("http://192.168.29.250:5000/edit", {
        method: "post",
        body: JSON.stringify({
          email,
          newname,
          newemail,
          newpassword,
          file64,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.log(result);
      if (result.email_update == true) {
        localStorage.clear();
        localStorage.setItem("email", newemail);
        navigate("/landing");
      } else {
        navigate("/landing");
      }
    } else {
      alert("Enter valid details");
    }
  };

  return (
    <div>
      <NavIn />
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
                  Edit Profile
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
                Please enter your details to edit.
              </Typography>
              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-5 text-[#7D5A5A] font-poppins"
                  >
                    New Name
                  </Typography>
                  <Input
                    type="text"
                    id="newname"
                    value={newname}
                    onChange={(e) => {
                      setnewname(e.target.value);
                    }}
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
                    className="-mb-5 text-[#7D5A5A] font-poppins"
                  >
                    New Email
                  </Typography>
                  <Input
                    type="email"
                    id="newemail"
                    value={newemail}
                    onChange={(e) => {
                      setnewemail(e.target.value);
                    }}
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
                    className="-mb-5 text-[#7D5A5A] font-poppins"
                  >
                    New Password
                  </Typography>
                  <Input
                    type={passwordShown ? "text" : "password"}
                    id="newpassword"
                    value={newpassword}
                    onChange={(e) => {
                      setnewpassword(e.target.value);
                    }}
                    size="lg"
                    placeholder="**********"
                    className=" !border-[#7D5A5A] focus:!border-[#7D5A5A] font-poppins bg-[#FAF2F2]"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    icon={
                      <i
                        onClick={togglePasswordVisiblity}
                        className="-mt-[3px] p-[5px] hover:bg-[#e9e3e3] rounded-full transition-all duration-300 ease-in-out "
                      >
                        {passwordShown ? (
                          <EyeIcon className="h-5 w-5 text-[#7D5A5A]" />
                        ) : (
                          <EyeSlashIcon className="h-5 w-5 text-[#7D5A5A]" />
                        )}
                      </i>
                    }
                  />
                </div>
                <>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                    accept=".pdf,.doc,.docx"
                  />
                  <Button
                    onClick={handleUploadClick}
                    className="mt-10 text-[14px] bg-[#F1D1D1] text-[#503C3C] border-[#503C3C] border-[1px] font-poppins"
                    fullWidth
                  >
                    UPLOAD YOUR CV
                  </Button>
                </>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="-mb-5 text-[#503C3C] font-normal font-poppins"
                >
                  {filename}
                </Typography>
                <Button
                  onClick={handleedit}
                  className="mt-10 text-[14px] bg-[#F1D1D1] text-[#503C3C] border-[#503C3C] border-[1px] font-poppins"
                  fullWidth
                >
                  MAKE CHANGES
                </Button>
              </form>
            </Card>
          </div>
          <div className="w-1/2 ">
            <img
              className="w-auto float-right h-full object-cover rounded-tr-[50px] rounded-br-[50px] "
              src={edit}
              alt="Signup"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfile;
