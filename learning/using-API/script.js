async function getApiData()
{
  const cityName = document.querySelector("#cityName").value;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key":
        "93e0968050msh44c9f3641c0753bp16b7c8jsn4679df334eeb",
      "X-RapidAPI-Host": "tomorrow-io1.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(
      `https://tomorrow-io1.p.rapidapi.com/v4/weather/forecast?timesteps=1m&location=${cityName}`,
      options
    );
    const data = await response.json();
    const lastDataPoint = data.timelines.minutely.slice(-1)[0];

    const getTemp = Math.round(lastDataPoint.values.temperature);
    const getWindSpeed = Math.round(lastDataPoint.values.windSpeed * 3.6);
    const getHumidity = Math.round(lastDataPoint.values.humidity);
    const getPressure = Math.round(lastDataPoint.values.pressureSurfaceLevel);

    document.querySelector("#temperature").innerText = JSON.stringify(getTemp, null, 2);
    document.querySelector("#windSpeed").innerText = JSON.stringify(getWindSpeed, null, 2);
    document.querySelector("#humidity").innerText = JSON.stringify(getHumidity, null, 2);
    document.querySelector("#pressure").innerText = JSON.stringify(getPressure, null, 2);

  } catch (error) {
    console.error(error);
  }
  
  document.querySelector("#mid").style.display = "grid";
}
