export class ui{
    constructor(){

    }
     displayGames(why) {
        var boxGame=``;
        for (let i = 0; i < why.length; i++) {
            boxGame+=`   <div class="col-lg-3 col-md-6">
            <div class="card bg-dark shadow" data-id="${why[i].id}">
                <div class="img-caption  position-relative  ">
                    <div class="overflow-hidden">
                    <img src="${why[i].thumbnail}" alt="" class="w-100">
                    <div class="overlay"></div>
                    </div>
                    
                </div>
                <div class="text-caption  text-white p-2">
                    <div class="d-flex justify-content-between align-items-center">
                        <p class='fs-3'>${why[i].title}</p>
                        <button class="btn btn-primary">Free</button>
                    </div>
                    <p class="text-center">${why[i].short_description.split(" ",6)}..</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <p>${why[i].genre}</p>
                        <p>${why[i].platform}</p>
                    </div>
                </div>
            </div>
        </div>
           `

        }
        document.getElementById('games').innerHTML=boxGame;
    

    }
     displayDetails(who) {
        let boxGame=``;
        boxGame+=`   <div class="col-lg-4">
        <img src="${who.thumbnail}" alt="" class="w-100">
      </div>
      <div class="col-lg-8 fs-4">
        <p>Title: ${who.title}</p>
        <p>Category: <span class="bg-primary p-2 rounded-5">${who.genre}</span></p>
        <p>Platform: <span class="bg-primary p-2 rounded-5">${who.platform}</span></p>
        <p>Status: <span class="bg-primary p-2 rounded-5">${who.status}</span></p>
        <p class="fs-6">${who.description}</p>
        <button class="btn border-1 border-warning text-white" id="btn" ><a href="${who.game_url}" target="_blank" class="fs-3">Show Game</a></button>
      </div>`;
      document.getElementById('main2').innerHTML=boxGame
      document.getElementById('close').addEventListener('click', ()=> {
        document.querySelector('#second').classList.add('d-none')
        document.querySelector('.first').classList.remove('d-none')
        document.querySelector('#game1').classList.remove('d-none')
      })
    }

}