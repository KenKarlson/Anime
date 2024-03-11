const mainData = () => {
  const renderTopAnime = (array)=>{
    const wrapper = document.querySelector('.filter__gallery');
    wrapper.innerHTML = '';
    array.forEach(element => {
      wrapper.insertAdjacentHTML('beforebegin',`
      <div class="product__sidebar__view__item set-bg mix" >
        <div class="ep">18 / &?</div>
        <div class="view"><i class="fa fa-eye"></i>${element.views}</div>
        <h5><a href="">Name</a></h5>  
      </div>
      `);
        console.log(element.image+'\n'+element.views);
    });
    //console.log(array);
  };;


  fetch('../new-db.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderTopAnime(data.anime.sort((a, b)=>{ 
        return b.views - a.views
      }).slice(0,7));
    });
};
mainData();
