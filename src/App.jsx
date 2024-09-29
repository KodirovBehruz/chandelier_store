import {Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import CategoriesSection from "./components/CategoriesSection/CategoriesSection.jsx";
import MainSection from "./components/MainSection/MainSection.jsx";
import AboutSection from "./components/AboutSection/AboutSection.jsx";
import ReviewSection from "./components/ReviewSection/ReviewSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import FaqSection from "./components/FaqSection/FaqSection.jsx";
import CatalogPage from "./components/CatalogPage/CatalogPage.jsx";
import DiscountSection from "./components/DiscountSection/DiscountSection.jsx";
import {useState} from "react";


export default function App() {
    const [searchQuery, setSearchQuery] = useState("");

    // Функция обновления поискового запроса
    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    return (
        <Routes>
            <Route path='/' element={
                <>
                    <Header />
                    <CategoriesSection onSearch={handleSearch} />
                    <MainSection />
                    <DiscountSection />
                    <AboutSection />
                    <ReviewSection />
                    <FaqSection />
                    <Footer />
                </>
            } />
            <Route path='/catalog' element={
                <>
                    <Header />
                    <CategoriesSection onSearch={handleSearch} />
                    <CatalogPage searchQuery={searchQuery} />
                    <Footer />
                </>
            } />

        </Routes>
)
}