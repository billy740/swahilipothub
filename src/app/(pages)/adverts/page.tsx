"use client"; // Ensures useState works in a Next.js client component

import React, { useState } from "react";

const adverts = [
    { title: "Executive Summary", 
        content: "The Swahilipot Hub Foundation is seeking proposals from experienced software development firms to create a comprehensive, youth-facing, Management Information System (FURSA). This platform will serve as a central hub for youth engagement, program management, and impact measurement across our ecosystem of partners and stakeholders.The system will be developed as a proprietary solution with full ownership and intellectual property rights transferred to the Swahilipot Hub Foundation upon completion. Our vision is to create a platform that not only manages data effectively but also creates meaningful connections between youth and opportunities while providing powerful insights to inform our programming and strategies. The selected vendor will be required to transfer all rights, source code, documentation, and related materials as part of the project deliverables, ensuring our organization maintains complete control over the system's future development and deployment.This transformative platform will integrate multiple critical components including youth profile management, intervention tracking, employment opportunities, and case management. It will support both online and offline operations through web and mobile responsive interfaces, enabling efficient field operations while maintaining data security and privacy. This RFP incorporates data migration from existing systems, ensuring a seamless transition and preservation of historical data." },
    {
    title: "1. Introduction",
    content: ` Background and Context
Swahilipot Hub Foundation is a non-profit organization that seeks to nurture youth talents in technology, creatives/arts, & heritage sectors. Since our founding in 2016, we have committed to enabling youths to unleash their full potential through various youth-led programs and providing a conducive community space for co-working, meeting, networking, and learning. Our work is driven by our mission of enabling the communities to develop themselves.

Youth development programs often struggle with fragmented data, manual processes, and limited visibility into program effectiveness. Our organization aims to address these challenges through a unified digital platform that will serve multiple stakeholders, including youth, program administrators, service providers, and ecosystem partners.

The platform will consolidate four critical components:
- A comprehensive youth module tracking individual journeys
- An ecosystem mapping module for all available programs and interventions
- A jobs and livelihoods module connecting youth with opportunities
- A case management module to support youth mentorship and support to obtain and retain economic opportunities

Project Objectives
We aim to:
- Create a unified platform that simplifies youth engagement and program delivery across multiple stakeholders in the greater Mombasa region
- Facilitate seamless collaboration amongst our ecosystem partners (Government, Private sector and non-profits)
- Support personalized youth journeys through youth identification and intelligent matching
- Track and measure program impact effectively - data-driven decision-making through comprehensive analytics
- Ensure data privacy and security while maintaining transparency for all stakeholders
- Data migration from existing systems to the new MIS`,
  },
  {
    title: "2. System Overview",
    content: `Core Components
1. Youth Database
   - Generates unique identifiers for each youth member
   - Maintains detailed profiles including personal information, skills, and aspirations
   - Tracks engagement history across all programs
   - Ensures privacy and security of sensitive information
   - Supports data import from existing systems like social media profiles e.g. LinkedIn and offline systems e.g. CVs
   - Enables profile verification, validation, and updates

2. Intervention Management
   - Manage service provider registrations and verifications
   - Track program capacity, schedules, and delivery modes
   - Enable resource booking and attendance tracking
   - Monitor outcomes and impact measurements

3. Jobs and Opportunities Platform
   - Connect youth with relevant job opportunities
   - Support skills matching and recommendations
   - Integrate with external job tech/boards/offline jobs and economic opportunity platforms
   - Track application processes and outcomes

4. Case Management System
   - Online and offline data collection
   - Mentor-specific workflows and dashboards
   - Tracking of youth progress and interventions

5. Analytics and Reporting
   - Real-time dashboards for different user roles
   - Custom report generation with visual elements
   - Trend analysis and predictive modeling

6. Data migration
   - Youth profile data from Airtable databases
   - Historical intervention records (Google Forms and Sheets)
   - Case management history (Kobo Toolbox)

7. Communications
   - The system should send automatic and custom messages via email and SMS (e.g., AfricasTalking).

8. Custom Forms
   - Users should be able to design custom forms with flexible fields to efficiently collect and manage data.`,
  },
  {
    title: "3. Technical Requirements",
    content: ` System Architecture
1. Core Architecture
   - Utilize a microservices-based approach for modularity and scaling
   - Implement RESTful APIs for all system functions
   - Support both web and mobile responsive interfaces
   - Provide offline capabilities where needed

2. Frontend Development
   - Built with React for dynamic user experiences
   - Mobile-responsive across all devices
   - Accessible according to WCAG 2.1 guidelines
   - Optimized for performance

3. Backend Systems
   - Use Django framework and Django Rest Framework
   - Implement PostgreSQL for primary data storage
   - Utilize Redis for caching and real-time features

4. Data Protection
   - End-to-end encryption for data in transit
   - Multi-factor authentication
   - Role-based access control
   - Privacy impact assessments`,
  },
  {
    title: "4. Project Implementation",
    content: `Timeline and Phases
We anticipate an agile implementation process with core modules delivered within **2 months** and total development within **6 months**.

 Deliverables
1. Data Migration
   - Plan including data cleaning, transformation, validation, and testing
   - Normalization and standardization of records
   - Phased approach for migration

2. Documentation
   - Complete source code repository (GitHub)
   - Technical documentation (system architecture, API docs, deployment procedures)

3. Training and Support
   - Administrator and end-user training
   - Technical team knowledge transfer

4. Warranties and Guarantees
   - Code quality and performance guarantees
   - Security compliance`,
  },
  {
    title: "5. Vendor Requirements",
    content: ` Qualifications
The ideal vendor will have:
- **5+ years’ experience** in similar projects
- Strong portfolio of MIS platforms
- Proven expertise in the selected technology stack
- Experience with open-source development
- Track record of successful deployments
- Strong security implementation history

Proposal Requirements
    Technical Proposal
- Detailed solution architecture
- Technology stack selection and rationale
- Development methodology
- Project timeline with milestones
- Security approach
- Risk management plan

    Financial Proposal
- Development costs (itemized)
- Training costs
- Support and maintenance costs
- Payment schedule

    Submission Instructions
Please submit your proposal **HERE** by **11:00 PM, Friday 31st January 2025**, including:
- **Technical proposal** (PDF format)
- **Financial proposal** (separate PDF)`,
  },
];

const AdvertsPage: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<{ [key: number]: boolean }>({});

  const toggleContent = (index: number) => {
    setVisibleSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Adverts</h1>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-4">Request For Proposal</h2>
          <p className="text-gray-700">
            Seeking proposals for developing a comprehensive Youth MIS platform named{" "}
            <span className="font-bold text-blue-600">FURSA</span>.
          </p>

          <ul className="mt-6 space-y-4">
            {adverts.map((advert, index) => (
              <li key={index} className="border-b pb-4">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => toggleContent(index)}
                    className={`px-4 py-2 rounded-md font-semibold transition-all ${
                      visibleSections[index] ? "bg-red-500 hover:bg-red-700" : "bg-blue-500 hover:bg-blue-700"
                    } text-white`}
                  >
                    {visibleSections[index] ? "Hide" : "View"}
                  </button>
                  <span className="text-lg font-medium">{advert.title}</span>
                </div>

                {visibleSections[index] && (
                  <div className="mt-2 p-4 bg-gray-200 rounded-md text-gray-800 whitespace-pre-wrap">
                    {advert.content}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdvertsPage;
