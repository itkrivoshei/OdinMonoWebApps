import React, { useState } from "react";
import "./SignUpForm.scss";

const SignUpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const formatPhoneNumber = (phoneNumber: string) => {
    const cleaned = phoneNumber.replace(/\D/g, "").slice(0, 10);
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    return match
      ? `${match[1]}${match[2] ? "-" + match[2] : ""}${
          match[3] ? "-" + match[3] : ""
        }`
      : "";
  };

  const isPasswordValid = (password: string) => {
    const regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    return regex.test(password);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    // If the input is a phone number, format it
    if (name === "phoneNumber") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: formatPhoneNumber(value),
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log("Form submitted successfully", formData);
      // Here you would handle your form submission logic, such as sending the data to an API
    }
  };

  const validateForm = () => {
    let valid = true;
    let errors = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    };

    for (const [key, value] of Object.entries(formData)) {
      if (value.trim() === "") {
        errors[key as keyof typeof errors] = `${key} is required.`;
        valid = false;
      } else if (key === "email") {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(value)) {
          errors[key as keyof typeof errors] =
            "Please enter a valid email address.";
          valid = false;
        }
      } else if (key === "phoneNumber") {
        const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
        if (!phoneRegex.test(value)) {
          errors[key as keyof typeof errors] =
            "Please enter a valid phone number (xxx-xxx-xxxx).";
          valid = false;
        }
      } else if (key === "password" && !isPasswordValid(value)) {
        errors[key as keyof typeof errors] =
          "Password must have at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character.";
        valid = false;
      } else if (
        key === "confirmPassword" &&
        value !== formData.password
      ) {
        errors[key as keyof typeof errors] = "Passwords do not match.";
        valid = false;
      }
    }

    setFormErrors(errors);
    return valid;
  };

  return (
    <div className="sign-up-form-container">
      {/* Matrix background will go here if needed */}
      <div className="right-side">
        <form onSubmit={handleFormSubmit}>
          {/* The below code is repetitive, consider creating a reusable Input component */}
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
          <div className="error">{formErrors.firstName}</div>

          {/* ... Repeat for all other form fields ... */}

          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
