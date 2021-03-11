document.addEventListener('DOMContentLoaded', () => {
    // Rename title 
    document.title = 'Космическая одиссея';

    // div parrent
    const DIV_PARRENT = document.createElement('div');
    DIV_PARRENT.setAttribute('id', 'DIV_PARRENT_1');
    DIV_PARRENT.setAttribute('style', 'display: grid; grid-template-columns: 1fr 1fr ; grid-template-rows: 1fr 1fr 1fr; height:1000px; justify-content: center; align-items: end; color: white; max-width: 320px;  min-width: 1300px; margin: 0 auto;');
    document.body.appendChild(DIV_PARRENT);
    let ID_DIV_PARRENT = document.getElementById('DIV_PARRENT_1');
    console.log(ID_DIV_PARRENT);

    // Create tag h1
    const header = document.createElement('h1');
    header.innerText = "Ocтавте заявку на участие в космической экспедиции";
    document.getElementById('DIV_PARRENT_1').insertBefore(header, DIV_PARRENT_1.firstChild);
    header.setAttribute('id', 'header_1');
    header.setAttribute('style', 'color:white; font: 40px Arial, sans-serif; grid-column: 1 / -1; grid-row: 1; text-align:center;');

    // Create tag div_description 
    const DIV_LEFT = document.createElement('div');
    document.getElementById('DIV_PARRENT_1').appendChild(DIV_LEFT);
    DIV_LEFT.setAttribute('id', "desc");
    DIV_LEFT.setAttribute('style', 'grid-column:1; grid-row:2;');

    // Create tag div_form
    const DIV_RIGHT = document.createElement('div');
    document.getElementById('DIV_PARRENT_1').appendChild(DIV_RIGHT);
    DIV_RIGHT.setAttribute('id', 'form');
    DIV_RIGHT.setAttribute('style', 'grid-column: 2; grid-row:2');
    // body
    document.body.setAttribute('style', 'background: url(https://images.wallpaperscraft.ru/image/planeta_kratery_kosmos_svet_61032_1600x900.jpg) no-repeat fixed; background-size: cover;)');
    

})