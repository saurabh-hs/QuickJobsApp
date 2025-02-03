import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

export const dropdownData = [
    {title: "Job Title", icon: IconSearch, options:['Designer', 'Developer', 'Product Manager', 'Marketing Specialist', 'Data Analyst', 'Sales Executive', 'Content Writer', 'Customer Support']},
    {title: "Location", icon: IconMapPin, options:['Delhi', 'New York', 'San Franciso', 'London', 'Berlin', 'Tokyo', 'Sydney', 'Toronto']},
    {title: "Experience", icon: IconBriefcase, options:['Entry Level', 'Intermediate', 'Expert']},
    {title: "Job Type", icon: IconRecharging, options: ['Full Time', 'Part Time', 'Contract', 'Freelance', 'Internship']}
];

const jobList = [
    {
        jobTitle: "Product Designer",
        company: "Meta",
        applicants: 25,
        experience: "Entry Level",
        jobType: "Full-Time",
        location: "New York",
        package: "32 LPA",
        postedDaysAgo: 12,
        description: "Meta is seeking a Product Designer to join our team. You'll be working on designing user-centric interfaces for our blockchain wallet platform. This is an excellent opportunity for entry-level designers to grow their skills in a dynamic environment,"
    }
]