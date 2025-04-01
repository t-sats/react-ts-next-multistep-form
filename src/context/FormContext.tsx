import { ReactNode, createContext, useState, useContext, ChangeEvent } from "react";

interface FormContextProps {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleNext: () => void;
    handleBack: () => void;
    step: number;
    formData: {
        age: number;
        email: string;
        firstName: string;
        lastName: string;
    };
};

const FormContext = createContext<FormContextProps>({
    handleChange: () => {},
    handleNext: () => {},
    handleBack: () => {},
    step: 1,
    formData: {
        age: 1,
        email: "",
        firstName: "",
        lastName: ""
    }
});

interface FormProviderProps {
    children: ReactNode;
};

export const FormProvider = ({ children }: FormProviderProps) => {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    age : 1,
    email: "",
    firstName: "",
    lastName: ""
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value
    });
  };

  const handleNext = () => {
      setStep((prevValue) => prevValue + 1);
  };

  const handleBack = () => {
      setStep((prevValue) => prevValue - 1);
  };

  return <FormContext.Provider
            value={{
                handleChange,
                handleNext,
                handleBack,
                step,
                formData,
            }}
          >
            {children}
        </FormContext.Provider>
};

export const useFormState = () => {
    return useContext(FormContext);
};
