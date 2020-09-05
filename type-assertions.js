var message; // veri türü any .unku tanımlamasını yaptık ve henuz bır değer ataması yapmadıgımız 
//için veri tipi any
message = 'Hello World';
//Eğer ; let message = 'hello world'; gibi bir tanımlama yapsaydık message değişkenni string 
//olarak algılardı.
var count = message.length; //artık string olarak algılamıyor
//bunun önune gecmek için bilinçlı olarak messagfe değişkenını string tanımyabiliriz.
//Nasıl? let count = (<string>message).length; ama burda dikkat etmemız gerekn şey cevirmek istedimiz veri
//türünün uyumlu olması lazım mesela "hello world" u boolean bir türe dönüştüremeyiz,bunun gıbı.
//ikinci yöntem ise ;  let length =(message as string).length; olabilir.
