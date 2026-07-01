import React from 'react';

const ExperienceSec = () => {
    const experiences = [
    {
        year: "2021 – 2022",
        title: "WordPress Developer",
        company: "ThemeFantasy",
        type: "Full-time",
        description: "Developed responsive WordPress websites, customized themes and plugins, built dynamic pages using ACF and Toolset, and optimized websites for speed, SEO, and accessibility."
    },
    {
        year: "2022 – 2024",
        title: "Senior Fullstack Web Developer (React & WordPress)",
        company: "ThemeFantasy",
        type: "Full-time",
        description: "Built and maintained custom WooCommerce stores, integrated third-party APIs, developed custom functionality, optimized Core Web Vitals, and delivered scalable eCommerce solutions with a focus on performance and user experience."
    },
    {
        year: "2024 – 2026",
        title: "Senior Fullstack Web Developer (React & WordPress)",
        company: "ThemeFantasy",
        type: "Full-time",
        description: "Developing modern React applications alongside advanced WordPress solutions. Working with REST APIs, JavaScript, PHP, MySQL, and performance optimization to build scalable, responsive, and user-focused web applications."
    },
    {
        year: "2026 – Present",
        title: "Team Lead",
        company: "ThemeFantasy",
        type: "Full-time",
        description: "Leading a team of developers, assigning tasks, reviewing code, mentoring team members, coordinating project delivery, and ensuring high-quality web applications are delivered on time while continuing to develop scalable WordPress and React.js solutions."
    }
];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;