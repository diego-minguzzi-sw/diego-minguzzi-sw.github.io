function calculate() {
    const admitted = parseFloat(document.getElementById("admitted").value);
    const driverWeight = parseFloat(document.getElementById("driverWeight").value);
    const perc = parseFloat(document.getElementById("perc").value);
    const gender = document.getElementById("gender").value;
    const condition = document.getElementById("condition").value;

    let conditionFactor;
    if (gender === "male") {
        conditionFactor = (condition === "fasting") ? 0.7 : 1.2;
    } else {
        conditionFactor = (condition === "fasting") ? 0.5 : 0.9;
    }

    const volume = (admitted * driverWeight * conditionFactor) / (8 * perc);
    document.getElementById("result").innerHTML = `<strong>Volume massimo ammesso: ${volume.toFixed(1)} litri</strong>`;
}

function reset() {
    document.getElementById("admitted").value = "0.5";
    document.getElementById("driverWeight").value = "80";
    document.getElementById("perc").value = "4";
    document.getElementById("gender").value = "male";
    document.getElementById("condition").value = "fasting";
    document.getElementById("result").innerHTML = "";
    validate();
}

function validate() {
    const perc = parseFloat(document.getElementById("perc").value);
    const driverWeight = parseFloat(document.getElementById("driverWeight").value);
    const calculateButton = document.getElementById("calculate");
    const validPerc = perc >= 1 && perc <= 100;
    const validWeight = driverWeight >= 40 && driverWeight <= 130;
    calculateButton.disabled = !(validPerc && validWeight);
}

function clearResult() {
    document.getElementById("result").innerHTML = "";
}
