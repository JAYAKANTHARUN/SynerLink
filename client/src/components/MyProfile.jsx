import React, { useEffect, useState } from "react";
import NavIn from "./NavIn";
import Footer from "./Footer";
import {
  Button,
  IconButton,
  Rating,
  Typography,
} from "@material-tailwind/react";
const MyProfile = () => {
  const [user,setuser] = useState({});
  useEffect(()=>{
    let useremail = localStorage.getItem("email");
    if (useremail){
      getprofile(useremail);
    }
  },[]);
  const getprofile = async (email) => {
    if (email) {
      let result = await fetch("http://192.168.29.250:5000/get_user", {
        method: "post",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      result = await result.json();
      console.log(result);
      setuser(result);
    } else {
      alert("Enter valid details");
    }
  };
  return (
    <div>
      <NavIn />
      <div>
        <section className="py-16 px-8">
          <div className="mx-auto container grid place-items-center grid-cols-1 md:grid-cols-2">
            <img
              src="https://www.garrickadenbuie.com/blog/process-profile-picture-magick/index_files/figure-html/resized-cropped-1.png"
              alt="profile_pic"
              className="h-[25rem] rounded-full"
            />
            <div>
              <Typography className="mb-4 font-poppins text-[30px] text-[#503C3C]" variant="h3">
                My Profile
              </Typography>
              <div className="my-8 flex items-center gap-2">
                <Rating value={4} readonly className="text-amber-500" />
                <Typography className="!text-sm font-bold !text-gray-700">
                  4.0/5 (50 Projects)
                </Typography>
              </div>
              <div className="mb-4 ">
                <Typography className="font-poppins text-[20px] text-[#503C3C] m-1 px-2 font-medium ">Name:</Typography>
                <div className="bg-[#F3E1E1] w-[400px] p-[2px] rounded-2xl px-2 ">
                  <Typography className="font-poppins text-[18px] text-[#503C3C] m-1 ">{user.name}</Typography>
                </div>
              </div>
              <div className="mb-4 ">
                <Typography className="font-poppins text-[20px] text-[#503C3C] m-1 px-2 font-medium ">Email:</Typography>
                <div className="bg-[#F3E1E1] w-[400px] p-[2px] rounded-2xl px-2 ">
                  <Typography className="font-poppins text-[18px] text-[#503C3C] m-1 ">{user.email}</Typography>
                </div>
              </div>
              <div className="mb-4 ">
                <Typography className="font-poppins text-[20px] text-[#503C3C] m-1 px-2 font-medium ">Position:</Typography>
                <div className="bg-[#F3E1E1] w-[400px] p-[2px] rounded-2xl px-2 ">
                  <Typography className="font-poppins text-[18px] text-[#503C3C] m-1 ">{user.position}</Typography>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default MyProfile;
