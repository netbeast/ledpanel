# beecolor

beecolor allows you to control the Bicolor 8x8 LED matrix backpack from Adafruit

## install

**With npm**
```
npm install beecolor
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

beecolor.clear()
```

## Contact
* Visit our site [https://netbeast.co](https://netbeast.co)
* Mail us: staff [at] netbeast.co
* Report a bug or enter discussion at [issues](https://github.com/netbeast/colorsys/issues)
* Other resources: [Docs](https://github.com/netbeast/docs/wiki), Netbeast [API](https://github.com/netbeast/API)

This repo is shared with :heart: from Netbeast IoT regular job translating
messages from different devices and aggregating data.
