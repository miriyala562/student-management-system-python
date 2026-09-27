function calculateResult() {

    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);

    let mark1 = Number(document.getElementById("mark1").value);
    let mark2 = Number(document.getElementById("mark2").value);
    let mark3 = Number(document.getElementById("mark3").value);

    let message = document.getElementById("message");
    let resultCard = document.getElementById("resultCard");
    let result = document.getElementById("result");

    // Check name
    if (name === "") {
        message.innerHTML = "Please enter student name.";
        message.style.color = "red";
        return;
    }

    // Check age
    if (age <= 0) {
        message.innerHTML = "Please enter a valid age.";
        message.style.color = "red";
        return;
    }

    // Check marks
    if (
        mark1 < 0 || mark1 > 100 ||
        mark2 < 0 || mark2 > 100 ||
        mark3 < 0 || mark3 > 100
    ) {
        message.innerHTML = "Marks must be between 0 and 100.";
        message.style.color = "red";
        return;
    }

    // Calculate total
    let total = mark1 + mark2 + mark3;

    // Calculate average
    let average = total / 3;

    // Calculate result
    let status;

    if (mark1 >= 40 && mark2 >= 40 && mark3 >= 40) {
        status = "PASS";
    } else {
        status = "FAIL";
    }

    // Clear error message
    message.innerHTML = "";

    // Display result
    result.innerHTML = `
        <strong>Name:</strong> ${name}<br>
        <strong>Age:</strong> ${age}<br>
        <strong>Mark 1:</strong> ${mark1}<br>
        <strong>Mark 2:</strong> ${mark2}<br>
        <strong>Mark 3:</strong> ${mark3}<br>
        <strong>Total:</strong> ${total}<br>
        <strong>Average:</strong> ${average.toFixed(2)}<br>
        <strong>Result:</strong> ${status}
    `;

    resultCard.style.display = "block";
}