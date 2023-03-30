function calculateAge() {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const today = new Date();
    const ageInMilliseconds = today - birthdate;
    const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
    const ageInDays = Math.floor((ageInMilliseconds % (365 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
    document.getElementById("result").innerHTML = `Du är ${ageInYears} år och ${ageInDays} dagar gammal.`;
  }