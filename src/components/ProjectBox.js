import React from "react";
import Image from "next/image"; // if you're using Next.js, you can load images with this component
import Link from "next/link";

function ProjectBox({ project }) {
    return (
        <div className="w-full h-full text-white rounded-lg p-6 shadow-lg transform transition duration-500 hover:scale-105 relative overflow-hidden">
            {/* Gradient Border */}
            <div className="rounded-lg border-2 border-transparent bg-gradient-to-r from-[#1e293b] to-[#334155] p-[2px]">
                <div className="h-full w-full bg-[#0f1724] rounded-lg p-6">
                    {/* Project Image */}
                    <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                        <Image
                            src={project.ImageUrl} // replace with your project image
                            alt="Project Image"
                            width={400}
                            height={300}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Project Title */}
                    <h2 className="text-2xl font-bold mb-2 ">{project.title}</h2>

                    {/* Project Description */}
                    <p className="text-gray-300 mb-4 line-clamp-2">
                        {project.description}
                    </p>

                    {/* Major Skills */}
                    <div className="mb-6 gap-2 flex flex-wrap ">
                        {
                            project.technologies.slice(0, 4).map((item) => (
                                <span key={item} className="inline-block bg-[#1e293b] text-sm px-3 py-1 rounded-full text-gray-300">
                                    {item}
                                </span>
                            ))
                        }

                    </div>

                    {/* More Details Button */}
                    {/* <div className="flex justify-end mb-4">
                        <button className="bg-gradient-to-r from-[#1e293b] to-[#334155] text-sm text-white py-2 px-4 rounded-lg hover:opacity-90 transition duration-300">
                            More Details
                        </button>
                    </div> */}

                    {/* Bottom Buttons */}
                    <div className="flex flex-wrap gap-4 ">
                        {/* Live Preview Button with Gradient */}
                        <Link
                            href="#"
                            className="grow bg-gradient-to-r flex items-center justify-center from-purple-500 via-pink-500 to-red-500 text-white text-sm font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition duration-300"
                        >
                            Live Preview
                        </Link>

                        {/* GitHub Button */}
                        <Link
                            href="https://github.com"
                            target="_blank"
                            className="bg-[#1e293b] grow flex items-center justify-center text-white text-sm font-semibold py-2 px-6 rounded-lg hover:bg-[#334155] transition duration-300"
                        >
                            Check on GitHub
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectBox;
