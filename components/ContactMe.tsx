import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from "@/typings";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: PageInfo;
};

const ContactMe = ({ pageInfo }: Props) => {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();
  
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:juliocsanchez169@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="sectionHeader">contact me</h3>
      <div className="flex flex-col space-y-5 sm:space-y-10">
        <h4 className="text-3xl sm:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Let's Talk.</span>
        </h4>

        <div className="space-y-2 sm:space-y-10">
          <div className="flex items-center space-x-3 sm:space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-6 w-6 sm:h-7 sm:w-7 animate-pulse" />
            <p className="text-xl sm:text-2xl">{pageInfo?.phoneNumber || "+49 123 246 8888"}</p>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-6 w-6 sm:h-7 sm:w-7 animate-pulse" />
            <p className="text-xl sm:text-2xl">{pageInfo?.email || "developer@gmail.com"}</p>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-6 w-6 sm:h-7 sm:w-7 animate-pulse" />
            <p className="text-xl sm:text-2xl">{pageInfo.address || "Berlin, Germany"}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto max-w-xs sm:max-w-none flex-"
        >
          <div className="flex space-x-0 space-y-2 flex-col sm:flex-row sm:space-x-2 sm:space-y-0">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
