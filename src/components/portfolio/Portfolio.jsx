import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PortfolioData from "./portfolioData";
import Modal from "./modal/Modal";

const tabContent = {
  wilPlacement: (
    <>
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        1. Introduction / Professional Summary
      </h1>
      <p className="open-sans-font mb-4">
        As part of my WIL placement at Gold Coast Health – Child Development Service, I had the opportunity to develop a prototype web application called the <strong>Digital Mealtime Puzzle</strong>. This project was completed under the supervision of <strong>Dr. Francoise Butel</strong>, Paediatrician and Medical Director of Children's Community Health. <br /> My primary responsibility was to build a digital tool that could replace manual, paper-based assessments used by clinical teams, allowing them to manage children’s dietary assessments more effectively. This required me to work closely with <strong>psychologists</strong>, <strong>speech pathologists</strong>, <strong>occupational therapists</strong>, <strong>dietitians</strong>, and <strong>paediatricians</strong> to understand the specific needs of each discipline. By gathering and analyzing their feedback, I translated these requirements into functional features that enhanced workflows, reduced paperwork, and supported accurate assessments. <br /> This experience gave me valuable insights into the intersection of <strong>healthcare</strong> and <strong>technology</strong>, where software solutions need to be both <strong>user-friendly</strong> and compliant with strict <strong>data privacy standards</strong>.
      </p>

      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        2. Overview of the Project: Digital Mealtime Puzzle
      </h1>
      <p className="open-sans-font mb-4">The Digital Mealtime Puzzle is a prototype web application designed to help clinical staff manage children's dietary assessments. The application replaces the traditional paper-based system with an interactive Mealtime Pyramid, featuring 17 domains that represent key aspects of child development. These domains include areas such as hunger cycles, food sensory preferences, and caregiver influence. Each puzzle piece in the pyramid corresponds to a domain, and clicking on a piece opens a modal where clinicians can enter specific data, set priority levels, and provide recommendations.
        <br />
        The application supports multi-session tracking, allowing clinicians to update data over time and monitor the child’s progress across multiple assessments. Reports are automatically generated based on the data entered for each session, helping clinicians make personalized recommendations.
        <br />
        To protect patient data, the application is limited to local use on Queensland Health-issued laptops, ensuring compliance with healthcare privacy regulations. This design provides a secure environment while streamlining the workflow for clinicians.

      </p>
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        3. Technologies Used
      </h1>
      <p className="open-sans-font mb-4">
        Building the Digital Mealtime Puzzle required expertise in several technologies and tools to ensure the application was both functional and secure:
      </p>
      <li>
        <strong>React.js (Frontend)</strong>: Developed the user interface, including the interactive Mealtime Pyramid and forms for data entry.
      </li>
      <li>
        <strong>Node.js (Backend)</strong>: Managed data processing, user authentication, and the handling of session data.
      </li>
      <li>
        <strong>MySQL (Database)</strong> : Stored encrypted child information, clinician roles, and session data for multi-session tracking and report generation.
      </li>
      <li>
        <strong>Figma</strong> : Designed the visual components of the Mealtime Pyramid, allowing me to create overlays and align interactive elements.
      </li>
      <li className="mb-4">
        <strong>GitHub</strong>: Used for version control and collaborative task management throughout the project.
      </li>
      <p className="open-sans-font mb-4">
        These technologies ensured the application was responsive, secure, and easy to maintain, meeting both the technical and clinical needs of the team.
      </p>
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        4. Purpose and Impact of the Project
      </h1>
      <p className="open-sans-font mb-4">
        The Digital Mealtime Puzzle was developed to address several challenges faced by clinicians when managing child assessments. Paper-based methods are time-consuming, prone to error, and difficult to manage for multi-session tracking. This project aimed to:
      </p>

      <li><strong>Reduce paperwork</strong> by digitizing the assessment process.</li>
      <li><strong>Improve clinical efficiency</strong> by providing a platform for quick data entry, retrieval, and storage across multiple sessions.</li>
      <li className=" mb-4"><strong>Ensure secure data handling</strong> by storing sensitive information locally, in compliance with Queensland Health’s privacy policies.</li>
      <p className="open-sans-font mb-4">
        The application gives clinicians <strong>real-time access</strong> to child assessment data, supporting them in <strong>tracking development</strong> across sessions. By focusing on <strong>priority areas</strong> within the 17 domains, the platform enables clinicians to provide <strong>personalized care recommendations</strong> based on the child’s specific needs. This ensures more <strong>accurate and informed decision-making</strong>, improving overall outcomes for children in care.
      </p>
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        5. Collaboration with Clinical Teams
      </h1>
      <p className="open-sans-font mb-4">
        Throughout the project, I collaborated closely with a <strong>multidisciplinary team</strong> of healthcare professionals, including <strong>psychologists</strong>, <strong>speech pathologists</strong>, <strong>occupational therapists</strong>, <strong>dietitians</strong>, and <strong>paediatricians</strong>. Regular meetings with these professionals allowed me to gather <strong>feedback</strong> on the challenges they faced with <strong>paper-based assessments</strong> and identify key features that needed to be included in the <strong>digital solution</strong>.
        <br />
        By actively engaging with the <strong>clinical team</strong>, I ensured the application remained <strong>user-centric</strong> and aligned with their expectations. Their <strong>feedback</strong> guided important design choices, such as <strong>multi-session tracking</strong>, <strong>clinician role selection</strong>, and <strong>automated report generation</strong>. This collaborative approach allowed the application to be tailored to <strong>real-world needs</strong>, enhancing its <strong>usability</strong> and impact.

      </p>
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        6. Challenges and Solutions
      </h1>
      <p className="open-sans-font mb-4">
        Several challenges arose during the development process, requiring <strong>creative problem-solving</strong> and <strong>adaptability</strong>:
      </p>
      <li>
        <strong>Challenge 1: Cloud Storage vs. Local Storage</strong>
      </li>
      <p className="open-sans-font mb-4">
        <strong>Initial Plan</strong>: I initially planned to use cloud storage to make the application accessible from multiple devices.
        <br />
        <strong>Issue: </strong>Queensland Health’s privacy policies prohibit the use of cloud services for storing sensitive patient information.
        <br />
        <strong>Solution: </strong>I shifted to local storage using a MySQL database hosted on a secure laptop provided by Queensland Health. This ensured the application complied with data privacy regulations while remaining functional for the clinical team.
      </p>
      <li>
        <strong>Challenge 2: Interactive Puzzle Design</strong>
      </li>
      <p className="open-sans-font mb-4">
        <strong>Issue: </strong>The irregular trapezoidal shapes of the puzzle domains made it difficult to create individual, clickable elements in HTML.
        <br />
        <strong>Solution: </strong>I used Figma to design the puzzle and overlaid rectangular divs on the trapezoid pieces to approximate their shapes. This allowed each domain to remain clickable, with modals opening for data input and priority setting.
      </p>
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        7. Future Scope and Potential Improvements
      </h1>
      <p className="open-sans-font mb-4">
        Although the Digital Mealtime Puzzle is currently a prototype limited to local use, there are several opportunities for future improvements:
      </p>
      <li>
        <strong>Mobile Compatibility:</strong> Develop a mobile version to enable remote assessments and access during home visits.
      </li>
      <li>
        <strong>Graphical Report Generation</strong>: Implement charts and visual elements in reports to better track the child’s progress over time.
      </li>
      <li className="mb-4">
        <strong>Integration with Queensland Health Systems</strong>: Connect the application with existing healthcare systems to streamline data sharing across departments and enhance workflow
      </li>
      <p className="open-sans-font mb-4">
        These enhancements will further improve the <strong>usability and scalability</strong> of the application, making it an even more valuable tool for clinical teams.

      </p>
    </>
  ),
  deliverables: (
    <>


      {/* Introduction Section */}
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        1. Introduction to the Deliverables Section
      </h1>
      <p className="open-sans-font mb-4">
        The following deliverables reflect the core components and functionality developed during my WIL placement at <strong>Gold Coast Health – Child Development Service</strong>. Each deliverable was designed to <strong>digitize child dietary assessments</strong>, streamline <strong>clinical workflows</strong>, and ensure <strong>data security</strong> and compliance with healthcare regulations. These features, created through collaboration with multidisciplinary teams, aim to provide clinicians with a reliable, <strong>user-friendly</strong> solution to manage and track child assessments effectively.
      </p>

      {/* Key Deliverables Section */}
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        2. List of Key Deliverables
      </h1>

      {/* User Authentication System */}
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
      I. User Authentication System (Login and Signup)
      </h1>
      <p className="open-sans-font mb-4">
        <strong>Purpose:</strong> Provide secure access to the application, ensuring that only authorized clinicians can log in and access child data.
      </p>
      <p className="open-sans-font mb-4">
        <strong>Details:</strong> Developed login and signup pages with encrypted password storage using <strong>MySQL</strong> to protect user credentials. Implemented secure authentication, allowing clinicians to create new accounts and log in safely. Ensured compliance with Queensland Health’s privacy standards by preventing unauthorized access to sensitive child data.
      </p>
      <p className="open-sans-font mb-4">
        <strong>Impact:</strong> This system ensures <strong>data security</strong> and user accountability, allowing only authorized personnel to access the system, in accordance with privacy laws and best practices.
      </p>

      {/* Interactive Mealtime Puzzle */}
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
      II. Interactive Mealtime Puzzle Pyramid
      </h1>
      <p className="open-sans-font mb-4">
        <strong>Purpose:</strong> Enable clinicians to interact with the 17 domains of the Mealtime Pyramid, each representing an aspect of child development.
      </p>
      <p className="open-sans-font mb-4">
        <strong>Details:</strong> Designed the puzzle layout in <strong>Figma</strong> and overlaid rectangular divs on the trapezoidal pieces to approximate their shapes. Each domain opens a modal where clinicians can input data, including clinical prompts, recommendations, and priority levels (High, Moderate, Low). Priority levels ensure that the most critical domains are highlighted in the report, enabling focused care.
      </p>
      <p className="open-sans-font mb-4">
        <strong>Impact:</strong> This feature allows clinicians to capture detailed domain-specific data efficiently, reducing manual work and prioritizing areas that need immediate attention.
      </p>

      {/* Child Information and History Management */}
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
      III. Child Information and History Management System
      </h1>
      <p className="open-sans-font mb-4">
        <strong>Purpose:</strong> Collect, store, and update essential child information across multiple sessions, providing clinicians with complete access to a child’s background.
      </p>
      <p className="open-sans-font mb-4">
        <strong>Details:</strong> Designed user-friendly forms to collect personal details, caretaker information, and child history. Stored all collected data securely in the <strong>MySQL database</strong>, ensuring it can be accessed and preloaded for future sessions. Avoided redundant data entry by auto-filling relevant information from the child’s previous records.
      </p>
      <p className="open-sans-font mb-4">
        <strong>Impact:</strong> This system helps maintain <strong>data consistency</strong> and continuity of care, allowing clinicians to track the child’s progress across multiple visits and provide more informed recommendations.
      </p>

      {/* Multi-Session Tracking and Automated Report Generation */}
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
      IV. Multi-Session Tracking and Automated Report Generation
      </h1>
      <p className="open-sans-font mb-4">
        <strong>Purpose:</strong> Track assessments over multiple sessions and generate comprehensive reports that summarize child progress and clinician recommendations.
      </p>
      <p className="open-sans-font mb-4">
        <strong>Details:</strong> Each child’s data is stored as an individual session, enabling clinicians to view past assessments or start a new session with preloaded information. Implemented automated report generation, which compiles:
      </p>
      <ul className="mb-4">
        <li><strong>Child details</strong> and background information.</li>
        <li><strong>Assessment data</strong> from each puzzle domain, prioritized based on clinician input.</li>
        <li><strong>Names and roles</strong> of the clinicians involved in the assessment.</li>
      </ul>
      <p className="open-sans-font mb-4">
        <strong>Impact:</strong> This feature ensures clinicians have access to comprehensive records for effective decision-making. It simplifies the documentation process by automating report generation and providing insights into the child’s development over time.
      </p>

      {/* Role Selection Modal */}
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        V. Role Selection Modal
      </h1>
      <p className="open-sans-font mb-4">
        <strong>Purpose:</strong> Track and display the clinicians involved in each child’s assessment for accountability and transparency.
      </p>
      <p className="open-sans-font mb-4">
        <strong>Details:</strong> Developed a role selection modal where users can select team members involved in the session, including <strong>psychologists</strong>, <strong>speech pathologists</strong>, <strong>occupational therapists</strong>, and <strong>dietitians</strong>. The selected names and roles are included in the automated report, ensuring that all involved professionals are credited and accountable for their input.
      </p>
      <p className="open-sans-font mb-4">
        <strong>Impact:</strong> This feature promotes collaboration and transparency by documenting the involvement of multiple clinicians. It ensures that every member’s contribution is reflected in the final report, improving the integrity of clinical assessments.
      </p>

      {/* Local Storage and Prototype Deployment */}
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        VI. Local Storage and Prototype Deployment
      </h1>
      <p className="open-sans-font mb-4">
        <strong>Purpose:</strong> Ensure secure data handling and meet healthcare privacy standards by limiting access to authorized devices.
      </p>
      <p className="open-sans-font mb-4">
        <strong>Details:</strong> Initially planned to use cloud storage to enable remote access. However, Queensland Health’s privacy policies required switching to local storage on a secure Queensland Health-issued laptop. Restricted access to the application to local use only, ensuring compliance with data privacy regulations.
      </p>
      <p className="open-sans-font mb-4">
        <strong>Impact:</strong> This design ensures the system is fully compliant with healthcare privacy laws while remaining functional and easy to use for clinical staff. It prevents unauthorized access, maintaining the security and confidentiality of child data.
      </p>

      {/* Conclusion and Future Scope */}
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        3. Conclusion and Future Scope
      </h1>
      <p className="open-sans-font mb-4">
        The deliverables listed above demonstrate how the <strong>Digital Mealtime Puzzle</strong> meets the needs of clinicians by providing a <strong>secure</strong>, <strong>efficient</strong>, and <strong>easy-to-use</strong> platform for child dietary assessments. This prototype has proven valuable by reducing paperwork, enhancing workflow efficiency, and supporting clinical decision-making.
      </p>
      <p className="open-sans-font mb-4">
        <strong>Future Improvements:</strong>
      </p>
      <ul className="mb-4">
        <li><strong>Mobile Compatibility:</strong> Enable access during home visits or remote assessments by developing a mobile version.</li>
        <li><strong>Graphical Report Generation:</strong> Add visual elements such as charts and graphs to reports for better data visualization.</li>
        <li><strong>Integration with Queensland Health Systems:</strong> Connect the application to existing systems for seamless data sharing across departments.</li>
      </ul>
      <p className="open-sans-font mb-4">
        These improvements will enhance the scalability and usability of the Digital Mealtime Puzzle, making it an even more powerful tool for healthcare professionals.
      </p>



    </>
  ),
  skills: (
    <>

      {/* Introduction Section */}
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        Skills Developed and Applied During WIL Placement at Gold Coast Health
      </h1>
      <p className="open-sans-font mb-4">
        The skills I developed and applied during my WIL placement at <strong>Gold Coast Health – Child Development Service</strong> reflect a blend of technical expertise and transferable skills. These skills were critical in building the <strong>Digital Mealtime Puzzle</strong>, ensuring it was functional, secure, and aligned with healthcare needs. This section outlines the technical tools and frameworks I used, along with the soft skills that enabled me to collaborate effectively, solve problems, and manage tasks efficiently.
      </p>

      {/* Technical Skills Section */}
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        1. Technical Skills
      </h1>
      <p className="open-sans-font mb-4">
        Throughout the project, I used a variety of technologies, tools, and frameworks to ensure the successful delivery of the application. Here is an overview of the key technical skills I demonstrated:
      </p>

      {/* Frontend Development (React.js) */}
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        Frontend Development (React.js)
      </h1>
      <p className="open-sans-font mb-4">
        <strong>Skill:</strong> Built interactive components using React.js.
      </p>
      <p className="open-sans-font mb-4">
        <strong>Application in Project:</strong> I developed the Mealtime Puzzle Pyramid using React.js, where each domain is represented as a clickable component. Clicking on a domain opens a modal that allows clinicians to input clinical prompts, recommendations, and priority levels. The project required dynamic state management to ensure the interface was responsive and user-friendly.
      </p>

      {/* Backend Development (Node.js) */}
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        Backend Development (Node.js)
      </h1>
      <p className="open-sans-font mb-4">
        <strong>Skill:</strong> Created secure APIs and managed server-side logic.
      </p>
      <p className="open-sans-font mb-4">
        <strong>Application in Project:</strong> I designed the backend endpoints using Node.js to handle user authentication, child data input, and session tracking. This backend infrastructure ensured that the system processed data efficiently while maintaining security and compliance with healthcare standards.
      </p>

      {/* Database Management (MySQL) */}
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        Database Management (MySQL)
      </h1>
      <p className="open-sans-font mb-4">
        <strong>Skill:</strong> Worked with relational databases to manage data securely.
      </p>
      <p className="open-sans-font mb-4">
        <strong>Application in Project:</strong> I designed the MySQL schema to store child profiles, session data, and clinician details. I also implemented multi-session tracking, allowing clinicians to access and update previous assessments, with the system automatically generating reports based on historical data.
      </p>

      {/* Authentication and Security */}
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        Authentication and Security
      </h1>
      <p className="open-sans-font mb-4">
        <strong>Skill:</strong> Implemented secure login mechanisms.
      </p>
      <p className="open-sans-font mb-4">
        <strong>Application in Project:</strong> I ensured compliance with Queensland Health’s privacy policies by storing encrypted user credentials using bcrypt hashing. This approach ensured that user authentication was both secure and efficient, safeguarding sensitive child data.
      </p>

      {/* UI/UX Design with Figma */}
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        UI/UX Design with Figma
      </h1>
      <p className="open-sans-font mb-4">
        <strong>Skill:</strong> Created high-fidelity prototypes to guide development.
      </p>
      <p className="open-sans-font mb-4">
        <strong>Application in Project:</strong> Using Figma, I designed the Mealtime Puzzle Pyramid and overlaid rectangular divs on trapezoidal shapes to achieve interactivity. This approach allowed me to align the design with clinician requirements, ensuring the interface was intuitive and functional.
      </p>

      {/* Version Control and Task Management (GitHub & Jira) */}
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        Version Control and Task Management (GitHub & Jira)
      </h1>
      <p className="open-sans-font mb-4">
        <strong>Skill:</strong> Managed code versions and tracked tasks effectively.
      </p>
      <p className="open-sans-font mb-4">
        <strong>Application in Project:</strong> I used GitHub for version control, ensuring the team could track changes and collaborate efficiently. Additionally, I employed Jira to manage project milestones and tasks, ensuring all features were delivered on time.
      </p>

      {/* Transferable Skills Section */}
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        2. Transferable Skills
      </h1>
      <p className="open-sans-font mb-4">
        In addition to technical competencies, I developed a range of soft skills that were crucial for the success of the project. These transferable skills reflect my ability to collaborate, solve problems, and manage tasks effectively.
      </p>

      {/* Collaboration and Teamwork */}
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        Collaboration and Teamwork
      </h1>
      <p className="open-sans-font mb-4">
        <strong>Skill:</strong> Worked effectively in a multidisciplinary team environment.
      </p>
      <p className="open-sans-font mb-4">
        <strong>Application in Project:</strong> I collaborated with psychologists, speech pathologists, dietitians, and paediatricians to gather feedback and align the application with their clinical needs. These interactions helped me develop empathy and active listening skills, which were essential for translating their requirements into functional features.
      </p>

      {/* Problem-Solving and Adaptability */}
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        Problem-Solving and Adaptability
      </h1>
      <p className="open-sans-font mb-4">
        <strong>Skill:</strong> Solved challenges and adapted plans based on constraints.
      </p>
      <p className="open-sans-font mb-4">
        <strong>Application in Project:</strong> I initially planned to use cloud storage to host the application but had to switch to local storage due to privacy policies. This change required me to adapt quickly while ensuring the system remained functional and secure.
      </p>

      {/* Time Management and Prioritization */}
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        Time Management and Prioritization
      </h1>
      <p className="open-sans-font mb-4">
        <strong>Skill:</strong> Managed tasks efficiently to meet project deadlines.
      </p>
      <p className="open-sans-font mb-4">
        <strong>Application in Project:</strong> I balanced multiple responsibilities, including feature development, stakeholder meetings, and feedback sessions, ensuring the project was delivered on schedule. This experience honed my ability to prioritize tasks and manage time effectively.
      </p>

      {/* Communication and Stakeholder Engagement */}
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        Communication and Stakeholder Engagement
      </h1>
      <p className="open-sans-font mb-4">
        <strong>Skill:</strong> Maintained clear and professional communication with stakeholders.
      </p>
      <p className="open-sans-font mb-4">
        <strong>Application in Project:</strong> I provided regular updates to the clinical team, gathered feedback, and implemented changes based on their input. This transparent communication ensured that the project stayed aligned with the team’s expectations and requirements.
      </p>

      {/* Attention to Detail and Accountability */}
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        Attention to Detail and Accountability
      </h1>
      <p className="open-sans-font mb-4">
        <strong>Skill:</strong> Ensured accuracy in data management and system design.
      </p>
      <p className="open-sans-font mb-4">
        <strong>Application in Project:</strong> I carefully tracked child sessions, clinician roles, and input data to ensure the final report reflected accurate information. This attention to detail ensured the system provided reliable outputs for clinical decision-making.
      </p>

      {/* Certifications and Achievements Section */}
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        3. Certifications and Achievements
      </h1>
      <ul className="open-sans-font mb-4">
        <li>
          <strong>Certificate in Python Programming:</strong> Demonstrates my expertise in writing efficient code using Python.
        </li>
        <li>
          <strong>Advanced JavaScript Certification:</strong> Validates my proficiency in using JavaScript for front-end and back-end development.
        </li>
        <li>
          <strong>Achievement:</strong> Successfully developed the Digital Mealtime Puzzle, contributing to workflow efficiency and reduced paperwork for clinical staff.
        </li>
      </ul>

      {/* Conclusion Section */}
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
        4. Conclusion
      </h1>
      <p className="open-sans-font mb-4">
        The skills and achievements I developed during my WIL placement reflect both technical expertise and professional growth. I gained practical experience in full-stack development, secure data management, and collaboration with healthcare professionals. These skills have prepared me to pursue roles in healthcare technology, where I can continue building innovative solutions that balance security, usability, and functionality.
      </p>
      <p className="open-sans-font mb-4">
        This experience has also reinforced my commitment to professional development. Moving forward, I plan to enhance my skills in UI/UX design and cybersecurity to create even more effective and user-friendly healthcare applications.
      </p>
    </>
  ),
  carl: (
    <>
      <h1 className="text-2xl font-semibold mb-6">
        Reflection & Learning Outcomes Using the CARL Framework
      </h1>
      <h1 className="text-xl font-semibold mb-4">1. Context (C)</h1>
      <p className="open-sans-font mb-4">
        During my WIL placement, I was tasked with developing the Digital Mealtime Puzzle, a web-based tool designed to replace manual, paper-based assessments. The project aimed to streamline child assessments and automatically generate personalized reports for clinicians, helping them track progress efficiently across multiple sessions.
      </p>
      <p className="open-sans-font mb-4">
        Initially, I intended to use cloud storage for the backend to enable remote access and facilitate collaboration. However, I quickly learned that Queensland Health’s privacy policies prohibit storing sensitive patient data in the cloud, requiring strict adherence to local storage standards. This meant I had to rethink the application’s architecture to comply with healthcare regulations while maintaining functionality.
      </p>
      <p className="open-sans-font mb-4">
        Another significant challenge was designing the interactive Mealtime Pyramid, which includes 17 trapezoidal puzzle pieces, each representing an area of child development. Mapping these irregular shapes as interactive divs in HTML proved difficult. Ensuring that each domain was clickable and responsive required creative solutions and collaboration with clinicians to meet real-world clinical needs.
      </p>


      <h1 className="text-xl font-semibold mb-4">2. Action (A)</h1>
      <p className="open-sans-font mb-4">
        To address the data privacy challenge, I shifted from cloud storage to a local MySQL database hosted on a Queensland Health-issued laptop. This ensured that all sensitive patient data was encrypted and accessible only to authorized clinicians. I implemented secure login mechanisms, encrypting user credentials to prevent unauthorized access and align with privacy policies.
      </p>
      <p className="open-sans-font mb-4">
        For the Mealtime Pyramid design, I used Figma to create a high-fidelity visual layout of the puzzle. Since the trapezoid shapes could not be directly replicated as interactive elements in HTML, I overlaid rectangular divs on the image to approximate each domain’s shape. This allowed clinicians to click on puzzle pieces and open modals for data entry, where they could input clinical prompts, recommendations, and priority levels.
      </p>
      <p className="open-sans-font mb-4">
        Throughout the project, I collaborated with speech pathologists, dietitians, psychologists, and other clinicians to gather feedback and refine the application’s functionality. I participated in regular meetings with the team to ensure the tool met their workflow needs and was aligned with real-world clinical practices.
      </p>

      <h1 className="text-xl font-semibold mb-4">3. Result (R)</h1>
      <p className="open-sans-font mb-4">
        As a result of shifting to local storage, the project fully complied with Queensland Health’s privacy regulations. The application became a secure and functional prototype, accessible only on the assigned laptop, ensuring that data confidentiality and security were maintained. Clinicians could safely store and retrieve child assessment data without compromising privacy.
      </p>
      <p className="open-sans-font mb-4">
        The application’s ease of use was well-received by clinicians, as it reduced paperwork and allowed them to generate reports quickly. The automated report generation tool summarized child information, assessments, and clinician input, helping them focus on critical areas during follow-up sessions.
      </p>
      <p className="open-sans-font mb-4">
        Although the puzzle design required approximate div overlays rather than precise shapes, the interactive pyramid provided the necessary functionality for entering domain-specific data and setting priority levels. This feature enabled clinicians to track progress over multiple sessions and ensure that care was focused on the most relevant areas for each child.
      </p>


      <h1 className="text-xl font-semibold mb-4">4. Learning (L)</h1>
      <p className="open-sans-font mb-4">
        This placement experience taught me the importance of aligning technical solutions with privacy regulations, especially in sensitive fields like healthcare. The transition from cloud storage to local storage helped me develop problem-solving and adaptability skills, showing me how to restructure technical solutions without compromising functionality.
      </p>
      <p className="open-sans-font mb-4">
        I also gained valuable insights into user-centered design by working closely with clinicians. I learned to listen actively, understand their needs, and incorporate feedback to create an application that was both intuitive and effective for clinical use. This experience has reinforced my interest in healthcare technology, where user experience and compliance are equally important.
      </p>
      <p className="open-sans-font mb-4">
        One of my key takeaways was the need to balance creativity with technical feasibility. Although I could not replicate the trapezoidal shapes perfectly, using Figma overlays provided a workable solution. Moving forward, I plan to explore SVGs (Scalable Vector Graphics) for more precise interactive elements in future projects.
      </p>
      <p className="open-sans-font mb-4">
        Additionally, working with encrypted credentials and patient data has inspired me to deepen my knowledge of cybersecurity. Strengthening my cybersecurity expertise will allow me to further enhance the security of sensitive applications and ensure they remain compliant with industry standards.
      </p>

      <h1 className="text-xl font-semibold mt-6 mb-4">Conclusion for Reflection & Learning Outcomes</h1>
      <p className="open-sans-font mb-4">
        Using the CARL framework has allowed me to reflect on the challenges, actions, outcomes, and lessons learned during my WIL placement. This experience has not only improved my technical and problem-solving abilities but also prepared me to adapt to real-world constraints, collaborate effectively with multidisciplinary teams, and make informed decisions that align with ethical and professional standards.
      </p>
      <p className="open-sans-font mb-4">
        These experiences have solidified my passion for healthcare technology and inspired me to pursue roles where I can develop secure, user-friendly applications that address real-world clinical challenges. Moving forward, I am committed to continuous learning and professional growth, focusing on UI/UX design and cybersecurity to build even more effective solutions.
      </p>
    </>
  ),
  prof: (
    <>
      <h1 className="text-xl font-semibold mb-4">1. Data Security and Compliance with Privacy Standards</h1>
      <p className="open-sans-font mb-4">
        One of the most critical challenges I faced during my WIL placement was ensuring the secure handling of sensitive child data. Initially, I planned to use cloud storage for easier access and collaboration. However, Queensland Health’s privacy policies prohibited cloud storage for patient data, emphasizing the need for strict local storage.
      </p>
      <p className="open-sans-font mb-4">
        To comply with these regulations, I shifted the data storage to a MySQL database hosted on a Queensland Health-issued laptop. This ensured that all sensitive information was encrypted and accessible only to authorized clinicians on a secure, controlled device. The solution was fully compliant with the Australian Privacy Principles (APPs), ensuring the proper handling of personal health information.
      </p>
      <p className="open-sans-font mb-4"><strong>Impact:</strong> This approach highlighted my ability to prioritize data security over convenience, aligning technical solutions with healthcare standards. It also reinforced the importance of confidentiality and regulatory compliance in software development, especially in healthcare settings.</p>

      <h1 className="text-xl font-semibold mb-4">2. Professional Communication and Stakeholder Engagement</h1>
      <p className="open-sans-font mb-4">
        Throughout my placement, I collaborated closely with a multidisciplinary team that included psychologists, speech pathologists, dietitians, and paediatricians. I engaged in regular meetings, provided progress updates, and gathered feedback to align the project with their expectations.
      </p>
      <p className="open-sans-font mb-4">
        When technical challenges arose, such as the difficulty in designing the Mealtime Puzzle Pyramid, I communicated these issues proactively. I proposed solutions, such as using Figma overlays to simulate interactivity, which helped foster trust and collaboration within the team.
      </p>
      <p className="open-sans-font mb-4"><strong>Impact:</strong> This experience taught me the value of clear, consistent communication and transparency. Keeping stakeholders informed ensured the project stayed aligned with clinical requirements, fostering collaboration and engagement throughout the development process.</p>

      <h1 className="text-xl font-semibold mb-4">3. Handling Ethical Dilemmas: Balancing Security and Usability</h1>
      <p className="open-sans-font mb-4">
        An ethical dilemma I encountered was balancing the need for data security with usability. Clinicians initially requested that the system be accessible across multiple devices to support remote work. However, after explaining the privacy risks involved, I proposed limiting access to a single authorized laptop to meet healthcare data security policies.
      </p>
      <p className="open-sans-font mb-4"><strong>Impact:</strong> While the restricted access reduced flexibility, it ensured the application remained secure and compliant with privacy regulations. This experience underscored the importance of making ethical decisions, even when they limit user convenience, to maintain data security and integrity.</p>

      <h1 className="text-xl font-semibold mb-4">4. Accountability and Documentation</h1>
      <p className="open-sans-font mb-4">
        To ensure accountability within the clinical team, I implemented a role selection feature. This feature allowed clinicians to select team members involved in assessments, and their names and roles were included in the automated report.
      </p>
      <p className="open-sans-font mb-4"><strong>Impact:</strong> This feature promoted professional transparency and ensured that every team member’s contribution was documented and recognized. It enhanced accountability within the healthcare team, aligning with industry standards for collaborative work.</p>


      <h1 className="text-xl font-semibold mb-4">5. Adhering to Professional Standards</h1>
      <p className="open-sans-font mb-4">
        Under the supervision of Dr. Francoise Butel, Paediatrician and Medical Director of Children's Community Health, I followed professional standards throughout the project. I ensured timely delivery of milestones, maintained clear communication, and demonstrated responsibility and respect in all interactions.
      </p>
      <p className="open-sans-font mb-4"><strong>Impact:</strong> This experience prepared me to uphold high professional standards in future roles. It taught me the value of punctuality, accountability, and collaborative work—all essential qualities for success in a professional environment.</p>


      <h1 className="text-xl font-semibold mt-6 mb-4">6. Conclusion</h1>
      <p className="open-sans-font mb-4">
        My WIL placement allowed me to enhance my professional and ethical skills by prioritizing data security, adhering to healthcare privacy regulations, maintaining transparent communication, and ensuring accountability within the clinical team. This experience has strengthened my commitment to developing secure, ethical, and user-focused software solutions, particularly in sensitive industries like healthcare.
      </p>
      <p className="open-sans-font mb-4">
        Moving forward, I aim to continue building innovative software solutions that balance usability and security while adhering to ethical and professional standards.
      </p>

    </>

  ),
  conclusion: (

    <>
      <h1 className="text-xl font-semibold mb-4">1. Summary of Project Achievements</h1>
      <p className="open-sans-font mb-4">
        The Digital Mealtime Puzzle achieved its primary goal of reducing paperwork and improving clinical workflows by digitizing child assessments. It provided clinicians with a secure, user-friendly platform to manage multi-session assessments efficiently. The application’s ability to generate automated reports enabled clinical staff to track a child’s progress across multiple visits and prioritize care based on domain-specific input.
      </p>
      <p className="open-sans-font mb-4">
        This project successfully aligned with Queensland Health’s privacy standards by ensuring that all patient data was stored locally on an authorized laptop with encrypted credentials, safeguarding data security and confidentiality. Clinicians appreciated the application’s ease of use, which enhanced workflow efficiency and allowed them to focus more on delivering quality care.
      </p>

      <h1 className="text-xl font-semibold mb-4">2. Future Scope and Improvements</h1>
      <p className="open-sans-font mb-4">
        While the Digital Mealtime Puzzle serves as a functional prototype, there are several areas where it could be enhanced in future iterations:
      </p>
      <ul className="open-sans-font list-disc pl-6 mb-4">
        <li><strong>Mobile Compatibility:</strong> Develop a mobile version to support remote assessments and enable clinicians to access data conveniently during home visits or telehealth sessions.</li>
        <li><strong>Graphical Report Generation:</strong> Introduce charts, graphs, and visual elements to improve data visualization, making it easier for clinicians to identify trends and insights across sessions.</li>
        <li><strong>Integration with Queensland Health Systems:</strong> Integrate the application with existing Queensland Health systems to ensure seamless data sharing across departments and enhance interoperability.</li>
      </ul>
      <p className="open-sans-font mb-4">
        These improvements will make the application even more scalable and practical for clinical use, further reducing administrative tasks and improving patient outcomes.
      </p>

      <h1 className="text-xl font-semibold mb-4">3. Alignment with Career Goals</h1>
      <p className="open-sans-font mb-4">
        This WIL placement has inspired me to pursue a career in healthcare technology, where I can build secure, user-centered applications that address real-world challenges and enhance clinical outcomes. Collaborating with healthcare professionals has given me valuable insights into the unique needs of clinicians and patients, which I aim to address through future software solutions.
      </p>
      <p className="open-sans-font mb-4">
        I plan to further develop my skills in UI/UX design to ensure the software I create is both intuitive and effective for end-users. Additionally, this experience has highlighted the importance of cybersecurity in healthcare applications. Moving forward, I am committed to expanding my knowledge in cybersecurity practices to build systems that balance usability with security, ensuring they remain compliant with data privacy regulations.
      </p>

    </>
  ),

};

