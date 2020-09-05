var travelTo = function (point) {
    //..
};
var getDistance = function (pointA, pointb) {
    //..
};
travelTo({
    x: 1,
    y: 2
});
//-------------------------------------------------------------------------------------------
//let travelTo = (x,y) => { //fonksiyonun x ve ydıısnda bırden fazla parametresı olabilir ve
//parametrelerı bu sekılde göndermek yerıne aşagıdakı gıbı yapılabilir.
//let travelTo = (point: { x: number , y: number}) => {
//...
//}
//let getDistance = (pointA: { x: number , y: number}, pointB: { x: number , y: number}) {
//}
//travelTo(1,12); bu şekilde değil artık fonk. na parametre göndeırırsen parametre seklınde gönderebilriz.
//bunları sureklı tekrarlamak yerınde bır ınterface tanımlayabiliriz.
//travelTo({
// x: 1,
// y: 2 //x ve y dısına farklı bır parametre yollayabiliriz sonucta fonk.nun bıden ne tur parametre ıstedıgını bilmiyoruz.
//});
