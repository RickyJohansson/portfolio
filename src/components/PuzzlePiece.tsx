import './PuzzlePiece.scss';

const PuzzlePiece = () => {

    return (

        <div className="puzzle_wrapper">

            <figure className="puzzle_square"></figure>
            <figure className="puzzle_top">

                <figure className="puzzle_top__square"></figure>
                <figure className="puzzle_circle__middle"></figure>

            </figure>

        </div>

    )

}

export default PuzzlePiece;