const BASE_URL = 'http://localhost:4280';

async function listEquipment() {
    try {
        const endpoint = `${BASE_URL}/data-api/rest/DownEquipmentDropdown`;
        const response = await fetch(endpoint);
        const data = await response.json();
        console.table(data.value);
    } catch (error) {
        console.error("There was an error fetching the equipment list:", error);
    }
}

async function list() {
    try {
        const endpoint = `${BASE_URL}/data-api/rest/Person`;
        const response = await fetch(endpoint);
        const data = await response.json();
        console.table(data.value);
    } catch (error) {
        console.error("There was an error fetching the person list:", error);
    }
}

// Fetch data from the API and populate the dropdown
fetch(`${BASE_URL}/rest/DownEquipmentDropdown`)
    .then(response => response.json())
    .then(data => {
        const dropdown = document.getElementById('equipmentDropdown');
        
        data.forEach(equipment => {
            const option = document.createElement('option');
            option.value = equipment.choice; 
            dropdown.appendChild(option);
        });
    })
    .catch(error => {
        console.error("There was an error fetching the equipment dropdown data:", error);
    });
