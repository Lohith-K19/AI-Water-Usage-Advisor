function analyzeUsage() {

    let water = document.getElementById("water").value;
    let people = document.getElementById("people").value;
    let result = document.getElementById("result");

    if (water === "" || people === "") {
        alert("Please enter all details");
        return;
    }

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
