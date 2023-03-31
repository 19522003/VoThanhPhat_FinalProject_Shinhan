import productAxiosClient from "./productAxiosClient";

const productApi = {
  getAll(param) {
    const url = "/products";
    return productAxiosClient.get(url, { param });
  },
  get(id) {
    const url = `/products/${id}`;
    return productAxiosClient.get(url);
  },
};

export default productApi;
