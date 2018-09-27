let createElements = function(photo, author, title) {
  let art =
    "<div class='collections_container'><a href='#'><img src=" +
    photo +
    "><h1 class='author'>" +
    author +
    "</h1><p>" +
    title +
    "</p></a></div>";

  document.getElementById("collections_img").innerHTML += art;
};

let makeArt = function(id) {
  document.getElementById("collections_img").innerHTML = "";
  for (let i = 0; i < images.length; i++) {
    if (images[i].collection == id) {
      createElements(images[i].photo, images[i].author, images[i].title);
    }
  }
};

let images = [
  {
    author: "Michael DeDutter",
    title: "Movement Study in Black#6",
    collection: "NewArrival",
    photo: "./assets/artImg/0000.png",
    mood: "Abstract",
    medium: "Paintings",
    palette: "Dark Tones",
    price: "+1000$"
  },

  {
    author: "Cheatwood",
    title: "Directions for use with Water",
    collection: "NewArrival",
    photo: "./assets/artImg/0001.png",
    mood: "Colorful",
    medium: "Prints&Multiples",
    palette: "Bright Hues",
    price: "+300$"
  },

  {
    author: "Luke Chismell",
    title: "Untitled",
    collection: "NewArrival",
    photo: "./assets/artImg/0002.png",
    mood: "Black&White",
    medium: "Paintings",
    palette: "Dark Tones",
    price: "-300$"
  },

  {
    author: "Toffer Chin",
    title: "Relief",
    collection: "NewArrival",
    photo: "./assets/artImg/0003.png",
    mood: "Minimal",
    medium: "Sculptures",
    palette: "",
    price: "+1000$"
  },

  {
    author: "Luke Chismell",
    title: "Untitled",
    collection: "NewArrival",
    photo: "./assets/artImg/0004.png",
    mood: "Abstract",
    medium: "Sculptures",
    palette: "",
    price: "-300&"
  },

  {
    author: "Carla Cascales Alimbau",
    title: "Erato",
    collection: "NewArrival",
    photo: "./assets/artImg/0005.png",
    mood: "Minimal",
    medium: "Mixed Media",
    palette: "",
    price: "+300$"
  },

  {
    author: "Johanna Tagada",
    title: "This is travel too",
    collection: "MinimalArt",
    photo: "./assets/artImg/0006.jpg",
    mood: "Minimal",
    medium: "Paintings",
    palette: "Bright Hues",
    price: "-300$"
  },

  {
    author: "Lola Rose Thompson",
    title: "Venus Good Hair Day",
    collection: "MinimalArt",
    photo: "./assets/artImg/0007.jpg",
    mood: "Minimal",
    medium: "Paintings",
    palette: "Bright Hues",
    price: "+300$"
  },

  {
    author: "Luke Chiswell",
    title: "Untitled",
    collection: "MinimalArt",
    photo: "./assets/artImg/0008.jpg",
    mood: "Minimal",
    medium: "Sculptures",
    palette: "",
    price: "+1000$"
  },

  {
    author: "Carla Cascales",
    title: "Celeste",
    collection: "MinimalArt",
    photo: "./assets/artImg/0009.jpg",
    mood: "Minimal",
    medium: "Drawing",
    palette: "",
    price: "+1000$"
  },

  {
    author: "Satsuki Shibuya",
    title: "Akimirka",
    collection: "MinimalArt",
    photo: "./assets/artImg/0010.jpg",
    mood: "Minimal",
    medium: "Paintings",
    palette: "Pastels",
    price: "+300$"
  },

  {
    author: "Michael DeSutter",
    title: "Movement Study in White#18",
    collection: "BW",
    photo: "./assets/artImg/0011.jpg",
    mood: "Black & White",
    medium: "Paintings",
    palette: "Black & White",
    price: "+300$"
  },

  {
    author: "Isaac Zoller",
    title: "Waves of Sand",
    collection: "BW",
    photo: "./assets/artImg/0012.jpg",
    mood: "Black & White",
    medium: "Drawing",
    palette: "Black & White",
    price: "+300&"
  },

  {
    author: "Emily Knech",
    title: "Laura One",
    collection: "BW",
    photo: "./assets/artImg/0013.jpg",
    mood: "Black & White",
    medium: "Photography",
    palette: "Black & White",
    price: "-300&"
  },

  {
    author: "Isaac Zoller",
    title: "Endless Palms",
    collection: "BW",
    photo: "./assets/artImg/0014.jpg",
    mood: "Black & White",
    medium: "Photography",
    palette: "Black & White",
    price: "+300$"
  },

  {
    author: "Isaac Zoller",
    title: "From Here The Way is so Clear",
    collection: "BW",
    photo: "./assets/artImg/0015.jpg",
    mood: "Black & White",
    medium: "Photography",
    palette: "Black & White",
    price: "-300$"
  },

  {
    author: "Martinet & Texareau",
    title: "Hall C2 Fine Art Print",
    collection: "BW",
    photo: "./assets/artImg/0016.jpg",
    mood: "Black & White",
    medium: "Prints & Multiples",
    palette: "Black & White",
    price: "-300$"
  },

  {
    author: "Marc Habor",
    title: "Oaxaca",
    collection: "U30",
    photo: "./assets/artImg/0017.jpg",
    mood: "Colorful",
    medium: "Photography",
    palette: "Black & White",
    price: "-300$"
  },

  {
    author: "Tappans",
    title: "PostCards",
    collection: "U30",
    photo: "./assets/artImg/0018.jpg",
    mood: "Minimal",
    medium: "Prints & Multiples",
    palette: "",
    price: "-3003$"
  },

  {
    author: "Anna Roberts",
    title: "Pineapples",
    collection: "U30",
    photo: "./assets/artImg/0019.jpg",
    mood: "Colorful",
    medium: "Photography",
    palette: "Pastels",
    price: "-3003$"
  },

  {
    author: "Anna Roberts",
    title: "Palms01",
    collection: "U30",
    photo: "./assets/artImg/0020.jpg",
    mood: "Colorful",
    medium: "Photography",
    palette: "Pastels",
    price: "-3003$"
  },

  {
    author: "Marc Gabor",
    title: "Untitled",
    collection: "U30",
    photo: "./assets/artImg/0021.jpg",
    mood: "Urban",
    medium: "Urban",
    palette: "Neutral Hues",
    price: "-3003$"
  },

  {
    author: "Marleigh Curver",
    title: "Heparin",
    collection: "U30",
    photo: "./assets/artImg/0022.jpg",
    mood: "Abstract",
    medium: "",
    palette: "Pastels",
    price: "-3003$"
  },

  {
    author: "Michael DeSutter",
    title: "I'll Be Outside 2",
    collection: "Abstract",
    photo: "./assets/artImg/0023.jpg",
    mood: "Abstract",
    medium: "Paintings",
    palette: "Black & Whyte",
    price: "+1000$"
  },

  {
    author: "Gabrielle Teschner",
    title: "Sandstones - Volta",
    collection: "Abstract",
    photo: "./assets/artImg/0024.jpg",
    mood: "Abstract",
    medium: "Paintings",
    palette: "Cool Tones",
    price: "+300$"
  },

  {
    author: "Maureen Meyer",
    title: "Crawl space",
    collection: "Abstract",
    photo: "./assets/artImg/0025.jpg",
    mood: "Abstract",
    medium: "Paintings",
    palette: "Neutral Hues",
    price: "+300$"
  },

  {
    author: "Ali Beletic",
    title: "Neon Markings",
    collection: "Abstract",
    photo: "./assets/artImg/0026.jpg",
    mood: "Abstract",
    medium: "Paintings",
    palette: "Dark Tones",
    price: "+300$"
  },

  {
    author: "Ethan Caflisch",
    title: "Learning to float 1",
    collection: "Abstract",
    photo: "./assets/artImg/0027.jpg",
    mood: "Abstract",
    medium: "Paintings",
    palette: "Dark Tones",
    price: "+300$"
  },

  {
    author: "Jonni Cheatwood",
    title: "Helps Skin",
    collection: "Abstract",
    photo: "./assets/artImg/0028.jpg",
    mood: "Abstract",
    medium: "Paintings",
    palette: "Dark Tones",
    price: "+1000$"
  },

  {
    author: "Alexis Arnold",
    title: "Concrection with Gold",
    collection: "ArtObjects",
    photo: "./assets/artImg/0029.jpg",
    mood: "Geomeric",
    medium: "Sculptures",
    palette: "Neutral Hues",
    price: "+1000$"
  },

  {
    author: "Alexis Arnold",
    title: "The Art and Science of Java Script",
    collection: "ArtObjects",
    photo: "./assets/artImg/0030.jpg",
    mood: "Colorful",
    medium: "Sculptures",
    palette: "Pastels",
    price: "+300$"
  },

  {
    author: "Matthew Trygve Tung",
    title: "Cross-Dip Bud Vase",
    collection: "ArtObjects",
    photo: "./assets/artImg/0031.jpg",
    mood: "Urban",
    medium: "Sculptures",
    palette: "Dark Tones",
    price: "-300$"
  },

  {
    author: "Johanna Tagada",
    title: "B. s'en est allée",
    collection: "ArtObjects",
    photo: "./assets/artImg/0032.jpg",
    mood: "Abstract",
    medium: "Sculptures",
    palette: "Pastels",
    price: "+300$"
  },

  {
    author: "Alexis Arnold",
    title: "Orange Little Universe",
    collection: "ArtObjects",
    photo: "./assets/artImg/0033.jpg",
    mood: "Landscapes",
    medium: "Sculptures",
    palette: "Dark Tones",
    price: "+300$"
  }
];
