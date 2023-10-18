
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
            data.value.forEach(item => {
                const option = document.createElement('option');
                option.value = item.id;           // Setting the value attribute to the id property
                option.textContent = item.choice;   // Setting the displayed text to the name property
                dropdown.appendChild(option);       //adding comment to test if site is behind
            });
            
    
        } catch (error) {
            console.error("Error fetching or processing data:", error);
        }
    }
    
    // Call the function to populate the dropdown
    populateDropdown();

// Function to handle the submission
async function handleSubmit() {
    // Get the selected value from the dropdown
    const dropdown = document.getElementById('namesDropdown');
    const selectedValue = dropdown.value;

    // The endpoint to which you'll send the data for insertion into the database
    const submitEndpoint = '/data-api/rest/plantdowntime_outputdata1';

    try {
        // Send a POST request with the selected data
        const response = await fetch(submitEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ choiceId: selectedValue })
        });

        // Handle the response (e.g., check if it's successful)
        if (response.ok) {
            console.log("Choice successfully inserted into the database!");
        } else {
            console.error("Failed to insert choice into the database:", await response.text());
        }

    } catch (error) {
        console.error("Error sending data:", error);
    }
}

// Add an event listener to the submit button
document.getElementById('submitButton').addEventListener('click', handleSubmit);
//comment for second post