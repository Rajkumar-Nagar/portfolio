import React from "react";

const experiences = [
    {
        year: "Jan 2022",
        title: "Founder & Developer",
        company: "MintraGo",
        description:
            "This is a successful college startup founded by me. The main aim of MintraGo is to solve problems for students by offering mechanical and lab coats on daily rent. It also provides a buy and sell option for second-hand items. I built the website MintraGo.in for this initiative.",
    },
    {
        year: "Feb 2023",
        title: "Team Member",
        company: "Recottage",
        description:
            "Recottage is a startup that helps students search for rental rooms in cities. It allows users to book or rent rooms on a monthly basis, similar to how students do. I assisted with collaborating with hostel and PG owners and helped in finding suitable accommodations.",
    },
    {
        year: "Aug 2023",
        title: "Technical Leader & Web/App Developer",
        company: "GramZo",
        description:
            "I was the technical leader and a founding team member of GramZo, a startup focused on delivering organic food products from various regions of India. We developed both a mobile app and website for GramZo, and I was responsible for the technical aspects of development.",
    },
    {
        year: "Feb 2024",
        title: "Founder & Developer",
        company: "Kishan",
        description:
            "Kishan is a startup dedicated to helping farmers by providing various services related to agriculture. As the founder and developer, I built the platform with several features to assist farmers. The platform includes functionalities like mandi bidding, crop rate updates, AI assistance, and more.",
    },
];

const ExperienceItem = ({ year, title, company, description }) => {
    return (
        <div className="flex mb-12">
            <div className="w-2/12 flex flex-col items-center">
                <span className="bg-gray-700 text-white px-3 py-1 rounded-md mb-2">{year}</span>
                <div className="relative flex h-full flex-col items-center justify-center">
                    <div className="bg-yellow-400 w-6 h-6 aspect-square rounded-full"></div>
                    <div className="h-full w-1 bg-gray-400 mt-1"></div>
                </div>
            </div>
            <div className="w-11/12 pl-6">
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="text-md text-gray-300 mb-4">{company}</p>
                <p className="text-sm text-gray-200 leading-relaxed">{description}</p>
            </div>
        </div>
    );
};

const ExperienceSection = () => {
    return (
        <section className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-8">Experience</h2>
            {experiences.map((exp, index) => (
                <ExperienceItem
                    key={index}
                    year={exp.year}
                    title={exp.title}
                    company={exp.company}
                    description={exp.description}
                />
            ))}
        </section>
    );
};

export default ExperienceSection;
