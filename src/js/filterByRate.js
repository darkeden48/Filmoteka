const sortButton = document.querySelector('.input-genre');
const galleryList = document.querySelector('.collection').children;

function sortByVote() {
  const gallery = Array.from(galleryList);
  console.log(gallery);
  const voteArray = [];
  for (let index = 0; index < gallery.length; index++) {
    console.log(Number(gallery[index].dataset.vote));
    console.log(gallery[index]);
    voteArray.push(gallery[index]);
  }
  //   if (voteArray.length === gallery.length) {
  voteArray.sort((a, b) => Number(b.dataset.vote) - Number(a.dataset.vote));
  console.log(voteArray);
  //   }
}
//   Array.from(galleryList).map(el => {
//     if(Number(el.attributes['data-vote'].value)>);
//     voteArray.push(voteInNumber);

//     if (voteArray.length === galleryList.length) {
//       return voteArray.sort((a, b) => b - a);
//     }
//   });

sortButton.addEventListener('click', sortByVote);
