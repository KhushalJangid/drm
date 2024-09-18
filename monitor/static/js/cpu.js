// Simulate API call and data load
const fetchCpuData = async (apiUrl) => {
    const tile = document.getElementById("cpu-tile");
    const progress = tile.querySelector('.progress-circle');
    const dataElement = tile.querySelector('.cpu');

    try {
        const response = await fetch(apiUrl);
        let data = await response.json();
        progress.style.display = 'none';
        dataElement.style.display = 'block';

        for (let key in data) {
            document.getElementById(key).textContent = data[key]
        }
        data = data["cpu_usage_per_core"];
        const e = document.getElementById("cpu_usage_per_core");
        for (let key in data) {
            const h = document.createElement("h3");
            h.textContent = `CPU ${key}: ${data[key]}%`;
            var progressBar = document.createElement('div');
            progressBar.className = 'progress-bar';
            progressBar.style.width = `${data[key]}%`;
            progressBar.setAttribute('role', 'progressbar');
            progressBar.setAttribute('aria-valuenow', data[key]);
            progressBar.setAttribute('aria-valuemin', '0');
            progressBar.setAttribute('aria-valuemax', '100');
            // progressBar.textContent = '0%';
            var progressBarContainer = document.createElement('div');
            progressBarContainer.className = 'progress';
            progressBarContainer.style.height = '15px';
            progressBarContainer.appendChild(progressBar);
            e.appendChild(h);
            e.appendChild(progressBarContainer)
        }
    } catch (error) {
        progress.style.display = 'none';
        dataElement.style.display = 'block';
        dataElement.textContent = 'Error loading data';
        console.error('Error fetching data:', error);
    }
};

