
export const validateEmail = (email:string) => {
 const regex = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
 return regex.test(email);
};

export const validateName = (name:string) => {
 const regex = /^[A-Za-z][a-zA-Z '.-]*[A-Za-z][^-]$/;
 return regex.test(name);
};

export const validateAge = (age:number) => {
 const regex = /^[1-9][0-9]?$|^100$/;
 return regex.test(String(age));
};
