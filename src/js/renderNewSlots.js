import six from './six.jpg';
// import { imgSix } from '/src/images/6.jpg';
// import { imgSeven } from '../images/7.jpeg';
// import { imgEight } from '../images/8.jpg';

const refNewSlots = document.querySelector('.nav__item_slots');
const refDiv = document.querySelector('.footer_policy');
// const a = refNewSlots.addEventListener('click', onClick);
// console.log(six);

const gall = [
  {
    img: `${six}`,
    title: 'Green Grocery',
  },
];

// const gall = [imgFive, imgFive, imgFive];

// function onClick(evt) {
//   evt.preventDefault();
//   markup();
// }

// const page = gall
//   .map(
//     ({ img, title }) =>
//       `

//    <div>${img}</div>
//   <p>${title}<p>

//    `
//   )
//   .join('');
// refDiv.innerHTML = `${six}`;

// const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const list = document.querySelector('.list');

// const markup = technologies
//   .map(technology => `<li class="list-item">${technology}</li>`)
//   .join('');

// Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;
