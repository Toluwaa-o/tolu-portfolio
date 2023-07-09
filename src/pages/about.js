import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { skills_left, skills_right } from "../components/Data/data";

export default function About() {
  // const data = ['HTML','CSS','Javasript','Tailwind CSS','React','Node JS','Express JS','Mongodb','Github','Firebase','Mongoose','API Development','React Router','Redux' ]

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-left" className="about part" id="about">
      <h2>About Me</h2>
      <p className="description">
        I am a 20 Year Old <span>Full stack developer</span> with a bachelor's
        degree in Computer Science. I specialize in the{" "}
        <span>MERN Stack (MongoDB, Express, React & Node JS)</span>.
      </p>

      <h3>Technologies i have worked with include:</h3>
      <section>
        <ul>
          {skills_left.map((skill) => {
            return (
              <li key={skill}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z"></path>
                  <path d="M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z"></path>
                </svg>
                {skill}
              </li>
            );
          })}
        </ul>

        <ul>
          {skills_right.map((skill) => {
            return (
              <li key={skill}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M10.296 7.71 14.621 12l-4.325 4.29 1.408 1.42L17.461 12l-5.757-5.71z"></path>
                  <path d="M6.704 6.29 5.296 7.71 9.621 12l-4.325 4.29 1.408 1.42L12.461 12z"></path>
                </svg>
                {skill}
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
