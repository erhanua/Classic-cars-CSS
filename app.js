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
        message = message + " play the music and enjoy"
    }

    document.querySelector('header h1').textContent = message;
}

/*function getRating() {
    let rating = parseInt(prompt("Rate me 1-5"));

    // Eğer kullanıcı geçerli bir değer girmezse bu fonksiyonu sonlandır.
    if (isNaN(rating) || rating < 1 || rating > 5) {
        alert("Please enter a valid number between 1 and 5.");
        return;
    }

    let stars = document.querySelectorAll('#ratingSection i');
    for (let i = 0; i < stars.length; i++) {
        if (i < rating) {
            stars[i].className = "fas fa-star fa-flip fa-xl"; // Dolu yıldız
        } else {
            stars[i].className = "far fa-star fa-flip fa-xl"; // Boş yıldız
        }
    
}*/

function getRating() {
    let rating;

    do {
        rating = parseInt(prompt("Rate me 1-5"));

        if (isNaN(rating) || rating < 1 || rating > 5) {
            alert("Please enter a valid number between 1 and 5.");
        }
    } while (isNaN(rating) || rating < 1 || rating > 5);

    let stars = document.querySelectorAll('#ratingSection i');
    let i = 0;

    while (i < stars.length) {
        if (i < rating) {
            stars[i].className = "fas fa-star fa-flip fa-xl"; // Dolu yıldız
        } else {
            stars[i].className = "far fa-star fa-flip fa-xl"; // Boş yıldız
        }
        i++;
    }
}

