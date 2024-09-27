import Header from "./components/Header/Header.jsx";
import CategoriesSection from "./components/CategoriesSection/CategoriesSection.jsx";
import MainSection from "./components/MainSection/MainSection.jsx";
import DiscountSection from "./components/DiscountSection/DiscountSection.jsx";
import AboutSection from "./components/AboutSection/AboutSection.jsx";
import ReviewSection from "./components/ReviewSection/ReviewSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FaqSection from "./components/FaqSection/FaqSection.jsx";


export default function App() {
    return (
        <>
            <Header />
            <CategoriesSection />
            <MainSection />
            <DiscountSection />
            <AboutSection />
            <ReviewSection />
            <FaqSection />
            <Footer />
        </>
)
}