import axios from "axios";
export default class PostService {
  static async getAll(currentPage = 1, postsPerPage = 6) {
    const res = await axios.get(" http://localhost:3000/posts", {
      params: {
        _postsPerPage: postsPerPage,
        _currentPage: currentPage,
      },
    });
    return res;
  }
}
