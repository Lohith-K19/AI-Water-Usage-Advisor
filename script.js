function analyzeUsage() {

    let water = document.getElementById("water").value;
    let people = document.getElementById("people").value;

    if (water === "" || people === "") {
        alert("Please enter all details");
        return;
    }

    let perPerson = water / people;
    let message = "";

    if (perPerson <= 135) {
        message = `
        <b>Usage Level:</b> NORMAL ✅<br>
        Great job! You are using water responsibly.
        `;
    } 
    else if (perPerson <= 200) {
        message = `
        <b>Usage Level:</b> HIGH ⚠️<br>
        Try reducing shower time and fixing leaks.
        `;
    } 
    else {
        message = `
        <b>Usage Level:</b> CRITICAL ❌<br>
        Immediate action required to reduce water usage.
        `;
    }

    document.getElementById("result").innerHTML = message;
}