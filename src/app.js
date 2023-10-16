// Assuming the API endpoint for fetching equipment is '/rest/Equipment'
const API_URL = 'http://localhost:4280/rest/Equipment';

// Fetch data from the API and populate the dropdown
fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        const dropdown = document.getElementById('equipmentDropdown');
        
        // Assuming the name of the equipment is in a column called 'name' in the data
        data.forEach(equipment => {
            const option = document.createElement('option');
            option.value = equipment.id; // Assuming there's an 'id' field in your data
            option.textContent = equipment.name; // Modify 'name' if the field name is different
            dropdown.appendChild(option);
        });
    })
    .catch(error => {
        console.error("There was an error fetching the equipment data:", error);
    });
