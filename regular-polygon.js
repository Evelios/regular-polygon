const array = require('new-array');

/**
 * @param {number} [points=3] The number of points in the polygon
 * @param {number[]} [center=[0,0]] The center of the polygon in list vector form
 * @param {number} [size=1] The radius of the polygon
 * @param {number} [startAng=0] The angle offset for the polygon. Default is for the
 *  first point to be vertical
 * @param {number} [endAng=startAng+2PI] The angle to rotate around to. Rotation
 *  starts from the start angle
 * @return {number[][]} A polygon in list form following
 *  [  [x,y], [x,y], ...]
 */
module.exports = function regularPolygon(points=3, center=[0,0], size=1, startAng=0, endAng=startAng+2*Math.PI) {
  const cx = center[0];
  const cy = center[1];
  let rotation;

  return array(points).map((_, i) => {
    rotation = startAng + ((endAng - startAng) * i / points);
    let arr =  [
      cx + size * Math.cos(rotation),
      cy + size * Math.sin(rotation)
    ];
    return arr;
  });
};