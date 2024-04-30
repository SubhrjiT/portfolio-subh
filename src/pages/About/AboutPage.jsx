import React from 'react';
import './AboutPage.css'

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import cv from '../../cv/cv.pdf';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
import imgabout from '../../img/home.jpeg';

const About = () => {

  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={imgabout} alt="" className="sobre-mi-img" />
              <p>
              <a href="https://drive.google.com/file/d/1rM3OqOTj3z--0CkO5uT4pBBPx4sK4LV-/view?usp=sharing" target="_blank" rel="noopener noreferrer" download="https://drive.google.com/file/d/1rM3OqOTj3z--0CkO5uT4pBBPx4sK4LV-/view?usp=sharing" className="btn-codigo cv buttonDownload">
                  <FormattedMessage
                      id='btn-cv'
                      defaultMessage='Download CV'
                  />
              </a>
              </p>
            </div>
            <div className="sobre-mi-info">
              <p>
                <FormattedMessage
                  id='about-info-1'
                  defaultMessage="Hi, I'm Subhrajit Behera, recent Computer Science and Engineering graduate excited to launch a career in software development and data analysis! 💻 Throughout my academic journey, I've gained hands-on experience in Python programming and delved into machine learning techniques. 📈 I've known some essential web technologies like HTML, CSS, and JavaScript has equipped me for success in the tech industry. "
                />
              </p>

              <div className="hide parrafo-active">
                <p>
                  <FormattedMessage
                    id='about-info-2'
                    defaultMessage="Currently, I'm honing my skills in Data Analysis and MERN technologies to stay ahead in the ever-evolving tech landscape.🧠 With a passion for problem-solving and a drive for continuous learning, I'm eager to leverage my analytical skills to extract insights from data for informed decision-making."
                  />
                </p>

                <p>
                  <FormattedMessage
                    id='about-info-3'
                    defaultMessage="💡 Thriving in collaborative environments, I embrace challenges and aim to contribute to innovative software solutions that make a positive impact.🌱 I'm looking for jobs that match my career goals and let me grow. Let's talk about how I can help your company reach its goals. Excited to connect! 🚀."
                  />
                </p>
              </div>

              <div className="btn-info">
                <div className="custom-btn btn-codigo" id="btn-hide" onClick={readMore}><span>Read more</span></div>
              </div>
            </div>

          </div>

          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            <div className="skill-container">
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="HTML" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" title="HTML5" />
                <h2 className="skill-name">HTML</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-1'
                    defaultMessage='More than a year of professional experience in this language, allows me to perform without problems in the industry.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="CSS" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" title="CSS3" />
                <h2 className="skill-name">CSS</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-2'
                    defaultMessage='More than a year of work experience in this language, I use it daily to develop web designs and interfaces.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="Js" className="skills-img icon-li" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" title="Java Script" />
                <h2 className="skill-name">Javascript</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-3'
                    defaultMessage='A year of experience using it in the front-end and back-end branch, allowed me to familiarize myself with the language, and include it in my work projects.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="Sass" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" title="Python" />
                <h2 className="skill-name">Python</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-4'
                    defaultMessage='I am using this preprocessor in the professional field, I include it in many of my projects since it allows me a better structured code.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
                <img alt="Bootstrap" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" title="Bootstrap" />
                <h2 className="skill-name">Bootstrap</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-5'
                    defaultMessage='Less than a year using this framework, even so, I used it in countless work projects, which allowed me to get to know it for the most part.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="jQuery" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" title="MySql" />
                <h2 className="skill-name">MySql</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-6'
                    defaultMessage='For my data analys and back-end i am using this one too much.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="react" className="skills-img" src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" title="PowerBI" />
                <h2 className="skill-name">PowerBI</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-7'
                    defaultMessage='PowerBI is a tool where i am using to Visualizate insights of Data Analysis Projects .'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="nodejs" className="skills-img" src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" title="Excel" />
                <h2 className="skill-name">Excel</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-8'
                    defaultMessage='It is the platform runtime application that I use to make projects scalable.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="express" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" title="jQuery" />
                <h2 className="skill-name">Express</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-9'
                    defaultMessage='It is a framework that I use mostly to be able to manage my APIs in the best way and my http execution model.'
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default About;