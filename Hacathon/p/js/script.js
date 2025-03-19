document.addEventListener('DOMContentLoaded', function () {
    const allSideMenu = document.querySelectorAll('.sidebar .side-menu.top li a');
    allSideMenu.forEach(item => {
        const li = item.parentElement;
        item.addEventListener('click', function () {
            allSideMenu.forEach(i => i.parentElement.classList.remove('active'));
            li.classList.add('active');
        });
    });

    // TOGGLE SIDEBAR
    const menuBar = document.querySelector('.content nav .menu');
    const sidebar = document.querySelector('.sidebar');

    menuBar.addEventListener('click', function () {
        sidebar.classList.toggle('hide');
    });

    // SEARCH BUTTON TOGGLE
    const searchButton = document.querySelector('.content nav form .form-input button');
    const searchButtonIcon = document.querySelector('.content nav form .form-input button .searchOpen');
    const searchForm = document.querySelector('.content nav form');

    searchButton.addEventListener('click', function (e) {
        if (window.innerWidth < 576) {
            e.preventDefault();
            searchForm.classList.toggle('show');
            if (searchForm.classList.contains('show')) {
                searchButtonIcon.classList.replace('fa-magnifying-glass', 'fa-xmark');
            } else {
                searchButtonIcon.classList.replace('fa-xmark', 'fa-magnifying-glass');
            }
        }
    });

    // RESPONSIVE SIDEBAR BEHAVIOR
    if (window.innerWidth < 768) {
        sidebar.classList.add('hide');
    } else if (window.innerWidth > 576) {
        searchButtonIcon.classList.replace('fa-xmark', 'fa-magnifying-glass');
        searchForm.classList.remove('show');
    }

    window.addEventListener('resize', function () {
        if (this.innerWidth > 576) {
            searchButtonIcon.classList.replace('fa-xmark', 'fa-magnifying-glass');
            searchForm.classList.remove('show');
        }
    });

    // DARK MODE TOGGLE
    const switchMode = document.querySelector('#dark-mode-toggle');
    switchMode.addEventListener('change', function () {
        if (this.checked) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    });
});
