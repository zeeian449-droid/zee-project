document.getElementById('carbon-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Read input values (defaults to 0 if empty)
  const transportKm = parseFloat(document.getElementById('transport').value) || 0;
  const electricityKwh = parseFloat(document.getElementById('electricity').value) || 0;
  const meatMeals = parseFloat(document.getElementById('meat').value) || 0;

  // Approximate emission factors (in kg CO2 per unit)
  // - Average gas car: ~0.171 kg CO2 per km
  // - Electricity (US/Global avg mix): ~0.385 kg CO2 per kWh
  // - Average meat-heavy meal: ~2.5 kg CO2 per meal
  const transportEmissions = transportKm * 0.171;
  const electricityEmissions = electricityKwh * 0.385;
  const meatEmissions = meatMeals * 2.5;

  const totalEmissions = (transportEmissions + electricityEmissions + meatEmissions).toFixed(2);

  // Update DOM with total results
  document.getElementById('total-emissions').textContent = totalEmissions;

  // Provide contextual feedback based on daily total
  const feedbackEl = document.getElementById('feedback-text');
  if (totalEmissions < 8) {
    feedbackEl.textContent = 'Great job! Your daily estimated footprint is below average.';
  } else if (totalEmissions <= 20) {
    feedbackEl.textContent = 'Your footprint is around average. Small tweaks can help lower it further!';
  } else {
    feedbackEl.textContent = 'Your daily footprint is above average. Consider carpooling or reducing meat intake.';
  }

  // Show result box
  document.getElementById('result-box').classList.remove('hidden');
});
