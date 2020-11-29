class Bob {
    constructor(x,y,radius){
        var options = {
         isStatic:false, 
         restitution:1.2, 
         friction:0.1, 
         density:5
        }
    
        this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    
    World.add(world, this.body);
    }
    display(){
        
        push ();
        translate(this.body.position.x, this.body.position.y);
        rotate (this.body.angle);
        ellipseMode(RADIUS)
        fill("red");
        ellipse(0,0,this.radius,this.radius) 
        pop ();
    }
}