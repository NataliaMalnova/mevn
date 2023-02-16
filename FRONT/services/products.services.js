import { request } from "./generic.services";

const getProduct = (id) => request({url: `product/${id}`, method: 'get'})

const getProducts = () => request({url: `product`, method: 'get'})

export { getProduct, getProducts}
