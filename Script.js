
function select(tag){
    const val = document.querySelector(tag)
    return val
  }
  
  function updateTag(tag, contenido){
    const mi_tag = select(tag)
    mi_tag.innerHTML = contenido
  }
  
  function updateHour(){
    
  const now = new Date();
  
  const options = { hour: '2-digit', minute: '2-digit', second:'2-digit', hour12: false };
  const horaEnFormato24Horas = now.toLocaleTimeString('es-ES', options);
  const [hora, minuto, segundo] = horaEnFormato24Horas.split(":")
  
  
  updateTag("#horas", hora)
  updateTag("#minutos", minuto)
  updateTag("#segundos", segundo)
  }
  

  function hourToClipboard(){

    const now = new Date();
  
    const options = { hour: '2-digit', minute: '2-digit', second:'2-digit', hour12: false };
    const horaEnFormato24Horas = now.toLocaleTimeString('es-ES', options);

    navigator.clipboard.writeText(horaEnFormato24Horas)

    navigator.clipboard.readText()
  .then(text => {
    console.log('Texto del portapapeles:', text)
  })
  .catch(err => {
    console.error('Error al leer del portapapeles:', err)
  })
  }
  
  
  setInterval(updateHour,500)