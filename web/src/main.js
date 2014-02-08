var DEV = true;

$(function() {
   $.getJSON('src/data.json', function (data) {
      if (DEV) { console.log(data); }
      //fill_tagline(data);
      //fill_description(data);      
      //fill_discography(data);
   });
});

