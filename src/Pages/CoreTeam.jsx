import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import "../styles/gallery.css";
import "../styles/coreteam.css";
import bgVideo from "../assets/bgpursuit.mp4";
import HeadPlaceholder from "../assets/pursuitlogo.png";
import Mentor1Image from "../assets/mentor/mentor1.png";
import Mentor2Image from "../assets/mentor/mentor2.jpg";
import VedantDarokarImage from "../assets/coreteam/VedantDarokar.jpg";
import OmDeshmukhImage from "../assets/coreteam/Om Deshmukh.jpg";
import SanskrutiKakadeImage from "../assets/coreteam/Sanskruti Kakade.jpg";
import DhanashriBordeImage from "../assets/coreteam/Dhanshri Borde.jpg";
import RanjitDhakareImage from "../assets/coreteam/RANJIT DHAKARE.png";
import OmKondeImage from "../assets/coreteam/Om Konde.jpg";
import KrishnaDeshmukhImage from "../assets/coreteam/Krishna Deshmukh.jpg";
import PoonamDandgeImage from "../assets/coreteam/Poonam Dandage.jpg";
import HemaniPrajapatiImage from "../assets/coreteam/Hemani Prajapati.jpg";
import MayurAdhaoImage from "../assets/coreteam/Mayur Adhao.jpg";
import PranaliPandeImage from "../assets/coreteam/Pranali Pande.jpg";
import DeepRathodImage from "../assets/coreteam/Deep Rathod.jpg";
import ShrawaniVaidyaImage from "../assets/coreteam/Shrawani Vaidya.jpg";
import MohitaNimjeImage from "../assets/coreteam/Mohita Nimje.JPG";
import AbhishekKanherkarImage from "../assets/coreteam/abhishek.png";
import NihalKankalImage from "../assets/coreteam/nihalkankal.jpg";
import ShripadIngleImage from "../assets/coreteam/shripadingle.png";


