// Simulate API call and data load
const fetchDiskData = async (apiUrl) => {
    const tile = document.getElementById("disk-tile");
    const progress = tile.querySelector('.progress-circle');
    const dataElement = tile.querySelector('.disk');

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        progress.style.display = 'none';
        dataElement.style.display = 'block';

        for (let key in data) {
            const h = document.createElement("h3");
            h.textContent = `${key}: ${data[key]}`;
            dataElement.appendChild(h);
        }
        // dataElement.textContent = data;
    } catch (error) {
        progress.style.display = 'none';
        dataElement.style.display = 'block';
        dataElement.textContent = 'Error loading data';
        console.error('Error fetching data:', error);
    }
};

