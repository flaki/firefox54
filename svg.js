const TextToSVG = require('text-to-svg');

// First argument is URL on web browsers, but it is file path on Node.js.
TextToSVG.load('./OpenSans-BoldItalic.ttf', function(err, textToSVG) {
  const attributes = {};//{fill: 'red', stroke: 'black'};
  const options = {x: 0, y: 0, fontSize: 130, anchor: 'top', attributes: attributes};

  const svg = textToSVG.getSVG(' 54 ', options);

  console.log(svg);
  require('fs').writeFileSync('54.svg', svg);
});
