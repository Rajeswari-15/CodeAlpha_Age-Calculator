function calculateAge() {
  const dobInput = document.getElementById('dob').value;
  const result = document.getElementById('result');

  if (!dobInput) {
    alert("Please select your date of birth!");
    return;
  }

  const birthDate = new Date(dobInput);
  const today = new Date();

  if (birthDate > today) {
    alert("Birth date cannot be in the future!");
    return;
  }

  // Calculate age
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  // Extra Info
  const timeDiff = today - birthDate;
  const totalDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const totalWeeks = Math.floor(totalDays / 7);
  const totalHours = Math.floor(timeDiff / (1000 * 60 * 60));

  // Show result
  result.innerHTML = `
    <p>Your Age is: <strong>${years} years, ${months} months, ${days} days</strong></p>
    <p>Total Days Lived: <strong>${totalDays} days</strong></p>
    <p>Total Weeks Lived: <strong>${totalWeeks} weeks</strong></p>
    <p>Total Hours Lived: <strong>${totalHours} hours</strong></p>
  `;
}

function resetForm() {
  document.getElementById('dob').value = '';
  document.getElementById('result').innerHTML = '';
}
