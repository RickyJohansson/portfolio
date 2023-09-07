import './Project.scss';

type Props = {

    projectName: string;
    projectImage: string;
    desc: string[];
    liveLink: string;
    gitLink: string;

}

const Project = ({ projectName, projectImage, desc, liveLink, gitLink }: Props) => {

    const gotoLink = (liveLink: string) => {

        const newWindow = window.open(liveLink, '_blank', 'noopener,noreferrer');

        if (newWindow) { 
            newWindow.opener = null
        }

    }

    const gotoGithub = (gitLink: string) => {
        
        const newWindow = window.open(gitLink, '_blank', 'noopener,noreferrer');

        if (newWindow) { 
            newWindow.opener = null
        }

    }

    return (   

        <div className="project_container">
            <h2> { projectName } </h2>
            <img onClick={ () => gotoLink(liveLink) } src={ projectImage } alt={'project-image'} />
            <section className="info_container">
                {
                    desc.map((text, i) => {
                        if (i == desc.length - 1 || i == desc.length - 2) {
                            return <p key={i} style={{ marginTop: '2.5rem' }}>{text}</p>
                        } else {
                            return <p key={i} style={{ marginTop: '.5rem' }}>{text}</p>
                        }
                    })
                }
            </section>
            <section className="links_wrapper">
                {
                    liveLink.length > 0 ?
                    <button onClick={ () => gotoLink(liveLink) }>Live länk</button>
                    :
                    ''

                }
                <button onClick={ () => gotoGithub(gitLink) }>Github</button>
            </section>
        </div>

    )

}

export default Project;