const Portfolio = () => {
  // const [getModal, setGetModal] = useState(false);
  // const [modalId, setModalId] = useState(1);

  // const handleModal = (id) => {
  //   setGetModal(true);
  //   setModalId(id);
  // };

  const [activeTab, setActiveTab] = useState("wilPlacement");

  return (
    <>
      <div className="portfolio-main">
        <Tabs>
          <TabList className="portfolio-tab-list" data-aos="fade-up">
            <Tab onClick={() => setActiveTab("wilPlacement")}>WIL Placement</Tab>
            <Tab onClick={() => setActiveTab("deliverables")}>Deliverables </Tab>
            <Tab onClick={() => setActiveTab("skills")}>Skills & Achievements </Tab>
            <Tab onClick={() => setActiveTab("carl")}>CARL Framework </Tab>
            <Tab onClick={() => setActiveTab("prof")}>Professional & Ethical Practice</Tab>
            <Tab onClick={() => setActiveTab("conclusion")}>Conclusion & Future Goals
            </Tab>
            {/* <Tab>VIDEO</Tab>
            <Tab>GRAPHIC DESIGN</Tab>
            <Tab>MOCKUP</Tab> */}
          </TabList>

          <div className="container">
            <TabPanel>
              <div className="container d-flex flex-column "
                data-aos="fade-right"
              >
                {tabContent[activeTab]}</div>
            </TabPanel>

            <TabPanel>
              <div className="container d-flex flex-column "
                data-aos="fade-right"
              >
                {tabContent[activeTab]}</div>
            </TabPanel>

            <TabPanel>
              <div className="container d-flex flex-column "
                data-aos="fade-right"
              >
                {tabContent[activeTab]}</div>
            </TabPanel>
            <TabPanel>
              <div className="container d-flex flex-column "
                data-aos="fade-right"
              >
                {tabContent[activeTab]}</div>
            </TabPanel>
            <TabPanel>
              <div className="container d-flex flex-column "
                data-aos="fade-right"
              >
                {tabContent[activeTab]}</div>
            </TabPanel>
            <TabPanel>
              <div className="container d-flex flex-column "
                data-aos="fade-right"
              >
                {tabContent[activeTab]}</div>
            </TabPanel>

            {/* 
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) =>
                  item.tag.includes("graphic design")
                ).map((item) => {
                  const { id, type, image, delayAnimation } = item;
                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                      >
                        <img src={image} alt="portfolio project demo" />
                        <h3>
                          <span className="conent-title">{type}</span>
                        </h3>
                      </div>
                     
                    </div>
                  );
                })}
              </div>
            </TabPanel> */}

            {/* <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) =>
                  item.tag.includes("mockup")
                ).map((item) => {
                  const { id, type, image, delayAnimation } = item;
                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                      >
                        <img src={image} alt="portfolio project demo" />
                        <h3>
                          <span className="conent-title">{type}</span>
                        </h3>
                      </div>
                     
                    </div>
                  );
                })}
              </div>
            </TabPanel> */}


          </div>
        </Tabs>
      </div>
      {/* {getModal && <Modal modalId={modalId} setGetModal={setGetModal} />}{" "} */}
    </>
  );
};

export default Portfolio;
