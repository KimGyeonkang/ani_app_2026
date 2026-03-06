import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h2>I love {name}</h2>
      <img src={picture}/>
   </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image:
      'https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/500px-Dolsot-bibimbap.jpg',
    rating: 5,
  },
  {
    id: 4,
    name: 'Doncasu',
    image: 'https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg',
    rating: 5,
  },
  {
    id: 5,
    name: 'Kimbap',
    image: 'http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg',
    rating: 5,
  },
  {
    id: 6,
    name: "ramen",
    image: "https://cookpit.jp/wp-content/uploads/2025/09/d3f16e63a387afdc2ea56d9dc505ec52.png",
    rating: 5,
  }
]

function App() {
  return <div>
    {foodILike.map(dish => (<Food name={dish.name} picture={dish.image}/>
  ))}
  </div>
}

export default App;