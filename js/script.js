// Selecciona todos los iconos de visibilidad
const toggleVisibilityIcons = document.querySelectorAll('.eye');

toggleVisibilityIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    // Selecciona el input de contraseña correspondiente
    const passwordInput = icon.previousElementSibling;
    const isPassword = passwordInput.type === 'password';
    
    // Cambia el tipo de input entre 'password' y 'text'
    passwordInput.type = isPassword ? 'text' : 'password';

    // Cambia el estado del icono
    icon.textContent = isPassword ? 'visibility_off' : 'visibility';

    // Actualiza el atributo aria-pressed
    icon.setAttribute('aria-pressed', isPassword ? 'true' : 'false');
  });
});
