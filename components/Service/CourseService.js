import http from "../config/DataService";
import authHeader from '../config/AuthHeader';
class CourseService {
    getCourseList(data,currentPage){
        return http.get(`/call-courses-list?page=`+currentPage+`&search=`+data, { headers: authHeader() });
    }
    saveCourse(data) {
        return http.post(`/add-courses`, data, { headers: authHeader() });
    }
   
    getEditDetails(id) {
        return http.get(`/call-courses-detail/${id}`, { headers: authHeader() });
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

    getCategoryListNew(){
        return http.get(`/call-allcategory-list/`,{ headers: authHeader() });
    }

    
}
export default new CourseService();
