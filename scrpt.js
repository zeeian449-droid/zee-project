document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('carbon-form');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      // Read input values (defaults to 0 if empty or negative)
      const transportKm = Math.max(0, parseFloat(document.getElementById('transport').value) || 0);
      const electricityKwh = Math.max(0, parseFloat(document.getElementById('electricity').value) || 0);
      const meatMeals = Math.max(0, parseFloat(document.getElementById('meat').value) || 0);

      // Emission factors (in kg CO2 per unit)
      const transportEmissions = transportKm * 0.171;
      const electricityEmissions = electricityKwh * 0.385;
      const meatEmissions = meatMeals * 2.5;

      const totalEmissions = (transportEmissions + electricityEmissions + meatEmissions).toFixed(2);

      // Update DOM with total results
      const totalEmissionsEl = document.getElementById('total-emissions');
      if (totalEmissionsEl) {
        totalEmissionsEl.textContent = totalEmissions;
      }

      // Provide contextual feedback based on daily total
      const feedbackEl = document.getElementById('feedback-text');
      if (feedbackEl) {
        if (totalEmissions < 8) {
          feedbackEl.textContent = 'Great job! Your daily estimated footprint is below average.';
        } else if (totalEmissions <= 20) {
          feedbackEl.textContent = 'Your footprint is around average. Small tweaks can help lower it further!';
        } else {
          feedbackEl.textContent = 'Your daily footprint is above average. Consider carpooling or reducing meat intake.';
        }
      }

      // Show result box
      const resultBox = document.getElementById('result-box');
      if (resultBox) {
        resultBox.classList.remove('hidden');
      }
    });
  }
});
