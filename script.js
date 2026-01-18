function analyzeUsage() {

    // 1️⃣ Read inputs
    let water = document.getElementById("water").value;
    let people = document.getElementById("people").value;
    let result = document.getElementById("result");

    // 2️⃣ INPUT VALIDATION (ADD HERE)
    if (water === "" || people === "") {
        alert("Please enter all details");
        return;
    }

    if (water <= 0 || people <= 0) {
        alert("Please enter valid positive values");
        return;
    }

    if (people > 20) {
        alert("Please enter realistic number of people");
        return;
    }

    if (water < 50) {
        alert("Water usage seems unrealistically low");
        return;
    }

    // 3️⃣ AI LOGIC
    let perPerson = water / people;
    result.style.display = "block";

    if (perPerson <= 135) {
        result.style.background = "#e8f5e9";
        result.innerHTML = "💧 <b>Normal Usage</b><br>You are using water responsibly.";
    } 
    else if (perPerson <= 200) {
        result.style.background = "#fffde7";
        result.innerHTML = "⚠️ <b>High Usage</b><br>Reduce shower time and fix leaks.";
    } 
    else {
        result.style.background = "#ffebee";
        result.innerHTML = "🚨 <b>Critical Usage</b><br>Immediate conservation needed.";
    }
}
