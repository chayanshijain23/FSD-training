// // DOM Elements
// const transportInput = document.getElementById('transport');
// const electricityInput = document.getElementById('electricity');
// const meatConsumptionInput = document.getElementById('meatConsumption');
// const calculateButton = document.getElementById('calculate');
// const totalFootprintElement = document.getElementById('totalFootprint');
// const progressBar = document.getElementById('progress');
// const footprintFeedback = document.getElementById('footprintFeedback');

// // Constants for carbon emissions (simplified)
// const TRANSPORT_EMISSION_FACTOR = 0.21; // kg CO2 per km
// const ELECTRICITY_EMISSION_FACTOR = 0.43; // kg CO2 per kWh
// const MEAT_EMISSION_FACTOR = 0.015; // kg CO2 per gram

// // Event listener for calculating carbon footprint
// calculateButton.addEventListener('click', () => {
//     const transportKm = parseFloat(transportInput.value) || 0;
//     const electricityHours = parseFloat(electricityInput.value) || 0;
//     const meatGrams = parseFloat(meatConsumptionInput.value) || 0;

//     // Calculate footprint
//     const transportFootprint = transportKm * TRANSPORT_EMISSION_FACTOR;
//     const electricityFootprint = electricityHours * ELECTRICITY_EMISSION_FACTOR;
//     const meatFootprint = meatGrams * MEAT_EMISSION_FACTOR;

//     const totalFootprint = (transportFootprint + electricityFootprint + meatFootprint).toFixed(2);

//     // Update the dashboard
//     totalFootprintElement.textContent = totalFootprint;
//     updateProgressBar(totalFootprint);
//     updateFeedback(totalFootprint);
// });

// // // Function to update progress bar
// // function updateProgressBar(footprint) {
// //     const maxFootprint = 100; // Arbitrary max for progress bar
// //     const progressPercentage = Math.min((footprint / maxFootprint) * 100, 100);
// //     progressBar.style.width = ${progressPercentage}%;
// // }

// // Function to update progress bar
// function updateProgressBar(footprint) {
//     const maxFootprint = 100; // Arbitrary max for progress bar
//     const progressPercentage = Math.min((footprint / maxFootprint) * 100, 100);
//     progressBar.style.width = `${progressPercentage}%`;
// }


// // Function to provide feedback based on the total footprint
// function updateFeedback(footprint) {
//     let feedbackMessage = '';
//     if (footprint < 20) {
//         feedbackMessage = 'Great job! You have a low carbon footprint.';
//     } else if (footprint < 50) {
//         feedbackMessage = 'You are doing well, but there is room for improvement.';
//     } else {
//         feedbackMessage = 'Your carbon footprint is high! Consider adopting more sustainable habits.';
//     }
//     footprintFeedback.textContent = feedbackMessage;
// }
document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const transportInput = document.getElementById('transport');
    const electricityInput = document.getElementById('electricity');
    const meatConsumptionInput = document.getElementById('meatConsumption');
    const calculateButton = document.getElementById('calculate');
    const totalFootprintElement = document.getElementById('totalFootprint');
    const progressBar = document.getElementById('progress');
    const footprintFeedback = document.getElementById('footprintFeedback');

    // Constants for carbon emissions (simplified)
    const TRANSPORT_EMISSION_FACTOR = 0.21; // kg CO2 per km
    const ELECTRICITY_EMISSION_FACTOR = 0.43; // kg CO2 per kWh
    const MEAT_EMISSION_FACTOR = 0.015; // kg CO2 per gram

    // Event listener for calculating carbon footprint
    calculateButton.addEventListener('click', () => {
        const transportKm = parseFloat(transportInput.value) || 0;
        const electricityHours = parseFloat(electricityInput.value) || 0;
        const meatGrams = parseFloat(meatConsumptionInput.value) || 0;

        // Validate inputs
        if (transportKm < 0 || electricityHours < 0 || meatGrams < 0) {
            alert('Please enter positive values.');
            return;
        }

        // Calculate footprint
        const transportFootprint = transportKm * TRANSPORT_EMISSION_FACTOR;
        const electricityFootprint = electricityHours * ELECTRICITY_EMISSION_FACTOR;
        const meatFootprint = meatGrams * MEAT_EMISSION_FACTOR;

        const totalFootprint = (transportFootprint + electricityFootprint + meatFootprint).toFixed(2);

        // Update the dashboard
        totalFootprintElement.textContent = totalFootprint;
        updateProgressBar(totalFootprint);
        updateFeedback(totalFootprint);
    });

    // Function to update progress bar
    function updateProgressBar(footprint) {
        const maxFootprint = 100; // Arbitrary max for progress bar
        const progressPercentage = Math.min((footprint / maxFootprint) * 100, 100);
        progressBar.style.width = $['progressPercentage']%
    }

    // Function to provide feedback based on the total footprint
    function updateFeedback(footprint) {
        let feedbackMessage = '';
        if (footprint < 20) {
            feedbackMessage = 'Great job! You have a low carbon footprint.';
        } else if (footprint < 50) {
            feedbackMessage = 'You are doing well, but there is room for improvement.';
        } else {
            feedbackMessage = 'Your carbon footprint is high! Consider adopting more sustainable habits.';
        }
        footprintFeedback.textContent = feedbackMessage;
    }
});
