function calculate() {
    const PP = parseFloat(document.getElementById('principal').value);
    const r = parseFloat(document.getElementById('interest').value) / 100;
    const t = parseFloat(document.getElementById('years').value);
    const m = parseFloat(document.getElementById('payment').value);
    const n = 12;


    const BB = PP * Math.pow(1 + r / n, n * t) - 
                m * (Math.pow(1 + r / n, n * t) - 1) / (r / n);

    document.getElementById('result').innerHTML = 
        `Remaining Loan Balance: $${BB.toFixed(2)}`;
}

function reset() {
    document.getElementById('principal').value = "";
    document.getElementById('interest').value = "";
    document.getElementById('years').value = "";
    document.getElementById('payment').value = "";
    document.getElementById('result').innerHTML = "";
}


