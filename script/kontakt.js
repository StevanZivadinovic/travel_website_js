function submitForm() {
    // Dohvatanje vrednosti iz forme
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var subject = document.getElementById('subject').value.trim();
    var message = document.getElementById('message').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var messageType = document.getElementById('messageType').value;

    // Validacija podataka
    if (!validateName(firstName) || !validateName(lastName) || !validateMessageLength(message) || !validatePhoneNumber(phone)) {
      return;
    }

    // Formiranje objekta sa podacima
    var formData = {
      fullName: firstName + ' ' + lastName,
      subject: subject,
      message: message,
      phone: phone,
      messageType: messageType
    };

    // Dodavanje podataka u listu na stranici
    var formDataList = document.getElementById('formData');
    formDataList.innerHTML = ''; 
    var formDataList = document.getElementById('formData');
    var listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerHTML = 'Ime i prezime: ' + formData.fullName + '<br>Naslov poruke: ' + formData.subject + '<br>Tekst poruke: ' + formData.message + '<br>Broj telefona: ' + formData.phone + '<br>Tip poruke: ' + formData.messageType;
    formDataList.appendChild(listItem);

    // Resetovanje forme
    document.getElementById('contactForm').reset();
  }

  // Funkcije za validaciju
  function validateName(name) {
    if (name === '') {
      alert('Ime i prezime su obavezni!');
      return false;
    }
    // Provera da li je samo jedna reč i da ne sadrži brojeve
    if (!/^[a-zA-Z]+$/.test(name)) {
      alert('Ime i prezime moraju biti jedna reč i ne smeju sadržati brojeve i specijalne karaktere!');
      return false;
    }
    return true;
  }

  function validateMessageLength(message) {
    if (message.length < 10 || message.length > 200) {
      alert('Dužina poruke mora biti između 10 i 200 karaktera!');
      return false;
    }
    return true;
  }

  function validatePhoneNumber(phone) {
    if (!/^\+?[0-9]+$/.test(phone)) {
      alert('Broj telefona može sadržati samo brojeve i znak + (opcionalno na početku)!');
      return false;
    }
    return true;
  }

    
    document.getElementById('phone').addEventListener('input', function() {
        var phoneField = this;
        var trimmedValue = phoneField.value.trim();
        var isValid = validatePhoneNumber(trimmedValue);

        if (!isValid) {
          phoneField.value = '';
        }
      });