// ========================================================================================

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);



// ========================================================================================


// Фикс фулскрин-блоков
import './functions/fix-fullheight';


// ========================================================================================


// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())


// ========================================================================================


// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('desktop')
// } else if (isTablet()) {
//     console.log('tablet')
// } else if (isMobile()) {
//     console.log('isMobile')
// }


// ========================================================================================


// Реализация бургер-меню
import {
    burger
} from './functions/burger';


// ========================================================================================


// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';


// ========================================================================================


// Реализация модального окна
import GraphModal from 'graph-modal';
const modal = new GraphModal();


// ========================================================================================


// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');


// ========================================================================================


// Получение высоты шапки сайта (не забудьте вызвать функцию)
import {
    getHeaderHeight
} from './functions/header-height';
getHeaderHeight();
window.addEventListener('resize',getHeaderHeight);

// ========================================================================================


// Подключение плагина кастом-скролла
// import 'simplebar';


// ========================================================================================


// Подключение свайпера
import Swiper, {
    Navigation,
    Pagination
} from 'swiper';
Swiper.use([Navigation, Pagination]);
const swiper = new Swiper('.product-categories__swiper', {
    slidesPerView: 4,
    spaceBetween: 21,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 4,
        }
    },
    navigation: {
        prevEl: '.product-categories-arrow--prev',
        nextEl: '.product-categories-arrow--next'
    }
});


// ========================================================================================



// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();


// ========================================================================================



// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');


// ========================================================================================


// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');


// ========================================================================================


// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//     console.log(e.target);
//     console.log(e.detail);
//     console.log(e.detail.dir);
// });



// ========================================================================================


import {
    validateForms
} from './functions/validate-forms';





const questionnaireRules = [{
        ruleSelector: '#questionnaire-form__surname',
        rules: [{
                rule: 'minLength',
                value: 3,
                errorMessage: 'Введите 3 и более символов',
            },
            {
                rule: 'required',
                value: true,
                errorMessage: 'Заполните фамилию!',
            },
        ],
    },
    {
        ruleSelector: '#questionnaire-form__tel',
        tel: true,
        telError: 'Введите корректный телефон',
        rules: [{
            rule: 'required',
            value: true,
            errorMessage: 'Заполните телефон!',
        }],
    },
    {
        ruleSelector: '#questionnaire-form__email',
        rules: [{
                rule: 'required',
                errorMessage: 'Введите свой email',
            },
            {
                rule: 'email',
                errorMessage: 'Email указан некорректно!',
            }
        ]
    },
];
validateForms('.questionnaire-form', questionnaireRules, 'afterSend');


const backCallRules = [{
        ruleSelector: '#back-call-form__name',
        rules: [{
                rule: 'minLength',
                value: 3,
                errorMessage: 'Введите 3 и более символов',
            },
            {
                rule: 'required',
                value: true,
                errorMessage: 'Введите своё имя!',
            },
        ],
    },
    {
        ruleSelector: '#back-call-form__tel',
        tel: true,
        telError: 'Введите корректный телефон',
        rules: [{
            rule: 'required',
            value: true,
            errorMessage: 'Заполните телефон!',
        }],
    },
];
validateForms('.back-call-form', backCallRules, 'afterSend');


const writeToUsRules = [{
        ruleSelector: '#write-to-us-form__name',
        rules: [{
                rule: 'minLength',
                value: 3,
                errorMessage: 'Введите 3 и более символов',
            },
            {
                rule: 'required',
                value: true,
                errorMessage: 'Введите своё имя!',
            },
        ],
    },
    {
        ruleSelector: '#write-to-us-form__email',
        rules: [{
                rule: 'required',
                errorMessage: 'Введите свой email',
            },
            {
                rule: 'email',
                errorMessage: 'Email указан некорректно!',
            }
        ]
    },
    {
        ruleSelector: '#write-to-us-form__text',
        rules: [{
            rule: 'minLength',
            value: 10,
            errorMessage: 'Введите минимум 10 ',
            },
            {
                rule: 'required',
                value: true,
                errorMessage: 'Напишите сообщение!',
            }
        ]
    },
];
validateForms('.write-to-us-form', writeToUsRules, 'afterSend');













// ========================================================================================



// Подключение spollers
// import * as spollersFunc from "./functions/spollers";
// spollersFunc.spollers();


// ========================================================================================


// Подключение галереи

// Документация: https://www.lightgalleryjs.com/docs/
// Сниппет(HTML): gallery

// Подключение базового набора функционала
// import lightGallery from 'lightgallery';

// Плагины
// lgZoom, lgAutoplay, lgComment, lgFullscreen, lgHash, lgPager, lgRotate, 
// lgShare, lgThumbnail, lgVideo, lgMediumZoom
// import lgFullscreen from 'lightgallery/plugins/fullscreen/lg-fullscreen.min.js';

// Запуск
// const galleries = document.querySelectorAll('#galleryID');
// galleries.forEach(gallery => {
//     lightGallery(gallery, {
//         // plugins: [lgFullscreen],
//         licenseKey: '7EC452A9-0CFD441C-BD984C7C-17C8456E',
//         speed: 500,
//     });
// });



// ========================================================================================



// Модуль звездного рейтинга 
// import * as ratingFunc from "./functions/rating";
// ratingFunc.formRating();



// ========================================================================================



// Модуь  "количество"
//import { formQuantity } from './functions/quantity';
//formQuantity();


// ========================================================================================
