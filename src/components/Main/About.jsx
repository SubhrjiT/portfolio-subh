import React from 'react';
import '../../pages/About/AboutPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';
import cv from '../../cv/cv.pdf';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const About = () => (
    <section className="sobre-mi" id="sobre-mi">
        <h2 className="heading">
            <FormattedMessage
                id='about'
                defaultMessage='About me'
            />
        </h2>

        <div className="row container">
            <div className="columns" data-aos="fade-right" data-aos-delay="300">
                <h3>
                    <FormattedMessage
                        id='im'
                        defaultMessage='who I am'
                    />
                </h3>
                <h4>
                    <FormattedMessage
                        id='description'
                        defaultMessage='My name is Subhrajit Behera .'
                    />
                </h4>
                <p>
                    <FormattedMessage
                        id='my-description'
                        defaultMessage="Recent Computer Science and Engineering graduate excited to launch a career in software development and data analysis!"
                    />
                </p>
                <ul>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='years'
                                    defaultMessage='Age:'
                                />
                            </span>
                            21
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                Hobbies:{" "}
                            </span>
                                Chess, Programming and DJing
                        </p>
                    </li>
                    <li>
                        <p><span>Email:</span> subhrajitbehera6370@gmail.com</p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='from'
                                    defaultMessage='From:'
                                />
                            </span>
                            Bangalore,India
                        </p>
                    </li>
                </ul>
                <div className="mas-info">
                    <p>
                <a href="https://drive.google.com/file/d/1rM3OqOTj3z--0CkO5uT4pBBPx4sK4LV-/view?usp=sharing" target="_blank" rel="noopener noreferrer" download="https://drive.google.com/file/d/1rM3OqOTj3z--0CkO5uT4pBBPx4sK4LV-/view?usp=sharing"  className="btn-codigo cv buttonDownload">
                  <FormattedMessage
                      id='btn-cv'
                      defaultMessage='Download CV'
                        />
                    </a>
                    </p>
                    <p></p>
                    <div className='mas-info-btn'>
                    <Link to="/about">
                        <ButtomGet/>
                    </Link>
                    </div>
                </div>
            </div>
            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
                <h3>skills</h3>
                <h4>Front-End</h4>
                <div className="skill">
                    <div>
                        <img alt="HTML" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                        <h5>HTML</h5>
                    </div>
                    <div>
                        <img alt="CSS" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                        <h5>CSS</h5>
                    </div>
                    <div>
                        <img alt="Js" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                        <h5>JavaScript</h5>
                    </div>
                    <div>
                        <img alt="Bootstrap" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                        <h5>Bootstrap</h5>
                    </div>
                    <div>
                        <img alt="Tailwindcss" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                         <h5>Tailwindcss</h5>
                    </div>
                    <div>
                        <img alt="React" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <h5>React</h5>
                    </div>
                    

                </div>
                
                <h4>Technologies</h4>
                <div className="skill">
                
                    
                    <div>
                        <img alt="Visual Studio Code" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png" title="Visual Studio Code" />
                        <h5>VS Code</h5>
                    </div>
                    <div>
                        <img alt="PyCharm" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original.svg" />
                        <h5>PyCharm</h5>
                    </div>
                    <div>
                        <img alt="Spyder" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spyder/spyder-original.svg" />
          
                        <h5>Spyder</h5>
                    </div>
                    <div>
                        <img alt="Nodejs" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        <h5>NodeJs</h5>
                    </div>
                    <div>
                        <img alt="mongodb" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
                        <h5>MongodDB</h5>
                    </div>

                    <div>
                        <img alt="git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" />
          
                        <h5>Git</h5>
                    </div>  
                </div>
                <h4>
                    <FormattedMessage
                        id='Data Analysis Tools'
                        defaultMessage='Data Analysis Tool'
                    />
                </h4>
                <div className="skill">

                <div>
                        <img alt="Excel" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" />
                        <h5>Excel</h5>
                    </div>
                    <div>
                        <img alt="SQL" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
          
                        <h5>SQL</h5>
                    </div>
                    <div>
                        <img alt="Python" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                        <h5>Python</h5>
                    </div>
                    <div>
                        <img alt="Pandas" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" />
                        <h5>Pandas</h5>
                    </div>
                    <div>
                        <img alt="PowerBI" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"/>
                        <h5>PowerBI</h5>
                    </div>
                     
                   
                </div>
            </div>
        </div>
    </section>
);

export default React.memo(About);