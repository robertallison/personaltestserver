// document.getElementById('timestamp').addEventListener('click', function() {
//     const currentTime = new Date();
//     console.log(currentTime.toLocaleTimeString());
// });

// document.getElementById('timestamp').addEventListener('click', function() {
//     const currentTime = new Date();
//     console.log(currentTime.toLocaleTimeString());
// });

const currentTime = new Date();
console.log(currentTime.toLocaleTimeString());

document.addEventListener("DOMContentLoaded", function() {
    // Utility function to handle checkbox interactions
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

    // Setup listeners for each checkbox-input pair
    setupCheckboxListener("checkboxOption1", "textInputOption1");
    setupCheckboxListener("checkboxOption2", "textInputOption2");
    setupCheckboxListener("checkboxOption3", "textInputOption3");
    setupCheckboxListener("checkboxOption4", "textInputOption4");
    setupCheckboxListener("checkboxOption5", "textInputOption5");
});


document.getElementById("submitButton").addEventListener("click", function(event) {
    event.preventDefault();  // Prevent default form submission

    let formData = {
        plant: document.getElementById("plantDropdown").value,
        date: document.getElementById("date").value,
        time: currentTime,
        name: document.getElementById("nameDropdown").value,
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

    storeData(formData);
    
    // Redirect
    window.location.href = "viewPage.html";
});

function storeData(data) {
    localStorage.setItem("formData", JSON.stringify(data));
}




