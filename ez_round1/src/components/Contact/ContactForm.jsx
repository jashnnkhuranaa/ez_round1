import React from "react";

export default function ContactForm({
  formData,
  setFormData,
  errors,
  loading,
  responseMsg,
  handleSubmit,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col w-[45%] justify-center">
      <h2 className="text-[28px] md:text-[32px] font-serif text-[#001F3F] mb-2">
        Join the Story
      </h2>
      <p className="text-[15px] text-gray-700 mb-6">
        Ready to bring your vision to life? Let’s talk.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {["name", "email", "phone"].map((field) => (
          <div key={field}>
            <input
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={`Your ${field}*`}
              className={`w-full border p-2 rounded-md ${
                errors[field] ? "border-red-400" : "border-gray-300"
              }`}
            />
            {errors[field] && (
              <p className="text-red-500 text-sm">{errors[field]}</p>
            )}
          </div>
        ))}

        <div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message*"
            className={`border p-2 rounded-md h-[100px] resize-none w-full ${
              errors.message ? "border-red-400" : "border-gray-300"
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-[#F15D2B] hover:bg-[#e75c2f] text-white px-5 py-2 rounded-full w-[100px] transition disabled:bg-orange-300"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {responseMsg && (
          <p className="text-sm text-gray-700 mt-2">{responseMsg}</p>
        )}
      </form>

      <p className="text-sm mt-4 text-[#F15D2B]">
        vernika@varnanfilms.co.in | +91 98716 84587
      </p>
    </div>
  );
}
