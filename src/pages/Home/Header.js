import React from 'react';
import './../../assets/css/style.css'
import { Link } from 'react-router-dom';

class Header extends React.Component {
    openNavBar() {
        const navToggle = document.querySelector('.nav-toggle');

        const navLinks = document.querySelectorAll('.nav__link');

        navToggle.addEventListener('click', () => {
            document.body.classList.toggle('nav-open');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                document.body.classList.remove('nav-open');
            })
        })

    }

    render() {
        return (
                <header>
                    <div className="logo">
                        {/* personal image */}
                        <h2 id="nav__title"><Link to="/ttdd273w">TTDD</Link></h2>
                    </div>
                    <button className="nav-toggle" aria-label="toggle-navigation" onClick={this.openNavBar}>
                        <span className="hamburger"></span>
                    </button>
                    <nav className="nav">
                        {/* double underscore for a subsection */}
                        <ul className="nav__list">
                            <li className="nav__item"><Link to="/ttdd273w" className="nav__link">Home</Link></li>
                            <li className="nav__item"><a href="/#services" className="nav__link">My Services</a></li>
                            <li className="nav__item"><a href="/#about" className="nav__link">About Me</a></li>
                            <li className="nav__item"><a href="/#work" className="nav__link">My Work</a></li>
                        </ul>
                    </nav>
                </header>
        )
    }
}

export default Header