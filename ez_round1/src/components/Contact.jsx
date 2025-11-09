import React, { useState } from "react";
import axios from "axios";
import { z } from "zod";

// ✅ Validation schema
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

// ✅ Import background patterns
import BottomLeft from "../assets/contact/top-right.png";
import TopRight from "../assets/contact/bottom-left.png";

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

  // 🔹 Temporary test API (use your backend URL when ready)
  const API_URL = "https://jsonplaceholder.typicode.com/posts";
  // const API_URL = "https://vernanbackend.ezlab.in/api/contact-us/";

  // ✅ Handle input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // ✅ Validate form
  const validateForm = () => {
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const newErrors = {};

      if (result.error?.errors) {
        result.error.errors.forEach((err) => {
          newErrors[err.path[0]] = err.message;
        });
      }

      console.log("Validation errors:", newErrors);
      setErrors({ ...newErrors }); // ensures re-render
      return false;
    }

    setErrors({});
    return true;
  };

  // ✅ Submit form
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
      {/* 🔸 Background Patterns */}
      <img
        src={TopRight}
        alt="Top Right Pattern"
        className="absolute top-0 right-0 w-[380px] md:w-[450px] opacity-90"
      />
      <img
        src={BottomLeft}
        alt="Bottom Left Pattern"
        className="absolute bottom-0 left-0 w-[420px] md:w-[500px] opacity-90"
      />

      {/* 🔹 Main Content */}
      <div className="relative z-10 flex justify-between items-center w-[85%] max-w-6xl mx-auto">
        {/* Left text card */}
        <div className="bg-[#FEF0EC] rounded-md p-4 md:p-4 w-[50%] text-[#3A2C1F] leading-relaxed font-[Halant]">
          <p className="text-[16px] md:text-[18px] font-[Halant]">
            Whether you have an idea, a question, or simply want to explore how
            V can work with you — we’re just a message away.
            <br />
            Let’s catch up over coffee ☕
            <br />
            Great stories always begin with a good conversation.
          </p>
        </div>

        {/* Right form */}
        <div className="flex flex-col w-[45%] justify-center">
          <h2 className="text-[28px] md:text-[32px] font-serif text-[#001F3F] mb-2">
            Join the Story
          </h2>
          <p className="text-[15px] text-gray-700 mb-6">
            Ready to bring your vision to life? Let’s talk.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {/* Name */}
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name*"
              className={`w-full border p-2 rounded-md ${
                errors.name ? "border-red-400" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}

            {/* Email */}
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email*"
              className={`w-full border p-2 rounded-md ${
                errors.email ? "border-red-400" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            {/* Phone */}
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone*"
              className={`w-full border p-2 rounded-md ${
                errors.phone ? "border-red-400" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message*"
              className={`border p-2 rounded-md h-[100px] resize-none ${
                errors.message ? "border-red-400" : "border-gray-300"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="bg-[#F15D2B] hover:bg-[#e75c2f] text-white px-5 py-2 rounded-full w-[100px] transition disabled:bg-orange-300"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

            {/* Response message */}
            {responseMsg && (
              <p className="text-sm text-gray-700 mt-2">{responseMsg}</p>
            )}
          </form>

          <p className="text-sm mt-4 text-[#F15D2B]">
            vernika@varnanfilms.co.in | +91 98716 84587
          </p>
        </div>
      </div>
    </section>
  );
}
