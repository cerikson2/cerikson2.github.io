document.getElementById('mortgage-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const principal = parseFloat(document.getElementById('principal').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
    const years = parseInt(document.getElementById('years').value);
    const monthlyPayment = parseFloat(document.getElementById('monthly-payment').value);

   
    const months = years * 12;
    const monthlyInterestRate = interestRate / 12;


    const remainingBalance = principal * ((Math.pow(1 + monthlyInterestRate, months) - Math.pow(1 + monthlyInterestRate, months - 1)) / (Math.pow(1 + monthlyInterestRate, months) - 1)) - monthlyPayment;

    
    document.getElementById('balance').textContent = `$${remainingBalance.toFixed(2)}`;
});
