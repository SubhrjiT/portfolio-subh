import React from 'react';
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./Virtual Shopping.jpg`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Virtual shopping Assistanat Using Image RecogniStion</h3>
                            <p>
                            Developed and deployed an Image Search and Recommendation system utilizing advanced image recognition
techniques.
                            </p>
                            <p className="tecnologias">
                                
                                 Python
                                <span> -</span> Machine Learning
                                <span> -</span> CNN
                                <span> -</span> ResNet50
                                <span> -</span> Neural Network
                                <span> -</span> Streamlit
                                 
                            </p>
                            <a  href="https://github.com/SubhrjiT/Restaurant-Review.git" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Repository</span></a>
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./House Predition.jpg`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>House Price Predition </h3>
                            <p>
                            Developed a machine learning-based model to determine the selling price of a house and assist customers in
arranging the optimal time for purchase.
                            </p>
                            <p className="tecnologias">
                                Python
                                <span> -</span> Machine Learning
                                <span> -</span> Pandas
                                <span> -</span> MatPlotlib
                                <span> -</span> Numpy
                            </p>
                            <a href="https://github.com/SubhrjiT/House-Prediction.git" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Repository</span></a>
                    
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./sentiment_analysis.jpg`)}
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Resturant Review</h3>
                            <p>
                            Conducted sentiment analysis on restaurant reviews using machine learning techniques to extract customer
opinions.
                            </p>
                            <p className="tecnologias">
                                Python
                                <span> -</span> Machine Learning
                                <span> -</span> Matplotlib
                                <span> -</span> Pandas
                                
                            </p>
                            <a href="https://github.com/SubhrjiT/Restaurant-Review.git" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Repository</span></a>
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src={proyectImg(`./portfolio.png`)}
                            alt='proyectos'
                        />
                        <div className="content">
                            <h3>Simple Portfolio </h3>
                            <p>
                                Simple Portfolio using HTML,CSS,JavaScript.
                            </p>
                            <p className="tecnologias">
                                HTML5
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://subhrjit.github.io/PORTFOLIO" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Repository</span></a>
                            <a href="https://subhrjit.github.io/PORTFOLIO/" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Demo</a>
                        </div>
                    
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div>
        </section>

    )
};
export default React.memo(Project);