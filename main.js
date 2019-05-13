$(document).ready(function() {



  function generateRandValue(min, max) {
    return Math.floor(Math.random() * (max - min) + 1);
  };

  function generateAplphanumericNr() {
    return Math.random().toString(36).substring(2, 3) + Math.random().toString(36).substring(2, 7);
  };

  var giocatore = [];
  var rimbalzi = [];
  var punti = [];
  var falli = [];
  var successRate2 = [];
  var successRate3 = [];

  for (var i = 0; i < 100; i++) {
    var numero = generateAplphanumericNr()
    if (giocatore.includes(numero) == false) {
      giocatore.push(numero);
    }
    var pti = generateRandValue(100, 1000);
    punti.push(pti);

    var rmb = generateRandValue(100, 1000);
    rimbalzi.push(rmb);

    var fal = generateRandValue(10, 300);
    falli.push(fal);

    var sr2 = generateRandValue(10, 90);
    successRate2.push(sr2);
    var sr3 = generateRandValue(1, 50);
    successRate3.push(sr3);

    $('#select').append(
      '<option class="select">' + giocatore[i] + '</option>'
    );
  }

  // var selezione = $('#select').val();
  $('#select').change(function() {

    for (var h = 0; h < giocatore.length; h++) {
      if ($(this).val() == giocatore[h]) {
        $('#playertab').append(
          '<tr>' +
          '<td>' + giocatore[h] + '</td>' +
          '<td>' + falli[h] + '</td>' +
          '<td>' + rimbalzi[h] + '</td>' +
          '<td>' + punti[h] + '</td>' +
          '<td>' + successRate2[h] + '</td>' +
          '<td>' + successRate3[h] + '</td>' +
          '</tr>'

        )
        /* Act on the event */
      }
    }


  });

});
