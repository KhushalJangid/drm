// Simulate API call and data load
const fetchMemoryData = async (apiUrl) => {
    const tile = document.getElementById("memory-tile");
    const progress = tile.querySelector('.progress-circle');
    const dataElement = tile.querySelector('.memory');

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(typeof data);
        progress.style.display = 'none';
        dataElement.style.display = 'block';

        for (let key in data) {
            document.getElementById(key).textContent = Number((data[key]).toFixed(2))
        }
    } catch (error) {
        progress.style.display = 'none';
        dataElement.style.display = 'block';
        dataElement.textContent = 'Error loading data';
        console.error('Error fetching data:', error);
    }
};

