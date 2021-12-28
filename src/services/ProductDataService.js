import http from "../http-common";

class ProductDataService {
  getAll() {
    return http.get("/products/list/");
  }

  get(slug) {
    return http.get(`/products/retrieve/${slug}/`);
  }

  create(data) {
    return http.post("/products/list/", data);
  }

  update(slug, data) {
    return http.put(`/products/retrieve/${slug}/`, data);
  }

  order(data) {
    return http.post("/orders/add/", data);
  }

  // delete(id) {
  //   return http.delete(`/tutorials/${id}`);
  // }

  // deleteAll() {
  //   return http.delete(`/tutorials`);
  // }
}

export default new ProductDataService();