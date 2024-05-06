import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDelails = [
  {
    lable: "Name",
    value: "Nikhil Kushwah",
  },
  {
    lable: "Age",
    value: "23",
  },
  {
    lable: "Address",
    value: "India",
  },
  {
    lable: "Email",
    value: <a style={{textDecoration:'none',color:'white'}} href="mailto:nikhilkush037@gmail.com">nikhilkush037@gmail.com</a>
  },
  {
    lable: "Contact No.",
    value: <a style={{textDecoration:'none',color:'white'}} href="tel:+918305310168">+91 8305310168</a>,
  },
];

const About = () => {
  const jobSummary =
    "As a fresh Frontend Developer specializing in ReactJS with a background in the Internet of Things (IoT) branch, I bring a unique blend of skills and perspectives to the table. With a passion for crafting engaging user experiences and leveraging cutting-edge technologies, I am eager to contribute my enthusiasm, creativity, and dedication to your team. My adaptability and eagerness to learn make me an ideal candidate ready to tackle challenges and grow alongside your organization.";
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={0.5}
            start={{
              transform: "translateX(-650px)",
            }}
            end={{
              transform: "translateY(0px)",
            }}
          >
            <h3>Front End Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={0.5}
            start={{
              transform: "translateY(600px)",
            }}
            end={{
              transform: "translateY(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDelails.map((item, index) => (
                <li key={index}>
                  <span className="title">{item.lable}</span>
                  <span className="value">: {item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={0.5}
            start={{
              transform: "translateX(650px)",
            }}
            end={{
              transform: "translateX(50px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <DiApple size={50} color="#F2EAD3" />
              </div>
              <div>
                <DiAndroid size={50} color="#F2EAD3" />
              </div>
              <div>
                <FaDev size={50} color="#F2EAD3" />
              </div>
              <div>
                <FaDatabase size={50} color="#F2EAD3" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
