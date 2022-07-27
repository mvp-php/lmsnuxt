import http from "../config/DataService";
import authHeader from "../config/AuthHeader";
class LearningPathService {
  addLearningPath(data) {
    return http.post(`/add-learning-path`, data, { headers: authHeader() });
  }
  getEditDetails(id) {
    return http.get(`/edit-learning-path-detail/${id}`, {
      headers: authHeader(),
    });
  }
  updateLearningPath(data) {
    return http.post(`/update-learning-path`, data, { headers: authHeader() });
  }
  getLearningPathList() {
    return http.get(`/call-learning-path-list`, { headers: authHeader() });
  }
}
export default new LearningPathService();
