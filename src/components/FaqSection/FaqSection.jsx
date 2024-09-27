import "../../App.css"
import "./FaqSection.css"
import {faqData} from "../../data.js";
import FaqItems from "./FaqItems.jsx";

export default function FaqSection() {
    return (
        <section className="faq-section">
            <div className="container">
                <h1 className="common-title">Вопросы & Ответы</h1>
                {faqData.map((item, index) => (
                    <FaqItems key={index} question={item.question} answer={item.answer} />
                ))}
            </div>
        </section>
    )
}