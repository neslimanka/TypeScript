function getAverage(a: number,b: number,c:number):string { //hesaplamalar sonucunda bıze string bır değer geri gönderecek.
    let total = a+b;
    let count=2;

    if(typeof c !=='undefined'){
        total +=c;
        count++;
    }
    const result = total/count;
    return 'result : '+result;
}
getAverage(10,20,30);

//c: number ama bu parametrenın ıstege baglı olmasnı istiyoruz.Bu durumda c?:number  dediğimizde bize
//2 ve ya 3 farklı parametre gönderecektır.