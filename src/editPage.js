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
        
        // Store data and redirect
        // storeData(formData);
        window.location.href = "viewPage.html";
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
        user_name: document.getElementById("userNameInput").value,
        plant: document.getElementById("plantDropdown").value,
        selection_date: document.getElementById("selectionDateInput").value, // Format: 'YYYY-MM-DD'
        selection_name: document.getElementById("selectionNameInput").value,
        primary_feed_source: document.getElementById("primaryFeedSourceInput").value,
        raw_feed_source_blast: document.getElementById("rawFeedSourceBlastInput").value, // Format: 'YYYY-MM-DD'
        num_primary_loads_35T: parseInt(document.getElementById("numPrimaryLoads35TInput").value),
        num_primary_loads_40T: parseInt(document.getElementById("numPrimaryLoads40TInput").value),
        num_primary_loads_50T: parseInt(document.getElementById("numPrimaryLoads50TInput").value),
        num_primary_loads_60T: parseInt(document.getElementById("numPrimaryLoads60TInput").value),
        num_primary_loads_70T: parseInt(document.getElementById("numPrimaryLoads70TInput").value),
        primary_crushed_tons: parseInt(document.getElementById("primaryCrushedTonsInput").value),
        dry_plt_produced_tons: parseInt(document.getElementById("dryPltProducedTonsInput").value),
        dry_plt_scheduled_hrs: parseFloat(document.getElementById("dryPltScheduledHrsInput").value),
        dry_plt_run_hrs: parseFloat(document.getElementById("dryPltRunHrsInput").value),
        dry_plt_nonop_downtime_hrs: parseFloat(document.getElementById("dryPltNonOpDowntimeHrsInput").value),
        dry_plt_nonop_downtime_comments: document.getElementById("dryPltNonOpDowntimeCommentsInput").value,
        primary_down_equipment: document.getElementById("primaryDownEquipmentInput").value,
        primary_down_reason: document.getElementById("primaryDownReasonInput").value,
        primary_addtl_details: document.getElementById("primaryAddtlDetailsInput").value,
        primary_down_equipment_2: document.getElementById("primaryDownEquipment2Input").value,
        primary_down_reason_2: document.getElementById("primaryDownReason2Input").value,
        primary_addtl_details_2: document.getElementById("primaryAddtlDetails2Input").value,
        run_condition_issues: document.getElementById("runConditionIssuesInput").value,
        secondary_wet_plant: document.getElementById("secondaryWetPlantCheckbox").id,
        wet_plt_feed_source: document.getElementById("wetPltFeedSourceInput").value,
        wet_plt_produced_tons: parseInt(document.getElementById("wetPltProducedTonsInput").value),
        wet_plt_scheduled_hrs: parseFloat(document.getElementById("wetPltScheduledHrsInput").value),
        wet_plt_op_hrs: parseFloat(document.getElementById("wetPltOpHrsInput").value),
        wet_plt_nonop_downtime_hrs: parseFloat(document.getElementById("wetPltNonOpDowntimeHrsInput").value),
        wet_plt_nonop_downtime_comments: document.getElementById("wetPltNonOpDowntimeCommentsInput").value,
        secondary_down_equipment: document.getElementById("secondaryDownEquipmentInput").value,
        secondary_down_reason: document.getElementById("secondaryDownReasonInput").value,
        secondary_addtl_details: document.getElementById("secondaryAddtlDetailsInput").value,
        secondary_down_equipment_2: document.getElementById("secondaryDownEquipment2Input").value,
        secondary_down_reason_2: document.getElementById("secondaryDownReason2Input").value,
        secondary_addtl_details_2: document.getElementById("secondaryAddtlDetails2Input").value,
        wet_plt_run_conditon_issues: document.getElementById("wetPltRunConditionIssuesInput").value
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
    // Endpoint for the 'Output' entity in your Azure Data API
    const endpoint = 'http://localhost:4280/rest/Output'; // Replace with your actual Azure Data API endpoint

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("Server response:", result);
        // Additional handling based on server response
        alert('Data successfully submitted!'); // Notify user of successful submission
    } catch (error) {
        console.error("Error submitting data:", error);
        alert('Error submitting data: ' + error.message); // Notify user of submission error
    }
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
