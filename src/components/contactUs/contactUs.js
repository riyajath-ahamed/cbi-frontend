import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import './contactUs.css';

const ContactUs = () => {
  return (
    <div className="p-8 mt-[50px]">
      <h1 className="text-4xl font-semibold text-center mb-3">Get In Touch</h1>
      <h4 className="text-center text-gray-600 mb-[100px] text-[18px]">Reach out to us for any inquiries, support, or feedback.</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-15 mb-[60px]">
        <div>
            <FaLocationDot className=" mx-auto mb-4 bg-primary p-5 rounded-full text-white w-24 h-24 transform transition-transform duration-300 hover:scale-[1.1]" />
          <h2 className="text-xl font-medium mb-[9px] text-[25px]">Address</h2>
          <p className="font-semiboldfont-575757 text-[#363636] text-[19px]">Australia</p>
          <p className="font-medium text-[#8A8A8A] mb-[26px]  text-[16px]">Melbourne, Victoria, <br></br>Australia.</p>
          <p className="font-semiboldfont-575757 text-[#363636] text-[19px]">Sri Lanka</p>
          <p className="font-medium text-[#8A8A8A]  text-[16px] mb-[20px]">Colombo, Western Province, <br></br>Sri Lanka.</p>
        </div>
        <div>
        <FaPhoneAlt className=" mx-auto mb-4 bg-primary p-5 rounded-full text-white w-24 h-24 transform transition-transform duration-300 hover:scale-[1.1]" />
        <h2 className="text-xl font-medium mb-[9px] text-[25px]">Phone</h2>
        <p className="font-semiboldfont-575757 text-[#363636] text-[19px]">Australia</p>
          <p className="font-roboto font-semibold text-[#8A8A8A] mb-[46px]  text-[15px]">+61 491 570 006</p>
          <p className="font-semiboldfont-575757 text-[#363636] text-[19px]">Sri Lanka</p>
          <p className="font-roboto font-semibold text-[#8A8A8A] mb-[26px]  text-[15px] font-Inter">+94 12 34 567 89</p>
        </div>
        <div>
        <MdEmail className=" mx-auto mb-4 bg-primary p-5 rounded-full text-white w-24 h-24 transform transition-transform duration-300 hover:scale-[1.1]" />
          <h2 className="text-xl font-medium mb-[9px] text-[25px]">Email</h2>
          <p className="font-semiboldfont-575757 text-[#363636] text-[19px]">For Donations</p>
          <p className="font-medium text-[#8A8A8A] mb-[46px]  text-[16px]">sampleemail@gmail.com</p>
          <p className="font-semiboldfont-575757 text-[#363636] text-[19px]">Technical Help</p>
          <p className="font-medium text-[#8A8A8A] mb-[46px]  text-[16px]">sampleemail@gmail.com</p>
          <p className="font-semiboldfont-575757 text-[#363636] text-[19px]">Opportunities</p>
          <p className="font-medium text-[#8A8A8A] mb-[46px]  text-[16px]">sampleemail@gmail.com</p>
        </div>
      </div>
      <div className="mx-2 md:mx-20 lg:mx-24 mb-[120px]">
        <div className="bg-[#262626] text-center text-white py-7 mb-12 rounded-[8px] px-4 md:px-8 lg:px-16 mx-auto max-w-screen-xl">
          <h2 className="text-[24px] sm:text-[28px] md:text-[28px] lg:text-[32px] font-medium mb-[35px] mt-[35px]">Connect with Us on Social Media</h2>
          <div className="flex justify-center space-x-6 text-2xl sm:text-3xl md:text-[30px] lg:text-[30px] mb-14">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f text-[#2BC581] transform transition-transform duration-300 hover:scale-[1.3]"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram text-[#2BC581] transform transition-transform duration-300 hover:scale-[1.3]"></i>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube text-[#2BC581] transform transition-transform duration-300 hover:scale-[1.3]"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin text-[#2BC581] transform transition-transform duration-300 hover:scale-[1.3]"></i>
          </a>
          </div>
        </div>
      </div>
      <div className="text-center mb-[50px]">
        <h2 className="font-semiboldfont-575757 text-[#383838] text-[35px] mb-[5px]">You need help?</h2>
        <p className="text-gray-600 mb-[36px]">We will contact you</p>
        <form className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Enter Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-[#2BC581] focus:outline-none focus:ring-1 focus:ring-[#2BC581]" />
          <input type="email" placeholder="Enter Email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-[#2BC581] focus:outline-none focus:ring-1 focus:ring-[#2BC581]" />
          <textarea placeholder="Description" className="w-full px-4 py-2 border border-gray-300 rounded-md h-52 focus:border-[#2BC581] focus:outline-none focus:ring-1 focus:ring-[#2BC581]"></textarea>
          <button type="submit" className="bg-[#2BC581] text-black px-9 py-2 rounded-md transform transition-transform duration-300 hover:scale-110">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
