import "../../App.css"
import "./ReviewSection.css"
import { reviewBlockData, reviewGradesData } from "../../data.js";
import ava_male from "../../assets/images/ava_male.svg"
import ava_female from "../../assets/images/ava_female.svg"


export default function ReviewSection() {
    return (
        <section id='reviews-section' className="reviews-section">
            <div className="container">
                <div className="reviews-top-block">
                    <h1 className="common-title review-title">Хотите вдохновиться идеями для вашего интерьера? </h1>
                    <p className="common-text">Посмотрите, как наши люстры преображают дома наших клиентов и создают
                        неповторимую атмосферу.</p>
                </div>
                <div className="reviews-grades-items">
                    {reviewGradesData.map((item, index) => (
                        <div className="reviews-grades-item" key={index}>
                            <h1 className="grades-item-title">{item.title}</h1>
                            <p className="grades-item-text">{item.grades_text}</p>
                        </div>
                    ))}
                </div>
                <div className="reviews-block-items">
                    {reviewBlockData.map((item, index) => (
                        <div className="reviews-block-item" key={index}>
                            <div className="review-info">
                                {item.gender === 'male' ? (
                                        <img src={ava_male} alt="Ava_Male"/>
                                    ) :
                                    <img src={ava_female} alt="Ava_Male"/>
                                }
                                <h1>{item.name}</h1>
                                <p>{item.date}</p>
                            </div>
                            <div className="review-details">
                                <p className="review-details-grade">{item.grade}</p>
                                <p className="review-details-text">{item.text}</p>
                            </div>
                            {item.link_text && (
                                <div className="other-reviews">
                                    <p className="more-reviews">Смотреть отзывы наших клиентов →</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}