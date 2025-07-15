"use client";

import ContactForm from "./ContactForm";

const ContactComponent = () => {
  return (
    <section className="mt-16 space-y-4">
      <div className="space-y-4">
        <h1 className="text-2xl md:text-4xl font-bold">
          Contact me <span className="text-blue-700">.</span>
        </h1>
        <p className="text-lg">
          I’m always eager to explore new opportunities and take on exciting
          projects. If you have a project in mind, or just want to say hi, feel
          free to send me a message.
        </p>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactComponent;
