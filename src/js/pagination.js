import ApiServiceTMDB from '../apiService/ApiService';
import onLoadTrend from './loadTrend';

{/* <li class="page-item"><a class="page-link" href="page-1">1</a></li> */}

function insertPagination(pages) {
    const pages_container = document.querySelector('#page_numbers');
    const min_page = 1;
    const max_page = pages;
    for (let i = 1; i < pages + 1; i++) {
        let li = document.createElement('li');
        let page_link = `<li class="page-item"><a class="page-link">${i}</a></li>`;
        li.innerHTML = page_link;
        pages_container.appendChild(li);
    }
    const page_link = document.querySelectorAll('.page-link');
    for (let i = 0; i < page_link.length; i++) {
        page_link[i].addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector('.collection').innerHTML = '';
            onLoadTrend(this.innerHTML);
        });  
    }
}

async function getTotalPages() {
    ApiServiceTMDB.fetchTrendFilms(ApiServiceTMDB.page).then(data => {
        let total_pages = data.total_pages;
        insertPagination(total_pages)
    });
}
getTotalPages();