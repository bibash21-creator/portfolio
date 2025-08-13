"use client";
import { Space_Mono } from "next/font/google";
import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Final() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
    }
  };

  return (
    <>
      <section className="contact mx-3 md:mx-20 lg:mx-50 mt-20 w-auto md:mt-30 h-auto">
        <div className="flex flex-col md:flex-row md:gap-10">
          <div className="flex flex-col w-full md:w-1/2">
            <header
              className={`${mono.className} text-5xl md:text-6xl lg:text-7xl text-center md:text-left`}
            >
              Contact
            </header>

            <p className={`${mono.className} text-center md:text-left mt-7`}>
              I would to hear about your project and how I could help. Please
              fill in the form, and I'll get back to you as soon as possible.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 items-center md:items-start mt-10 md:mt-0 w-full md:w-1/2"
          >
            <label htmlFor="name" className="w-full">
              <input
                placeholder="Name"
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={`${mono.className} border-b w-full sm:w-3/4 lg:w-full`}
              />
            </label>

            <label htmlFor="email" className="w-full">
              <input
                placeholder="Email"
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`${mono.className} border-b w-full sm:w-3/4 lg:w-full`}
              />
            </label>

            <label htmlFor="message" className="w-full">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
                className={`${mono.className} border-b w-full sm:w-3/4 lg:w-full`}
                rows={5}
              />
            </label>

            <div className="mt-5">
              <button
                type="submit"
                className={`${mono.className} border-b px-4 py-2 hover:scale-105 cursor-pointer`}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <div className="line border-b-[0.1em] border-[#7ED99E] mx-3 md:mx-10 lg:mx-20 mt-5"></div>
    </>
  );
}

