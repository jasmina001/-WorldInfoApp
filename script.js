function getCountryInfo() {
    let country = document.getElementById("countryInput").value.trim();
    
    if (country === "") {
        alert("Iltimos, davlat nomini kiriting!");
        return;
    }
    
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json())
        .then(data => {
            let countryData = data[0];
            document.getElementById("result").innerHTML = `
                <p><strong>Davlat:</strong> ${countryData.name.common}</p>
                <p><strong>Aholisi:</strong> ${countryData.population.toLocaleString()}</p>
                <p><strong>Region:</strong> ${countryData.region}</p>
                <p><strong>Poytaxt:</strong> ${countryData.capital ? countryData.capital[0] : "Ma'lumot yo'q"}</p>
                <p><strong>Kelib chiqishi:</strong> ${countryData.subregion}</p>
                <img src="${countryData.flags.png}" alt="Bayroq">
            `;
        })
        .catch(error => {
            document.getElementById("result").innerHTML = `<p style="color: red;">Xatolik: Davlat topilmadi!</p>`;
            console.error("Xatolik:", error);
        });
}
