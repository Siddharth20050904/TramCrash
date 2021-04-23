class SlingShot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB : bodyB,
            stiffness: 0.5,
            length : 150            
        }
        this.body = Constraint.create(options);
        World.add(myWorld, this.body);
    }
   
   display(){
            var pointA = this.body.bodyA.position;
            var pointB = this.body.bodyB.position;
           
            strokeWeight(7);
            line(pointA.x , pointA.y, pointB.x , pointB.y);
               
    }
    
}