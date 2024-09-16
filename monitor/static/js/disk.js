// Simulate API call and data load
const fetchDiskData = async (apiUrl) => {
    const tile = document.getElementById("disk-tile");
    const progress = tile.querySelector('.progress-circle');
    const dataElement = tile.querySelector('.data');

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(typeof data);
        progress.style.display = 'none';
        dataElement.style.display = 'block';

        for (let key in data) {
            document.getElementById(key).textContent = data[key]
        }
    } catch (error) {
        progress.style.display = 'none';
        dataElement.style.display = 'block';
        dataElement.textContent = 'Error loading data';
        console.error('Error fetching data:', error);
    }
};

