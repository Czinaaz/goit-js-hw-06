const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.querySelector('.gallery');

const galleryHTML = images.map(image => {

  const li = document.createElement('li');
  li.className = 'gallery-item';
  li.style.listStyle = 'none';
  li.style.margin = '30px';
  
  const img = document.createElement('img');
  img.src = image.url;
  img.alt = image.alt;
  img.className = 'gallery-image';
  img.style.width = '400px';
  
  li.appendChild(img);
  return li.outerHTML;
}).join('');


galleryList.insertAdjacentHTML('beforeend', galleryHTML);


