import StarRating from './StarRating';

const Color = ({title, color , rating}) => 
    <section className="color">
        <h1>{title}</h1>
        <div className="color" 
            style={{backgroundColor: color}}>
        </div>
        <div>
            <StarRating starsSelected={rating} />
        </div>
    </section>