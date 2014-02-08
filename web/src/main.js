var DEV = false;

$(function() {

   if (DEV) { console.log(); }

   $.getJSON('src/data.json', function (data) {
      if (DEV) { console.log(data); }
      
      //fill_description(data);      
      fill_discography(data);
   });
});



function fill_discography(data) {

   for (var i = 0; i < data.albums.length; i++) {
      var tbody = $('<tbody />')
      
      for (var j = 0; j < data.albums[i].tracks.length; j++) {
         tbody.append(
            $('<tr />').append(
               $('<td />').text(i),
               $('<td />').text(data.albums[i].tracks[j])
         ))      
      }
      
      $('#discography').append(
         $('<table />').append(
            $('<thead />').append(
               $('<tr />').append(
                  $('<th />').text('Track number'),
                  $('<th />').text('Track name')
         ))).append(tbody));  
   }   
}
