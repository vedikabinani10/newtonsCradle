class Rope{
    constructor(bodyA,bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.04,
            length : 200,
          var pointB={
            x:this.offsetX,
            y:this.offsetY
        }
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        var anchorBx = pointB.x + this.offsetX;
        var anchorBy = pointB.y + this.offsetY;
        line(pointA.x,pointA.y,anchorBx,anchorBy);
    }
}
