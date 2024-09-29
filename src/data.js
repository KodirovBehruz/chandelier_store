import product_image1 from "./assets/product_images/1.png"
import product_image2 from "./assets/product_images/2.png"
import product_image3 from "./assets/product_images/3.png"
import product_image4 from "./assets/product_images/4.png"
import product_image5 from "./assets/product_images/5.png"


export const catalogData = [
    {
        id: 1,
        image: product_image1,
        text: "Подвесная люстра Aurora Crystal Luxe",
        sizes: ['60см', '100см', 'L100см', 'L120см'],
        discount: null,
        price: 100,
        inStock: true,
    },
    {
        id: 2,
        image: product_image2,
        text: "Подвесная люстра Grand Opal Crystal",
        sizes: ['60см', '100см', 'L100см', 'L120см'],
        discount: 10,
        price: 100,
        inStock: false,
    },
    {
        id: 3,
        image: product_image3,
        text: "Подвесная люстра Zenith Minimalist",
        sizes: ['60см', '100см', 'L100см', 'L120см'],
        discount: 10,
        price: 100,
        inStock: true,
    },
    {
        id: 4,
        image: product_image4,
        text: "Подвесная люстра Vintage Elegance",
        sizes: ['60см', '100см', 'L100см', 'L120см'],
        discount: 10,
        price: 100,
        inStock: false,
    },
    {
        id: 5,
        image: product_image5,
        text: "Подвесная люстра Vintage Elegance",
        sizes: ['60см', '100см', 'L100см', 'L120см'],
        discount: null,
        price: 100,
        inStock: false,
    },
]


import about1 from "./assets/icons/about_1.png"
import about2 from "./assets/icons/about_2.png"
import about3 from "./assets/icons/about_3.png"
import about4 from "./assets/icons/about_4.png"

export const aboutData = [
    {
        icon: about1,
        text: "Наша платформа cэкономит вам время предоставляя удобный поиск и фильтрацию по нужным параметрам.",
    },
    {
        icon: about2,
        text: "Мы стремимся помочь создать уютную атмосферу с помощью качественного освещения и стильного дизайна.",
    },
    {
        icon: about3,
        text: "Доказанный путь к быстрому и удобному выбору идеальных люстр для любого интерьера.",
    },
    {
        icon: about4,
        text: "Более 100 видов люстр и светильников.",
        button_text: "Перейти в каталог"
    },
]

export const reviewGradesData = [
    {
        title: "9.5",
        grades_text: "Средняя оценка качества продукции"
    },
    {
        title: "3000+",
        grades_text: "Проданных люстр за год"
    },
    {
        title: "95%",
        grades_text: "Довольных клиентов"
    },
]

export const reviewBlockData = [
    {
        name: "Михаил Борисов",
        date: "15.09.2024",
        grade: "Оценка: ★★★★★",
        text: "\"Потрясающий магазин! Заказывала люстру для гостиной — качество отличное, выглядит даже лучше, чем на фото. Быстрая доставка, удобный сайт, легко сделать заказ.\"",
        gender: "male"
    },
    {
        name: "Татьяна Михайловна",
        date: "01.09.2024",
        grade: "Оценка: ★★★★★",
        text: "\"Очень довольна покупкой! В магазине нашла идеальную люстру для гостиной. Понравилась простота поиска — множество фильтров помогли быстро выбрать по нужным характеристикам.\"",
        gender: "female"
    },
    {
        name: "Саша Петров",
        date: "21.08.2024",
        grade: "Оценка: ★★★★★",
        text: "\"Огромный выбор люстр на любой вкус. Заказал люстру с современным дизайном, а также несколько настенных светильников для дома. \"",
        gender: "male",
        link_text: "Смотреть отзывы наших клиентов →"
    }
]

export const faqData = [
    {
        question: 'Как выбрать подходящую люстру для моей комнаты?',
        answer: 'При выборе люстры важно учитывать размеры комнаты, высоту потолков и стиль интерьера. Для небольших комнат подойдут компактные люстры, а для просторных залов можно выбрать многорожковые или массивные модели.'
    },
    {
        question: 'Как ухаживать за люстрой?',
        answer: 'Для ухода за люстрой рекомендуется регулярно протирать её от пыли мягкой тряпкой. Стеклянные и хрустальные элементы можно очищать с использованием специальных чистящих средств для стекла.'
    },
    {
        question: 'Какие лампы лучше использовать с вашей люстрой?',
        answer: 'Для большинства наших люстр подойдут стандартные лампы накаливания, светодиодные лампы или энергосберегающие лампы. Рекомендуется выбирать лампы с подходящей мощностью и цветовой температурой, чтобы создать нужное освещение.'
    },
    {
        question: 'Какую форму оплаты вы принимаете?',
        answer: 'Мы принимаем оплату банковскими картами, через онлайн-кошельки (DC, Alif) и банковский перевод (перевод с карты на карту). Также возможна оплата при доставке в некоторых регионах.'
    }
]


import Image1 from "./assets/images/main_img_1.png"
import Image2 from "./assets/images/main_img_2.png"
import Image3 from "./assets/images/main_img_3.png"
import Image4 from "./assets/images/main_img_4.png"
import Image5 from "./assets/images/main_img_5.png"
import Image6 from "./assets/images/main_img_6.png"

export const sliderData = [
    {
        title: "Image1",
        image: Image1
    },
    {
        title: "Image2",
        image: Image2
    },
    {
        title: "Image3",
        image: Image3
    },
    {
        title: "Image4",
        image: Image4
    },
    {
        title: "Image5",
        image: Image5
    },
    {
        title: "Image6",
        image: Image6
    },
]