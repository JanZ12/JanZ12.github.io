

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



onMouseRelease(()=>play("muzyka"))

let wprawo = true

zaba.onUpdate(()=> {

    if(wprawo && zaba.pos.x < 500)
    zaba.pos.x += 1
    
    else if(!wprawo && zaba.pos.x > 50)
    zaba.pos.x -=1

    else wprawo ^= true

}
)