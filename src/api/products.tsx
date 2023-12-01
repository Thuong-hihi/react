import instance from "./instance";
import { IProduct } from "../types/products";

const GetProducts = ()=>{
    return instance.get('/products')
}
const GetProductsByid = (id:number)=>{
    return instance.get('/products/'+ id)
}
const Add = (products:IProduct)=>{
    return instance.post('/products' ,products)
}
const Delete = (id:number)=>{
    return instance.delete('/products/' +id)
}
const Updates = (products:IProduct)=>{
    return instance.put('/products/' + products.id , products)
}

export {GetProducts , GetProductsByid ,Add , Delete,Updates}