function getAverage(a, b, c) {
    var total = a + b;
    var count = 2;
    if (typeof c !== 'undefined') {
        total += c;
        count++;
    }
    var result = total / count;
    return 'result : ' + result;
}
getAverage(10, 20, 30);
//c: number ama bu parametrenın ıstege baglı olmasnı istiyoruz.Bu durumda c?:number  dediğimizde bize
//2 ve ya 3 farklı parametre gönderecektır.
