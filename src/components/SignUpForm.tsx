"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

function SignupFormDemo() {
  const [success, setSuccess] = React.useState(false);
  const [fields, setFields] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const updateFields = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields({ ...fields, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", fields.name);
    formData.append("email", fields.email);
    formData.append("subject", fields.subject);
    formData.append("message", fields.message);

    try {
      const response = await fetch("https://formspree.io/f/xeqnvjqv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSuccess(true);
        setFields({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => {
          setSuccess(false);
        },5000)
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } 
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:px-8 shadow-input bg-white dark:bg-black">
      <form className="my-4" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your Name"
              type="text"
              value={fields.name}
              onChange={updateFields}
              required
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="name@email.com"
            type="email"
            value={fields.email}
            onChange={updateFields}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            placeholder="Subject"
            type="text"
            value={fields.subject}
            onChange={updateFields}
            required
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="message">Your message</Label>
          <Input
            id="message"
            className="form-control"
            placeholder="Type your message..."
            type="textarea"
            value={fields.message}
            setValue={(value:any) => setFields({ ...fields, message: value })}
            required
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send &rarr;
          <BottomGradient />
        </button>
        {success && (
          <p className="text-sm text-green-600 pl-2 mt-5">
            I've got your message.
            <br />
            Sit back and relax while I get back to you.
          </p>
        )}
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default SignupFormDemo;
