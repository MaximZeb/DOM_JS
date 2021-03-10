document.addEventListener('DOMContentLoaded', () => {

    let div = document.createElement('div');
    // div parrent
    div.innerText = '1 div';
    div.setAttribute('style', 'color: white; display:grid; max-width: 320px;  min-width: 1000px; margin: 0 auto;');
    document.body.appendChild(div);

    // body
    document.body.setAttribute('style', 'background: url(https://images.wallpaperscraft.ru/image/planeta_kratery_kosmos_svet_61032_1600x900.jpg) no-repeat fixed; background-size: cover;)');
    

})