class Ground{
    constructor(x,y,w,h){
this.x=x
this.y=y 
this.w=w
this.h=h

var option={isStatic:2}
this.body=Bodies.rectangle(x,y,w,h,option)
World.add(world,this.body)


    }
display(){ 
    var pos=this.body.position

push ()
translate (pos.x,pos.y)
rectMode(CENTER)
fill (255,255,0)
rect (0,0,this.w,this.h)
pop ()
}
}