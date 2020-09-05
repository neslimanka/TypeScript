var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log(' taksi ', X, $, { point: point, : .x }, Y, $, { point: point, : .y } + ' konumuna gidiyor.');
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log(' otobüs X: ${point.x} Y: ${point.y} konumuna gidiyor.');
    };
    return Bus;
}());
var taxi_1 = new Taxi; //tipi taxi,aynı değişken tanımlaması gibi
taxi_1.travelTo({ x: 1, y: 2 });
