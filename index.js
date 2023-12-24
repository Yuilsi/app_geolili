//Barra de busqueda

const suggestions = [
    'Cardiología',
    'Cuidados Paliativos Adultos',
    'Dermatología',
    'Endocrinología',
    'Gastroenterología',
    'Geriatría',
    'Hemato-oncología',
    'Hematología',
    'Hepatología',
    'Infectología' ,
    'Medicina Física y Rehabilitación',
    'Medicina Interna',
    'ortopedia'


  ];
  
  const searchInput = document.getElementById('searchInput');
  const suggestionsContainer = document.getElementById('suggestions');
  
  searchInput.addEventListener('input', function() {
    const inputText = this.value.toLowerCase();
    const filteredSuggestions = suggestions.filter(suggestion =>
      suggestion.toLowerCase().startsWith(inputText)
    );
  
    showSuggestions(filteredSuggestions);
  });
  
  function showSuggestions(filteredSuggestions) {
    if (filteredSuggestions.length > 0) {
      const suggestionsList = filteredSuggestions.map(suggestion =>
        `<li onclick="selectSuggestion('${suggestion}')">${suggestion}</li>`
      ).join('');
      suggestionsContainer.innerHTML = `<ul>${suggestionsList}</ul>`;
      suggestionsContainer.style.display = 'block';
    } else {
      suggestionsContainer.innerHTML = '';
      suggestionsContainer.style.display = 'none';
    }
  }
  
  function selectSuggestion(suggestion) {
    searchInput.value = suggestion;
    suggestionsContainer.style.display = 'none';
  }

  // funciones para ocultar la lista de sugerencias cuando el campo de búsqueda esté vacío

  searchInput.addEventListener('input', function() {
    const inputText = this.value.toLowerCase();
    const filteredSuggestions = suggestions.filter(suggestion =>
      suggestion.toLowerCase().startsWith(inputText)
    );
  
    if (inputText === '') {
      hideSuggestions(); // Ocultar sugerencias si el campo está vacío
    } else {
      showSuggestions(filteredSuggestions);
    }
  });
  
  function hideSuggestions() {
    suggestionsContainer.innerHTML = '';
    suggestionsContainer.style.display = 'none';
  }

//MENU
  // Manejo de eventos de los botones del menú inferior
document.getElementById('homeBtn').addEventListener('click', function() {
    // Aquí podrías programar lo que sucede al hacer clic en "Home"
    console.log('Clic en Home');
    // Por ejemplo, cambiar el contenido principal
    document.querySelector('.main-content h1').innerText = 'Página de Inicio';
  });
  
  document.getElementById('mapBtn').addEventListener('click', function() {
    // Aquí podrías programar lo que sucede al hacer clic en "Map"
    console.log('Clic en Map');
    // Por ejemplo, cambiar el contenido principal
    document.querySelector('.main-content h1').innerText = 'Mapa';
  });
  
  document.getElementById('profileBtn').addEventListener('click', function() {
    window.location.href = 'profile.html';
  });
  
  