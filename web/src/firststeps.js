var ctx;

try {
   if (! window.AudioContext) {
      if (window.webkitAudioContext) {
         window.AudioContext = window.webkitAudioContext;
      }
   }

   ctx = new AudioContext();
}
catch(e) {
   console.log('Web Audio API is not supported in this browser');
}

var notes = [];

for (var i = 0; i < 30; i++) {
   notes[i] = ctx.createOscillator();
   notes[i].frequency.value = i * 50;
   notes[i].connect(ctx.destination);
}

var last = 0, loop = setInterval(function() {
   // notes are temporary, recreating them upon use
   notes[last].noteOff(0);
   notes[last] = ctx.createOscillator();
   notes[last].frequency.value = last * 50;

   last = Math.floor(Math.random() * notes.length);
   notes[last].noteOn(0);

}, 500);
