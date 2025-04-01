import { useFormState } from "@/context/FormContext";
import AgeStep from "@/components/insurance-flow/AgeStep";
import EmailStep from "@/components/insurance-flow/EmailStep";
import SummaryStep from "@/components/insurance-flow/SummaryStep";

export const PetInsuranceSteps = () => {
    const { step } = useFormState();

    switch (step) {
        case 1:
            return <EmailStep/>;
        case 2:
            return <AgeStep/>;
        case 3:
            return <SummaryStep/>;
        default:
            return null;
    };
};

const PetInsuranceForm = () => {
    return <PetInsuranceSteps/>
};

export default PetInsuranceForm;
