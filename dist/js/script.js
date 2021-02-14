window.addEventListener('DOMContentLoaded', () => {

    ///For Search 

    const searchBtn = document.querySelector('.search-btn'),
        cancelBtn = document.querySelector('.cancel-btn'),
        searchBox = document.querySelector('.search-box'),
        searchInput = document.querySelector('input'),
        searchData = document.querySelector('.search-data');

    searchBtn.onclick = () => {
        searchBox.classList.add('active');
        searchInput.classList.add('active');
        searchBtn.classList.add('active');
        cancelBtn.classList.add('active');
        if (searchInput.value != '') {
            let values = searchInput.value;
            searchData.classList.remove('active');
            searchData.innerHTML = "You now enter " + "<span style='font-weight:500;'>" + values + "</span>";
        } else {
            searchData.innerHTML = " ";
        }
    }
    cancelBtn.onclick = () => {
        searchBox.classList.remove('active');
        searchInput.classList.remove('active');
        searchBtn.classList.remove('active');
        cancelBtn.classList.remove('active');
        searchData.classList.add('active');
        searchInput.value = '';
    }


    //////////Remove items catalog__content and add items of catalog__content-second

    const catalogContent = document.querySelectorAll('.catalog__content'),
        catalogBtn = document.querySelector('.catalog__load-more');
    closeButton = document.querySelector('.closeButton');


    function hideTabCatalog() {
        catalogContent.forEach(item => {
            item.style.display = 'none';
        });

        catalogContent.forEach(item => {
            item.classList.remove('catalog__content_active');
        });
    }

    function showTabCatalog(i = 0) {
        catalogContent[i].style.display = 'flex';
        catalogContent[i].classList.add('catalog__content_active');
    }

    hideTabCatalog();
    showTabCatalog();

    function openCatalog() {
        showTabCatalog(1);
        catalogBtn.classList.add('active');
    }

    function closeCatalog() {
        catalogContent[1].style.display = 'none';
        catalogContent[1].classList.remove('catalog__content_active');
        catalogBtn.classList.remove('active');
    };

    function reNameBtn() {
        document.getElementById('reNameBtn').innerHTML = 'Close Tabs';
    }
    function NameBtn() {
        document.getElementById('reNameBtn').innerHTML = 'Show More';
    }


    catalogBtn.addEventListener('click', () => {
        if (catalogContent[1].style.display == 'none') {
            openCatalog();
            reNameBtn();
        } else {
            closeCatalog();
            NameBtn();
        }
    });

    openCatalog();
    closeCatalog();


    /// Slider in motivation section


    const slides = document.querySelectorAll('.motivation__slide'),
        prev = document.querySelector('.motivation__slider-prev'),
        next = document.querySelector('.motivation__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current');

    let slideIndex = 1;

    showSlides(slideIndex);

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', () => {
        plusSlides(-1);
    });

    next.addEventListener('click', () => {
        plusSlides(+1);
    });




    ////// menu in small media 

    const menu = document.querySelector('.header'),
        menuItem = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.hamburger'),
        overlay = document.querySelector('.overlay');




    hamburger.onclick = () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header_active');
        overlay.classList.toggle('overlay_active');
        // document.body.classList.toggle('body-active');




    }
    //  footer adaptive nav  ////// not worked!!!

    let itemInfo = document.querySelectorAll('.item-info'),
        arrow = document.querySelectorAll('.arrow'),
        footerUl = document.querySelectorAll('.footer__ul'),
        itemMenuFooter = document.querySelector('.footer__menu-item');

    // if (win.width() >= 768) {

        // function hideArrowUl() {

        //     arrow.forEach(item => {
        //         item.style.display = 'none';
        //     });

        //     footerUl.forEach(item => {
        //         item.classList.remove('active');
        //         item.style.display = 'none';
        //     });

        // }

        // hideArrowUl();


        // function showArrowUl(i = 0) {
        //     footerUl[i].classList.add('active');
        //     footerUl[i].style.display = 'block';
        //     arrow[i].style.display = 'block';
        // }

        // showArrowUl();


        // function closeArrowUl(i) {
        //     footerUl[i].classList.remove('active');
        //     footerUl[i].style.display = 'none';
        //     arrow[i].style.display = 'none';
        // }

        // closeArrowUl();


        // itemMenuFooter.addEventListener('click', function (event) {
        //     const target = event.target;
        //     if (target && target.classList.contains('footer__ul')) {
        //         footerUl.forEach((item, i) => {
        //             if (target == item) {
        //                 closeArrowUl();
        //                 showArrowUl(i);
        //             }
        //         });
        //     }
        // });

    // }








});