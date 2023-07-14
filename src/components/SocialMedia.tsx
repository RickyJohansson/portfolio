import emailIcon from '../assets/emailicon.svg';
import githubIcon from '../assets/githubicon.svg';
import linkedIcon from '../assets/linkedinicon.svg';
import emailIconFooter from '../assets/emailiconFooter.svg';
import githubIconFooter from '../assets/githubiconFooter.svg';
import linkedIconFooter from '../assets/linkediniconFooter.svg';


import './SocialMedia.scss';

type Props = {
    type: number;
}

const SocialMedia = ({type}: Props) => {

    const gotoLinkedin = () => {
        const newWindow = window.open('https://www.linkedin.com/in/ricky-johansson-2264a9265/', '_blank', 'noopener,noreferrer');
        if (newWindow) { newWindow.opener = null }
    }

    const gotoGithub = () => {
        const newWindow = window.open('https://github.com/RickyJohansson?tab=repositories', '_blank', 'noopener,noreferrer');
        if (newWindow) { newWindow.opener = null }
    }

    return(

        <section className="social_media">

            <section className="email">

                <a href="mailto:Rickjoh91@hotmail.com" className="email_text">Email
                
                { 

                type == 0 ?
                    <img className="emailIcon" src={emailIcon} alt="emailIcon" />
                : 
                    <img className="emailIcon" src={emailIconFooter} alt="emailIcon" />

                }
                
                </a>


            </section>

            <section className="github">

                <p className="github_text" onClick={gotoGithub}>Github</p>

                { 

                type == 0 ?
                    <img className="githubIcon" onClick={gotoGithub} src={githubIcon} alt="githubIcon" />
                :
                    <img className="githubIcon" onClick={gotoGithub} src={githubIconFooter} alt="githubIcon" />

                }

            </section>

            <section className="linkedin">

                <p className="linkedin_text" onClick={gotoLinkedin}>Linkedin</p>

                { 

                type == 0 ?
                    <img className="linkedIcon" onClick={gotoLinkedin} src={linkedIcon} alt="linkedinIcon" />
                :
                    <img className="linkedIcon" onClick={gotoLinkedin} src={linkedIconFooter} alt="linkedinIcon" />
                }

            </section>

        </section>

    )

}

export default SocialMedia;
