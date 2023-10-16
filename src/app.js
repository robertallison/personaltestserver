
const API_URL = 'http://localhost:4280/rest/Equipment';

async function list() {
    const endpoint = '/data-api/rest/Equipment';
    const response = await fetch(endpoint);
    const data = await response.json();
    console.table(data.value);
  }

// Fetch data from the API and populate the dropdown
fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        const dropdown = document.getElementById('equipmentDropdown');
        
        data.forEach(equipment => {
            const option = document.createElement('option');
            // option.value = equipment.id; 
            option.textContent = equipment.choice; 
            dropdown.appendChild(option);
        });
    })
    .catch(error => {
        console.error("There was an error fetching the equipment data:", error);
    });
