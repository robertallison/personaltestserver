const API_URL = 'http://localhost:4280/rest/testNames';

// Event listener for DOMContentLoaded to ensure the DOM is fully loaded before executing any script
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    populateDropdown();  // Call the function to populate the names dropdown

    // Setup listeners for each checkbox-input pair
    setupCheckboxListener("checkboxOption1", "textInputOption1");
    setupCheckboxListener("checkboxOption2", "textInputOption2");
    setupCheckboxListener("checkboxOption3", "textInputOption3");
    setupCheckboxListener("checkboxOption4", "textInputOption4");
    setupCheckboxListener("checkboxOption5", "textInputOption5");

    // Submit button event listener
    document.getElementById("submitButton").addEventListener("click", function(event) {
        event.preventDefault();  // Prevent default form submission
    
        // Collect all form data
        let formData = collectFormData();
        
        // Submit the data and then redirect on success
        submitFormData(formData)
            .then(() => {
                window.location.href = "viewPage.html";  // Redirect only on successful submission
            })
            .catch(error => {
                console.error("Submission failed:", error);
                // Handle error, maybe display a message to the user
            });
    });
    
});

// Function to populate the names dropdown
async function populateDropdown() {
    const endpoint = '/data-api/rest/Names';

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data received:", data);

        const dropdown = document.getElementById('namesDropdown');
        if (!Array.isArray(data.value)) {
            throw new Error('data.value is not an array');
        }

        dropdown.innerHTML = '';
        data.value.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.choice;
            dropdown.appendChild(option);
        });

    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}
populateDropdown();

// Function to populate the plant dropdown
async function populatePlantDropdown() {
    const endpoint = '/data-api/rest/Plants';

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data received:", data);

        const dropdown = document.getElementById('plantDropdown');
        if (!Array.isArray(data.value)) {
            throw new Error('data.value is not an array');
        }

        dropdown.innerHTML = '';
        data.value.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.choice;
            dropdown.appendChild(option);
        });

    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}
populatePlantDropdown();

// Function to populate the equip dropdown
async function populateEquipDropdown() {
    const endpoint = '/data-api/rest/Equip';

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data received:", data);

        const dropdown = document.getElementById('primaryEquipment1');
        if (!Array.isArray(data.value)) {
            throw new Error('data.value is not an array');
        }

        dropdown.innerHTML = '';
        data.value.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.choice;
            dropdown.appendChild(option);
        });

    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}
populateEquipDropdown();

// Function to populate the equip dropdown
async function populateEquipDropdown2() {
    const endpoint = '/data-api/rest/Equip';

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data received:", data);

        const dropdown = document.getElementById('primaryEquipment2');
        if (!Array.isArray(data.value)) {
            throw new Error('data.value is not an array');
        }

        dropdown.innerHTML = '';
        data.value.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.choice;
            dropdown.appendChild(option);
        });

    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}
populateEquipDropdown2();

// Function to populate the equip dropdown
async function populateEquipDropdown3() {
    const endpoint = '/data-api/rest/Equip';

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data received:", data);

        const dropdown = document.getElementById('secondaryEquip1');
        if (!Array.isArray(data.value)) {
            throw new Error('data.value is not an array');
        }

        dropdown.innerHTML = '';
        data.value.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.choice;
            dropdown.appendChild(option);
        });

    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}
populateEquipDropdown3();

// Function to populate the equip dropdown
async function populateEquipDropdown4() {
    const endpoint = '/data-api/rest/Equip';

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data received:", data);

        const dropdown = document.getElementById('secondaryEquip2');
        if (!Array.isArray(data.value)) {
            throw new Error('data.value is not an array');
        }

        dropdown.innerHTML = '';
        data.value.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.choice;
            dropdown.appendChild(option);
        });

    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}
populateEquipDropdown4();


// Function to populate the feed source dropdown
async function populatePrimaryFeed() {
    const endpoint = '/data-api/rest/PrimaryFeed';

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data received:", data);

        const dropdown = document.getElementById('primaryFeed');
        if (!Array.isArray(data.value)) {
            throw new Error('data.value is not an array');
        }

        dropdown.innerHTML = '';
        data.value.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.choice;
            dropdown.appendChild(option);
        });

    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}
populatePrimaryFeed();

