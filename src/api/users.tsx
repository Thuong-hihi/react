import { IPusers } from "../types/users";
import instance from "./instance";

const sign_in = (data:IPusers)=>{
    return instance.post('/signin', data)
}
const sign_up = (data:IPusers)=>{
    return instance.post('/signup' ,data)
}
export {sign_in , sign_up}