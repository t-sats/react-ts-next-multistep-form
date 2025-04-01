import InsuranceFlow, { ProductIds } from "@/components/insurance-flow/InsuranceFlow";

const CarInsurance = () => {
    return (
        <InsuranceFlow productId={ProductIds.carIns}/>
    )
};

export default CarInsurance;
