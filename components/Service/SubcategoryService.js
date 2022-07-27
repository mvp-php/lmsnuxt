import http from "../config/DataService";
import authHeader from '../config/AuthHeader'
class SubcategoryService {
    callSubcategoryList(data,currentPage,parentCategoryId,sortBy,sortOrder) {
        return http.get(`/call-subcategory-list?parentCategoryId=`+parentCategoryId+`&page=`+currentPage+`&search=`+data+`&sortBy=`+sortBy+`&sortOrder=`+sortOrder, { headers: authHeader() });
    }
    saveSubCategory(data) {
        return http.post(`/add-sub-category`, data, { headers: authHeader() });
    }

    getEditSubCategory(id) {
        return http.get(`/get-sub-category/${id}`, { headers: authHeader() });
    }

    updateCategory(data) {
        return http.post(`/update-sub-category`, data, { headers: authHeader() });
    }

    deleteCategory(id) {
        return http.post(`/delete-category/`, { id: id, }, { headers: authHeader() });
    }
}
export default new SubcategoryService();
