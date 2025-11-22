'use client';

import { useForm } from 'react-hook-form';
import { MdEmail, MdLocationOn, MdEventAvailable } from 'react-icons/md';
import { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('https://formspree.io/f/xrbdkorr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        reset();
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('Error sending message.');
    }
  };

  return (
    <section className="contact px-6 md:px-20 py-10">
      <h1 className="text-center text-4xl md:text-5xl font-extrabold mb-4">
        Let&apos;s Connect
      </h1>

      <p className="text-sm italic text-center md:text-md max-w-2xl mx-auto">
        Every project I build is more than just code — it&apos;s a reflection of resilience,
        curiosity, and a drive to create meaningful digital experiences. If my <span className="font-bold">work</span> resonates with you, I&apos;d love to connect.
      </p>

      {/* Contact details */}
      <div className="flex flex-col md:flex-row justify-center mt-6 gap-6 font-semibold">
        <span className="flex gap-2 items-center"><MdEmail /> bibashpoudel93@gmail.com</span>
        <span className="flex gap-2 items-center"><MdLocationOn /> Lokanthali, Bhaktapur</span>
        <span className="flex gap-2 items-center"><MdEventAvailable /> Open to full time roles & collaborations</span>
      </div>

      {/* Contact form */}
      <div className="mt-10 flex flex-col-reverse md:flex-row gap-8">
        <div className="w-full md:w-1/2 rounded-lg p-6">
          {/* You could embed a map or location graphic here */}
          <p className="text-center ">Location placeholder</p>
     <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5898.333113809252!2d85.3555476!3d27.671592600000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1763817793561!5m2!1sen!2snp"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

          
        </div>

        <div className="w-full md:w-1/2  rounded-lg p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            Your Name:<input
              {...register('name', { required: 'Name is required' })}
              placeholder="Your Name"
              className="border p-2 rounded"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}

            Your Email:<input
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
              })}
              placeholder="Your Email"
              className="border p-2 rounded"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

            Your Message:<textarea
              {...register('message', { required: 'Message is required' })}
              placeholder="Your Message"
              rows={5}
              className="border p-2 rounded"
            />
            {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>

            {status && <p className="text-center text-sm mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}