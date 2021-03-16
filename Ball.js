class Ball{
    constructor(x, y, r){
        var options ={
            "restitution": 0.9,
            "friction": 0.2,
            "density": 0.7
        }
        this.body = Bodies.circle(x, y, r, options);
       this.radius = r;
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill("violet");
        ellipseMode(RADIUS);
        ellipse(0,0, this.radius, this.radius);
        pop();
    }
}