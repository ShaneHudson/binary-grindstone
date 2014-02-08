var DEV = true;

$(function() {
   $.getJSON('src/data.json', function (data) {
      if (DEV) { console.log(data); }
      fill_tagline(data);
      fill_description(data);      
      fill_discography(data);
   });
});

function fill_description(data) {
   $('#description p').text(data.description);
      
   if (DEV) { console.log('description set'); }
}

function fill_tagline(data) {
   $('#tagline').text(data.taglines[
      Math.floor(Math.random() * data.taglines.length)]);
      
   if (DEV) { console.log('tagline set'); }
}

function fill_discography(data) {

   for (var i = 0; i < data.albums.length; i++) {
      var tbody = $('<tbody />')
      
      for (var j = 0; j < data.albums[i].tracks.length; j++) {
         tbody.append(
            $('<tr />').append(
               $('<td />').text(j),
               $('<td />').text(data.albums[i].tracks[j])
         ));      
      }
      
      $('#discography').append(
         $('<h2 />').text(data.albums[i].title)).append(
         $('<table />').append(
            $('<thead />').append(
               $('<tr />').append(
                  $('<th />').text('#'),
                  $('<th />').text('Track name')
         ))).append(tbody));  
   }   
   if (DEV) { console.log('discography set'); }
}
