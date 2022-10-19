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
  <button type="button" class= "popUp-btn">
  <span>${info.comment}</span>
  </button>
  </div>
 
  `;
  cardContainer.appendChild(cardData);
});

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
  
  <button type="button" class= "popUp-btn">
  <span>${info.comment}</span>
  </button>
  </div>
 
  `;
  cardContainer.appendChild(cardData);
});

const section = document.querySelector('#window');
const windowContainer = document.createElement('div');
windowContainer.className = 'popup-window';
windowContainer.innerHTML = ` 
<i class="fa-solid fa-x"></i>

<img class="popUp-img" src="./images/geek.webp" alt="">
<h2 class="title">Space 3</h2>
<div class="details">

  <div class="left-block">
    <p> Fuel: titanium </p>
    <p>Weight: 400</p>
  </div>

  <div class="right-block">
    <p>Length: 10,000</p>
    <p>Power: 20,000</p>
  </div>
</div>

<h2>Comments</h2>
<div class="comment-details">

  <span class="comment-body">
    <p>03/11/2021: I'd like to visit this country</p>
    <p>03/11/2021: I was there last summer</p>

  </span>
</div>

<form id="form" action="">
  <div class = 'error-msg'> </div>
  <input id = 'name-input' type="text" placeholder="Your Name">
  <textarea name=" message" id="msg-input" cols="30" rows="10" placeholder="Your insights"></textarea>
  <button id="comment-btn" type="submit">Comment</button>
</form>
`;
section.appendChild(windowContainer);

/* Pop Up Button */
const popWindow = document.querySelector('.popUp-btn');

popWindow.addEventListener('click', (e) => {
  e.preventDefault();
  windowContainer.style.display = 'flex';
});

const exitBtn = document.querySelector('.fa-x');
exitBtn.addEventListener('click', () => {
  windowContainer.style.display = 'none';
});

const form = document.querySelector('#form');
const error = document.querySelector('.error-msg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nameInput = document.querySelector('#name-input').value;
  const msgInput = document.querySelector('#msg-input').value;
  if (nameInput === '' || msgInput === '') {
    error.innerHTML = 'Please fill the fields';
  }
});

// const contries = async () => {
//   const result = await fetch('https://restcountries.com/v3.1/all');
//   const app = await result.json();
//   console.log(app[10].flags.svg);
// };
// contries();

// ID = fDbypMvqt2lrPyv0cdl3

/*
 const involvement = async () => {
  const baseUrl = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',
    { method: 'POST' });

  const app = await baseUrl.text();
  console.log(app);
};
involvement();

*/

/* Posting Like

const involvement = async () => {
  const baseUrl = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fDbypMvqt2lrPyv0cdl3/likes',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: 'item1',
      }),
    });

  const app = await baseUrl.text();
  console.log(app);
};
involvement();
 */

// Getting Likes
/*
const involvement = async () => {
  const baseUrl = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fDbypMvqt2lrPyv0cdl3/likes',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

  const app = await baseUrl.json();
  console.log(app);
};
involvement();
*/
// Posting Comment
/*
const involvement = async () => {
  const baseUrl = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fDbypMvqt2lrPyv0cdl3/comments',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: 'item1',
        username: 'Jane',
        comment: 'Hello',
      }),
    });

  const app = await baseUrl.text();
  console.log(app);
};

involvement();
*/

// Getting Comments
/*
const involvement = async () => {
  const baseUrl = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fDbypMvqt2lrPyv0cdl3/comments?item_id=item1',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

  const app = await baseUrl.json();
  console.log(app);
};

involvement();
*/