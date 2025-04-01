import React from "react";
import Link from "next/link";
import {useFormState} from "@/context/FormContext";

const SummaryStep = () => {

  const { formData }  = useFormState();

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2 items-start">
        <div className="mb-[10px]">Email: {formData.email}</div>
        <div className="mb-[10px]">Age: {formData.age}</div>
          {formData?.firstName && formData?.firstName !== "" && <div className="mb-[10px]">First Name: {formData.firstName}</div>}
          {formData?.lastName && formData?.lastName !== "" && <div className="mb-[10px]">Last Name: {formData.lastName}</div>}
      </div>
      <Link className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#28a745] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto" href="/">
        Purchase
      </Link>
    </div>
  );
};

export default SummaryStep;
