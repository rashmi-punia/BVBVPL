import React from "react";
import Conatiner from "../Conatiner";
import Image from "next/image";
import { FaPhone, FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Button from "../Button";

const QuerySec = () => {
  return (
    <div className="relative">
      <Conatiner
        title={"Query section"}
        h1={"Got Questions? We’re Here to Help You Go Solar!"}
        textAllign={"text-center"}
      />
      <Image
        src={"/icons/queryillus.svg"}
        width={120}
        height={112}
        alt=""
        className="absolute -right-3 -top-14 -z-10"
      />
      <Image
        src={"/images/queryimg.png"}
        width={210}
        height={265}
        alt=""
        className="absolute left-0  -bottom-40 -z-10"
      />
      <form className=" *:my-2 *:bg-[#FAFAFA]">
        <div className="border rounded flex items-center p-2 gap-2 border-text/20 focus-within:border-text/50">
          <FaUser className="size-5 text-text/90" />
          <input
            type="text"
            id="fullname"
            name="fullName"
            placeholder="Full Name"
            className="capitalize w-full outline-none bg-transparent px-2"
          />
        </div>
        <div className="border rounded flex items-center p-2 gap-2 border-text/20 focus-within:border-text/50">
          <FaPhone className="size-5 text-text/90" />
          <input
            type="text"
            id="ph"
            name="ph"
            placeholder="Phone Number"
            className="w-full outline-none bg-transparent px-2"
          />
        </div>
        <div className="border rounded flex items-center p-2 gap-2 border-text/20 focus-within:border-text/50">
          <MdEmail className="size-6 text-text/90" />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="w-full outline-none bg-transparent px-2"
          />
        </div>
        <div className="border rounded flex items-center p-2 gap-2 border-text/20 focus-within:border-text/50">
          <textarea
            rows={5}
            id="query"
            name="query"
            placeholder="Tell us more about your needs or questions.."
            className="w-full  outline-none bg-transparent px-2"
          />
        </div>
        <div className="border rounded flex items-center gap-2 border-text/20 focus-within:border-text/50">
          <select
            name="dropdown"
            defaultValue=""
            className="w-full capitalize bg-transparent p-2.5 h-full focus:outline-none"
          >
            <option value="" disabled hidden>
              Type of inquiry
            </option>
            <option value="consultation" className="bg-white">
              Consultation
            </option>
            <option value="design" className="bg-white">
              Design
            </option>
            <option value="maintanence" className="bg-white">
              Maintanence
            </option>
            <option value="installation" className="bg-white">
              Installation
            </option>
          </select>
        </div>
        <div className="float-right pt-2">
          <Button text={"Send Query"} handleClick={()=>{}} />
        </div>
      </form>
    </div>
  );
};

export default QuerySec;
