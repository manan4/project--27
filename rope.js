class Rope {
    constructor(body1,body2, offsetX, offsetY)
    {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        //console.log(options);
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    display()
    {
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;

        strokeWeight(2);

        var pos1X=pointA.x
        var pos1Y=pointA.y

        var pos2X=pointB.x+this.offsetX
        var pos2Y=pointB.y+this.offsetY

        line(pos1X,pos1Y,pos2X,pos2Y);
    }
}