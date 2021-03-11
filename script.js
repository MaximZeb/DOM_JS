document.addEventListener('DOMContentLoaded', () => {
    // Rename title 
    document.title = 'Космическая одиссея';

    // div parrent
    
    const DIV_PARRENT = document.createElement('div');
    DIV_PARRENT.setAttribute('id', 'DIV_PARRENT_1');
    DIV_PARRENT.setAttribute('style', 'grid-template-colomns: 1fr 1fr 1fr ; grid-template-rows: 1fr 1fr 1fr 1fr; heigth:100%; justify-content: center; align-content: center;color: white; display:grid; max-width: 320px;  min-width: 1000px; margin: 0 auto;');
    document.body.appendChild(DIV_PARRENT);
    let ID_DIV_PARRENT = document.getElementById('DIV_PARRENT_1');
    console.log(ID_DIV_PARRENT);

    // Create tag h1
    const header = document.createElement('h1');
    header.innerText = "Ocтавте заявку на участие в космической экспедиции";
    document.getElementById('DIV_PARRENT_1').insertBefore(header, DIV_PARRENT_1.firstChild);
    header.setAttribute('id', 'header_1');
    header.setAttribute('style', 'color:white; font: 20px Arial, sans-serif; grid-colomns: 1 / -1; grid-rows: 1;');
    // body
    document.body.setAttribute('style', 'background: url(https://images.wallpaperscraft.ru/image/planeta_kratery_kosmos_svet_61032_1600x900.jpg) no-repeat fixed; background-size: cover;)');
    

})