const mentors = [
  {
    name: "Dr. S. B. Somani",
    role: "Principal SSGMCE SHEGAON",
    image: Mentor1Image,
  },
  {
    name: "Dr. K. V. Chandan",
    role: "Faculty Co-Ordinator \nPursuit'26",
    image: Mentor2Image,
  },
];
const coreHeads = [
  {
    name: "Vikas Gawade",
    role: "Student Co-Ordinator",
    image: HeadPlaceholder,
    instagram: "https://www.instagram.com/vikasgawade166/",
    linkedin: "https://www.linkedin.com/in/vikas-gawade-166/",
  },
  {
    name: "Om Deshmukh",
    role: "Student Co-Coordinator",
    image: OmDeshmukhImage,
    instagram: "https://www.instagram.com/om_deshmukh18?igsh=MTJja25mMjR3OTI5eQ==",
    linkedin: "https://www.linkedin.com/in/om-deshmukh-007/",
  },
  {
    name: "Vedant Darokar",
    role: "Student Co-Coordinator",
    image: VedantDarokarImage,
    instagram: "https://www.instagram.com/vedant_darokar_15",
    linkedin: "https://www.linkedin.com/in/vedant-darokar-566a1a260/",
  },
  {
    name: "Nihal Kankal",
    role: "Student Co-Coordinator",
    image: NihalKankalImage,
    instagram: "https://www.instagram.com/nihalkankal/",
    linkedin: "https://www.linkedin.com/in/nihalkankal/",
  },
  {
    name: "Sanskruti Kakade",
    role: "Student Co-Coordinator",
    image: SanskrutiKakadeImage,
    instagram: "https://www.instagram.com/_.sansskruti?igsh=MjFrZ2IyOGQ4cjg0",
    linkedin: "https://www.linkedin.com/in/sanskruti-kakade-566a1a260/",
  },
  {
    name: "Shripad Ingle",
    role: "Management Head",
    image: ShripadIngleImage,
    instagram: "https://www.instagram.com/shripadingle/",
    linkedin: "https://www.linkedin.com/in/shripad-ingle-566a1a260/",
  },
  {
    name: "Dhanashri Borde",
    role: "Management Head",
    image: DhanashriBordeImage,
    instagram: "https://www.instagram.com/dhanashri_borde75?igsh=ZnU0NWNvZTh4NmJw",
    linkedin: "https://www.linkedin.com/in/dhanashri-borde-566a1a260/",
  },
  {
    name: "Krushnagopal Agnihotri",
    role: "Social Media Head",
    image: HeadPlaceholder,
    instagram: "https://www.instagram.com/wokenupkrish_/",
    linkedin: "https://www.linkedin",
  },
  {
    name: "Ranjit Dhakare",
    role: "Cultural Head",
    image: RanjitDhakareImage,
    instagram: "https://www.instagram.com/ranjit.patil_/",
    linkedin: "https://www.linkedin.com/in/username",
  },
  {
    name: "Abhishek Kanherkar",
    role: "Publicity Head",
    image: AbhishekKanherkarImage,
    instagram: "https://www.instagram.com/abhishekkanherkar03/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Om Konde",
    role: "Publicity Head",
    image: OmKondeImage,
    instagram: "https://www.instagram.com/om_3105_?igsh=ZHBxYmZoaWtmZm8x",
    linkedin: "https://www.linkedin.com/in/om-konde-bb48b2290?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Chakradhar Mahale",
    role: "Treasurer",
    image: HeadPlaceholder,
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Vikas More",
    role: "Technical Team",
    image: HeadPlaceholder,
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Shreya Kathole",
    role: "Technical Team",
    image: HeadPlaceholder,
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Krishna Deshmukh",
    role: "Sponsorship Head",
    image: KrishnaDeshmukhImage,
    instagram: "https://www.instagram.com/deshmukh_krishnaa?igsh=amhtZzFzOGQ4eWN4",
    linkedin: "https://www.linkedin.com/in/krishna-deshmukh-103bb2294",
  },
  {
    name: "Poonam Dandge",
    role: "Sponsorship Head",
    image: PoonamDandgeImage,
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/in/poonam-dandage-381b96294?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Ajinkya Surange",
    role: "Decoration Team",
    image: HeadPlaceholder,
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Hemani Prajapati",
    role: "Decoration Team",
    image: HemaniPrajapatiImage,
    instagram: "https://www.instagram.com/hemani1503?igsh=NG4zandvYmJ1bDdo",
    linkedin: "https://www.linkedin.com/in/hemani-prajapati-2007222b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Mayur Adhao",
    role: "Event and PR Head",
    image: MayurAdhaoImage,
    instagram: "https://www.instagram.com/mayurxop_?igsh=ZGxxNGZxbGQzYjJs",
    linkedin: "https://www.linkedin.com/in/mayur-adhao-4b474b272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Pranali Pande",
    role: "Event and PR Head",
    image: PranaliPandeImage,
    instagram: "https://www.instagram.com/hyiapiness_2929",
    linkedin: "https://www.linkedin.com/in/pranali-pande-ba7741295",
  },
  {
    name: "Piyush Pote",
    role: "Cultural Head",
    image: HeadPlaceholder,
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Deep Rathod",
    role: "Registration Head",
    image: DeepRathodImage,
    instagram: "https://www.instagram.com/deeprathod_17?igsh=MWUwbjlobTM2dnRuaw==",
    linkedin: "https://www.linkedin.com/in/deep-17r",
  },
  {
    name: "Shrawani Vaidya",
    role: "Registration Head",
    image: ShrawaniVaidyaImage,
    instagram: "https://www.instagram.com/shrawani2005?igsh=MWI1NW04bmc1NmJ5cQ==",
    linkedin: "www.linkedin.com/in/shrawani-vaidya-5a08b3292",
  },
  {
    name: "Rutuja Dalal",
    role: "Report Writing Head",
    image: HeadPlaceholder,
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Shraddha Kaple",
    role: "Report Writing Head",
    image: HeadPlaceholder,
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Siddhant Dakhore",
    role: "Graphics Head",
    image: HeadPlaceholder,
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Mohita Nimje",
    role: "Graphics Head",
    image: MohitaNimjeImage,
    instagram: "https://www.instagram.com/mohita_nimje",
    linkedin: "https://www.linkedin.com/in/mohita-nimje",
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
