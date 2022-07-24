import http from "../config/DataService";
import authHeader from '../config/AuthHeader';
class InstructorService {
 
  getInstructorUserList(){
    return http.get(`/instructor-list`,{ headers: authHeader() });
  }
}
export default new InstructorService();