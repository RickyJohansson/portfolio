import './Experience.scss';

type Props = {
    prog: string;
    img: string;
}

const Experience = ({ prog, img }: Props) => {

    return(
        <figure className="exp_container">
            <section>
                <p className="exp_title">{prog}</p>
                <img src={ img } alt={prog} />
            </section>
        </figure>
    )
}

export default Experience;