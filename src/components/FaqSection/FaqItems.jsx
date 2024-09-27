import {useState} from "react";
import "./FaqSection.css"

export default function FaqItems({question, answer}) {
    const [isOpen, setIsOpen] = useState(false);
    const toogleFaq = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="faq-item">
            <div className="faq-item-question" onClick={toogleFaq}>
                    {question}
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div className="faq-item-answer">{answer}</div>}
        </div>
    )
}