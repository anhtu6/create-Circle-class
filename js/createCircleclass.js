let Circle = function (radius) {
    this.radius = radius;


    this.getRadius = function () {
        return radius;
    }
    this.getArea = function () {
        return Math.PI*radius*radius;
    }
    this.setRadius = function (radius) {
        this.radius =radius;
    }
}

let circle = new Circle(5);
 circle.setRadius(1);
console.log(circle);
//console.log(radius);
let radius = circle.getRadius();
console.log(radius);
let area = circle.getArea();

alert('radius '+radius+';area: '+area)