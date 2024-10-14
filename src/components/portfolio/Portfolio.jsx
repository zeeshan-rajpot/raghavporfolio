import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PortfolioData from "./portfolioData";
import Modal from "./modal/Modal";

const tabContent = {
  wilPlacement: (
    <>
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">WIL Placement</h1>

      <p className="open-sans-font mb-4">
        My Work-Integrated Learning (WIL) placement at Gold Coast Health – Child Development Service presented a unique opportunity to bridge the gap between academic knowledge and real-world application in healthcare technology. Under the expert guidance of Dr. Francoise Butel, Paediatrician and Medical Director of Children's Community Health, I took on the challenging task of developing the Digital Mealtime Puzzle.
      </p>

      <p className="open-sans-font mb-4">
        This prototype web application was designed to transform the traditional paper-based child dietary assessment process into a streamlined digital solution. The project's core objective was to enhance clinical workflow efficiency while maintaining the highest standards of data security and patient confidentiality.
      </p>

      <p className="open-sans-font mb-4">
        Throughout the placement, I was immersed in a multidisciplinary healthcare environment, collaborating closely with psychologists, speech pathologists, occupational therapists, dietitians, and paediatricians. This exposure provided invaluable insights into the day-to-day challenges faced by healthcare professionals and the potential for technology to address these issues.
      </p>

      <p className="open-sans-font mb-4">
        One of the most significant aspects of this placement was learning to navigate the complex landscape of healthcare regulations, particularly concerning data privacy. I quickly realized that developing healthcare technology requires a delicate balance between user-friendly design and strict adherence to privacy standards.
      </p>

      <p className="open-sans-font mb-4">
        The placement also offered a unique perspective on the impact of technology in healthcare settings. I observed first-hand how digital solutions could significantly reduce administrative burdens, allowing clinicians to focus more on patient care. This experience has been instrumental in shaping my understanding of the healthcare technology ecosystem and the immense potential for innovation in this field.
      </p>

    </>
  ),
  // deliverables: (
  //   <>


  //     {/* Introduction Section */}
  //     <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
  //       1. Introduction to the Deliverables Section
  //     </h1>
  //     <p className="open-sans-font mb-4">
  //       The following deliverables reflect the core components and functionality developed during my WIL placement at <strong>Gold Coast Health – Child Development Service</strong>. Each deliverable was designed to <strong>digitize child dietary assessments</strong>, streamline <strong>clinical workflows</strong>, and ensure <strong>data security</strong> and compliance with healthcare regulations. These features, created through collaboration with multidisciplinary teams, aim to provide clinicians with a reliable, <strong>user-friendly</strong> solution to manage and track child assessments effectively.
  //     </p>

  //     {/* Key Deliverables Section */}
  //     <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
  //       2. List of Key Deliverables
  //     </h1>

  //     {/* User Authentication System */}
  //     <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
  //     I. User Authentication System (Login and Signup)
  //     </h1>
  //     <p className="open-sans-font mb-4">
  //       <strong>Purpose:</strong> Provide secure access to the application, ensuring that only authorized clinicians can log in and access child data.
  //     </p>
  //     <p className="open-sans-font mb-4">
  //       <strong>Details:</strong> Developed login and signup pages with encrypted password storage using <strong>MySQL</strong> to protect user credentials. Implemented secure authentication, allowing clinicians to create new accounts and log in safely. Ensured compliance with Queensland Health’s privacy standards by preventing unauthorized access to sensitive child data.
  //     </p>
  //     <p className="open-sans-font mb-4">
  //       <strong>Impact:</strong> This system ensures <strong>data security</strong> and user accountability, allowing only authorized personnel to access the system, in accordance with privacy laws and best practices.
  //     </p>

  //     {/* Interactive Mealtime Puzzle */}
  //     <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
  //     II. Interactive Mealtime Puzzle Pyramid
  //     </h1>
  //     <p className="open-sans-font mb-4">
  //       <strong>Purpose:</strong> Enable clinicians to interact with the 17 domains of the Mealtime Pyramid, each representing an aspect of child development.
  //     </p>
  //     <p className="open-sans-font mb-4">
  //       <strong>Details:</strong> Designed the puzzle layout in <strong>Figma</strong> and overlaid rectangular divs on the trapezoidal pieces to approximate their shapes. Each domain opens a modal where clinicians can input data, including clinical prompts, recommendations, and priority levels (High, Moderate, Low). Priority levels ensure that the most critical domains are highlighted in the report, enabling focused care.
  //     </p>
  //     <p className="open-sans-font mb-4">
  //       <strong>Impact:</strong> This feature allows clinicians to capture detailed domain-specific data efficiently, reducing manual work and prioritizing areas that need immediate attention.
  //     </p>

  //     {/* Child Information and History Management */}
  //     <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
  //     III. Child Information and History Management System
  //     </h1>
  //     <p className="open-sans-font mb-4">
  //       <strong>Purpose:</strong> Collect, store, and update essential child information across multiple sessions, providing clinicians with complete access to a child’s background.
  //     </p>
  //     <p className="open-sans-font mb-4">
  //       <strong>Details:</strong> Designed user-friendly forms to collect personal details, caretaker information, and child history. Stored all collected data securely in the <strong>MySQL database</strong>, ensuring it can be accessed and preloaded for future sessions. Avoided redundant data entry by auto-filling relevant information from the child’s previous records.
  //     </p>
  //     <p className="open-sans-font mb-4">
  //       <strong>Impact:</strong> This system helps maintain <strong>data consistency</strong> and continuity of care, allowing clinicians to track the child’s progress across multiple visits and provide more informed recommendations.
  //     </p>

  //     {/* Multi-Session Tracking and Automated Report Generation */}
  //     <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
  //     IV. Multi-Session Tracking and Automated Report Generation
  //     </h1>
  //     <p className="open-sans-font mb-4">
  //       <strong>Purpose:</strong> Track assessments over multiple sessions and generate comprehensive reports that summarize child progress and clinician recommendations.
  //     </p>
  //     <p className="open-sans-font mb-4">
  //       <strong>Details:</strong> Each child’s data is stored as an individual session, enabling clinicians to view past assessments or start a new session with preloaded information. Implemented automated report generation, which compiles:
  //     </p>
  //     <ul className="mb-4">
  //       <li><strong>Child details</strong> and background information.</li>
  //       <li><strong>Assessment data</strong> from each puzzle domain, prioritized based on clinician input.</li>
  //       <li><strong>Names and roles</strong> of the clinicians involved in the assessment.</li>
  //     </ul>
  //     <p className="open-sans-font mb-4">
  //       <strong>Impact:</strong> This feature ensures clinicians have access to comprehensive records for effective decision-making. It simplifies the documentation process by automating report generation and providing insights into the child’s development over time.
  //     </p>

  //     {/* Role Selection Modal */}
  //     <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
  //       V. Role Selection Modal
  //     </h1>
  //     <p className="open-sans-font mb-4">
  //       <strong>Purpose:</strong> Track and display the clinicians involved in each child’s assessment for accountability and transparency.
  //     </p>
  //     <p className="open-sans-font mb-4">
  //       <strong>Details:</strong> Developed a role selection modal where users can select team members involved in the session, including <strong>psychologists</strong>, <strong>speech pathologists</strong>, <strong>occupational therapists</strong>, and <strong>dietitians</strong>. The selected names and roles are included in the automated report, ensuring that all involved professionals are credited and accountable for their input.
  //     </p>
  //     <p className="open-sans-font mb-4">
  //       <strong>Impact:</strong> This feature promotes collaboration and transparency by documenting the involvement of multiple clinicians. It ensures that every member’s contribution is reflected in the final report, improving the integrity of clinical assessments.
  //     </p>

  //     {/* Local Storage and Prototype Deployment */}
  //     <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
  //       VI. Local Storage and Prototype Deployment
  //     </h1>
  //     <p className="open-sans-font mb-4">
  //       <strong>Purpose:</strong> Ensure secure data handling and meet healthcare privacy standards by limiting access to authorized devices.
  //     </p>
  //     <p className="open-sans-font mb-4">
  //       <strong>Details:</strong> Initially planned to use cloud storage to enable remote access. However, Queensland Health’s privacy policies required switching to local storage on a secure Queensland Health-issued laptop. Restricted access to the application to local use only, ensuring compliance with data privacy regulations.
  //     </p>
  //     <p className="open-sans-font mb-4">
  //       <strong>Impact:</strong> This design ensures the system is fully compliant with healthcare privacy laws while remaining functional and easy to use for clinical staff. It prevents unauthorized access, maintaining the security and confidentiality of child data.
  //     </p>

  //     {/* Conclusion and Future Scope */}
  //     <h1 className="text-uppercase custom-title mb-0 ft-wt-600">
  //       3. Conclusion and Future Scope
  //     </h1>
  //     <p className="open-sans-font mb-4">
  //       The deliverables listed above demonstrate how the <strong>Digital Mealtime Puzzle</strong> meets the needs of clinicians by providing a <strong>secure</strong>, <strong>efficient</strong>, and <strong>easy-to-use</strong> platform for child dietary assessments. This prototype has proven valuable by reducing paperwork, enhancing workflow efficiency, and supporting clinical decision-making.
  //     </p>
  //     <p className="open-sans-font mb-4">
  //       <strong>Future Improvements:</strong>
  //     </p>
  //     <ul className="mb-4">
  //       <li><strong>Mobile Compatibility:</strong> Enable access during home visits or remote assessments by developing a mobile version.</li>
  //       <li><strong>Graphical Report Generation:</strong> Add visual elements such as charts and graphs to reports for better data visualization.</li>
  //       <li><strong>Integration with Queensland Health Systems:</strong> Connect the application to existing systems for seamless data sharing across departments.</li>
  //     </ul>
  //     <p className="open-sans-font mb-4">
  //       These improvements will enhance the scalability and usability of the Digital Mealtime Puzzle, making it an even more powerful tool for healthcare professionals.
  //     </p>



  //   </>
  // ),
  skills: (
    <>
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">Skills and Achievements</h1>

      <p className="open-sans-font mb-4">
        Throughout my WIL placement, I developed and applied a wide range of technical and soft skills, culminating in several key achievements:
      </p>

      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">Technical Skills:</h1>

      <p className="open-sans-font mb-4">
        1. Frontend Development: I utilized React.js to create an interactive and responsive user interface for the Digital Mealtime Puzzle. This included designing and implementing the clickable Mealtime Pyramid, modal dialogs for data entry, and dynamic forms for child information.
      </p>

      <p className="open-sans-font mb-4">
        2. Backend Development: Using Node.js, I developed a robust server-side architecture to handle data processing, user authentication, and session management. This ensured smooth communication between the frontend and the database.
      </p>

      <p className="open-sans-font mb-4">
        3. Database Management: I implemented a MySQL database to securely store and manage sensitive patient data, clinical assessments, and user credentials. This involved designing an efficient schema to support multi-session tracking and report generation.
      </p>

      <p className="open-sans-font mb-4">
        4. UI/UX Design: Employing Figma, I created high-fidelity prototypes and visual components for the application. This was particularly crucial in designing the interactive Mealtime Pyramid, where I had to overcome the challenge of representing irregular shapes as clickable elements.
      </p>

      <p className="open-sans-font mb-4">
        5. Version Control and Task Management: I utilized GitHub for code versioning and collaboration, and Jira for project management, ensuring organized development and timely delivery of features.
      </p>

      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">Soft Skills:</h1>

      <p className="open-sans-font mb-4">
        1. Collaboration: Working within a multidisciplinary team enhanced my ability to communicate complex technical concepts to non-technical stakeholders and incorporate diverse perspectives into the development process.
      </p>

      <p className="open-sans-font mb-4">
        2. Problem-solving: I encountered and overcame various challenges, such as adapting the storage solution to meet privacy requirements and designing interactive elements for irregular shapes.
      </p>

      <p className="open-sans-font mb-4">
        3. Adaptability: The dynamic healthcare environment required me to be flexible, quickly adjusting plans and solutions based on evolving requirements and constraints.
      </p>

      <p className="open-sans-font mb-4">
        4. Time Management: Balancing multiple tasks and priorities, I learned to efficiently manage my time to meet project milestones while maintaining high-quality output.
      </p>

      <p className="open-sans-font mb-4">
        5. Attention to Detail: Working with sensitive patient data and complex clinical processes demanded meticulous attention to detail in both development and documentation.
      </p>

      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">Key Achievements:</h1>

      <p className="open-sans-font mb-4">
        1. Successfully developed a functional prototype of the Digital Mealtime Puzzle, which significantly reduced paperwork and improved clinical workflow efficiency.
      </p>

      <p className="open-sans-font mb-4">
        2. Implemented a secure authentication system and local storage solution compliant with Queensland Health's strict privacy standards.
      </p>

      <p className="open-sans-font mb-4">
        3. Created an interactive Mealtime Pyramid interface that allowed clinicians to efficiently input and visualize assessment data across 17 developmental domains.
      </p>

      <p className="open-sans-font mb-4">
        4. Developed an automated report generation feature that synthesized multi-session data into comprehensive, easy-to-interpret clinical reports.
      </p>

      <p className="open-sans-font mb-4">
        5. Received positive feedback from clinical staff on the application's usability, functionality, and potential to enhance patient care.
      </p>

      <p className="open-sans-font mb-4">
        These skills and achievements not only contributed to the success of the project but also significantly enhanced my professional capabilities in healthcare technology development.
      </p>

    </>
  ),
  carl: (
    <>
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">CARL Framework</h1>

      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">Context:</h1>

      <p className="open-sans-font mb-4">
        The project was set against the backdrop of a busy child development service seeking to modernize its assessment processes. The primary challenge was to digitize the Mealtime Puzzle, a complex assessment tool with 17 developmental domains, while adhering to strict healthcare data privacy regulations.
      </p>

      <p className="open-sans-font mb-4">
        Initial plans to use cloud storage had to be reconsidered due to Queensland Health's privacy policies, which prohibit storing sensitive patient data in the cloud. This constraint required a significant shift in the application's architecture and data management approach.
      </p>

      <p className="open-sans-font mb-4">
        Another key challenge was designing an interactive representation of the Mealtime Pyramid, which consists of irregularly shaped puzzle pieces, each representing a different developmental domain. Translating this physical tool into a digital, interactive format presented both design and technical challenges.
      </p>

      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">Action:</h1>

      <p className="open-sans-font mb-4">
        To address these challenges, I took the following actions:
      </p>

      <p className="open-sans-font mb-4">
        1. Data Storage: I transitioned from the initial cloud storage plan to a local MySQL database hosted on a Queensland Health-issued laptop. This ensured compliance with privacy regulations while maintaining data accessibility for authorized clinicians.
      </p>

      <p className="open-sans-font mb-4">
        2. Security Implementation: I developed a robust authentication system with encrypted user credentials to prevent unauthorized access to sensitive patient data.
      </p>

      <p className="open-sans-font mb-4">
        3. Interactive Design: Using Figma, I created a visual design that approximated the Mealtime Puzzle's irregular shapes. I then implemented this design in React.js, using rectangular div overlays to create clickable regions that opened data entry modals for each domain.
      </p>

      <p className="open-sans-font mb-4">
        4. Collaborative Development: I engaged in regular meetings with the clinical team, gathering feedback and iteratively refining the application's functionality to ensure it met their workflow needs.
      </p>

      <p className="open-sans-font mb-4">
        5. Multi-session Tracking: I implemented a system to store and retrieve assessment data across multiple sessions, allowing clinicians to track a child's progress over time.
      </p>

      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">Result:</h1>

      <p className="open-sans-font mb-4">
        These actions resulted in several positive outcomes:
      </p>

      <p className="open-sans-font mb-4">
        1. A secure, compliant prototype application accessible only on authorized devices, ensuring the confidentiality of patient data.
      </p>

      <p className="open-sans-font mb-4">
        2. Significant reduction in paperwork and improved efficiency in generating and accessing clinical reports.
      </p>

      <p className="open-sans-font mb-4">
        3. An interactive tool that enabled clinicians to input, visualize, and track child development data across multiple domains and sessions.
      </p>

      <p className="open-sans-font mb-4">
        4. Positive feedback from clinical staff on the application's ease of use and its potential to enhance their assessment and treatment planning processes.
      </p>

      <p className="open-sans-font mb-4">
        5. Successful integration of multi-disciplinary input into the digital assessment process, improving collaboration among different healthcare professionals.
      </p>

      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">Learning:</h1>

      <p className="open-sans-font mb-4">
        This experience provided several valuable learning outcomes:
      </p>

      <p className="open-sans-font mb-4">
        1. The critical importance of understanding and adhering to healthcare privacy regulations in software development. I learned that compliance must be a primary consideration from the outset of any healthcare technology project.
      </p>

      <p className="open-sans-font mb-4">
        2. The value of user-centered design in creating effective clinical tools. Regular feedback from clinicians was instrumental in developing a solution that truly met their needs.
      </p>

      <p className="open-sans-font mb-4">
        3. The need to balance creativity with technical feasibility in software development. While we couldn't perfectly replicate the physical puzzle pieces digitally, we found an effective compromise that met both design and functional requirements.
      </p>

      <p className="open-sans-font mb-4">
        4. The importance of adaptability in software development, particularly in healthcare settings where requirements and constraints can change rapidly.
      </p>

      <p className="open-sans-font mb-4">
        5. Inspiration to deepen my knowledge in cybersecurity, particularly as it relates to healthcare applications. This experience highlighted the critical role of data security in healthcare technology and motivated me to further my expertise in this area.
      </p>

      <p className="open-sans-font mb-4">
        These learnings have not only enhanced my technical skills but also deepened my understanding of the unique challenges and opportunities in healthcare technology development.
      </p>

    </>
  ),
  prof: (
    <>
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">Professional & Ethical Practice</h1>

      <p className="open-sans-font mb-4">
        Throughout my WIL placement, I maintained a strong commitment to professional and ethical practices, recognizing the sensitive nature of healthcare data and the critical importance of integrity in clinical settings:
      </p>

      <h1 className="custom-title mb-0 ft-wt-600">Data Security and Compliance:</h1>

      <p className="open-sans-font mb-4">
        Protecting sensitive child data was my highest priority. I implemented robust security measures, including:
      </p>

      <li>Secure local storage solutions using encrypted MySQL databases</li>
      <li>Strong authentication mechanisms with hashed and salted passwords</li>
      <li className="mb-3">Role-based access control to ensure data was only accessible to authorized personnel</li>


      <p className="open-sans-font mb-4">
        These measures ensured compliance with the Australian Privacy Principles and Queensland Health's data protection policies. I regularly consulted with IT security staff to verify that our practices met or exceeded required standards.
      </p>

      <h1 className="custom-title mb-0 ft-wt-600">Professional Communication:</h1>

      <p className="open-sans-font mb-4">
        Clear, consistent, and timely communication was crucial to the project's success. I:
      </p>

      <li>Provided regular progress updates to Dr. Butel and the clinical team</li>
      <li>Actively participated in multidisciplinary team meetings, presenting technical concepts in accessible language</li>
      <li>Promptly addressed concerns and questions from stakeholders</li>
      <li className="mb-3">Documented all development processes, decisions, and rationales for future reference</li>

      <p className="open-sans-font mb-4">
        This approach fostered trust and collaboration within the team and ensured all stakeholders were aligned on the project's progress and direction.
      </p>

      <h1 className="custom-title mb-0 ft-wt-600">Ethical Decision-Making:</h1>

      <p className="open-sans-font mb-4">
        I encountered several situations that required careful ethical consideration:
      </p>

      <li>When faced with the dilemma of balancing usability with security requirements, I chose to prioritize data protection, even if it meant limiting a feature.</li>
      <li>I advocated for inclusive design practices to ensure the application was accessible to clinicians with diverse needs.</li>
      <li className="mb-3">When collecting user feedback, I ensured all data was anonymized to protect clinician privacy.</li>


      <p className="open-sans-font mb-4">
        These decisions demonstrated my commitment to ethical practices in healthcare technology development.
      </p>

      <h1 className="custom-title mb-0 ft-wt-600">Accountability and Transparency:</h1>

      <p className="open-sans-font mb-4">
        To promote accountability within the clinical team, I:
      </p>

      <li>Implemented a role selection feature in the application, ensuring each clinician's contributions were recorded</li>
      <li>Created detailed logs of all data access and modifications</li>
      <li className="mb-3">Developed a transparent process for reporting and addressing any potential security concerns or data breaches</li>


      <h1 className="custom-title mb-0 ft-wt-600">Adherence to Professional Standards:</h1>

      <p className="open-sans-font mb-4">
        Under Dr. Butel's guidance, I maintained high professional standards throughout the placement:
      </p>

      <li>Consistently met project deadlines and deliverables</li>
      <li>Maintained a respectful and collaborative attitude in all interactions</li>
      <li>Adhered to Queensland Health's code of conduct and professional guidelines</li>
      <li className="mb-3">Continuously sought opportunities for professional development, attending relevant workshops and training sessions</li>


      <h1 className="custom-title mb-0 ft-wt-600">Ethical Considerations in Software Development:</h1>

      <p className="open-sans-font mb-4">
        I integrated ethical considerations into every stage of the development process:
      </p>

      <li>Conducted a thorough privacy impact assessment before implementing new features</li>
      <li>Ensured the application's design didn't inadvertently introduce biases in clinical assessments</li>
      <li className="mb-3">Implemented features to support informed consent processes for data collection and use</li>


      <p className="open-sans-font mb-4">
        By prioritizing these professional and ethical practices, I not only contributed to the success of the Digital Mealtime Puzzle project but also demonstrated my readiness to work responsibly in the sensitive field of healthcare technology.
      </p>


    </>

  ),
  conclusion: (

    <>
      <h1 className="text-uppercase custom-title mb-0 ft-wt-600">Conclusion and Future Goals</h1>

      <p className="open-sans-font mb-4">
        My WIL placement at Gold Coast Health – Child Development Service has been a transformative experience, solidifying my passion for healthcare technology and providing invaluable insights into the intersection of software development and clinical practice. The development of the Digital Mealtime Puzzle has not only enhanced my technical skills but also deepened my understanding of the unique challenges and opportunities in healthcare innovation.
      </p>

      <h1 className="custom-title mb-0 ft-wt-600">Key Learnings:</h1>


      <li>The critical importance of balancing technological innovation with strict healthcare regulations and privacy requirements.</li>
      <li>The value of user-centered design and continuous stakeholder engagement in developing effective healthcare solutions.</li>
      <li>The need for adaptability and creative problem-solving in overcoming technical and operational challenges in healthcare settings.</li>
      <li className="mb-4">The significance of interdisciplinary collaboration in creating comprehensive and impactful healthcare technologies.</li>


      <h1 className="custom-title mb-0 ft-wt-600">Future Goals:</h1>

      <p className="open-sans-font mb-4">
        Building on this experience, I have set the following professional goals:
      </p>
      <p className="mb-3">
        <strong>Deepen Expertise in Healthcare Technology:</strong>
      </p>

      <li>Pursue additional certifications in healthcare IT and data security</li>
      <li className="mb-3">Stay updated on emerging technologies and their potential applications in healthcare</li>

      <p className="mb-3">
        <strong>Enhance UI/UX Design Skills:</strong>
      </p>

      <li>Enroll in advanced courses on designing for healthcare applications</li>
      <li className="mb-3">Explore emerging trends in accessible and inclusive design</li>


      <strong className="mb-3">Expand Cybersecurity Knowledge:</strong>

      <li>Obtain certifications in cybersecurity, focusing on healthcare data protection</li>
      <li className="mb-3">Engage in continuous learning about evolving threats and protection strategies in healthcare IT</li>



      <strong className="mb-3">Contribute to Healthcare Innovation:</strong>

      <li>Seek opportunities to work on projects that address critical challenges in healthcare delivery</li>
      <li className="mb-3">Explore possibilities for further developing and scaling the Digital Mealtime Puzzle concept</li>



      <strong className="mb-3">Foster Interdisciplinary Collaboration:</strong>

      <li>Actively seek roles that involve working with diverse healthcare professionals</li>
      <li className="mb-3">Participate in healthcare technology forums and conferences to broaden my network</li>



      <h1 className="custom-title mb-0 ft-wt-600">Project Future Improvements:</h1>

      <p className="open-sans-font mb-4">
        For the Digital Mealtime Puzzle, potential future enhancements include:
      </p>

      <li>Developing a secure mobile version to support remote assessments and telehealth initiatives</li>
      <li>Implementing advanced data visualization tools for more intuitive progress tracking</li>
      <li>Exploring integration possibilities with other Queensland Health systems for seamless data sharing</li>
      <li className="mb-4">Investigating machine learning applications to provide predictive insights from assessment data</li>


      <h1 className="custom-title mb-0 ft-wt-600">Conclusion:</h1>

      <p className="open-sans-font mb-4">
        This WIL placement has been instrumental in shaping my career aspirations and professional development. It has reinforced my commitment to creating technology solutions that tangibly improve healthcare delivery and patient outcomes. I am excited to leverage this experience as I pursue opportunities to contribute to the rapidly evolving field of healthcare technology.
      </p>

      <p className="open-sans-font mb-4">
        As I move forward in my career, I am committed to maintaining the highest standards of professional and ethical practice, continuously expanding my skills, and working towards innovative solutions that address real-world healthcare challenges. I am confident that the foundation laid during this placement will serve as a springboard for a fulfilling career at the intersection of technology and healthcare.
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
            {/* <Tab onClick={() => setActiveTab("deliverables")}>Deliverables </Tab> */}
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

            {/* <TabPanel>
              <div className="container d-flex flex-column "
                data-aos="fade-right"
              >
                {tabContent[activeTab]}</div>
            </TabPanel> */}

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
