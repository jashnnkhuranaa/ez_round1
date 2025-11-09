import React, { useState } from "react";
import { z } from "zod";
import axios from "axios";
import ContactForm from "./ContactForm";
import ContactTextCard from "./ContactTextcard";
import ContactBackground from "./ContactBackground";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [responseMsg, setResponseMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = "https://vernanbackend.ezlab.in/api/contact-us/";

  // Validation schema
  const contactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    phone: z
      .string()
      .min(7, "Phone must be at least 7 digits")
      .max(15, "Phone too long")
      .regex(/^[0-9]+$/, "Only numbers allowed"),
    message: z.string().min(1, "Message is required"),
  });

  // Validate form
  const validateForm = () => {
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const newErrors = {};
      result.error.errors.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMsg("");
    if (!validateForm()) return;
    setLoading(true);

    try {
      const res = await axios.post(API_URL, formData);
      if (res.status === 200 || res.status === 201) {
        setResponseMsg("✅ Form Submitted Successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setResponseMsg("⚠️ Unexpected response. Please try again.");
      }
    } catch {
      setResponseMsg("❌ Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full h-screen bg-[#FEF0EC] overflow-hidden flex items-center justify-center">
      <ContactBackground />

      <div className="relative z-10 flex justify-between items-center w-[85%] max-w-6xl mx-auto">
        <ContactTextCard />
        <ContactForm
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          loading={loading}
          responseMsg={responseMsg}
          handleSubmit={handleSubmit}
        />
      </div>
    </section>
  );
}
