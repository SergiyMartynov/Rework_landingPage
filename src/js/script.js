window.addEventListener('DOMContentLoaded', () => {

    //For Search 

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


    // Remove items catalog__content and add items of catalog__content-second

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

    function reNameBtn () {
        document.getElementById('reNameBtn').innerHTML = 'Close tabs';
        }
    function NameBtn() {
        document.getElementById('reNameBtn').innerHTML = 'Show More';
    }


    catalogBtn.addEventListener('click', () => {
        if (catalogContent[1].style.display == 'none' ) {
            openCatalog();
            reNameBtn();
        } else {
            closeCatalog();
            NameBtn();
        }
    });

    // openCatalog();
    // closeCatalog();
    







});