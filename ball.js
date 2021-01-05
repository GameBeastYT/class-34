class Ball{
    constructor(x,y,radius){
        var options = {       
            friction: 0.05,
            density: 1.0,
            
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.width = radius;
        this.height = radius;
        
      
        World.add(world,this.body);
    }
    display(){
    var   posx = this.body.position.x;
    var   posy = this.body.position.y;
        push();
        translate(posx,posy);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        fill("black");
        ellipse(0,0,this.width,this.height);
        pop();
    }
}