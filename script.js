document.addEventListener('DOMContentLoaded', () => {
    // rename title 
    document.title = 'Космическая одиссея';

    // div parrent
    const DIV_PARRENT = document.createElement('div');
    DIV_PARRENT.innerText = 'Ocтавте заявку на участие в космической экспедиции';
    DIV_PARRENT.setAttribute('class', 'DIV_PARRENT');
    DIV_PARRENT.setAttribute('style', 'color: white; display:grid; max-width: 320px;  min-width: 1000px; margin: 0 auto;');
    DIV_PARRENT.setAttribute('style', 'grid-template-colomns: 1fr 1fr; grid-template-rows: 1fr 1fr 1fr 1fr; heigth:100%; justify-content: center; align-content: center;')
    document.body.appendChild(DIV_PARRENT);
    let CLASS_DIV_PARRENT = DIV_PARRENT.getAttribute('class');
    
    // body
    document.body.setAttribute('style', 'background: url(https://images.wallpaperscraft.ru/image/planeta_kratery_kosmos_svet_61032_1600x900.jpg) no-repeat fixed; background-size: cover;)');
    

})