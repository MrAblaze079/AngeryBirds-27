class Chain {

    constructor(bodyA, bodyB){

        var options = {

            bodyA: bodyA,
            bodyB: bodyB,
            length: 11,
            stiffness: 0.04,
        }

        this.chain = Constraint.create(options);
        World.add(world, this.chain);
}
    display(){
        push();
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
    
}