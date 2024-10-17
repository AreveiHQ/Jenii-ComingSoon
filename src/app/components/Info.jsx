'use client'
import ring from "@/assets/ring.png";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const Info = () => {
  return <>
    <div className="">
      <MidText />
      <div className="mt-8 flex justify-center">
        <Slideshow />
      </div>

      <div className="mt-8 flex justify-center">
        <FormComponent />
      </div>

      <div className="mt-8 justify-center p-4">
        <Footer />
      </div>
    </div>
    </>
};

// MidText Component
function MidText() {
  return (
    <div className="flex flex-col items-center">
      {/* Coming Soon Main Text */}
      <h1 className="text-6xl text-[#C41E56] font-semibold">Coming Soon</h1>
      <p className="text-[#C41E56] text-lg mt-2">
        Discover the beauty of timeless craftsmanship with Jenii
      </p>
    </div>
  );
};


function Slideshow() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Social Media Icons */}
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col gap-4">
        <SocialIcon href="#" Icon={FaFacebook} />
        <SocialIcon href="#" Icon={FaWhatsapp} />
        <SocialIcon href="#" Icon={FaInstagram} />
      </div>

      {/* Ring Image */}
      <div className="flex flex-col w-[70vw]  ">
      <Image
      width={300}
      height={300}
        src={ring}
        alt="Diamond Ring"
        className="w-30 h-30 mx-auto "
      />
      <div className="h-10 w-[50%] mx-auto bg-[radial-gradient(49.69%_46.99%_at_49.42%_42.82%,#AAAAAA_0%,#B6B6B6_8%,#D5D5D5_33%,#e6d7d7_57%,#edd9cd_80%,transparent_100%)]"></div>
      </div>

      {/* Right Arrow Button */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
        <button className="flex items-center justify-center w-12 h-12 bg-white shadow-lg rounded-full text-[#C41E56] text-2xl">
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

function SocialIcon({ href, Icon }) {
  return (
    <a
      href={href}
      className="flex items-center justify-center w-10 h-10 bg-black text-white rounded-full"
    >
      <Icon size={20} />
    </a>
  );
};




// Define the validation schema using Yup
const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
});

const FormComponent = () => {
  const [message, setMessage] = useState('');

  // Initialize React Hook Form with Yup resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Submit handler
  const onSubmit = async (data) => {
    setMessage('Loading....!');
    fetch('https://sheetdb.io/api/v1/9ohsfcjei1vvj', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [{ Email: data.email, Phone: data.phone }],
      }),
    })
      .then((response) => response.json())
      .then(() => {
        setMessage('You have been added to the waitlist');
        reset();
      })
      .catch(() => {
        setMessage('There was an error. Please try again.');
      });
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-[500px] p-4">
      {/* Email Input */}
      <div className="flex flex-col w-full">
        <div className="flex items-center w-full bg-white rounded-md px-4 py-3 shadow-md">
          <FaEnvelope className="text-[#B3A8A8] mr-3" size={20} />
          <input
            type="email"
            placeholder="Email"
            {...register('email')}
            className="w-full outline-none text-[#B3A8A8] text-lg"
          />
        </div>
        {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>}
      </div>

      {/* Phone Input */}
      <div className="flex flex-col w-full">
        <div className="flex items-center w-full bg-white rounded-md px-4 py-3 shadow-md">
          <FaPhoneAlt className="text-[#B3A8A8] mr-3" size={20} />
          <input
            type="tel"
            placeholder="Phone No"
            {...register('phone')}
            className="w-full outline-none text-[#B3A8A8] text-lg"
          />
        </div>
        {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone.message}</p>}
      </div>

      {/* Submit Button */}
      <button
        className="text-[#C41E56] w-full bg-[#FFFFFF] text-lg font-semibold py-3 rounded-md shadow-md hover:bg-[#a71745] hover:text-white transition"
        onClick={handleSubmit(onSubmit)}
      >
        Join the Waitlist
      </button>

      <p className="text-sm text-[#B3A8A8] mt-2">
        Join a waitlist of 1750+ members!
      </p>

      {/* Success/Error Message */}
      {message && <p className="mt-2 text-lg text-center">{message}</p>}
    </div>
  );
};




const Footer = () => {
  return (
    <div className="rounded-lg bg-[#C41E56] text-white justify-center flex p-4">
      <FaLocationDot size={20} />
      <p className="font-semibold">
        Broadway Empire, Nilamber Circle, Vasna Bhayli Main Rd, near Akshar Pavilion, Saiyed Vasna, Vadodara, Gujarat 391410
      </p>
    </div>
  );
};



export default Info;
