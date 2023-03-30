

// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom();
loadSprite("tlo","tlo.png")
loadSprite("zaba","zaba.png")
loadSound("muzyka","bogsierodzi.mp3")

add([
    sprite("tlo")
])

const zaba=add([
    sprite("zaba"),
    pos(0,279)
])

onUpdate(()=>{
    if(zaba.pos.x<400)
    zaba.pos.x +=1
})

