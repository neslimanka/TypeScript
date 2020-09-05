
interface Point{
    x: number;
    y: number;
}



interface Vehicle{
    currentLocation :  Point;
    travelTo(point: Point): void;
    
}

class Taxi implements  Vehicle {
   
    color: string;


    constructor(location: Point, color: string){
    this.currentLocation = location;
    this.color = color;
 }


    currentLocation :  Point;
    travelTo(point: Point): void {
      console.log(' taksi  X: ${point.x} Y: ${point.y}  konumuna gidiyor.');
    }

}



//let taxi_1 =  new Taxi(); //tipi taxi,aynı değişken tanımlaması gibi

//taxi_1.travelTo({ x: 1 , y: 2});
//taxi_1.currentLocation = { x: 2,y: 5};

let taxi_2 = new Taxi({ x: 3,y: 6}, 'Red');
taxi_2.travelTo({ x: 1 , y: 6});
console.log(taxi_2.currentLocation);

