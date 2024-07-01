function calculateDistance() {
    var lat1 = document.getElementById('latitude1').value.trim();
    var lon1 = document.getElementById('longitude1').value.trim();
    var lat2 = document.getElementById('latitude2').value.trim();
    var lon2 = document.getElementById('longitude2').value.trim();


    if (!lat1 || !lon1 || !lat2 || !lon2) {
      alert('Molimo vas da unesete sve vrednosti za koordinate tačaka A i B.');
      return;
    }

    
    lat1 = parseFloat(lat1);
    lon1 = parseFloat(lon1);
    lat2 = parseFloat(lat2);
    lon2 = parseFloat(lon2);

    var distance = Math.sqrt(Math.pow((lat2 - lat1), 2) + Math.pow((lon2 - lon1), 2));

 
    var resultElement = document.getElementById('distanceResult');
    resultElement.innerHTML = 'Rastojanje između tačke A (' + lat1 + ', ' + lon1 + ') i tačke B (' + lat2 + ', ' + lon2 + ') je ' + distance.toFixed(2) + ' jedinica.';
  }