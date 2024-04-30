import React, { useState } from 'react'
import './ProjectPage.css';

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from 'react-router-dom';

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
const proyectsImg = require.context('../../img', true);

const Project = () => {
  const [estadoModal17, cambiarEstadoModal17] = useState(false);
  const [estadoModal14, cambiarEstadoModal14] = useState(false);
  const [estadoModal15, cambiarEstadoModal15] = useState(false);
  const [estadoModal16, cambiarEstadoModal16] = useState(false);
  const [estadoModal13, cambiarEstadoModal13] = useState(false);
  const [estadoModal12, cambiarEstadoModal12] = useState(false);
  const [estadoModal11, cambiarEstadoModal11] = useState(false);
  const [estadoModal10, cambiarEstadoModal10] = useState(false);
  const [estadoModal9, cambiarEstadoModal9] = useState(false);
  const [estadoModal8, cambiarEstadoModal8] = useState(false);
  const [estadoModal7, cambiarEstadoModal7] = useState(false);
  const [estadoModal6, cambiarEstadoModal6] = useState(false);
  const [estadoModal5, cambiarEstadoModal5] = useState(false);
  const [estadoModal3, cambiarEstadoModal3] = useState(false);

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage
              id='projects'
              defaultMessage='Projects'
            />
          </h1>
          
        </section>

        <section className="projects__grid paginas-web">
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal17(!estadoModal17)}>
              <img src={proyectsImg(`./Virtual Shopping.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal14(!estadoModal14)}>
              <img src={proyectsImg(`./House Predition.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal15(!estadoModal15)}>
              <img src={proyectsImg(`./sentiment_analysis.jpg`)} alt="" className="projects__img" />
            </a>
          </div>
          <div className="projects__item">
            <a onClick={() => cambiarEstadoModal16(!estadoModal16)}>
              <img src={proyectsImg(`./portfolio.png`)} className="projects__img" />
            </a>
          </div>
          
        </section>
      </main>

      <Modal
        estado={estadoModal17}
        cambiarEstado={cambiarEstadoModal17}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./Virtual Shopping.jpg`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-17-p1'
                  defaultMessage='Welcome to the Virtual Shopping Assistant project! This project aims to develop an application that assists users in their virtual shopping experience by utilizing image recognition technology.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-17-p2'
                  defaultMessage='Used Concepts: Machine Learning, CNN, Transfer Learning, TensorFlow, ResNet50'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://github.com/SubhrjiT/virtual-shopping-assistant-using-image-recognition" target="_blank">Source Code</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"  alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg" alt="" />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal14}
        cambiarEstado={cambiarEstadoModal14}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./House Predition.jpg`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-14-p1'
                  defaultMessage='Developed a machine learning-based model to determine the selling price of a house and assist customers in
                  arranging the optimal time for purchase.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-14-p2'
                  defaultMessage='Concepts Used: Python, NumPy, Matplotlib'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://github.com/SubhrjiT/House-Prediction" target="_blank">Source Code</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"  alt="" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"  alt="" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"  alt="" />
          
          
                 </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal15}
        cambiarEstado={cambiarEstadoModal15}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./sentiment_analysis.jpg`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-15-p1'
                  defaultMessage='Conducted sentiment analysis on restaurant reviews using machine learning techniques to extract customer
                  opinions.Developed a robust model to categorize sentiments, providing valuable feedback for restaurant improvement'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-15-p2'
                  defaultMessage='Used Conecepts: Machine Learning, Python, NumPy, Pandas'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://github.com/SubhrjiT/Restaurant-Review/" target="_blank">Source Code</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"  alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"  alt="" />
          
        
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal16}
        cambiarEstado={cambiarEstadoModal16}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./portfolio.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-16-p1'
                  defaultMessage='A simple Protfolio For Beginners'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-16-p2'
                  defaultMessage=''
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://subhrjit.github.io/PORTFOLIO" target="_blank">Source Code</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal13}
        cambiarEstado={cambiarEstadoModal13}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-13-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-13-p1'
                  defaultMessage='Inspired Gamer, page created for the sale of digital and physical video games.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-13-p2'
                  defaultMessage='Developed so that the client can choose their console, be it PSP 5 or Xbox X, and be able to browse exclusive pages for each console.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/InspiredGamer" target="_blank">https://inspired-gamer.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* 
      <Modal
        estado={estadoModal12}
        cambiarEstado={cambiarEstadoModal12}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-12-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-12-p1'
                  defaultMessage='Every Running, page developed for the sale of unisex shoes.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-12-p2'
                  defaultMessage='Designed so that the customer can choose the shoe model, see which one best suits their budget and which are the best valued by buyers.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/EveryRunning" target="_blank">https://every-running.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal11}
        cambiarEstado={cambiarEstadoModal11}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-11-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-11-p1'
                  defaultMessage='Plus Anime, created to watch or download the anime chapters of your choice.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-11-p2'
                  defaultMessage='It has a wide variety of Anime, both recent releases and community favorites, it also boasts movies of the genre in question.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/PlusAnime" target="_blank">https://plusanime.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal10}
        cambiarEstado={cambiarEstadoModal10}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-10-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-10-p1'
                  defaultMessage='Elegant Hand, page created for the sale of digital and analog watches.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-10-p2'
                  defaultMessage='Developed so that the customer can choose the watch of their choice, since it has a wide variety of brands and models. The page also has a night mode for more comfort.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/ElegantHand/" target="_blank">https://elegant-hand.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal9}
        cambiarEstado={cambiarEstadoModal9}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-9-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-9-p1'
                  defaultMessage='Life on paper, page created for a bookstore.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-9-p2'
                  defaultMessage='Designed so that the customer can purchase physical or digital books, it has a large number of categories so that its readers feel comfortable.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/vida-en-papel" target="_blank">https://vida-en-papel.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal8}
        cambiarEstado={cambiarEstadoModal8}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-8-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-8-p1'
                  defaultMessage='Shop Tec, is an ecommerce developed for the purchase of technological products.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-8-p2'
                  defaultMessage='It offers a large number of products, as well as the ability to navigate between the different categories of such products.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/shop-tec" target="_blank">https://shop-tec.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal7}
        cambiarEstado={cambiarEstadoModal7}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-7-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-7-p1'
                  defaultMessage='Power engine, is a car sales website.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-7-p2'
                  defaultMessage='Developed so that the customer can purchase the car of their dreams, it uses a slider system in many of its sections to facilitate the interaction of the page with users.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/Power-Engine" target="_blank">https://power-engine.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal6}
        cambiarEstado={cambiarEstadoModal6}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-6-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-6-p1'
                  defaultMessage='Spider-Man fan page, is a project developed in honor of Spider-Man.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-6-p2'
                  defaultMessage='It offers a wide variety of information about Spider-Man and his multi-verse variants, as well as facts and trivia about his enemies and allies.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/Spider-Man" target="_blank">https://spider-man-fans-page.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal5}
        cambiarEstado={cambiarEstadoModal5}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-5-com.png`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-5-p1'
                  defaultMessage='PremierFood, page created for the sale of fast food.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-5-p2'
                  defaultMessage='Designed to visually attract the user, with excellent quality culinary preparations and an interface with attractive transitions.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/PremierFood" target="_blank">https://premierfood.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        estado={estadoModal3}
        cambiarEstado={cambiarEstadoModal3}
      >
        <div className="content-modal">
          <div className="pw-content">
            <div className="eins-modal-preview"><img src={proyectsImg(`./proyecto-3.jpg`)} alt="" /></div>
            <div className="eins-modal-text">
              <p>
                <FormattedMessage
                  id='projects-info-3-p1'
                  defaultMessage='ProgramCoffe, a blog designed to inform about the best recipes for your coffee.'
                />
              </p>
              <p>
                <FormattedMessage
                  id='projects-info-3-p2'
                  defaultMessage='It offers a large amount of information on the perfect preparations for a good coffee, as well as the temperature at which it must be prepared, as well as the best coffee beans.'
                />
              </p>
              <div className="eins-modal-text-2">
                <span>Link:</span> <a href="https://nahuel61920.github.io/Blog-Coffe" target="_blank">https://ProgramCoffe.com</a>
              </div>
              <div className="eins-modal-text-3">
                <span>
                  <FormattedMessage
                    id='projects-tec'
                    defaultMessage='Used technology:'
                  />
                </span>
                <div className="eins-modal-tec">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="" />
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal> 
  */}

      <ScrollToTop />

      <Footer />
    </div>
  )
}
export default Project;