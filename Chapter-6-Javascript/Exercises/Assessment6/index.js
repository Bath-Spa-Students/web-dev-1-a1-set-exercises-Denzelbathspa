function calculateTotalCost() {
    // Get the values from the input fields
    const petrolCost = document.getElementById('petrolCost').value;
    const litersPurchased = document.getElementById('litersPurchased').value;

    // Calculate the total cost
    const totalCost = (parseFloat(petrolCost) * parseFloat(litersPurchased)).toFixed(2);

    // Display the total cost on the screen
    document.getElementById('totalCost').textContent = `Total cost: $${totalCost}`;
}