// Function to populate the down reason dropdown
async function populateDownReasonDropdown() {
    const endpoint = '/data-api/rest/DownReason';

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data received:", data);

        const dropdown = document.getElementById('primaryReason1');
        if (!Array.isArray(data.value)) {
            throw new Error('data.value is not an array');
        }

        dropdown.innerHTML = '';
        data.value.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.choice;
            dropdown.appendChild(option);
        });

    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}
populateDownReasonDropdown();


// Function to populate the down reason dropdown
async function populateDownReasonDropdown2() {
    const endpoint = '/data-api/rest/DownReason';

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data received:", data);

        const dropdown = document.getElementById('primaryReason2');
        if (!Array.isArray(data.value)) {
            throw new Error('data.value is not an array');
        }

        dropdown.innerHTML = '';
        data.value.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.choice;
            dropdown.appendChild(option);
        });

    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}
populateDownReasonDropdown2();


// Function to populate the down reason dropdown
async function populateDownReasonDropdown3() {
    const endpoint = '/data-api/rest/DownReason';

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data received:", data);

        const dropdown = document.getElementById('secondaryReason1');
        if (!Array.isArray(data.value)) {
            throw new Error('data.value is not an array');
        }

        dropdown.innerHTML = '';
        data.value.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.choice;
            dropdown.appendChild(option);
        });

    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}
populateDownReasonDropdown3();

// Function to populate the down reason dropdown
async function populateDownReasonDropdown4() {
    const endpoint = '/data-api/rest/DownReason';

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data received:", data);

        const dropdown = document.getElementById('secondaryReason2');
        if (!Array.isArray(data.value)) {
            throw new Error('data.value is not an array');
        }

        dropdown.innerHTML = '';
        data.value.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.choice;
            dropdown.appendChild(option);
        });

    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}
populateDownReasonDropdown4();


// Function to populate the down reason dropdown
async function populateRunConditions() {
    const endpoint = '/data-api/rest/RunConditions';

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data received:", data);

        const dropdown = document.getElementById('runFactors');
        if (!Array.isArray(data.value)) {
            throw new Error('data.value is not an array');
        }

        dropdown.innerHTML = '';
        data.value.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.choice;
            dropdown.appendChild(option);
        });

    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}
populateRunConditions();


// Function to populate the down reason dropdown
async function populateRunConditions2() {
    const endpoint = '/data-api/rest/RunConditions';

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data received:", data);

        const dropdown = document.getElementById('wetplantrunfactors');
        if (!Array.isArray(data.value)) {
            throw new Error('data.value is not an array');
        }

        dropdown.innerHTML = '';
        data.value.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.choice;
            dropdown.appendChild(option);
        });

    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}
populateRunConditions2();

// Function to populate the down reason dropdown
async function populateSecondFeed() {
    const endpoint = '/data-api/rest/SecondFeed';

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Data received:", data);

        const dropdown = document.getElementById('wetSource');
        if (!Array.isArray(data.value)) {
            throw new Error('data.value is not an array');
        }

        dropdown.innerHTML = '';
        data.value.forEach(item => {
            const option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.choice;
            dropdown.appendChild(option);
        });

    } catch (error) {
        console.error("Error fetching or processing data:", error);
    }
}
populateSecondFeed();



