import imgFive from '../images/5.jpeg';
import imgSix from '../images/6.jpg';
import imgSeven from '../images/7.jpeg';
import imgEight from '../images/8.jpg';

const refNewSlots = document.querySelector('.nav__item_slots');
const refDiv = document.querySelector('.footer_policy');
const a = refNewSlots.addEventListener('click', onClick);

const gall = [
  {
    img: imgFive,
    title: 'Green Grocery',
  },
  {
    img: imgSix,
    title: 'Master of Gold',
  },
  {
    img: imgSeven,
    title: 'Legacy of Doom',
  },
  {
    img: imgEight,
    title: 'Mummyland Treasures',
  },
];

function onClick() {
  return gall
    .map(({ img, title }) => {
      return `
    
      <div>
        <a href=${img}></a>
        <h3>${title}</h3>
      </div>
   
        `;
    })
    .join('');
  refDiv.insertAdjacentHTML('afterend', onClick);
}
