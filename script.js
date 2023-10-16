const pont_Segundos = document.querySelector('.pontSegundos');
const pont_Minuto= document.querySelector('.pontMinuto');
const pont_Hora = document.querySelector('.pontHora');

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    pont_Segundos.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    pont_Minuto.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    pont_Hora.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setDate, 1000);

  setDate();


