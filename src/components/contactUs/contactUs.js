import axios from 'axios';
import React, { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

// Reusable component for contact details
const ContactDetail = ({ Icon, title, details }) => (
  <div>
    <Icon className="mx-auto mb-4 bg-primary p-5 rounded-full text-white w-24 h-24 transform transition-transform duration-300 hover:scale-110" />
    <h2 className="font-medium mb-2.5 text-2xl">{title}</h2>
    {details.map((detail, index) => (
      <div key={index} className="mb-6">
        <p className="text-lg text-[#363636]">{detail.label}</p>
        <p className="text-gray-600 text-sm">{detail.value}</p>
      </div>
    ))}
  </div>
);

// Reusable component for social media links
const SocialMediaLink = ({ href, iconClass, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
    <i className={`${iconClass} text-[#2BC581] transform transition-transform duration-300 hover:scale-110`}></i>
  </a>
);

// Component for the contact form
const ContactForm = () => {
  const scriptUrl = "https://script.google.com/macros/library/d/1pJzDfIEY7tuwLaPnd7UbczfBUjfM61bkzURb7gMiJWxaA8aRrIz7y5PM/2";
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {

    setLoading(true);

    const formData  = {
      name : name,
      email : email,
      description : description
    }
    console.log(formData)


    axios.post(scriptUrl,formData, {
      mode: 'no-cors',
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      
    }).then(({data}) => {
      console.log(data);
        console.log("SUCCESSFULLY SUBMITTED");
        setLoading(false);
        // Optionally reset the form after submission
        setName("");
        setEmail("");
        setDescription("");
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="max-w-md mx-auto space-y-4" >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-[#2BC581] focus:outline-none focus:ring-1 focus:ring-[#2BC581]"
        aria-label="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-[#2BC581] focus:outline-none focus:ring-1 focus:ring-[#2BC581]"
        aria-label="Email"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full px-4 py-2 border border-gray-300 rounded-md h-52 focus:border-[#2BC581] focus:outline-none focus:ring-1 focus:ring-[#2BC581]"
        aria-label="Description"
      ></textarea>
      <button
        type="submit"
        className="bg-green-500 border-green-500 text-white border-2 px-8 py-1 ml-3 cursor-pointer rounded-md transition-all duration-200 hover:text-green-700 hover:bg-white hover:border-green-700"
        onClick={ () => handleSubmit()}
      >
        {loading && (
          <div className="inline-block mr-2">
            <div className="rounded-full h-2 w-2 bg-green-800 animate-ping"></div>
          </div>
        )}
        Send
      </button>
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="p-8 mt-12">
      <h1 className="text-4xl font-semibold text-center mb-3">Get In Touch</h1>
      <h4 className="text-center text-gray-600 mb-24 text-lg">
        Reach out to us for any inquiries, support, or feedback.
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-14">
        <ContactDetail
          Icon={FaLocationDot}
          title="Address"
          details={[
            { label: "Australia", value: "Melbourne, Victoria, Australia." },
            { label: "Sri Lanka", value: "Colombo, Western Province, Sri Lanka." },
          ]}
        />
        <ContactDetail
          Icon={FaPhoneAlt}
          title="Phone"
          details={[
            { label: "Australia", value: "+61 491 570 006" },
            { label: "Sri Lanka", value: "+94 12 34 567 89" },
          ]}
        />
        <ContactDetail
          Icon={MdEmail}
          title="Email"
          details={[
            { label: "For Donations", value: "sampleemail@gmail.com" },
            { label: "Technical Help", value: "sampleemail@gmail.com" },
            { label: "Opportunities", value: "sampleemail@gmail.com" },
          ]}
        />
      </div>

      <div className="mx-2 md:mx-20 lg:mx-24 mb-28">
        <div className="bg-[#262626] text-center text-white py-10 rounded-lg px-4 md:px-8 lg:px-16 mx-auto max-w-screen-xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-10">
            Connect with Us on Social Media
          </h2>
          <div className="flex justify-center space-x-6 text-2xl sm:text-3xl lg:text-4xl mb-14">
            <SocialMediaLink
              href="https://www.facebook.com"
              iconClass="fab fa-facebook-f"
              label="Facebook"
            />
            <SocialMediaLink
              href="https://www.instagram.com"
              iconClass="fab fa-instagram"
              label="Instagram"
            />
            <SocialMediaLink
              href="https://www.youtube.com"
              iconClass="fab fa-youtube"
              label="YouTube"
            />
            <SocialMediaLink
              href="https://www.linkedin.com"
              iconClass="fab fa-linkedin"
              label="LinkedIn"
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-[#383838] mb-2">You need help?</h2>
        <p className="text-gray-600 mb-9">We will contact you</p>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
