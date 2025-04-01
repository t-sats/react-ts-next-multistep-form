import { useFormState } from "@/context/FormContext";
import AgeStep from "@/components/insurance-flow/AgeStep";
import EmailStep from "@/components/insurance-flow/EmailStep";
import UserNameStep from "@/components/insurance-flow/UserNameStep";
import SummaryStep from "@/components/insurance-flow/SummaryStep";

export const CarInsuranceSteps = () => {
    const {step} = useFormState();

    switch (step) {
        case 1:
            return <EmailStep/>;
        case 2:
            return <UserNameStep/>;
        case 3:
            return <AgeStep/>;
        case 4:
            return <SummaryStep/>;
        default:
            return null;
    };
};

const CarInsuranceForm = () => {
    return <CarInsuranceSteps/>
};

export default CarInsuranceForm;
