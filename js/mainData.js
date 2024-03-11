const mainData = () => {
  const renderAnimeList = (array, ganres )=>{
    console.log(array, ganres);
  };
  const renderTopAnime = (array)=>{
    const wrapper = document.querySelector('.filter__gallery');
    wrapper.innerHTML = '';
    array.forEach(element => {
      wrapper.insertAdjacentHTML('afterbegin',`
      <div class="product__sidebar__view__item set-bg mix" data-setbg="${element.image}">
        <div class="ep">${element.rating} / 10</div>
        <div class="view"><i class="fa fa-eye"></i>${element.views}</div>
        <h5><a href="">${element.title}</a></h5>  
      </div>
      `);
        //console.log(element.image+'\n'+element.views);
        wrapper.querySelectorAll('.set-bg').forEach((elem)=>{
          elem.style.backgroundImage = `url(${elem.dataset.setbg})`
        });
    });
    //const imgWr = document.querySelector('.');
    console.log(wrapper);
  };


  fetch('../new-db.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const ganres = new Set();
      renderTopAnime(data.anime.sort((b, a)=>{ 
        return b.views - a.views
      }).slice(0,7));

      data.anime.forEach((item)=>{
        ganres.add(item.ganre);
      });
      renderAnimeList(data.anime, ganres);
      //console.log(ganres);
    });
};
mainData();
