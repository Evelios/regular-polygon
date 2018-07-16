# regular-polygon

This is a library for generating regular polygons and arcs.

`regularPolygon(points=3, center=[0,0], size=1, startAng=0, endAng=startAng+2*Math.PI)`  
Returns and array of points of the form [x, y] that is the length of `points`. So there
is a point for each vertex in the regular polygon

+ `points`   : the number of verticies of the polyogn
+ `center`   : the center poisition of the poly
+ `size`     : the radius of the poly
+ `startAng` : the initial rotation of the polygon, where the first vertex will appear
+ `endAng`   : the ending rotation of the polyogn, it defaults to creating a full polyogn 