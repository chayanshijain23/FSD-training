
document.getElementById('doctorLoginForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('doctorEmail').value;
    const password = document.getElementById('doctorPassword').value;

   
    if (email === "hello@gmail.com" && password === "12345") {
        alert("Doctor login successful!");
        
        window.location.href = "doctor-dashboard.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
});


document.getElementById('patientLoginForm')?.addEventListener('submit', function (event) {
    event.preventDefault(); 

    const email = document.getElementById('patientEmail').value;
    const password = document.getElementById('patientPassword').value;

    
    if (email === "hello123@gmail.com" && password === "12345") {
        alert("Patient login successful!");
        
        window.location.href = "patient-dashboard.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
});

