class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':0.3,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y, 20, 20, options);
      this.width = 20;
      this.height = 20;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      pos.x = mouseX;
      pos.y = mouseY
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(7)
      stroke("red")
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  