// Function to collect form data
function collectFormData() {
    const currentTime = new Date();
    return {
        // Retrieve values from the form inputs and dropdowns
        entry_timestamp: new Date().toISOString(), // Current timestamp in ISO format
        user_name: document.getElementById("namesDropdown"), 
        plant: document.getElementById("plantDropdown").value, 
        selection_date: document.getElementById("date").value, 
        // selection_name: "",
        primary_feed_source: document.getElementById("primaryFeed").value, // Primary Raw Feed Source
        raw_feed_source_blast: document.getElementById("blastDate").value, // Raw Feed Source - Blast Date

        // Truck Size/Loads Hauled to Primary
        num_primary_loads_35T: document.getElementById("checkboxOption1").checked ? parseInt(document.getElementById("textInputOption1").value) : 0,
        num_primary_loads_40T: document.getElementById("checkboxOption2").checked ? parseInt(document.getElementById("textInputOption2").value) : 0,
        num_primary_loads_50T: document.getElementById("checkboxOption3").checked ? parseInt(document.getElementById("textInputOption3").value) : 0,
        num_primary_loads_60T: document.getElementById("checkboxOption4").checked ? parseInt(document.getElementById("textInputOption4").value) : 0,
        num_primary_loads_70T: document.getElementById("checkboxOption5").checked ? parseInt(document.getElementById("textInputOption5").value) : 0,

        primary_crushed_tons: parseInt(document.querySelector("input[placeholder='Tons crushed Primary']").value),
        dry_plt_produced_tons: parseInt(document.querySelector("input[placeholder='Tons crushed Dry Plant']").value),
        dry_plt_scheduled_hrs: parseFloat(document.querySelector("input[placeholder='Dry Plant Scheduled Hours']").value),
        dry_plt_run_hrs: parseFloat(document.querySelector("input[placeholder='Dry Plant Run Hours']").value),
        dry_plt_nonop_downtime_hrs: parseFloat(document.querySelector("input[placeholder='Non Operational Downtime Hours']").value),
        dry_plt_nonop_downtime_comments: document.querySelector("input[placeholder='Non operational comments']").value,

        primary_down_equipment: document.getElementById("primaryEquipment1").value,
        primary_down_reason: document.getElementById("primaryReason1").value,
        primary_addtl_details: document.querySelector("input[placeholder='Additional Details 1']").value,

        primary_down_equipment_2: document.getElementById("primaryEquipment2").value,
        primary_down_reason_2: document.getElementById("primaryReason2").value,
        primary_addtl_details_2: document.querySelector("input[placeholder='Additional Details 2']").value,

        run_condition_issues: document.getElementById("runFactors").value,

        secondary_wet_plant: document.getElementById("secondaryplantDropdown").value === "Yes" ? 1 : 0, 
        wet_plt_feed_source: document.getElementById("wetSource").value,

        wet_plt_produced_tons: parseInt(document.querySelector("input[placeholder='Tons Produced Wet Plant']").value),
        wet_plt_scheduled_hrs: parseFloat(document.querySelector("input[placeholder='Wet Plant Scheduled Hours']").value),
        wet_plt_op_hrs: parseFloat(document.querySelector("input[placeholder='Wet Plant Operating Hours']").value),
        wet_plt_nonop_downtime_hrs: parseFloat(document.querySelector("input[placeholder='Non Operational Downtime']").value),
        wet_plt_nonop_downtime_comments: document.querySelector("input[placeholder='Non Operational Downtime Comments']").value,

        secondary_down_equipment: document.getElementById("secondaryEquip1").value,
        secondary_down_reason: document.getElementById("secondaryReason1").value,
        secondary_addtl_details: document.querySelector("input[placeholder='Additional Details']").value,

        secondary_down_equipment_2: document.getElementById("secondaryEquip2").value,
        secondary_down_reason_2: document.getElementById("secondaryReason2").value,
        secondary_addtl_details_2: document.querySelector("input[placeholder='Additional Details']").value,

        wet_plt_run_conditon_issues: document.getElementById("wetplantrunfactors").value
    };
}


// Function to setup checkbox listener
function setupCheckboxListener(checkboxId, textInputId) {
    document.getElementById(checkboxId).addEventListener("change", function() {
        let textInput = document.getElementById(textInputId);
        if (this.checked) {
            textInput.style.display = "block";
        } else {
            textInput.style.display = "none";
        }
    });
}

// Function to store form data in local storage
// function storeData(data) {
//     localStorage.setItem("formData", JSON.stringify(data));
// }

// console.log("push from 11:45am");
async function submitFormData(formData) {
    const endpoint = 'http://localhost:4280/rest/Output'; 

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    if (!response.ok) {
        const errorBody = await response.text(); // Attempt to read the error body
        throw new Error(`HTTP error! status: ${response.status}. Server message: ${errorBody}`);
    }

    const result = await response.json();
    console.log("Server response:", result);
    alert('Data successfully submitted!');
    return result; // Resolve the promise with the result
}



// Event listener for form submission
document.getElementById('FormId').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = collectFormData();
    submitFormData(formData);
});



const formElement = document.getElementById('FormId');

if (formElement) {
    formElement.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = collectFormData();
        submitFormData(formData);
    });
} else {
    console.error("Form element not found");
}
