import ApiServiceTMDB from '../apiService/ApiService';
import onLoadTrend from './loadTrend';
import onLoadSearch from './loadSearch';
import applyFilterSubmit from './filterByGenre';

function getTotalPages(totalPages) {
  console.log(totalPages);
  let total_pages = totalPages;
  if (!document.querySelector('.pagination').classList.contains('created')) {
    insertPagination(total_pages);
  }
  // if (totalPages !== undefined) {
  paginate(0, total_pages);
  // }
}

function fetchTypeInstall(ep) {
  switch (ep[0].toString()) {
    case 'trendFilms':
      onLoadTrend(ApiServiceTMDB.page);
      break;
    case 'searchFilms':
      onLoadSearch(ApiServiceTMDB.page);
      break;
    case 'byGenreFilms':
      applyFilterSubmit(ApiServiceTMDB.page);
      break;
    case 'discoverFilms':
      ApiServiceTMDB.fetchDiscover();
      break;
  }
}

// Go to the pressed page
function goToPage(event) {
  event.preventDefault();
  document.querySelector('.collection').innerHTML = '';
  fetchTypeInstall(ApiServiceTMDB.fetchType);
  let thisPageNum = Number(this.getAttribute('data-num'));
  ApiServiceTMDB.page = thisPageNum;
  console.log(ApiServiceTMDB.page);

  // getTotalPages();
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
  console.log(pages);
  for (let i = 2; i < pages; i++) {
    let li = document.createElement('li');
    li.classList.add('page-item');
    let page_link = `<a class="page-link page_num" href="#" data-num="${i}">${i}</a>`;
    li.innerHTML = page_link;
    // console.log(li);
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
  const first_ellipsis = document.querySelector('.start_ellipsis');
  const last_ellipsis = document.querySelector('.end_ellipsis');
  // Hide other page links and give them event listeners
  for (let i = 0; i < page_link.length; i++) {
    page_link[i].style.display = 'none';
    page_link[i].classList.remove('active_page');
    page_link[i].addEventListener('click', goToPage);
  }
  page_link[ApiServiceTMDB.page - 1].style.display = 'unset';
  page_link[ApiServiceTMDB.page - 1].classList.add('active_page');
  window.addEventListener('load', getPageLinks());

  function getPageLinks() {
    if (window.innerWidth > 400) {
      // Display max and min page

      page_link[min_page].style.display = 'unset';
      page_link[max_page - 1].style.display = 'unset';

      // Page links display logic
      for (let i = 0; i < 3; i++) {
        if (ApiServiceTMDB.page >= max_page - 3) {
          last_ellipsis.style.display = 'none';
          first_ellipsis.style.display = 'unset';
        } else if (ApiServiceTMDB.page <= 3) {
          first_ellipsis.style.display = 'none';
          last_ellipsis.style.display = 'unset';
        } else {
          first_ellipsis.style.display = 'unset';
          last_ellipsis.style.display = 'unset';
        }
        try {
          page_link[ApiServiceTMDB.page - 1 - i].style.display = 'unset';
        } catch (error) {}
        try {
          page_link[ApiServiceTMDB.page - 1 + i].style.display = 'unset';
        } catch (error) {}
      }
    }
    if (window.innerWidth <= 400) {
      first_ellipsis.style.display = 'none';
      last_ellipsis.style.display = 'none';
      page_link[max_page - 1].style.display = 'none';
      page_link[min_page].style.display = 'none';
      for (let i = 0; i < 3; i++) {
        try {
          page_link[ApiServiceTMDB.page - 1 - i].style.display = 'unset';
        } catch (error) {}
        try {
          page_link[ApiServiceTMDB.page - 1 + i].style.display = 'unset';
        } catch (error) {}
      }
    }
  }
}

document.querySelector('#next-page').addEventListener('click', nextPage);
document.querySelector('#prev-page').addEventListener('click', prevPage);
function nextPage(event) {
  event.preventDefault();
  ApiServiceTMDB.page++;

  fetchTypeInstall(ApiServiceTMDB.fetchType);
  // getTotalPages();
}
function prevPage(event) {
  event.preventDefault();
  ApiServiceTMDB.page--;

  fetchTypeInstall(ApiServiceTMDB.fetchType);
  // getTotalPages();
}

export default getTotalPages;
