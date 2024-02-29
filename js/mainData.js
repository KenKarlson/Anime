const mainData = () => {
  fetch("https://anime-s0a5-default-rtdb.firebaseio.com/anime.json")
    .then((res) => res.json())
    .then((data) => console.log(data));
};
mainData();
