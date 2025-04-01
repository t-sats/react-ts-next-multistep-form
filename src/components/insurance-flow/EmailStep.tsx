import React, {useState} from "react";
import { useFormState } from "@/context/FormContext";
import { validateEmail } from "@/helpers/validation";

const EmailStep = () => {

  const [error, setError] = useState("");

  const { formData, handleChange, handleNext }  = useFormState();

  const emailValue = formData.email;

  const handleOnFocus = () => {
      setError("");
  };

  const handleSubmit = () => {
      if (!validateEmail(emailValue)) {
          setError("Please enter valid email");
      } else {
          handleNext();
      };
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2 items-start">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          onChange={handleChange}
          onFocus={handleOnFocus}
          name="email"
          value={formData.email}
          className="input input-primary w-full max-w-xs"
        />
          {error}
      </div>
      <button
        className="rounded-full border border-solid border-transparent bg-foreground text-background gap-2 hover:bg-[#28a745] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        onClick={handleSubmit}
        type="button"
      >
        Next
      </button>
    </div>
  );
};

export default EmailStep;
