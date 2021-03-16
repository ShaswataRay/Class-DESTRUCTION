class Chain{
constructor(bodyA, pointB){
    var options ={
        bodyA: bodyA,
        pointB: pointB 
    }
    this.chain = Constraint.create(options);
    World.add(world, this.chain);
    this.pointB = pointB;
}
display(){
    push();
    stroke("white");
    strokeWeight(3);
    line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.pointB.x, this.pointB.y);
    pop();
}
}