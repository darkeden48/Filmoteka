import ApiServiceTMDB from '../apiService/ApiService';
import onLoadTrend from './loadTrend';


async function getTotalPages() {
    ApiServiceTMDB.fetchTrendFilms(ApiServiceTMDB.page).then(data => {
        let total_pages = data.total_pages;
        insertPagination(total_pages);
    });
}
getTotalPages();

function insertPagination(pages) {
    const min_page = 1;
    const max_page = pages;

    // Add page numeration under the page
    const pages_container = document.querySelector('#page_numbers');
    for (let i = 1; i < max_page + 1; i++) {
        let li = document.createElement('li');
        li.classList.add('page-item');
        let page_link = `<a class="page-link" href="#" data-num="${i}">${i}</a>`;
        li.innerHTML = page_link;
        pages_container.appendChild(li);
    }
    const page_link = document.querySelectorAll('.page-link');
    for (let i = 0; i < page_link.length; i++) {
        page_link[i].addEventListener('click', goToPage);
    }
    // Hide other page links
    for (let i = 1; i < page_link.length - 1; i++) {
        page_link[i].style.display = 'none';
    }
    // Pagination logic
    for (let i = 0; i < 3; i++) {
        // Display max and min page
        page_link[min_page].style.display = 'unset';
        page_link[max_page].style.display = 'unset';

        // Display ellipsis
        page_link[min_page + 1].style.display = 'unset';
        page_link[max_page - 1].style.display = 'unset';
        page_link[min_page + 1].innerHTML = '...';
        page_link[max_page - 1].innerHTML = '...';
        page_link[min_page + 1].removeAttribute('href');
        page_link[max_page - 1].removeAttribute('href');
        page_link[min_page - 1].removeEventListener("click", goToPage);
        page_link[min_page + 1].removeEventListener("click", goToPage);

        // Display current page
        page_link[ApiServiceTMDB.page].style.display = 'unset';

        // Display two pages before and after
        page_link[ApiServiceTMDB.page + i].style.display = 'unset';
        page_link[ApiServiceTMDB.page - i].style.display = 'unset';
    }
    
    // Go to the pressed page
}
function goToPage(event) {
    event.preventDefault();
    document.querySelector('.collection').innerHTML = '';
    ApiServiceTMDB.page = this.getAttribute('data-num');
    onLoadTrend(this.getAttribute('data-num'));
    ApiServiceTMDB.fetchTrendFilms(ApiServiceTMDB.page).then(data => {
        let total_pages = data.total_pages;
        insertPagination(total_pages);
    });
}

document.querySelector('#next-page').addEventListener('click', nextPage);
document.querySelector('#prev-page').addEventListener('click', prevPage);
function nextPage(event) {
    event.preventDefault();
    ApiServiceTMDB.page++;
    console.log(ApiServiceTMDB.page);
    onLoadTrend(ApiServiceTMDB.page);
}
function prevPage(event) {
    event.preventDefault();
    ApiServiceTMDB.page--;
    onLoadTrend(ApiServiceTMDB.page);
}