class Taxi implements Vehicle{
 

    constructor(private location?: Point, private color?: string) {    }
      travelTo(point: Point): void{
        console.log('taksi X: ${this.location.x} Y: ${this.location.y} konumuna gidiyor.')

      }
   get Location(){

return this.location;
   }
     set Location(value: Point){

      if(value.x<0 || value.y<0){
        throw new Error('koordinat bilgileri negatif olamaz');

      }
      this.location=value;

     }
}

let currrentlocation = taxi_2.getLocation();
taxi_2.Location=({ x:2 , y: 5};)