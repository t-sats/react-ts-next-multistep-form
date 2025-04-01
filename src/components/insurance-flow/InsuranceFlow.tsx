import React from "react";

interface InsuranceFlowProps {
  productId: ProductIds;
};

export enum ProductIds {
  carIns = "car_ins",
  petIns = "pet_ins",
};

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.carIns]: "Car Insurance",
  [ProductIds.petIns]: "Pet Insurance",
};

const InsuranceFlow = ({productId} : InsuranceFlowProps) => {

  return (
    <div className="flex flex-col items-center">
      <h4 className="mb-6 text-2xl">
        Buying {PRODUCT_IDS_TO_NAMES[productId]}
      </h4>
      <div className="flex justify-center w-60">
        {productId === "car_ins" &&
            <div>Car Insurance Flow</div>
        }
        {productId === "pet_ins" &&
            <div>Pet Insurance Flow</div>
        }
      </div>
    </div>
  );
};

export default InsuranceFlow;
