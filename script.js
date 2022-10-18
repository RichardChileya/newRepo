const store = [{
  image: '/images/geek.webp',
  title: 'Space1',
  comment: 'Comment',
  reserve: 'Reservation',
}];

store.forEach((info) => {
  const cardContainer = document.querySelector('.card-container');
  const cardData = document.createElement('div');
  cardData.className = 'card-data';
  cardData.innerHTML = `

  <img class = "display-image" src = '${info.image}'/>
  <div class = "title-like">
    <span>${info.title}</span>
    <i class="fa-regular fa-heart"></i>
  </div>
  <div class = 'inner-info'>
  <span>${info.comment}</span>
  <span>${info.reserve}</span>
  </div>
 
  `;
  cardContainer.appendChild(cardData);
});

store.forEach((info) => {
  const cardContainer = document.querySelector('.card-container');
  const cardData = document.createElement('div');
  cardData.className = 'card-data';
  cardData.innerHTML = `
  <button type="button" class="popUp-btn">
  <img class = "display-image" src = '${info.image}'/>
  <div class = "title-like">
    <span>${info.title}</span>
    <i class="fa-regular fa-heart"></i>
  </div>

  <div class = 'inner-info'>
  <span>${info.comment}</span>
  <span>${info.reserve}</span>
  </div>
  </button>
  `;
  cardContainer.appendChild(cardData);
});
