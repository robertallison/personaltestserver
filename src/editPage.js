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
        storeData(formData);
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
populateSecondFeed();



// Function to collect form data
function collectFormData() {
    const currentTime = new Date();
    return {
        // Retrieve values from the form inputs and dropdowns
        plant: document.getElementById("plantDropdown").value,
        date: document.getElementById("date").value,
        time: currentTime,
        name: document.getElementById("namesDropdown").value, // Corrected ID reference
        primaryFeed: document.getElementById("primaryFeed").value,
        blastDate: document.getElementById("blastDate").value,
        thirtyfive: document.querySelector("input[placeholder='Enter details for 35 Ton']").value,
        forty: document.querySelector("input[placeholder='Enter details for 40 Ton']").value,
        fifty: document.querySelector("input[placeholder='Enter details for 50 Ton']").value,
        sixty: document.querySelector("input[placeholder='Enter details for 60 Ton']").value,
        seventy: document.querySelector("input[placeholder='Enter details for 70 Ton']").value,
        tonsPrimary: document.querySelector("input[placeholder='Tons crushed Primary']").value,
        tonsDryPlant: document.querySelector("input[placeholder='Tons crushed Dry Plant']").value,
        dryPlantScheduledHours: document.querySelector("input[placeholder='Dry Plant Scheduled Hours']").value,
        dryPlantRunHours: document.querySelector("input[placeholder='Dry Plant Run Hours']").value,
        nonOperationalHours: document.querySelector("input[placeholder='Non Operational Downtime Hours']").value,
        nonOperationalComments: document.querySelector("input[placeholder='Non operational comments']").value,
        primaryEquipment1: document.getElementById("primaryEquipment1").value,
        primaryReason1: document.getElementById("primaryReason1").value,
        primaryadditionaldetails: document.querySelector("input[placeholder='Additional details 1']"),
        primaryEquipment2: document.getElementById("primaryEquipment2").value,
        primaryReason2: document.getElementById("primaryReason2").value,
        primaryadditionaldetails2: document.querySelector("input[placeholder='Additional details 2']"),
        runFactors: document.getElementById("runFactors").value,
        secondarywetplant: document.getElementById("secondaryplantDropdown").value,
        wetSource: document.getElementById("wetSource").value,
        tonsProducedWetPlant: document.querySelector("input[placeholder='Tons Produced Wet Plant']").value,
        wetPlantOperatingHours: document.querySelector("input[placeholder='Wet Plant Operating Hours']").value,
        nonOperationalDowntime: document.querySelector("input[placeholder='Non Operational Downtime']").value,
        nonOperationalDowntimeComments: document.querySelector("input[placeholder='Non Operational Downtime Comments']").value,
        secondaryEquip1: document.getElementById("secondaryEquip1").value,
        secondaryReason1: document.getElementById("secondaryReason1").value,
        secondaryEquip2: document.getElementById("secondaryEquip2").value,
        secondaryReason2: document.getElementById("secondaryReason2").value,
        wetplantrunfactors: document.getElementById("wetplantrunfactors").value,
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
function storeData(data) {
    localStorage.setItem("formData", JSON.stringify(data));
}

console.log("push from 11:45am");