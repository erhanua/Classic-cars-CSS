window.onload = function() {
    // Ask Name
    let userName = prompt("Please enter your name:");

    // 1. User Input Color Theme
    let userColor = prompt("Hello " + userName + "! Please enter a color for the theme (e.g., blue, red)" );
    if (userColor) {
        document.querySelector('header').style.backgroundColor = userColor;
        document.querySelector('footer').style.backgroundColor = userColor;
    }

    // 2. Dynamic Greeting based on Time
    let timeInput = prompt("Please enter the current hour (0-23):");
    let time = parseInt(timeInput); // Kullanıcının girdiğini bir sayıya dönüştür
    
    let message = "Welcome to The Timeless Journey of Classic Cars.";
    if (time >= 0 && time <= 23) {
        if (time >= 0 && time < 12) {
            message = "Good Morning, " + userName + ". " + message;
        } else if (time >= 12 && time < 18) {
            message = "Good Afternoon, " + userName + ". " + message;
        } else {
            message = "Good Evening, " + userName + ". " + message;
        }
    } else {
        alert("Please enter a valid hour between 0 and 23.");
    }
    
    // Mesajı konsola yazdır
    console.log(message);


    let userResponse = prompt("Do you like music? (yes/no)");

    console.log("User's answer:", userResponse);
    
    if (userResponse === "yes") {
        console.log("Play the music");
        message = message + " Play the music"
    }

    document.querySelector('header h1').textContent = message;
}