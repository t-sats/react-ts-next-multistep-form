import React, { useState } from "react";
import { useFormState } from "@/context/FormContext";
import { validateAge } from "@/helpers/validation";

const AgeStep = () => {

  const [error, setError] = useState("");

  const { formData, handleChange, handleNext, handleBack }  = useFormState();

  const ageValue = formData.age;

  const handleOnFocus = () => {
      setError("");
  };

  const handleSubmit = () => {
      if (!validateAge(ageValue)) {
          setError("Please enter valid age");
      } else {
          handleNext();
      };
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2 items-start">
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="number"
          onChange={handleChange}
          onFocus={handleOnFocus}
          name="age"
          value={formData.age}
          className="input input-primary w-full max-w-xs"
        />
          {error}
      </div>
      <button
        className="rounded-full border border-solid border-transparent bg-foreground text-background gap-2 hover:bg-[#28a745] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        onClick={handleBack}
        type="button"
      >
        Back
      </button>
      <button
        type="button"
        className="rounded-full border border-solid border-transparent bg-foreground text-background gap-2 hover:bg-[#28a745] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        onClick={handleSubmit}
      >
        Buy Now
      </button>
    </div>
  );
};

export default AgeStep;
