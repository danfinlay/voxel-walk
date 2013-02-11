`npm install voxel-walk --save`
Spreading the good word.  Using --save updates your package.json automatically.

A simple walk cycle animation for minecraft-skin characters (used in Voxel.js), using code ripped directly out of Daniel Hede's "[Minecraft Items](http://djazz.mine.nu/lab/minecraft_items/)", the same project that birthed the minecraft-skin module.

Doesn't include an off switch yet.  Also seems to ruin textures at the moment.

```
var walk = require('voxel-walk')
```
In your render loop you pass it a time value and a minecraft-skin object (as can be found in the minecraft-skin module available on npm).
```
var render = function () {
	var time = Date.now()/1000
	walk.render(duck, time)
}
```
You can tell the skin to start or stop walking with either of these functions (call each only once, or the acceleration change will continually reset.  You can test for walking state as well)
```
if(walk.isWalking()){
	walk.stopWalking()
}else{
	walk.startWalking()
}
```
By Default the walk is begun and ended in 1 second.  You can change this value like so:
```
walk.setAcceleration(1.5)
```


If you want to run the demo, just  run:
```
//If you don't have browserify installed:
npm install browserify -g

browserify demo.js -o bundle.js

//If you don't have http-server installed:
npm install http-server -g

http-server
```
