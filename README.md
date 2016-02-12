# beecolor

beecolor allows you to control the Bicolor 8x8 LED matrix backpack from Adafruit

## install

**With npm**
```
npm install beecolor
```

**Load on browser or copy paste into your code**
```
<script src="https://github.com/netbeast/beecolor"></script>
```

##api

Color the matrix

```
beecolor.matrix(matrix, callback)
```

Color one pixe

```
beecolor.printPixel(x,y, callback)
```

Clear all

```
beecolor.clear(callback)
```

##examples

```
var beecolor = require('beecolor')

var matrix = [[0, 0, 0, 0, 0, 0, 0, 0,],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1],
				[1, 1, 1, 1, 1, 1, 1, 1]]

beecolor.matrix(matrix, function(err){
	if(err) console.log(err)
	console.log('Matrix Printed')
})

beecolor.printPixel(0,0)

beecolor.creal()
```
