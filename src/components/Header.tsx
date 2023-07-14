import './Header.scss';
import logo from '../assets/RJ_logo.svg';
import { useEffect, useState, useRef } from 'react';

type Props = {
    aboutRef:  React.MutableRefObject<HTMLElement>;
    portfolioRef: React.MutableRefObject<HTMLElement>;
    contactRef: React.MutableRefObject<HTMLElement>;
}

const Header = ({aboutRef, portfolioRef, contactRef}: Props) => {

    const [ menuOpen, setMenuOpen ] = useState<boolean>(false);
    const [ windowWidth, setWindowWidth ] = useState<number>(window.innerWidth);

    const menuRef = useRef() as React.MutableRefObject<HTMLElement>;
    const overlayRef = useRef() as React.MutableRefObject<HTMLElement>;
    const menuFirstBarRef = useRef() as React.MutableRefObject<HTMLElement>;
    const menuSecondBarRef = useRef() as React.MutableRefObject<HTMLElement>;
    const menuThirdBarRef = useRef() as React.MutableRefObject<HTMLElement>;

    
    useEffect(() => {

        const closeMenu = (e: any) => {
            if ( e.target !== menuRef.current && e.target !== overlayRef.current && e.target !== menuFirstBarRef.current
                && e.target !== menuSecondBarRef.current && e.target !== menuThirdBarRef.current ) {   
                setMenuOpen(false);
            } else if ( window.innerWidth > 900 ) {
                setMenuOpen(false);
            }
        }

        const checkWindow = () => {
            setWindowWidth(window.innerWidth);
        }

        document.body.addEventListener('click', closeMenu);
        window.addEventListener('resize', checkWindow);

        return () => (document.body.removeEventListener('click', closeMenu), window.removeEventListener('resize', checkWindow));

    }, []);

    useEffect(() => {
        if (windowWidth > 899) {
            setMenuOpen(false);
        }
    }, [windowWidth]);
    

    const scrollToTop = () => {

        window.scrollTo({ top: 0, behavior: 'smooth'});
        setMenuOpen(false);

    }

    const scrollToAbout = () => {

        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);

    }

    const scrollToPortfolio = () => {

        portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);

    }

    const scrollToContact = () => {

        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);

    }

    return(

        <header className="header">

            <section className="header_container">

                <img onClick={ scrollToTop } src={logo} alt="" />

                <li className="links">

                    <a onClick={scrollToAbout}>Om mig</a>
                    <a onClick={scrollToPortfolio}>Portfolio</a>
                    <a onClick={scrollToContact}>Kontakt</a>

                </li>
            </section>

            <section ref={menuRef} onClick={ () => setMenuOpen(!menuOpen) } className="header_hamburger">
                <figure ref={menuFirstBarRef}></figure>
                <figure ref={menuSecondBarRef}></figure>
                <figure ref={menuThirdBarRef}></figure>



            </section>

            {
                menuOpen
                ?
                <section ref={overlayRef} className="header_mobile__menu">
                    <a onClick={ scrollToTop }>Profil</a>
                    <a onClick={scrollToAbout}>Om mig</a>
                    <a onClick={scrollToPortfolio}>Portfolio</a>
                    <a onClick={scrollToContact}>Kontakt</a>
                </section>
                :
                ''
            }

        </header>
        
    )
}

export default Header;