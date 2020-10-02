class Bob{
    constructor(x,y){
        var options={
            restitution : 0.3,
            friction : 0.5,
            density : 1.2,
            isStatic : true
        }
        this.body = Bodies.circle(x,y,50,options);
        World.add(world,this.body);
    }
    display(){
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,50,50);
    }
}