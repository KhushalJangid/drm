// Simulate API call and data load
const fetchCpuData = async (apiUrl) => {
    const tile = document.getElementById("cpu-tile");
    const progress = tile.querySelector('.progress-circle');
    const dataElement = tile.querySelector('.data');

    try {
        const response = await fetch(apiUrl);
        let data = await response.json();
        progress.style.display = 'none';
        dataElement.style.display = 'block';

        for (let key in data) {
            document.getElementById(key).textContent = data[key]
        }
        data = data["cpu_usage_per_core"];
        document.getElementById("cpu_usage_per_core").textContent = data.toString();
    } catch (error) {
        progress.style.display = 'none';
        dataElement.style.display = 'block';
        dataElement.textContent = 'Error loading data';
        console.error('Error fetching data:', error);
    }
};

