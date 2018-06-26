var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'images/harry.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'images/lion.jpg'
  },
  {
    id: 3,
    title: 'Szklana pułapka',
    desc: 'fajny film akcji',
    img: 'images/szklana.jpg'
  },
  {
    id: 4,
    title: 'Liga Niezwykłych Dżentelmenów',
    desc: 'Film fantasy',
    img: 'images/liga.jpg'
  }
];


var moviesElements = movies.map(function(movie){
  return React.createElement('li', {key: movie.id},
    React.createElement('h2', {}, movie.title),
    React.createElement('p', {}, movie.desc),
    React.createElement('img', {src: movie.img})
  );
});

var element = React.createElement ('div', {},
  React.createElement('h1', {}, 'Lista filmów'),
  React.createElement('ul', {}, moviesElements )
);

console.log(moviesElements);



ReactDOM.render(element, document.getElementById('app'));