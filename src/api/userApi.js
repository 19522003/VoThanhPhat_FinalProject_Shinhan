import axiosClient from "./axiosClient";

const userApi = {
  register(value) {
    const url = "/auth/register";
    return axiosClient.post(url, value);
  },
  login(value) {
    const url = "/auth/login";
    return axiosClient.post(url, value);
  },
  logout() {
    const url = "/auth/logout";
    return axiosClient.post(url);
  },
  getAllUser() {
    const url = "/user/";
    return axiosClient.get(url);
  },
  editUser(id, value) {
    const url = `/user/${id}/update`;
    return axiosClient.put(url, value);
  },
  deleteUser(id) {
    const url = `/user/${id}`;
    return axiosClient.delete(url);
  },
  getUser(id) {
    const url = `/user/${id}`;
    return axiosClient.get(url);
  },
};

export default userApi;
