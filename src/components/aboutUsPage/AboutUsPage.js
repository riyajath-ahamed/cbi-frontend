import React from "react";
import tithiraImage from "../../assets/image_tithira.png";
import { BrandLogoOriginal } from "../../assets";
import {
  AmalGunarathne,
  AnuththaraKodikara,
  DanWijenayake,
  DrLakshinieGunasiri,
  NadeeGunaratne,
  NisansalaIroshiniJayasena,
  SanjeewaniPriyangika,
  AhmedRiyajath,
  ChamodayaBandara,
} from "../../assets/boardMembers";
import { SolarVillageSDGCIC, TowardsResponsive } from "../../assets/associactives";

const teamData = {
  directors: [
    {
      name: "Dr. Lakshinie Gunasiri",
      position: "Director",
      imageUrl: DrLakshinieGunasiri,
    },
    { name: "Amal Gunaratne", position: "Director", imageUrl: AmalGunarathne },
    {
      name: "Nadee Gunaratne",
      position: "Director",
      subtitle: "Based In Sri Lanka",
      imageUrl: NadeeGunaratne,
    },
    {
      name: "Chamodaya Bandara",
      position: "Legal Project Coordinator",
      imageUrl: ChamodayaBandara,
    },

  ],
  members: [
    {
      name: "Dan Wijenayake",
      position: "Partnership and Grant Manager",
      imageUrl: DanWijenayake,
    },
    {
      name: "Nisansala Iroshini Jayasena",
      position: "Talent and Education Development Manager",
      imageUrl: NisansalaIroshiniJayasena,
    },
    {
      name: "Sanjeewani Priyangika",
      position: "Creative Arts and Skill Development Manager",
      imageUrl: SanjeewaniPriyangika,
    },
    {
      name: "Anuththara Kodikara",
      position: "Project Officer",
      imageUrl: AnuththaraKodikara,
    },
    {
      name: "Tithira Gathsara De Silva",
      position: "ICT Officer, Creative and Digital Media",
      imageUrl: tithiraImage,
    },
    {
      name: "Ahmed Riyajath",
      position: "Software and Systems Developer",
      imageUrl: AhmedRiyajath,
    },
  ],

};

const AboutUsPage = () => {
  // Define the renderTeam function
  const renderTeam = (title, members) => {
    return (
      <div className="mb-16">
        <h3 className="text-3xl font-medium text-center mb-20 mt-20">
          {title}
        </h3>
        <div className="grid grid-cols-2 justify-items-center items-start content-start sm:grid-cols-3 md:grid-cols-4 gap-6 gap-y-20 mt-30 justify-center">
          {members.map((member, index) => (
            <div
              key={index}
              className="text-center flex flex-col  items-center justify-center "
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-36 h-36 rounded-full mb-4 border-2 object-cover border-gray-200 "
              />
              <p className="font-medium text-lg">{member.name}</p>
              <p className="text-sm text-gray-500">{member.position}</p>
              {member.subtitle && (
                <span className="text-xs text-gray-400 ml-1">
                  ({member.subtitle})
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white text-gray-900">
      {/* About Us Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto lg:px-24 px-8">
          <h1 className="text-4xl font-bold text-center mb-2">About Us</h1>
          <p className="text-center text-gray-600 text-lg leading-loose">
            Let's know who we are and what we are doing
          </p>
          <div className="mt-8 text-gray-700 mb-12">
            <p className="text-lg mb-10 leading-loose">
              We are an Australian{" "}
              <span className="underline underline-offset-8">registered</span>{" "}
              public guaranteed company working towards education, health,
              economic & skill development.
            </p>
            <div className="lg:flex xl:flex mt-4 mb-6">
              <p className="text-lg leading-loose">
                Beyond Childhood International is a{" "}
                <span className="underline underline-offset-8">
                  non-partisan
                </span>{" "}
                development organisation dedicated to work with children, youth
                families, and communities to overcome challenges like reduced
                parental care, economic stress and vulnerabilities, social norms
                and attitudes, and skill gaps to meet the demands of the
                national and international labor market.
                <br />
              </p>
              <img
                src={BrandLogoOriginal}
                alt="A group of children in a classroom setting"
                className=" h-52 transition-transform object-contain  transform hover:scale-105"
              />
            </div>
            <p className="text-lg leading-loose">
              We work through our main sectors like{" "}
              <span className="underline underline-offset-8">
                education, health, nutrition, economic development, and child
                protection
              </span>{" "}
              – serving all people, regardless of religion, race, ethnicity, or
              gender.
            </p>
            <p className="text-lg leading-loose">
              We empower vulnerable communities to transform their lives by
              promoting International Best Practices and also we aim to share
              international experiences and build regional and international
              partnerships to enable vulnerable communities to attain their full
              potential, regardless of ability or background. As an organization
              focused on strategic development actions, we provide a platform
              for vulnerable communities to meet international standards,
              avenues, and paths for personal, communal, and national
              development.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-12 mb-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Meet the Team</h2>
          <p className="text-center text-lg text-gray-600 leading-loose mb-12">
            We've got an entire team dedicated to supporting you through the
            projects.
          </p>
          {renderTeam("Directors", teamData.directors)}
          {renderTeam("Members", teamData.members)}
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
