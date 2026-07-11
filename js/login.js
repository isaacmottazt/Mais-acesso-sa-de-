// ==========================================================================
// MAIS ACESSO + SAÚDE — script.js
// Lógica de alternância login/cadastro, máscara de CPF,
// mostrar/ocultar senha e validação de formulários.
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  const loginPanel = document.getElementById('loginPanel');
  const registerPanel = document.getElementById('registerPanel');
  const goToRegister = document.getElementById('goToRegister');
  const goToLogin = document.getElementById('goToLogin');

  /* ------------------------------------------------------------------
     ALTERNÂNCIA ENTRE LOGIN E CADASTRO (com animação fade + slide)
  ------------------------------------------------------------------ */
  function switchPanel(hidePanel, showPanel) {
    hidePanel.classList.add('leaving');

    hidePanel.addEventListener('animationend', function handler() {
      hidePanel.removeEventListener('animationend', handler);
      hidePanel.classList.add('form-panel--hidden');
      hidePanel.classList.remove('leaving');

      showPanel.classList.remove('form-panel--hidden');
      // Força reflow para reiniciar a animação de entrada
      void showPanel.offsetWidth;
      showPanel.style.animation = 'none';
      void showPanel.offsetWidth;
      showPanel.style.animation = '';
    }, { once: true });
  }

  goToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    switchPanel(loginPanel, registerPanel);
  });

  goToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    switchPanel(registerPanel, loginPanel);
  });

  /* ------------------------------------------------------------------
     MOSTRAR / OCULTAR SENHA
  ------------------------------------------------------------------ */
  document.querySelectorAll('.toggle-password').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      const input = document.getElementById(targetId);

      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      btn.classList.toggle('showing', isPassword);
      btn.setAttribute('aria-label', isPassword ? 'Ocultar senha' : 'Mostrar senha');
    });
  });

  /* ------------------------------------------------------------------
     MÁSCARA DE CPF (000.000.000-00)
  ------------------------------------------------------------------ */
  const cpfInput = document.getElementById('registerCpf');

  cpfInput.addEventListener('input', () => {
    let value = cpfInput.value.replace(/\D/g, '').slice(0, 11);

    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    cpfInput.value = value;
  });

  /* ------------------------------------------------------------------
     UTILITÁRIOS DE VALIDAÇÃO
  ------------------------------------------------------------------ */
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function isValidCpf(cpf) {
    const digits = cpf.replace(/\D/g, '');
    return digits.length === 11;
  }

  function setError(inputEl, errorEl, message) {
    if (message) {
      inputEl.classList.add('invalid');
      errorEl.textContent = message;
    } else {
      inputEl.classList.remove('invalid');
      errorEl.textContent = '';
    }
  }

  /* ------------------------------------------------------------------
     VALIDAÇÃO — FORMULÁRIO DE LOGIN
  ------------------------------------------------------------------ */
  const loginForm = document.getElementById('loginForm');
  const loginEmail = document.getElementById('loginEmail');
  const loginEmailError = document.getElementById('loginEmailError');
  const loginPassword = document.getElementById('loginPassword');
  const loginPasswordError = document.getElementById('loginPasswordError');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    if (!loginEmail.value.trim()) {
      setError(loginEmail, loginEmailError, 'O e-mail é obrigatório.');
      valid = false;
    } else if (!isValidEmail(loginEmail.value.trim())) {
      setError(loginEmail, loginEmailError, 'Digite um e-mail válido.');
      valid = false;
    } else {
      setError(loginEmail, loginEmailError, '');
    }

    if (!loginPassword.value) {
      setError(loginPassword, loginPasswordError, 'A senha é obrigatória.');
      valid = false;
    } else if (loginPassword.value.length < 8) {
      setError(loginPassword, loginPasswordError, 'A senha deve ter no mínimo 8 caracteres.');
      valid = false;
    } else {
      setError(loginPassword, loginPasswordError, '');
    }

    if (!valid) return;

    // TODO: Integrar aqui a função de autenticação (login) com a API.
    // Exemplo futuro:
    // await loginUser({ email: loginEmail.value.trim(), password: loginPassword.value });
    console.log('Formulário de login validado com sucesso. Pronto para integração com API.');
    window.location.href = 'home.html';
  });

  /* ------------------------------------------------------------------
     VALIDAÇÃO — FORMULÁRIO DE CADASTRO
  ------------------------------------------------------------------ */
  const registerForm = document.getElementById('registerForm');
  const registerName = document.getElementById('registerName');
  const registerNameError = document.getElementById('registerNameError');
  const registerCpfError = document.getElementById('registerCpfError');
  const registerEmail = document.getElementById('registerEmail');
  const registerEmailError = document.getElementById('registerEmailError');
  const registerPassword = document.getElementById('registerPassword');
  const registerPasswordError = document.getElementById('registerPasswordError');

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    if (!registerName.value.trim()) {
      setError(registerName, registerNameError, 'O nome completo é obrigatório.');
      valid = false;
    } else {
      setError(registerName, registerNameError, '');
    }

    if (!cpfInput.value.trim()) {
      setError(cpfInput, registerCpfError, 'O CPF é obrigatório.');
      valid = false;
    } else if (!isValidCpf(cpfInput.value)) {
      setError(cpfInput, registerCpfError, 'Digite um CPF válido.');
      valid = false;
    } else {
      setError(cpfInput, registerCpfError, '');
    }

    if (!registerEmail.value.trim()) {
      setError(registerEmail, registerEmailError, 'O e-mail é obrigatório.');
      valid = false;
    } else if (!isValidEmail(registerEmail.value.trim())) {
      setError(registerEmail, registerEmailError, 'Digite um e-mail válido.');
      valid = false;
    } else {
      setError(registerEmail, registerEmailError, '');
    }

    if (!registerPassword.value) {
      setError(registerPassword, registerPasswordError, 'A senha é obrigatória.');
      valid = false;
    } else if (registerPassword.value.length < 8) {
      setError(registerPassword, registerPasswordError, 'A senha deve ter no mínimo 8 caracteres.');
      valid = false;
    } else {
      setError(registerPassword, registerPasswordError, '');
    }

    if (!valid) return;

    // TODO: Integrar aqui a função de cadastro (registro) com a API.
    // Exemplo futuro:
    // await registerUser({
    //   name: registerName.value.trim(),
    //   cpf: cpfInput.value,
    //   email: registerEmail.value.trim(),
    //   password: registerPassword.value
    // });
    console.log('Formulário de cadastro validado com sucesso. Pronto para integração com API.');
    window.location.href = 'home.html';
  });

});
