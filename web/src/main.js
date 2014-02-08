$(function() {
   
   console.log('dong stuff');
   
   $.getJSON('src/data.json', function loaded_data(data) {
      console.log($.parseJSON(data));
      
      //fill_description(data);      
      fill_discography(data);
   }).done(function() {console.log('efefs');});
});



function fill_discography(data) {
   console.log(data);

   for (var i = 0; i < data.albums.length; i++) {
      var tbody = $('<tbody />')
      
      for (var j = 0; j < data.albums[i].tracks.length; j++) {
         tbody.append(
            $('<tr />').append(
               $('<td />').text(data.albums[i].tracks[j])
         ))      
      }
      
      $('#discography').append(
         $('<table />').append(
            $('<thead />').append(
               $('<tr />').append(
                  $('<th />').text('Track name')
         )).append(tbody)));  
   }   
}
