class Stone
{
constructor(x, y, width, height)
{
var options=
{
isStatic:false,
density:1.2,
friction : 1.0,
restitution :0
}
this.body = Bodies.rectangle(x, y, width, height, options);
this.height=height;
this.width=width;
World.add(world, this.body);
this.image = loadImage("stone.png");
}
display()
{
    var pos=this.body.position
    var angle = this.body.angle;
    push();
   translate(pos.x, pos.y)
   rotate(angle);
    imageMode(CENTER);
    image(this.image,0, 0, this.width, this.height);
pop();
}
}