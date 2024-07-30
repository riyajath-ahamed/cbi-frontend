import React from 'react';
import { BrandLogoLight } from '../../assets';
import { BsTwitterX, BsFacebook  } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  const footerLinks = [
    {
      title: 'Why not Visit',
      links: [
        { label: 'Who we are', href: '#whoarewe' },
        { label: 'What we do', href: '#whatwedo' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'About Us', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Donate',
      links: [
        { label: 'How to Donate', href: '#' },
        { label: 'How does it work', href: '#' },
        { label: 'Donate', href: '#' },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        { label: 'Tel: 011', href: '#' },
        { label: 'Email: ', href: 'mailto:riyajatha@gmail.com' },
      ],
    },
  ];

  return (
    <footer className="bg-footer-bg text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div>
            <FooterLogo />
            <FooterSocialLinks />
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8 xl:col-span-2 xl:mt-0">
            {footerLinks.slice(0, 2).map((section) => (
              <div key={section.title} className="md:grid  md:gap-8">
                <FooterLinksSection title={section.title} links={section.links} />
              </div>
            ))}
            {footerLinks.slice(2).map((section) => (
              <div key={section.title} className="md:grid  md:gap-8">
                <FooterLinksSection title={section.title} links={section.links} />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-row flex-wrap border-t border-gray-400 pt-8 sm:mt-11 lg:mt-14">
          <p className="text-sm leading-5 text-gray-400 mr-4 pr-4 md:border-r-2 border-gray-500">&copy; 2024 Beyond Childhood International. All rights reserved.</p>
          <p className="text-sm leading-5 text-gray-400 mr-4 pr-4  md:border-r-2 border-gray-500 hover:cursor-pointer">Terms of Service</p>
          <p className="text-sm leading-5 text-gray-400 mr-3 hover:cursor-pointer ">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;


export const FooterLinksSection = ({ title, links }) => ( 
  
  //if condition for routes

  <div>
    <h3 className="text-lg font-medium  leading-6 text-green-400">{title}</h3>
    <ul className="mt-6 space-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href} className="text-sm leading-6 text-white hover:text-green-400">{link.label}</a>
        </li>
      ))}
    </ul>
  </div>
);



const socialLinks = [
  {
    href: '#',
    label: 'Facebook',
    icon: (
      <BsFacebook />
    ),
    color: 'text-blue-600',
  },
  {
    href: '#',
    label: 'X',
    icon: (
      <BsTwitterX />
    ),
    color: 'text-blue-400',
  },
  {
    href: '#',
    label: 'YouTube',
    icon: (
      <FaYoutube />
    ),
    color: 'text-red-600',
  },
];

export const FooterSocialLinks = () => (
  <div className="flex space-x-6 pt-8">
    {socialLinks.map(({ href, label, icon, color }) => (
      <a key={label} href={href} className={`text-gray-400 text-xl hover:${color} transition-all duration-500 `}>
        <span className="sr-only">{label}</span>
        {icon}
      </a>
    ))}
  </div>
);

export const FooterLogo = () => (
  <div className="space-y-8">
    <img className="h-20" src={BrandLogoLight} alt="Company Logo" />
  </div>
);

