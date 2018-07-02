const array = require('new-array');

/**
 * @param {number} [points=3] The number of points in the polygon
 * @param {number[]} [center=[0,0]] The center of the polygon in list vector form
 * @param {number} [size=1] The radius of the polygon
 * @param {number} [offset=0] The angle offset for the polygon. Default is for the
 *  first point to be vertical
 * @return {number[][]} A polygon in list form following
 *  [  [x,y], [x,y], ...]
 */
module.exports = function regularPolygon(points=3, center=[0,0], size=1, startAng=0, endAng=2*Math.PI) {
  //const [cx, cy] = [center];
  const offset = Math.PI / 2; // Start offset from pointing upward
  const cx = center[0];
  const cy = center[1];
  let rotation;

  return array(points).map((_, i) => {
    rotation = offset + startAng + (endAng * i / points);
    let arr =  [
      cx + size * Math.cos(rotation),
      cy + size * Math.sin(rotation)
    ];
    return arr;
  });
};