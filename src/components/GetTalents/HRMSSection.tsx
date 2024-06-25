import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Micros/Button";
import ButtonLite from "@/components/Micros/ButtonLite";

interface HRFeature {
    title: string;
    description: string;
    image: string;
}

const CTA = {
    ctaApplyText: "Get Started",
    ctaReadMoreText: "Learn More",
};

const hrFeatures: HRFeature[] = [
    {
        title: "Automated Recruitment Workflow",
        description: "Streamline your hiring process with automated job postings, applications, and interviews.",
        image:  "/images/thought_leader.jpg",
    },
    {
        title: "Performance Tracking and Analytics",
        description: "Track employee performance with detailed analytics to ensure continuous improvement.",
        image:  "/images/learning_companies.jpg",
    },
    {
        title: "Employee Self-Service Portal",
        description: "Empower employees with a portal for managing personal information, leave requests, and more.",
        image: "/images/industry_connections.jpg",
    },
    {
        title: "Centralized Employee Data Management",
        description: "Manage all employee information in one place for easy access and updates.",
        image:  "/images/supportive_community.jpg",
    },
];

const headText = {
    headlineText: "Streamline Your ",
    heroHighlightedText: "HR Management",
    subheadlineText: "",
    descriptionText: "Our advanced HR management system ensures seamless integration of top talent into your organization. From initial contact to onboarding, manage all HR processes efficiently and effectively.",
};

const HRManagementSection: React.FC = () => {
    return (
        <div className="w-full container  max-w-[1000px] mx-auto flex flex-col min-h-screen justify-center items-center gap-8 text-white px-4 sm:px-6 lg:px-8">
            <div className="heading text-center">
                <h1
                    style={{ fontFamily: "interV" }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-4xl mx-auto z-10 relative mb-3 text-gray-200 font-semibold"
                >
                    {headText.headlineText}
                    <span className="bg-gradient-to-r from-purple-700 to-purple-900 text-transparent bg-clip-text">
                        {headText.heroHighlightedText}
                    </span>
                    {headText.subheadlineText}
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-white/70 mt-4 mb-8">
                    {headText.descriptionText}
                </p>
            </div>
            <div className="container  mx-auto grid grid-cols-1 md:grid-cols-3  gap-5">
                {hrFeatures.map((item, index) => (
                    <div
                        key={index}
                        className={`row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-none p-4 bg-purple-800/40 border-white/[0.2] border justify-between flex flex-col  [&>p:text-lg] md:col-span-1 ${index >= 3 ? 'col-span-1 md:col-span-3 text-xl md:text-3xl ' : 'col-span-1 md:text-xl'}   min-h-[400px] hover:shadow-[0_0_.5rem_0rem_rgba(251,53,208,1)] relative overflow-hidden text-center pt-5 flex flex-col gap-5 cursor-pointer transition-all hover:scale-[1.02] duration-300`}
                    >
                        <h3 className="font-sans font-bold   px-3 text-neutral-200 mb-2 mt-2">
                            {item.title}
                        </h3>
                        {/* <p className="font-sans font-normal  text-xs text-neutral-300">
                            {item.description}
                        </p> */}
                        <div className="w-full h-60 sm:h-80 md:h-full relative">
                            <Image
                                src={item.image}
                                alt={item.title}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="center"
                                className="absolute bottom-0 rounded-3xl left-0 w-full h-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/GetStarted" passHref>
                    <div className="h-12 w-48 md:h-16 md:w-64">
                        <Button CTAtext={CTA.ctaApplyText} />
                    </div>
                </Link>
                <Link href="/HRManagement" passHref>
                    <div className="h-12 w-48 md:h-16 md:w-64">
                        <ButtonLite CTAtext={CTA.ctaReadMoreText} />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default HRManagementSection;
