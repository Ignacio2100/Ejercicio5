document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir el envío del formulario

  var username = document.getElementById("usuario").value;
  var password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Por favor, complete todos los campos.");
    return;
  }

  // Aquí podrías realizar una llamada a un servidor para verificar las credenciales.
  // Por simplicidad, este ejemplo solo muestra un mensaje de bienvenida.

  var welcomeMessage = document.getElementById("Mensaje");
  welcomeMessage.innerText = "¡Bienvenido, " + username + "!";
});
