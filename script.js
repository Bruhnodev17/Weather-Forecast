const key = "1b028058f5929116997e76eb7f027ddd";

function showInfo(data) {

    document.querySelector(".city").innerHTML = "Tempo em " + data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "ºC";
    document.querySelector(".about").innerHTML.toUpperCase = data.weather[0].description
    document.querySelector(".moisture").innerHTML = "Humidade em " + data.main.humidity + "%";
    document.querySelector(".icone-info")

    console.log(data)
}

async function searchCity(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
        )

        const data = await response.json();
        showInfo(data)
    } catch (error) {
        window.alert('Erro ao buscar os dados da cidade, digite corretamente!')
    }
}

function tempInformation() {
    const city = document.querySelector(".input-city").value

    if (!city) {
        window.alert('Por favor, digite o nome da cidade!')
        return 
    }
    searchCity(city)
}


