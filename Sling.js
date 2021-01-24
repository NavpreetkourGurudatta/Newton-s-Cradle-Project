class Sling{
    constructor(bodyA,pointB){
        var options = {
bodyA:bodyA,
pointB:pointB,
stiffness:1,
angularstiffness:1,
lenght:220,
        }
        this.pointB = pointB;
        this.pointX = bodyA.x;
        this.pointY = bodyA.y - 250;
        this.sling = constraint.create(options);
        World.add(world,this.sling) 
 
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.postion
            var pointB = this.pointB;
            push();
            strokeWeight(3.5);
            stroke('#fff');
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();
        }
    }
}