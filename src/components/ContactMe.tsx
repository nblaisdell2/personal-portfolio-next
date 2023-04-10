import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = { pageInfo: PageInfo };

function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:${formData.email}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="sectionTitle">Contact</h3>

      <div className="flex flex-col space-y-10 mt-28 items-center">
        {/* Text */}
        <h4 className="text-2xl sm:text-4xl font-semibold text-center px-2 w-screen">
          I have got just what you need.{" "}
          <span className="decoration-[#186bd7]/50 underline">
            Let&apos;s Talk.
          </span>
        </h4>

        {/* Contact Info */}
        <div className="space-y-2 sm:space-y-10 sm:text-base text-sm">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#186bd7] h-7 w-7 animate-pulse" />
            <p>{pageInfo?.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#186bd7] h-7 w-7 animate-pulse" />
            <p>{pageInfo?.email}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#186bd7] h-7 w-7 animate-pulse" />
            <p>{pageInfo?.address}</p>
          </div>
        </div>

        {/* Input form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto px-2 border border-blue-500"
        >
          <div className="flex flex-col justify-center items-center sm:flex-row space-x-0 sm:space-x-2 space-y-2 sm:space-y-0">
            <input
              {...register("name")}
              className="contactInput"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              className="contactInput"
              type="email"
              placeholder="Email"
            />
          </div>

          <input
            {...register("subject")}
            className="contactInput"
            type="text"
            placeholder="Subject"
          />

          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          />
          <button
            type="submit"
            className="bg-[#186bd7] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
