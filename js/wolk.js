// function compareNumbers(a, b) {
//   return a - b;
// }
//
// // From http://stackoverflow.com/questions/17242144/javascript-convert-hsb-hsv-color-to-rgb-accurately
// function hsvToRgb(h, s, v) {
//   var r, g, b, i, f, p, q, t;
//   if (arguments.length === 1) {
//     s = h.s, v = h.v, h = h.h;
//   }
//   i = Math.floor(h * 6);
//   f = h * 6 - i;
//   p = v * (1 - s);
//   q = v * (1 - f * s);
//   t = v * (1 - (1 - f) * s);
//   switch (i % 6) {
//     case 0: r = v, g = t, b = p; break;
//     case 1: r = q, g = v, b = p; break;
//     case 2: r = p, g = v, b = t; break;
//     case 3: r = p, g = q, b = v; break;
//     case 4: r = t, g = p, b = v; break;
//     case 5: r = v, g = p, b = q; break;
//   }
//   return {
//     r: Math.round(r * 255),
//     g: Math.round(g * 255),
//     b: Math.round(b * 255)
//   };
// }
//
// var xs = [];
// var ys = [];
// var pixels = {};
//
// d3.select('#wolk').selectAll('rect')
//     .each(function() {
//       var x = parseInt(d3.select(this).attr('x'));
//       var y = parseInt(d3.select(this).attr('y'));
//
//       if (xs.indexOf(x) === -1) {
//         xs.push(x);
//       }
//
//       if (ys.indexOf(y) === -1) {
//         ys.push(y);
//       }
//
//       if (!pixels[x]) {
//         pixels[x] = {};
//       }
//
//       pixels[x][y] = this;
//     });
//
// xs.sort(compareNumbers);
// ys.sort(compareNumbers);
//
// var xRes = xs.length;
// var yRes = ys.length;
//
// // var t = 0;
// function step(timestamp) {
//   var t = Math.round(timestamp);
//   var p = (t % 1000) / 1000;
//
//   for (var xi = 0; xi < xRes; xi += 1) {
//     for (var yi = 0; yi < yRes; yi += 1) {
//       var x = xs[xi];
//       var y = ys[yi];
//
//       if (pixels[x] && pixels[x][y]) {
//         var pixel = pixels[x][y];
//
//         var rgb = hsvToRgb(xi / xRes + p, 1, 1);
//         pixel.style.fill = 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0.7)';
//       }
//     }
//   }
//
//   window.requestAnimationFrame(step);
// }
//
// window.requestAnimationFrame(step);
