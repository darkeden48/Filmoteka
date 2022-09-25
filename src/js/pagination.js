import ApiServiceTMDB from '../apiService/ApiService';
import onLoadTrend from './loadTrend';


function getTotalPages() {
    ApiServiceTMDB.fetchTrendFilms(ApiServiceTMDB.page).then(data => {
        let total_pages = data.total_pages;
        if(!document.querySelector('.pagination').classList.contains('created')) {
            insertPagination(total_pages);
        }
        paginate(0, total_pages);
    });
}

// Go to the pressed page
function goToPage(event) {
    event.preventDefault();
    document.querySelector('.collection').innerHTML = '';

    let thisPageNum = Number(this.getAttribute('data-num'));
    ApiServiceTMDB.page = thisPageNum - 1;
    onLoadTrend(ApiServiceTMDB.page);
    this.classList.add('active_page');

    getTotalPages();
}

// Add page numeration in the pagination
function insertPagination(pages) {

    const pages_container = document.querySelector('#page_numbers');

    let liStart1 = document.createElement('li');
    let liStart2 = document.createElement('li');
    liStart1.classList.add('page-item');
    liStart2.classList.add('page-item');
    liStart1.innerHTML = `<a class="page-link page_num" href="#" data-num="1">1</a>`;
    liStart2.innerHTML = '<a class="page-link start_ellipsis">...</a>';
    pages_container.appendChild(liStart1);
    pages_container.appendChild(liStart2);

    for (let i = 2; i < pages; i++) {
        let li = document.createElement('li');
        li.classList.add('page-item');
        let page_link = `<a class="page-link page_num" href="#" data-num="${i}">${i}</a>`;
        li.innerHTML = page_link;
        pages_container.appendChild(li);
    }

    let liEnd1 = document.createElement('li');
    let liEnd2 = document.createElement('li');
    liEnd1.classList.add('page-item');
    liEnd2.classList.add('page-item');
    liEnd1.innerHTML = '<a class="page-link end_ellipsis">...</a>';
    liEnd2.innerHTML = `<a class="page-link page_num" href="#" data-num="${pages}">${pages}</a>`;
    pages_container.appendChild(liEnd1);
    pages_container.appendChild(liEnd2); 

    document.querySelector('.pagination').classList.add('created');
}

function paginate(min_page, max_page) {

    const page_link = document.querySelectorAll('.page_num');

    // Hide other page links and give them event listeners
    for (let i = 1; i < page_link.length; i++) {
        page_link[i].style.display = 'none';
        page_link[i].classList.remove('active_page');
        page_link[i].addEventListener('click', goToPage);
    }

    // Display max and min page
    page_link[min_page].style.display = 'unset';
    page_link[max_page - 1].style.display = 'unset';

    // Display current page
    page_link[ApiServiceTMDB.page].style.display = 'unset';
    page_link[ApiServiceTMDB.page].classList.add('active_page');

    // Display two pages before and after
    if(ApiServiceTMDB.page <= 3) {
        
    }
    console.log(max_page - 3);
    console.log('page ' + ApiServiceTMDB.page);
    if(ApiServiceTMDB.page >= (max_page - 3)) {

    }
    for (let i = 0; i < 3; i++) {
        page_link[ApiServiceTMDB.page + i].style.display = 'unset';
        page_link[ApiServiceTMDB.page - i].style.display = 'unset';
    }

    const first_ellipsis = document.querySelector('.start_ellipsis');
    const last_ellipsis = document.querySelector('.end_ellipsis');
    if(ApiServiceTMDB.page <= 3) {
        first_ellipsis.style.display = 'none';
    }
    if(ApiServiceTMDB.page >= (max_page - 4)) {
        last_ellipsis.style.display = 'none';
    } else {
        first_ellipsis.style.display = 'unset';
        last_ellipsis.style.display = 'unset';
    }
}

document.querySelector('#next-page').addEventListener('click', nextPage);
document.querySelector('#prev-page').addEventListener('click', prevPage);
function nextPage(event) {
    event.preventDefault();
    ApiServiceTMDB.page++;
    onLoadTrend(ApiServiceTMDB.page);
}
function prevPage(event) {
    event.preventDefault();
    ApiServiceTMDB.page--;
    onLoadTrend(ApiServiceTMDB.page);
}

export default getTotalPages;