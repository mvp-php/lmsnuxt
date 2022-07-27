import http from "../config/DataService";
import authHeader from '../config/AuthHeader';
class CourseService {
    getCourseList(data,currentPage){
        return http.get(`/call-courses-list?page=`+currentPage+`&search=`+data, { headers: authHeader() });
    }
    saveCourse(data) {
        return http.post(`/call-add-courses`, data, { headers: authHeader() });
    }
   
    getEditDetails(id) {
        return http.get(`/call-edit-courses/${id}`, { headers: authHeader() });
    }
    updateCourse(data) {
        return http.post(`/call-update-courses`, data, { headers: authHeader() });
    }
    deleteCourse(id) {
        return http.post(`/call-delete-courses`, {id: id}, { headers: authHeader() });
    }
    bulkCourseDelete(bulkId){
        return http.post(`/call-bulk-delete-courses/`,{id: bulkId},{ headers: authHeader() });
    }
    viewCourseDetail(id){
        return http.get(`/call-courses-detail/${id}`, { headers: authHeader() });
    }
}
export default new CourseService();
