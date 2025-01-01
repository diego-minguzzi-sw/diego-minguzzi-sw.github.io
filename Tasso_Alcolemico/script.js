function calculate() {
    const admitted = parseFloat(document.getElementById('admitted').value);
    const driverWeight = parseFloat(document.getElementById('driverWeight').value);
    const perc = parseFloat(document.getElementById('perc').value);
    const gender = document.getElementById('gender').value;
    const condition = document.getElementById('condition').value;
    
    let conditionFactor;
    if (gender === 'male') {
        conditionFactor = condition === 'empty' ? 0.7 : 1.2;
    } else {
        conditionFactor = condition === 'empty' ? 0.5 : 0.9;
    }
    
    const volume = (admitted * driverWeight * conditionFactor) / (8 * perc);
    document.getElementById('result').innerText = `La quantità di bevanda massima ammessa è ${volume.toFixed(2)} litri.`;
}

function resetForm() {
    document.getElementById('calculationForm').reset();
    document.getElementById('result').innerText = '';
}
