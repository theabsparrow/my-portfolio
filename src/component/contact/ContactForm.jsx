"use client";

import { useForm } from "react-hook-form";
import InputType from "../formInput/InputType";
import InputTextArea from "../formInput/InputTextArea";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    required,
    watch,
    formState: { errors, isSubmitting, isValid },
    reset,
    trigger,
  } = useForm({
    mode: "onChange",
    criteriaMode: "all",
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <form
      className="dark:bg-[#161617] border border-gray-400 p-6 rounded-xl space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex justify-between gap-10 items-center">
        <InputType
          label="Name"
          name="name"
          placeholder="your name"
          register={register}
          required={true}
          error={errors.name}
          type="text"
          trigger={trigger}
        />
        <InputType
          label="Email"
          name="email"
          placeholder="your email"
          register={register}
          required={true}
          error={errors.email}
          type="email"
          trigger={trigger}
        />
      </div>
      <InputTextArea
        label="Message"
        name="message"
        placeholder="Your message"
        register={register}
        error={errors.message}
        required={true}
        validateWatch={watch("message")}
        trigger={trigger}
      />
      <div className="flex justify-end items-center">
        <button
          type="submit"
          disabled={!isValid || isSubmitting}
          className=" text-gray-800 dark:text-white/90 bg-[rgba(255,255,255,0.5)] dark:bg-gray-800  px-2 py-1 rounded-lg text-lg font-medium cursor-pointer flex items-center gap-2 disabled:bg-[rgba(255,255,255,0.2)] disabled:text-gray-800/50 dark:disabled:bg-gray-800/50 dark:disabled:text-white/50 dark:hover:bg-white/70 dark:hover:text-gray-900 duration-500 hover:bg-gray-800 hover:text-white/70"
        >
          <FiSend /> {isSubmitting ? "Sending" : "Send"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
