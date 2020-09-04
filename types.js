var a; // tip ataması ---> let a: number; 
a = 5;
a = 'a'; //herhani bir hata vermedi cünkü "any" tipi mevcut ve any tipi içerisinide de istediğmiz 
a = true; //türde bir değeri atayabilriz.
var b = 5;
var c = 'c';
var d = true;
var e;
var f = [1, 2, 3];
var g = [1, 2, 3]; // fve g tamamen aynı sadece yazım farklılıkları var .
var h = [1, 'a', true]; //any tipli oldugu için dinin içeriğini istedimiz tipte belirtebiliriz.
// tip tanımlaması da yapablriz sıralama ile 
var k = ['a', 5, false]; //tuple deniyor bu duruma .
var krediPayment = 0;
var havalePayment = 1;
var eftPayment = 2;
//bunların yerıne aşağıdakı yapıyıda kullanabilriz.
var Payment;
(function (Payment) {
    Payment[Payment["kredi"] = 0] = "kredi";
    Payment[Payment["havale"] = 1] = "havale";
    Payment[Payment["kapidaodeme"] = 2] = "kapidaodeme";
    Payment[Payment["eft"] = 3] = "eft";
})(Payment || (Payment = {}));
;
var kredi = Payment.kredi;
var havale = Payment.havale;
var eft = Payment.eft;
