"use client";
import { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaGlobe,
  FaBook,
  FaPen,
  FaBlogger,
  FaPhone,
  FaUser,
  FaCalendar,
  FaCheck,
  FaArrowRight,
  FaCalendarAlt,
  FaGraduationCap,
  FaUniversity,
  FaStar,
  FaEllipsisH,
  FaBriefcase,
  FaMapMarkedAlt,
  FaGamepad,
  FaBuilding,
  FaCheckCircle,
  FaLink,
  FaMapMarkerAlt,
  FaProjectDiagram,
  FaTools,
  FaUserTie,
} from "react-icons/fa";
import { motion } from "motion/react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import ContactModal from "@/components/ui/ContactModal";
import { LoaderThree } from "@/components/ui/loader";

export default function Page() {
  const [modal, setModal] = useState<
    null | "skills" | "projects" | "experience" | "education" | "interests"
  >(null);
  const [isLoading, setIsLoading] = useState(true);
  const [contactOpen, setContactOpen] = useState(false);

  // Create audio safely (but don’t autoplay)
  const hoverSound =
    typeof Audio !== "undefined" ? new Audio("/hover-beep.mp3") : null;
  const modalOpenSound =
    typeof Audio !== "undefined" ? new Audio("/modal-open.mp3") : null;
  const modalCloseSound =
    typeof Audio !== "undefined" ? new Audio("/modal-close.mp3") : null;
  const clickSound =
    typeof Audio !== "undefined" ? new Audio("/click.mp3") : null;

  // Just loader, no page load sound
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  // Helper to safely play sounds only after user interaction
  const safePlay = (sound: HTMLAudioElement | null) => {
    if (sound) {
      sound.currentTime = 0; // reset before playing
      sound.play().catch(() => {
        // Ignore autoplay errors
      });
    }
  };

  // Handle modal open with sound
  const openModal = (modalType: typeof modal) => {
    setModal(modalType);
    safePlay(modalOpenSound);
  };

  // Handle modal close with sound
  const closeModal = () => {
    setModal(null);
    safePlay(modalCloseSound);
  };

  // Handle contact modal with sound
  const openContactModal = () => {
    setContactOpen(true);
    safePlay(modalOpenSound);
  };

  const closeContactModal = () => {
    setContactOpen(false);
    safePlay(modalCloseSound);
  };

  // Handle hover sound
  const playHoverSound = () => {
    safePlay(hoverSound);
  };

  // Handle click sound for BentoGrid buttons
  const playClickSound = () => {
    safePlay(clickSound);
  };

  const personalInfo = {
    name: "Asjath Ahamed Mohamed Aazath",
    role: "Penetration Tester | Network Engineer",
    email: "asjathahamedma@gmail.com",
    phone: "+94 75 821 8880",
    location: "Sri Lanka",
    linkedin: "https://www.linkedin.com/in/asjathahamedma",
    github: "https://github.com/asjathahamedma",
    Blog: "https://github.com/asjathahamedma/Cyber-Security-Writeups",
    photo: "/profile1.jpg",
    resume: "/Asjath-Ahamed-Mohamed-Aazath.pdf",
  };

  const skills = [
    "TCP/IP",
    "VLANs",
    "STP",
    "NAT/PAT",
    "DNS",
    "DHCP",
    "SNMP",
    "ICMP",
    "WPA3",
    "IPsec",
    "SSL VPN",
    "TLS",
    "NAC",
    "Burp Suite",
    "Nmap",
    "Amass",
    "Nessus",
    "Wireshark",
    "Metasploit",
    "Nikto",
    "OWASP ZAP",
    "Hydra",
    "SQLmap",
    "John the Ripper",
    "Aircrack-ng",
    "Recon-ng",
    "Enum4linux",
    "Windows Server 2019/2022",
    "Linux/Kali-Linux",
    "Active Directory",
    "VMware",
    "Microsoft Hyper-V",
    "Microsoft Azure",
    "PostgreSQL",
    "MySQL",
    "Local Database Administration",
    "Git/GitHub",
    "Python",
    "JavaScript",
    "C++",
    "Next.js",
    "React",
    "Tailwind CSS",
    "PowerShell",
    "Bash/Shell Scripting",
    "Teamwork",
    "Communication",
    "Adaptability",
    "Problem-Solving",
  ];

const projects = [
   {
     name: "TopJobs Auto Mailer",
     description:
       "A Python bot that automates the job search by scraping listings, filtering by role/level, and sending personalized email applications with a CV.",
     link: "https://github.com/asjathahamedma/Tobjobs-Auto-Mailer",
   },
   {
     name: "Viper Scanner",
     description:
       "Python-based tool using Nmap for automated host discovery, port scanning, and HTML vulnerability reporting.",
     link: "https://github.com/asjathahamedma/viperscanner.git",
   },
   {
     name: "AD Automation with PowerShell & UiPath",
     description:
       "Automated Active Directory tasks with PowerShell and UiPath, improving admin efficiency and security.",
     link: "", // No public link provided
   },
   {
     name: "GlitchViper Portfolio Website",
     description: "Personal portfolio built with Next.js and Tailwind CSS.",
     link: "https://glitchviper.vercel.app/", // Corrected link to the live site
   },
 ];

const experience = [
  {
    title: "Application Support Engineer",
    company: "IPOSG",
    period: "Nov 2025 – Present",
    location: "Colombo, Western Province, Sri Lanka (On-site)",
    details: [
      "Provided technical support for enterprise-level POS and back-office software, ensuring optimal performance and reliability for client systems.",
      "Diagnosed and resolved application and network-related issues reported by clients, improving system uptime and user satisfaction.",
      "Collaborated with the development team to troubleshoot backend API integrations and database connectivity issues.",
      "Assisted clients in configuring and maintaining POS software, including setup, updates, and issue resolution.",
      "Supported network troubleshooting across client environments to ensure stable application performance.",
    ],
  },
  {
    title: "IT Administrator",
    company: "ATM Pharmacy",
    period: "Jan 2024 – Jul 2025",
    location: "Akkaraipattu, Sri Lanka",
    details: [
      "Administered local database for stock and income tracking, managing 500+ inventory records and financial transactions to ensure data accuracy and operational efficiency.",
      "Troubleshot network connectivity issues for Wi-Fi, LAN, and IP-based CCTV systems, reducing downtime by approximately 20%.",
      "Configured and maintained IP-based CCTV systems, ensuring secure and reliable surveillance operations through proper network settings.",
      "Performed regular database maintenance, including backups and updates, to prevent data loss and ensure system reliability.",
      "Implemented basic security measures, such as user access controls and password management, to protect sensitive inventory and financial data.",
    ],
  },
];


  const education = [
    {
      degree: "BSc (Hons) in Data Science",
      university: "ESOFT Metro Campus (London Metropolitan University)",
      period: "Sep 2025 – Present",
      location: "Colombo, Sri Lanka",
    },
    {
      degree: "Higher Diploma in Network Technology & Cyber Security",
      university: "ICBT Campus (Cardiff Metropolitan University)",
      period: "Sep 2022 – Dec 2024",
      location: "Batticaloa, Sri Lanka",
    },
  ];

  const interests = [
    "Playing CTF on Hack The Box — Engaging in challenges to enhance cybersecurity skills",
    "Bug Bounty Hunting at HackerOne — Exploring vulnerability discovery with a focus on real-world applications",
    "Exploring AI/ML in Cybersecurity — Investigating the intersection of artificial intelligence and threat detection",
    "Participating in Open Source Security Projects — Contributing to tools and libraries that improve software security",
    "Attending Security Conferences and Webinars — Staying updated on the latest trends, tools, and methodologies in cybersecurity",
    "Reverse Engineering Malware Samples — Analyzing malware behavior to understand attack vectors and mitigation strategies",
    "Developing Security Scripts and Automation Tools — Writing Python or Bash scripts to automate vulnerability scanning and monitoring",
    "Practicing Social Engineering Simulations — Learning techniques to identify and defend against human-targeted attacks",
    "Learning Cloud Security (AWS/Azure) — Understanding security best practices for cloud infrastructure",
  ];

  return (
    <div className="min-h-screen relative text-gray-100 mx-auto">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-10 opacity-90 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.png')" }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1b1a1c] via-[#1b1a31] to-[#080609]" />

      {/* Page content */}
      <div className="relative z-10">
        {/* Navbar with entry animation */}
        <motion.header
          className="fixed inset-x-0 top-0 bg-transparent z-50"
          initial={{ y: -100, opacity: 0 }}
          animate={isLoading ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: isLoading ? 0 : 0.2 }}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <nav className="flex items-center justify-between h-16 sm:h-20">
              {/* Left Side - Social Links */}
              <div className="flex items-center gap-4 sm:gap-6">
                {[
                  {
                    icon: <FaLinkedin />,
                    link: personalInfo.linkedin,
                    name: "LinkedIn",
                  },
                  {
                    icon: <FaGithub />,
                    link: personalInfo.github,
                    name: "GitHub",
                  },
                  {
                    icon: <FaBlogger />,
                    link: personalInfo.Blog,
                    name: "Blog",
                  },
                  {
                    icon: <FaEnvelope />,
                    link: "#",
                    name: "Email",
                    onClick: openContactModal,
                  },
                ].map((item, i) =>
                  item.onClick ? (
                    <button
                      key={i}
                      onClick={item.onClick}
                      onMouseEnter={playHoverSound}
                      className="relative group text-white text-lg sm:text-xl p-2 rounded hover:bg-white/10 transition-all duration-300"
                      aria-label={item.name}
                    >
                      {item.icon}
                      <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max opacity-0 group-hover:opacity-100 bg-white text-black text-xs sm:text-sm px-2 py-1 rounded shadow-lg transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
                        {item.name}
                      </span>
                    </button>
                  ) : (
                    <a
                      key={i}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={playHoverSound}
                      className="relative group text-white text-lg sm:text-xl p-2 rounded hover:bg-white/10 transition-all duration-300"
                      aria-label={item.name}
                    >
                      {item.icon}
                      <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max opacity-0 group-hover:opacity-100 bg-white text-black text-xs sm:text-sm px-2 py-1 rounded shadow-lg transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
                        {item.name}
                      </span>
                    </a>
                  )
                )}
              </div>

              {/* Right Side - Resume Button */}
              <div className="hover:scale-105 transition-all duration-300">
                <a
                  href={personalInfo.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHoverSound}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-blue-600 text-white text-sm sm:text-base font-medium hover:bg-white hover:text-black transition-all duration-300"
                  aria-label="Download Resume"
                >
                  Resume
                </a>
              </div>
            </nav>
          </div>
        </motion.header>

        {/* Dashboard with entry animation */}
        <motion.main
          className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-24 pb-6 w-full"
          initial={{ opacity: 0 }}
          animate={isLoading ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 1.5, delay: isLoading ? 0 : 0.4 }}
        >
          <BentoGrid className="gap-4 sm:gap-6">
            <BentoGridItem
              className="col-span-1 sm:col-span-2"
              header={
                <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left h-full gap-4 sm:gap-6">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={personalInfo.photo}
                      alt={personalInfo.name}
                      className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-center gap-2">
                    {/* Name with Icon */}
                    <h2 className="text-lg sm:text-xl md:text-xl font-bold flex items-center gap-2">
                      <FaUser /> {personalInfo.name}
                    </h2>

                    {/* Role */}
                    <p className="text-white/80 text-sm sm:text-base md:text-lg">
                      {personalInfo.role}
                    </p>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-2 sm:gap-3 mt-1 text-white/70 text-xs sm:text-sm">
                      <span className="flex items-center gap-1">
                        <FaEnvelope /> {personalInfo.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaPhone /> {personalInfo.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaGlobe /> {personalInfo.location}
                      </span>
                    </div>

                    {/* Social Profiles */}
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-2 justify-center md:justify-start">
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={playHoverSound}
                        className="text-white text-xl sm:text-2xl p-1 rounded-full hover:text-blue-400 transition-colors duration-300"
                        title="LinkedIn"
                        aria-label="LinkedIn Profile"
                      >
                        <FaLinkedin />
                      </a>
                      <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={playHoverSound}
                        className="text-white text-xl sm:text-2xl p-1 rounded-full hover:text-amber-400 transition-colors duration-300"
                        title="GitHub"
                        aria-label="GitHub Profile"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={personalInfo.Blog}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={playHoverSound}
                        className="text-white text-xl sm:text-2xl p-1 rounded-full hover:text-green-400 transition-colors duration-300"
                        title="Blog"
                        aria-label="Blog"
                      >
                        <FaBlogger />
                      </a>
                    </div>
                  </div>
                </div>
              }
            />

            {/* Experience */}
            <BentoGridItem
              className="col-span-1 sm:col-span-2"
              header={
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2">
                      <FaBriefcase className="text-blue-400" /> Experience
                    </h2>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-white font-semibold text-sm sm:text-base">
                        <FaPen className="text-white/70" />{" "}
                        {experience[0].title}
                      </div>
                      <div className="flex items-center gap-2 text-white/80 text-sm sm:text-base">
                        <FaMapMarkedAlt className="text-white/60" />{" "}
                        {experience[0].company}
                      </div>
                      <div className="flex items-center gap-2 text-white/60 text-xs sm:text-sm">
                        <FaCalendar className="text-white/50" />{" "}
                        {experience[0].period} - {experience[0].location}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      playClickSound();
                      openModal("experience");
                    }}
                    className="mt-2 px-3 py-1 bg-white rounded text-black text-sm sm:text-base hover:bg-blue-700 self-end transition-colors duration-300 cursor-pointer"
                    aria-label="View more experience"
                  >
                    <FaEllipsisH />
                  </button>
                </div>
              }
            />

            {/* Skills */}
            <BentoGridItem
              className="col-span-1"
              header={
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-base sm:text-lg font-bold mb-2 flex items-center gap-2">
                      <FaTools className="text-green-400" /> Skills
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {skills.slice(0, 8).map((s, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded bg-white/20 text-white text-xs sm:text-sm flex items-center gap-1"
                        >
                          <FaCheck className="text-white/70 text-[0.6rem]" />{" "}
                          {s}
                        </span>
                      ))}
                      {skills.length > 8 && (
                        <span className="px-2 py-1 rounded bg-white/30 text-white text-xs sm:text-sm flex items-center gap-1">
                          +{skills.length - 8} more
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      playClickSound();
                      openModal("skills");
                    }}
                    className="mt-2 px-3 py-1 bg-white rounded text-black text-sm sm:text-base hover:bg-blue-700 self-end transition-colors duration-300 cursor-pointer"
                    aria-label="View more skills"
                  >
                    <FaEllipsisH />
                  </button>
                </div>
              }
            />

            {/* Projects */}
            <BentoGridItem
              className="col-span-1"
              header={
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-base sm:text-lg font-bold mb-2 flex items-center gap-2">
                      <FaProjectDiagram className="text-yellow-400" /> Projects
                    </h2>
                    {projects.slice(0, 2).map((p, i) => (
                      <div key={i} className="mb-2">
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onMouseEnter={playHoverSound}
                          className="text-white/90 font-semibold flex items-baseline gap-2 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                        >
                          <FaArrowRight className="text-sm" /> {p.name}
                        </a>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      playClickSound();
                      openModal("projects");
                    }}
                    className="mt-2 px-3 py-1 bg-white rounded text-black text-sm sm:text-base hover:bg-blue-700 self-end transition-colors duration-300 cursor-pointer"
                    aria-label="View more projects"
                  >
                    <FaEllipsisH />
                  </button>
                </div>
              }
            />

            {/* Education */}
            <BentoGridItem
              className="col-span-1"
              header={
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-base sm:text-lg font-bold mb-2 flex items-center gap-2">
                      <FaGraduationCap className="text-pink-500" /> Education
                    </h2>
                    <div className="text-white font-semibold flex items-center gap-2 text-sm sm:text-base">
                      <FaBook className="text-sm" /> {education[0].degree}
                    </div>
                    <div className="text-white/80 flex items-baseline gap-2 text-sm sm:text-base">
                      <FaUniversity className="text-sm" />{" "}
                      {education[0].university}
                    </div>
                    <div className="text-white/60 text-xs sm:text-sm flex items-center gap-2">
                      <FaCalendarAlt className="text-xs" />{" "}
                      {education[0].period}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      playClickSound();
                      openModal("education");
                    }}
                    className="mt-2 px-3 py-1 bg-white rounded text-black text-sm sm:text-base hover:bg-blue-700 self-end transition-colors duration-300 cursor-pointer"
                    aria-label="View more education"
                  >
                    <FaEllipsisH />
                  </button>
                </div>
              }
            />

            {/* Interests */}
            <BentoGridItem
              className="col-span-1"
              header={
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h2 className="text-base sm:text-lg font-bold mb-2 flex items-center gap-2">
                      <FaGamepad className="text-purple-400" /> Interests
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {interests.slice(0, 2).map((i, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 rounded bg-white/20 text-white text-xs sm:text-sm flex items-baseline gap-1"
                        >
                          <FaStar className="text-yellow-400 text-xs" /> {i}
                        </span>
                      ))}
                      {interests.length > 2 && (
                        <span className="px-2 py-1 rounded bg-white/30 text-white text-xs sm:text-sm flex items-center gap-1">
                          <FaEllipsisH className="text-white/80 text-xs" /> +
                          {interests.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      playClickSound();
                      openModal("interests");
                    }}
                    className="mt-2 px-3 py-1 bg-white rounded text-black text-sm sm:text-base hover:bg-blue-700 self-end transition-colors duration-300 cursor-pointer"
                    aria-label="View more interests"
                  >
                    <FaEllipsisH />
                  </button>
                </div>
              }
            />
          </BentoGrid>
        </motion.main>

        {modal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={closeModal}
          >
            <div
              className="bg-[#23272f] p-4 sm:p-6 rounded-2xl w-[95%] sm:w-[90%] md:max-w-3xl max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="text-white/70 hover:text-white float-right text-lg sm:text-xl font-bold"
                onClick={closeModal}
                aria-label="Close modal"
              >
                ×
              </button>

              {/* Tabs */}
              <div className="flex gap-2 mb-4 flex-wrap">
                {[
                  { name: "experience", icon: <FaBriefcase /> },
                  { name: "skills", icon: <FaTools /> },
                  { name: "projects", icon: <FaProjectDiagram /> },
                  { name: "education", icon: <FaGraduationCap /> },
                  { name: "interests", icon: <FaGamepad /> },
                ].map((section) => (
                  <button
                    key={section.name}
                    onClick={() => openModal(section.name as any)}
                    className={`flex items-center gap-1 px-2 py-1 sm:px-3 sm:py-1 rounded text-xs sm:text-sm font-semibold 
              ${
                modal === section.name
                  ? "bg-blue-600 text-white"
                  : "bg-white/20 text-white"
              }`}
                    aria-label={`View ${section.name}`}
                  >
                    {section.icon}
                    <span>
                      {section.name.charAt(0).toUpperCase() +
                        section.name.slice(1)}
                    </span>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {modal === "skills" && (
                <div>
                  <h2 className="text-lg sm:text-2xl font-bold mb-4 flex items-center gap-2">
                    <FaTools className="text-green-400" /> Skills
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded bg-white/20 text-white text-xs sm:text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {modal === "projects" && (
                <div>
                  <h2 className="text-lg sm:text-2xl font-bold mb-4 flex items-center gap-2">
                    <FaProjectDiagram className="text-yellow-400" /> Projects
                  </h2>
                  <div className="flex flex-col gap-3">
                    {projects.map((p, i) => (
                      <a
                        key={i}
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={playHoverSound}
                        className="p-4 rounded-lg bg-white/10 hover:bg-blue-600 hover:text-white transition-all duration-200 flex flex-col gap-1"
                      >
                        <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
                          <FaLink /> {p.name}
                        </h3>
                        <p className="text-white/80 text-xs sm:text-sm">
                          {p.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {modal === "experience" && (
                <div>
                  <h2 className="text-lg sm:text-2xl font-bold mb-4 flex items-center gap-2">
                    <FaBriefcase className="text-blue-400" /> Experience
                  </h2>
                  {experience.map((exp, i) => (
                    <div key={i} className="mb-4">
                      <h3 className="text-base sm:text-xl font-semibold flex items-center gap-2">
                        <FaUserTie /> {exp.title}
                      </h3>
                      <p className="text-white/80 flex items-center gap-2 text-sm sm:text-base">
                        <FaBuilding /> {exp.company}
                      </p>
                      <p className="text-white/60 text-xs sm:text-sm flex items-center gap-2">
                        <FaCalendarAlt /> {exp.period} - <FaMapMarkerAlt />{" "}
                        {exp.location}
                      </p>
                      <ul className="list-disc list-inside mt-2 text-white/70 text-xs sm:text-sm">
                        {exp.details.map((d, j) => (
                          <li key={j} className="flex items-baseline gap-2">
                            <FaCheckCircle className="text-blue-400" /> {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {modal === "education" && (
                <div>
                  <h2 className="text-lg sm:text-2xl font-bold mb-4 flex items-center gap-2">
                    <FaGraduationCap className="text-pink-400" /> Education
                  </h2>
                  {education.map((edu, i) => (
                    <div key={i} className="mb-4">
                      <h3 className="text-base sm:text-xl font-semibold flex items-center gap-2">
                        <FaBook /> {edu.degree}
                      </h3>
                      <p className="text-white/80 flex items-center gap-1 text-sm sm:text-base">
                        <FaUniversity /> {edu.university}
                      </p>
                      <p className="text-white/60 text-xs sm:text-sm flex items-center gap-1">
                        <FaCalendarAlt /> {edu.period} - <FaMapMarkerAlt />{" "}
                        {edu.location}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {modal === "interests" && (
                <div>
                  <h2 className="text-lg sm:text-2xl font-bold mb-4 flex items-center gap-2">
                    <FaGamepad className="text-purple-400" /> Interests
                  </h2>
                  <ul className="list-disc list-inside text-white/70 text-xs sm:text-sm">
                    {interests.map((i, idx) => (
                      <li key={idx} className="flex items-baseline gap-2">
                        <FaStar className="text-blue-400" /> {i}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        {contactOpen && (
          <ContactModal open={contactOpen} onClose={closeContactModal} />
        )}
      </div>

      {/* LoaderThree SVG Loader */}
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LoaderThree />
        </motion.div>
      )}
    </div>
  );
}
