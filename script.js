document.addEventListener('DOMContentLoaded', () => {
    // Rename title 
    document.title = 'Космическая одиссея';

    // div parrent
    const DIV_PARRENT = document.createElement('div');
    DIV_PARRENT.setAttribute('id', 'DIV_PARRENT_1');
    DIV_PARRENT.setAttribute('style', 'display: grid; grid-template-columns: 1fr 50px 1fr ; grid-template-rows: 1fr 1fr 1fr; height:700px;color: white; max-width: 320px;  min-width: 1300px; margin: 0 auto;');
    document.body.appendChild(DIV_PARRENT);
    let ID_DIV_PARRENT = document.getElementById('DIV_PARRENT_1');
    console.log(ID_DIV_PARRENT);

    // Create tag h1
    const header = document.createElement('h1');
    header.innerText = 'Ocтавте заявку на участие в космической экспедиции';
    document.getElementById('DIV_PARRENT_1').insertBefore(header, DIV_PARRENT_1.firstChild);
    header.setAttribute('id', 'header_1');
    header.setAttribute('style', 'color: #ffe52a; font: 2.4em "Fira Sans", sans-serif; grid-column: 1 / -1; grid-row: 1; text-align:center;');

    // Create tag div_description 
    const DIV_LEFT = document.createElement('div');
    document.getElementById('DIV_PARRENT_1').appendChild(DIV_LEFT);
    DIV_LEFT.innerText = 'Вот и наступил тот знаменательный день, когда мы можем предложить нашим любимым читателям совершенно новое туристическое направление. Близкое — всего 100 км и безграничное, безвизовое, но со строжайшими таможенными правилами, притягательное и совершенно не имеющее притяжения. Его можно увидеть, просто подойдя к окну, а отправиться в путешествие — из одной-единственной точки нашей планеты. ';
    DIV_LEFT.setAttribute('id', "desc");
    DIV_LEFT.setAttribute('style', 'grid-column:1; grid-row:2; text-align:center; font: small-caps bold 22px/1 sans-serif; color:black; background-color: white; border-radius:2%;');

    // Create tag div_form
    const DIV_RIGHT = document.createElement('div');
    document.getElementById('DIV_PARRENT_1').appendChild(DIV_RIGHT);
    DIV_RIGHT.setAttribute('id', 'form');
    DIV_RIGHT.setAttribute('style', 'display: grid; grid-column: 3; grid-row:2; background-color: white; border-radius:2%; grid-template-columns: 10px 1fr 10px; grid-template-rows:10px 15px 10px 15px 5px 25px 10px 15px 5px 25px 10px 15px 5px 25px;');

    // Create input name
    const INPUT_NAME = document.createElement('input');
    document.getElementById('form').append(INPUT_NAME);
    INPUT_NAME.setAttribute('placeholder', 'Ваше имя');
    INPUT_NAME.setAttribute('id', 'input_name');
    INPUT_NAME.setAttribute('style', 'grid-column:2; height:20px; grid-row:5;');

    // Create input email 
    const INPUT_EMAIL = document.createElement('input');
    document.getElementById('form').appendChild(INPUT_EMAIL);
    INPUT_EMAIL.setAttribute('placeholder', 'Ваше email');
    INPUT_EMAIL.setAttribute('id', 'input_email');
    INPUT_EMAIL.setAttribute('style', 'grid-column:2; height:20px; grid-row:9;')

    // Create input submit 
    const BUTTON = document.createElement('button');
    BUTTON.innerText = 'Отправить заявку';
    document.getElementById('form').appendChild(BUTTON);
    BUTTON.setAttribute('style', 'grid-column:2; height:20px; grid-row:13;')
    // body
    document.body.setAttribute('style', 'background: url(https://images.wallpaperscraft.ru/image/planeta_kratery_kosmos_svet_61032_1600x900.jpg) no-repeat fixed; background-size: cover;)');
    

})