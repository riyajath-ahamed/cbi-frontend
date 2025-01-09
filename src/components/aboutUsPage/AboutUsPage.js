import React from "react";
import { teamMember } from "../../constants/constant"; // Assuming this is needed elsewhere
import tithiraImage from "../../assets/image_tithira.png"; // Adjust the relative path based on the file location.


const teamData = {
  directors: [
    { name: "Tithira De Silva", position: "CEO", imageUrl: tithiraImage },
    { name: "Tithira De Silva", position: "CEO", imageUrl: tithiraImage },
    { name: "Tithira De Silva", position: "CEO", imageUrl: tithiraImage },
    { name: "Tithira De Silva", position: "CEO", imageUrl: tithiraImage },
    { name: "Tithira De Silva", position: "CEO", imageUrl: tithiraImage },
  ],
  managers: [
    { name: "Tithira De Silva", position: "CEO", imageUrl: tithiraImage },
    { name: "Tithira De Silva", position: "CEO", imageUrl: tithiraImage },
  ],
  advisors: [
    { name: "Tithira De Silva", position: "CEO", imageUrl: tithiraImage },
    { name: "Tithira De Silva", position: "CEO", imageUrl: tithiraImage },
    { name: "Tithira De Silva", position: "CEO", imageUrl: tithiraImage },
    { name: "Tithira De Silva", position: "CEO", imageUrl: tithiraImage },
    // Add the rest of the advisors...
  ],
  sriLankaProjectTeam: [
    { name: "Tithira De Silva", position: "CEO", imageUrl: tithiraImage },
    { name: "Tithira De Silva", position: "CEO", imageUrl: tithiraImage },
    { name: "Tithira De Silva", position: "CEO", imageUrl: tithiraImage },
    { name: "Tithira De Silva", position: "CEO", imageUrl: tithiraImage },
    { name: "Tithira De Silva", position: "CEO", imageUrl: tithiraImage },
  ],
  members: [
    { name: "Tithira De Silva", position: "CEO", imageUrl: tithiraImage },
    { name: "Tithira De Silva", position: "CEO", imageUrl: tithiraImage },
    // Add the rest of the members...
  ],
};

const AboutUsPage = () => {
  // Define the renderTeam function
  const renderTeam = (title, members) => {
    return (
        <div className="mb-16">
          <h3 className="text-2xl font-medium text-center mb-20">{title}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 gap-y-20 mb-20 justify-center mx-auto place-items-center">
            {members.map((member, index) => (
              <div
                key={index}
                className="text-center flex flex-col items-center justify-center transition-transform transform hover:scale-125"
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-36 h-36 rounded-full mb-4 border-2 border-gray-200"
                />
                <p className="font-medium text-lg">{member.name}</p>
                <p className="text-sm text-gray-500">{member.position}</p>
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
              We are an Australian <span className="underline underline-offset-8">registered</span> public guaranteed company working towards education, health, economic & skill development.
            </p>
            <div className="lg:flex xl:flex mt-4 mb-6">
              <p className="text-lg leading-loose">
                Beyond Childhood International is a <span className="underline underline-offset-8">non-partisan</span> development organisation dedicated to work with children, youth families, and communities to overcome challenges like reduced parental care, economic stress and vulnerabilities, social norms and attitudes, and skill gaps to meet the demands of the national and international labor market.
                <br /><br />
                We work through our main sectors like <span className="underline underline-offset-8">education, health, nutrition, economic development, and child protection</span> – serving all people, regardless of religion, race, ethnicity, or gender.
              </p>
              <img src="https://placehold.co/300x210" alt="A group of children in a classroom setting" className="rounded-lg lg:ml-10 mt-6 lg:mt-0 mx-auto transition-transform transform hover:scale-105" />
            </div>
            <p className="text-lg leading-loose">
              We empower vulnerable communities to transform their lives by promoting International Best Practices and also we aim to share international experiences and build regional and international partnerships to enable vulnerable communities to attain their full potential, regardless of ability or background. As an organization focused on strategic development actions, we provide a platform for vulnerable communities to meet international standards, avenues, and paths for personal, communal, and national development.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Meet the Team</h2>
          <p className="text-center text-lg text-gray-600 leading-loose mb-12">
            We've got an entire team dedicated to supporting you through the projects.
          </p>
          {renderTeam("Directors", teamData.directors)}
          {renderTeam("Managers", teamData.managers)}
          {renderTeam("Advisors", teamData.advisors)}
          {renderTeam("Sri Lanka Project Team", teamData.sriLankaProjectTeam)}
          {renderTeam("Members", teamData.members)}
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
