import React, {useState} from "react";
import { useFormState } from "@/context/FormContext";
import { validateName } from "@/helpers/validation";

const UserNameStep = () => {

  const [error, setError] = useState("");

  const { formData, handleChange, handleNext, handleBack }  = useFormState();

  const firstNameValue = formData.firstName;
  const lastNameValue = formData.lastName;

  const handleOnFocus = () => {
      setError("");
  };

  const handleSubmit = () => {
      if (!validateName(firstNameValue) || !validateName(lastNameValue)) {
          setError("Please enter valid First Name or Last Name");
      } else {
          handleNext();
      }
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2 items-start">
        <label htmlFor="firstName">First Name:</label>
        <input
          id="firstName"
          type="text"
          onChange={handleChange}
          onFocus={handleOnFocus}
          name="firstName"
          value={formData.firstName}
          className="input input-primary w-full max-w-xs"
        />
      </div>
      <div className="flex flex-col gap-2 items-start">
        <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          type="text"
          onChange={handleChange}
          onFocus={handleOnFocus}
          name="lastName"
          value={formData.lastName}
          className="input input-primary w-full max-w-xs"
        />
          {error}
      </div>
      <button
        type="button"
        className="rounded-full border border-solid border-transparent bg-foreground text-background gap-2 hover:bg-[#28a745] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        onClick={handleBack}
      >
        Back
      </button>
      <button
        className="rounded-full border border-solid border-transparent bg-foreground text-background gap-2 hover:bg-[#28a745] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        type="button"
        onClick={handleSubmit}
      >
        Next
      </button>
    </div>
  );
};

export default UserNameStep;
