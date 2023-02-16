import { request } from "./generic.services";

const getCategory = (id) => request({url: `category/${id}`, method: 'get'})

const getCategories = () => request({url: `category`, method: 'get'})

export { getCategory, getCategories}
