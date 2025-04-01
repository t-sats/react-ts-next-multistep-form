import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="flex gap-8">
        <div className="flex flex-col gap-4 m-[10px]">
          <p>Car Insurance</p>
        <Link
            id="car_ins"
            href="/insurance/car_insurance"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#28a745] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        >
          Get a quote
        </Link>
        </div>
        <div className="flex flex-col gap-4 m-[10px]">
          <p>Pet Insurance</p>
        <Link
            id="pet_ins"
            href="/insurance/pet_insurance"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#28a745] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        >
          Get a quote
        </Link>
        </div>
      </div>
    </main>
  );
}
