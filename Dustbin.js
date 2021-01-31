class Dustbin {
    constructor(x,y,height,width){
    var options = {
        'isStatic' : true,
        'friction' : 0.5
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.height = height;
    this.width = width;
    World.add(world,this.body);
    }

    display(){
     push();
     rectMode(CENTER);
     fill("white");
     rect(this.body.position.x,this.body.position.y,this.width,this.height);  
     pop();
    }
}