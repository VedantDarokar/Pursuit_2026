import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import "../styles/gallery.css";
import "../styles/coreteam.css";
import bgVideo from "../assets/bgpursuit.mp4";
import HeadPlaceholder from "../assets/pursuitlogo.png";
import Mentor1Image from "../assets/mentor/mentor1.png";
import Mentor2Image from "../assets/mentor/mentor2.jpg";
import coreteam1 from "../assets/coreteam/VedantDarokar.jpg";


const mentors = [
  {
    name: "Dr. S. B. Somani",
    role: "Principal SSGMCE SHEGAON",
    image: Mentor1Image,
    words: "Your inspirational words or quote here. This section will display horizontally in the card.",
  },
  {
    name: "Dr. K. V. Chandan",
    role: "Faculty Co-Ordinator \nPursuit'26",
    image: Mentor2Image,
    words: "Your inspirational words or quote here. This section will display horizontally in the card.",
  },
];
const coreHeads = [
  {
    name: "Vikas Gawade",
    role: "Student Co-Ordinator",
    image: HeadPlaceholder,
    phone: "+91 9000000001",
    instagram: "https://www.instagram.com/vikasgawade166/",
    linkedin: "https://www.linkedin.com/in/vikas-gawade-166/",
  },
  {
    name: "Om Deshmukh",
    role: "Student Co-Coordinator",
    image: HeadPlaceholder,
    phone: "+91 9000000001",
    instagram: "https://www.instagram.com/omdeshmukh007/",
    linkedin: "https://www.linkedin.com/in/om-deshmukh-007/",
  },
  {
    name: "Vedant Darokar",
    role: "Student Co-Coordinator",
    image: coreteam1,
    phone: "+91 8208772402",
    instagram: "https://www.instagram.com/vedantdarokar/",
    linkedin: "https://www.linkedin.com/in/vedant-darokar-566a1a260/",
  },
  {
    name: "Nihal Kankal",
    role: "Student Co-Coordinator",
    image: HeadPlaceholder,
    phone: "+91 9000000001",
    instagram: "https://www.instagram.com/nihalkankal/",
    linkedin: "https://www.linkedin.com/in/nihalkankal/",
  },
  {
    name: "Sanskruti Kakade",
    role: "Student Co-Coordinator",
    image: HeadPlaceholder,
    phone: "+91 9000000003",
    instagram: "https://www.instagram.com/sanskrutikakade/",
    linkedin: "https://www.linkedin.com/in/sanskruti-kakade-566a1a260/",
  },
  {
    name: "Shripad Ingle",
    role: "Management Head",
    image: HeadPlaceholder,
    phone: "+91 9000000004",
    instagram: "https://www.instagram.com/shripadingle/",
    linkedin: "https://www.linkedin.com/in/shripad-ingle-566a1a260/",
  },
  {
    name: "Dhanashri Borde",
    role: "Management Head",
    image: HeadPlaceholder,
    phone: "+91 9000000005",
    instagram: "https://www.instagram.com/dhanashriborde/",
    linkedin: "https://www.linkedin.com/in/dhanashri-borde-566a1a260/",
  },
  {
    name: "Krushnagopal Agnihotri",
    role: "Social Media Head",
    image: HeadPlaceholder,
    phone: "+91 9000000003",
    instagram: "https://www.instagram.com/sanskrutikakade/",
    linkedin: "https://www.linkedin.com/in/sanskruti-kakade-566a1a260/",
  },
  {
    name: "Ranjit Dhakare",
    role: "Cultural Head",
    image: HeadPlaceholder,
    phone: "+91 9000000003",
    instagram: "https://www.instagram.com/sanskrutikakade/",
    linkedin: "https://www.linkedin.com/in/sanskruti-kakade-566a1a260/",
  },
  {
    name: "Abhishek Kanherkar",
    role: "Publicity Head",
    image: HeadPlaceholder,
    phone: "+91 9000000000",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Om Konde",
    role: "Publicity Head",
    image: HeadPlaceholder,
    phone: "+91 9000000000",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Chakradhar Mahale",
    role: "Treasurer",
    image: HeadPlaceholder,
    phone: "+91 9000000000",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Vikas More",
    role: "Technical Team",
    image: HeadPlaceholder,
    phone: "+91 9000000000",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Shreya Kathole",
    role: "Technical Team",
    image: HeadPlaceholder,
    phone: "+91 9000000000",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Krishna Deshmukh",
    role: "Sponsorship Head",
    image: HeadPlaceholder,
    phone: "+91 9000000000",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Poonam Dandge",
    role: "Sponsorship Head",
    image: HeadPlaceholder,
    phone: "+91 9000000000",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Ajinkya Surange",
    role: "Decoration Team",
    image: HeadPlaceholder,
    phone: "+91 9000000000",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Hemani Prajapati",
    role: "Decoration Team",
    image: HeadPlaceholder,
    phone: "+91 9000000000",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Mayur Adhao",
    role: "Event and PR Head",
    image: HeadPlaceholder,
    phone: "+91 9000000000",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Pranali Pande",
    role: "Event and PR Head",
    image: HeadPlaceholder,
    phone: "+91 9000000000",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Piyush Pote",
    role: "Cultural Head",
    image: HeadPlaceholder,
    phone: "+91 9000000000",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Deep Rathod",
    role: "Registration Head",
    image: HeadPlaceholder,
    phone: "+91 9000000000",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Shrawani Vaidya",
    role: "Registration Head",
    image: HeadPlaceholder,
    phone: "+91 9000000000",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Rutuja Dalal",
    role: "Report Writing Head",
    image: HeadPlaceholder,
    phone: "+91 9000000000",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Shraddha Kaple",
    role: "Report Writing Head",
    image: HeadPlaceholder,
    phone: "+91 9000000000",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Siddhant Dakhore",
    role: "Graphics Head",
    image: HeadPlaceholder,
    phone: "+91 9000000000",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Mohita Nimje",
    role: "Graphics Head",
    image: HeadPlaceholder,
    phone: "+91 9000000000",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
];

const CoreTeam = () => {
  return (
    <section className="gallery-section coreteam-section">
      <video
        className="gallery-bg-video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="gallery-title-card">
        <span className="gallery-title-text">Mentors</span>
      </div>
      <div className="coreteam-wrapper">
        <div className="coreteam-grid">
          {mentors.map((mentor) => (
            <article key={mentor.name} className="core-card mentor-card">
              <div className="mentor-card-left">
                <div className="mentor-avatar">
                  <img src={mentor.image} alt={mentor.name} />
                </div>
                <h3 className="core-name">{mentor.name}</h3>
                <p className="mentor-role">{mentor.role}</p>
              </div>
              <div className="mentor-card-right">
                <p className="mentor-words">{mentor.words}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="gallery-title-card">
        <span className="gallery-title-text">Core Team</span>
      </div>

      <div className="coreteam-wrapper">
        <div className="coreteam-grid">
          {coreHeads.map((head) => (
            <article key={head.name} className="core-card">
              <div className="core-card-top">
                <div className="core-avatar">
                  <img src={head.image} alt={head.name} />
                </div>
                <h3 className="core-name">{head.name}</h3>
                <p className="core-role">{head.role}</p>
                {head.phone && (
                  <a href={`tel:${head.phone}`} className="core-phone">
                    {head.phone}
                  </a>
                )}
              </div>

              <div className="core-card-bottom">
                <span className="core-connect-label">Connect</span>
                <div className="core-socials">
                  <a
                    href={head.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href={head.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTeam;
