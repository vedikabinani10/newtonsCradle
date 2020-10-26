class Bob{
    constructor(x,y){
        var options={
            restitution : 1,
            friction : 0.5,
            density : 1.2,
        }
        this.body = Bodies.circle(x,y,50,options);
        World.add(world,this.body);
    }
    display(){
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y,50,50);
    }
}
