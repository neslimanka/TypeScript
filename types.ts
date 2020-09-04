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