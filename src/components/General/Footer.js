import React from 'react';
import '../../css/footer.css'
import instagram from '../../assets/instagram-brands.svg';
import twitter from '../../assets/twitter-brands.svg';
import github from '../../assets/github-brands.svg';


const Footer = (props) => (
    <footer className="footer">
        <div className='redes-container'>
            <span>social networs</span>
            <div>
                <img className="filter-color" src={instagram} alt="instagram"></img>
                <img className="filter-color" src={twitter} alt="twitter"></img>  
                <img className="filter-color" src={github} alt="github"></img>
            </div>
            
        </div>
        <div className='credits-container'>
            <span>design by martin_tomaco</span>
        </div>
    </footer>
)

export default Footer;