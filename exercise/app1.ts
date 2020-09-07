import { ProductService } from "./ProductService";
import { Product } from "../Product";


let _productService = new ProductService();

let result;

//result = _productService.getProducts();
result =_productService.getById(2);

let p = new Product();
p.name= "Iphone 6";
p.price=400;
p.category="Telefon";

//_productService.saveProduct(p);
_productService.deleteProduct(result);
result= _productService.getProducts();

console.log(result);