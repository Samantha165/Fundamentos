
const menu = document.querySelector(".nav_links");


function toogle(){

   menu.classList.toggle("open");
}

function veficarContraseña(){
      const pass1 = document.getElementById('pass').value;
    const pass2 = document.getElementById('pass2').value;
    
    if (pass1 != pass2 && pass1.value.lenght >=8  && pass2.value.lenght >=8) {
        alert('Las contraseñas no coinciden');
        return false;
    }
}