const API_URL = 'https://jsonplaceholder.typicode.com/photos';
const HTMLResponse = document.querySelector('#app');

// Función para crear un retraso
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getTarjetas() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        await sleep(2000);

        const fragment = document.createDocumentFragment();

        data.forEach(item => {
            const div = document.createElement('div');
            div.innerHTML = `
                <h2>${item.title}</h2>
                <img src="${item.thumbnailUrl}" alt="${item.title}">
            `;
            fragment.appendChild(div);
        });

        HTMLResponse.appendChild(fragment);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

getTarjetas();
