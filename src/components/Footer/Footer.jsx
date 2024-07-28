import React from 'react';
import './Footer.css';

/* Multi idioma */
import {FormattedMessage} from 'react-intl';


const Footer = () =>{
    // Fecha
    let fecha = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p>
                        <FormattedMessage
                            id='footer-info'
                            defaultMessage='Page created by Subhrajit Behera'
                        />
                    </p>
                    <p>&copy; {fecha}. All Rights Reserved.</p>
                </div>
                <div className="redes-sociales">
                    <a href="https://linkedin.com/in/subhrajit-behera" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/SubhrjiT"target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="https://instagram.com/s_u__b_h" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);
