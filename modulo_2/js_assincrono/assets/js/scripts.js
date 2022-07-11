const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async () => {
    try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        return json[0].url;
    } catch(e) {
        console.log(e.message);
    }
};

const loadImg = async () => {
    catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);

loadImg();
