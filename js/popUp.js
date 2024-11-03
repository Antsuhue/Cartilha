    // Função para fechar o pop-up e definir o cookie
    function closePopup() {
        document.getElementById('overlay').style.display = 'none';
        setCookie("popupShown", "true", 30); 
        window.location.href = "./contatos.html"
      }
  
      // Função para definir um cookie
      function setCookie(name, value, days) {
        let expires = "";
        if (days) {
          const date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
      }
  
      // Função para obter um cookie
      function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) === ' ') c = c.substring(1, c.length);
          if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
      }
  
      // Exibir o pop-up apenas se o cookie não existir
      window.onload = function() {
        if (!getCookie("popupShown")) {
          document.getElementById('overlay').style.display = 'flex';
        }
      };