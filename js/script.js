document.getElementById('discountForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const originalPrice = parseFloat(document.getElementById('originalPrice').value);
    const discountPercentage = parseFloat(document.getElementById('discountPercentage').value);

    if (isNaN(originalPrice) || isNaN(discountPercentage) || discountPercentage < 0 || discountPercentage > 100) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const discountValue = (originalPrice * discountPercentage) / 100;
    const finalPrice = originalPrice - discountValue;

    document.getElementById('resultProductName').textContent = productName;
    document.getElementById('discountValue').textContent = discountValue.toFixed(2);
    document.getElementById('finalPrice').textContent = finalPrice.toFixed(2);
    document.getElementById('result').style.display = 'block';
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('discountForm').reset();
    document.getElementById('result').style.display = 'none';
});
