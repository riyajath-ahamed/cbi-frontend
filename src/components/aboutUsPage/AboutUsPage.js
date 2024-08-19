import React from 'react';
import { teamMember } from '../../constants/constant';

const TeamMember = ({ name, position, imageUrl }) => (
    <div className="background text-center transition-transform transform hover:scale-105">
        <img className="w-45 h-45 rounded-full mx-auto" src={imageUrl} alt={`${name} - ${position}`} />
        <p className="mt-4 text-lg">{name}</p>
        <p className="text-gray-500 mb-[20px]">{position}</p>
    </div>
);

const AboutUs = () => {
    return (
        <div className="bg-white text-gray-900">
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

            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-2">Meet the Team</h2>
                    <p className="text-center text-lg text-gray-600 leading-loose">
                        We've got an entire team dedicated to supporting you through the projects.
                    </p>
                    <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-10">
                        {teamMember.map((member, index) => (
                            <TeamMember
                                key={index}
                                name={member.name}
                                position={member.position}
                                imageUrl={member.imageUrl}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
