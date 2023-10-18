
const API_URL = 'http://localhost:4280/rest/testNames';

// Fetch data from the API and populate the dropdown
fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        const dropdown = document.getElementById('equipmentDropdown');
        
        data.forEach(equipment => {
            const option = document.createElement('option');
            option.value = names.choice; 
            // option.textContent = equipment.choice; 
            dropdown.appendChild(option);
        });
    })
    .catch(error => {
        console.error("There was an error fetching the equipment data:", error);
    });


    // async function list() {
    //     const endpoint = '/data-api/rest/Person';
    //     const response = await fetch(endpoint);
    //     const data = await response.json();
    //     console.table(data.value);
    //   }

      async function names() {
        const endpoint = '/data-api/rest/Names';
        const response = await fetch(endpoint);
        const data = await response.json();
        console.table(data.value);
      }
      
      async function namesFull() {
        const endpoint = '/data-api/rest/Names';
        const response = await fetch(endpoint);
        const data = await response.json();
        console.table(data.value);
      }

      async function populateDropdown() {
        const endpoint = '/data-api/rest/Names';
    
        try {
            const response = await fetch(endpoint);
            const data = await response.json();
    
            const dropdown = document.getElementById('namesDropdown');
    
            // Clear any existing options
            dropdown.innerHTML = '';
    
            // Assuming data.value is an array of names
            data.ngvalue.forEach(name => {
                const option = document.createElement('option');
                option.value = name;
                option.textContent = name;
                dropdown.appendChild(option);
            });
    
        } catch (error) {
            console.error("Error fetching or processing data:", error);
        }
    }
    
    // Call the function to populate the dropdown
    populateDropdown();
    