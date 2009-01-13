document.addEvent('domready', function() {
  new Bounga.MouseTracker({delay: 400, color: '#33FF00'});
  new Bounga.MouseTracker({delay: 300, color: '#FF3300', 'offset': {x: 30, y: -20}, 'size': 10});
  new Bounga.MouseTracker({delay: 200, color: '#3300FF', 'offset': {x: 10, y: 0}, 'size': 35});
  new Bounga.MouseTracker({delay: 0, image: 'cat.gif', id: 'cat', 'class': 'cat'});
});