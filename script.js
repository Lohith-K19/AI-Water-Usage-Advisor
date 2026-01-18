function analyzeUsage() {

    let water = document.getElementById("water").value;
    let people = document.getElementById("people").value;
    let result = document.getElementById("result");
    let error = document.getElementById("error");

    // Clear old messages
    error.innerHTML = "";
    result.style.display = "none";

    // INPUT VALIDATION
    if (water === "" || people === "") {
        error.innerHTML = "⚠️ Please enter all details";
        return;
    }

    if (water <= 0 || people <= 0) {
        error.innerHTML = "⚠️ Please enter valid positive values";
        return;
    }

    if (people > 20) {
        error.innerHTML = "⚠️ Please enter a realistic number of people";
        return;
    }

    if (water < 50) {
        error.innerHTML = "⚠️ Water usage seems unrealistically low";
        return;
    }

    // AI CALCULATION
    let perPerson = water / people;
    result.style.display = "block";

    if (perPerson <= 135) {
        result.style.background = "#e8f5e9";
        result.innerHTML =
            "💧 <b>Normal Usage</b><br>You are using water responsibly.";
    }
    else if (perPerson <= 200) {
        result.style.background = "#fffde7";
        result.innerHTML =
            "⚠️ <b>High Usage</b><br>Try reducing shower time and fixing leaks.";
    }
    else {
        result.style.background = "#ffebee";
        result.innerHTML =
            "🚨 <b>Critical Usage</b><br>Immediate action required to conserve water.";
    }
}
