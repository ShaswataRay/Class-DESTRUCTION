class Block{
    constructor(x, y){
        var options ={
            //"isStatic": true,
            "restitution": 0.7,
            "friction": 0.5,
            "density": 0.4
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        fill("lightblue");
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop();
    }
}