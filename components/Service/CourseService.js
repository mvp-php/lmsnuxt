import http from "../config/DataService";
import authHeader from '../config/AuthHeader';
class CourseService {
    getCourseList(data,currentPage){
        return http.get(`/call-courses-list?page=`+currentPage+`&search=`+data, { headers: authHeader() });
    }
    addCategory(data) {
        return http.post(`/category-save`, data, { headers: authHeader() });
    }
    getCategoryList(data,currentPage) {
        return http.get(`/category-list?page=`+currentPage+`&search=`+data, { headers: authHeader() });
    }
    getEditDetails(id) {
        return http.get(`/get-category/${id}`, { headers: authHeader() });
    }
    updateCategory(data) {
        return http.post(`/update-category`, data, { headers: authHeader() });
    }
    deleteCategory(id,parent_category_id="") {
        return http.post(`/delete-category`, {id: id,parent_category_id:parent_category_id}, { headers: authHeader() });
    }
    bulkCategoryDelete(bulkId,parent_category_id=""){
        return http.post(`/category-bulk-delete/`,{id: bulkId,parent_category_id:parent_category_id},{ headers: authHeader() });
    }

    getCategoryListNew(){
        return http.get(`/call-allcategory-list/`,{ headers: authHeader() });
    }

    
}
export default new CourseService();
