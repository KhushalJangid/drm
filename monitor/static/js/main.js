const loadData = async () => {
    fetchCpuData("http://127.0.0.1:8000/c");
    fetchMemoryData("http://127.0.0.1:8000/m");
    fetchDiskData("http://127.0.0.1:8000/d");
};

// Call loadData function on window load
window.onload = loadData;
