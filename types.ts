let a ; // tip ataması ---> let a: number; 

a = 5;
a = 'a'; //herhani bir hata vermedi cünkü "any" tipi mevcut ve any tipi içerisinide de istediğmiz 
a = true; //türde bir değeri atayabilriz.

let b: number = 5;
let c:string = 'c';
let d:boolean = true;
let e :any ;
let f : number[] = [1,2,3];
let g: Array<number> = [1,2,3]; // fve g tamamen aynı sadece yazım farklılıkları var .
let h: any[] = [1, 'a',true]; //any tipli oldugu için dinin içeriğini istedimiz tipte belirtebiliriz.
 // tip tanımlaması da yapablriz sıralama ile 
 let k: [string,number,boolean]=['a', 5,false]; //tuple deniyor bu duruma .


 const krediPayment = 0;
 const havalePayment = 1;
 const eftPayment =2;
 //bunların yerıne aşağıdakı yapıyıda kullanabilriz.

 enum Payment {kredi=0,havale=1,kapidaodeme=2,eft=3};

 let kredi = Payment.kredi;
 let havale = Payment.havale;
 let eft = Payment.eft;



