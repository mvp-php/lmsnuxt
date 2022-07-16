<template>
    <span>
        <div class="content">
            <p class="page-title mb-20">Add Major Category</p>
            <div class="main-card">
                <div class="role-main">
                    <div class="mb-18 back-text">
                        <imageComponent :log="require('~/assets/img/svg/arrow-left.svg')" />
                        <nuxt-link to="/category-management"><span>BACK </span></nuxt-link>
                    </div>
                    <form @submit="addNewCategory" ref="add_category_submit" enctype="multipart/form-data">
                        <createCategory  :category-data="categoryData"></createCategory>
                        <div class="btn-align-end p-0">
                            <FormButton type="submit" buttonName="Add Major Category"
                                className="slds-button slds-button_brand btnmain blue-btn" />
                        </div>
                    </form>

                </div>
            </div>


        </div>
           <errorToastr :errorMessage="errorMessage" v-if="!dangerHide" />
    </span>



</template>
<script>


import categoryService from '../../components/Service/CategoryService';
import imageComponent from '../../components/element/image.vue';
import createCategory from '../../components/Category/create_category.vue';
// import successToastrVue from '../../components/element/successToastr.vue';
import errorToastr from '../../components/element/errorToastr.vue';
import FormButton from '../../components/element/formButton.vue';
export default {
    layout: 'frontend',
 
    components: {
        imageComponent,
        createCategory,
        errorToastr,
        FormButton
    },
    data() {
        return {
            categoryData: { },
            dangerHide:true
        }
    },
    methods: {
        addNewCategory(e) {
            document.getElementById("category_title_error").textContent = "";
            document.getElementById("category_description_error").textContent = "";
            
            if (!this.categoryData.title) {
                document.getElementById("category_title_error").textContent = "Please enter Category Name";
                e.preventDefault();
            }
            if (!this.categoryData.description) {
                document.getElementById("category_description_error").textContent = "Please enter Description";
                e.preventDefault();
            }
            if (this.categoryData.title && this.categoryData.description) {
                categoryService.addCategory(this.categoryData).then((result) => {
                    localStorage.setItem('sucess_msg',result.data.response_msg);
                    this.$router.push({ path: '/category-management' });

                }).catch(error => {
                   
                   this.errorMessage = error.response.data.response_msg;

                        this.dangerToasterShow();
                });
                e.preventDefault();
            }
        },
        dangerToasterShow() {

            this.dangerHide = false;
            setTimeout(() => this.dangerHide = true, 5000);
        },
        errorClose(){
            this.dangerHide = true;
            }
    }

}
</script>