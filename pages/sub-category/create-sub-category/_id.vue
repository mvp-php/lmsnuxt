<template>
    <span>
        <div class="content">
            <p class="page-title mb-20">Add Sub Category</p>
            <div class="main-card">
                <div class="role-main">
                    <div class="mb-18 back-text">
                        <ImageComponent :log="require('~/assets/img/svg/arrow-left.svg')" :className="classObj" />
                        <nuxt-link :to="`/sub-category/${this.$route.params.id}`"><span>BACK </span></nuxt-link>
                    </div>
                    <form v-on:submit.prevent="addSubCategory">
                        <createSubCategory :sub-category-data="subCategoryData" :categoryList="categoryList" />
                        <div class="btn-align-end p-0">
                            <FormButton type="submit" :buttonName="ButtonName"
                                className="slds-button slds-button_brand btnmain blue-btn" />
                        </div>
                    </form>

                </div>
            </div>


        </div>
        <ErrorToastr :errorMessage="errorMessage" v-if="!errorToastrHide" />
        <SuccessToastr :successMessage="successMessage" v-if="!successToastrHide" />
    </span>
</template>
<script>

import createSubCategory from '../../../components/SubCategory/create_sub_category.vue';
import ErrorToastr from '../../../components/element/errorToastr.vue';
import SuccessToastr from '../../../components/element/successToastr.vue';
import FormButton from '../../../components/element/formButton.vue';
import CategoryService from '../../../components/Service/CategoryService';
import ImageComponent from '../../../components/element/image.vue';
import SubcategoryService from '../../../components/Service/SubcategoryService';

export default {
    layout: 'frontend',
    name: 'create-sub-category',

    components: {
        ErrorToastr,
        SuccessToastr,
        FormButton,
        createSubCategory,
        ImageComponent
    },

    data() {
        return {
            subCategoryData: {
                image_name:"",
                description:''
            },
            errorMessage: "",
            errorToastrHide: true,
            successMessage: "",
            successToastrHide: true,
            ButtonName: "Save SubCategory",
            categoryList: [],
            classObj: 'arrow-left',

        }
    },
    mounted() {
        this.getAllCategoryList();
        this.subCategoryData.parent_category_id = this.$route.params.id;
    },
    methods: {
        getAllCategoryList() {



            // CategoryService.getCategoryListNew().then((result) => {
            //     this.categoryList = result.data.data;
            // }).catch((err) => {
            //     console.error(err);
            // });
        },
        addSubCategory() {
            document.getElementById("major_category_error").textContent = "";
            document.getElementById("sub_category_title_error").textContent = "";
            document.getElementById("sub_category_description_error").textContent = "";
            var cnt = 0;

            if (!this.subCategoryData.parent_category_id) {
                document.getElementById("major_category_error").textContent = "Please select Major Category";

                cnt = 1;
            }
            if (!this.subCategoryData.title) {
                document.getElementById("sub_category_title_error").textContent = "Please enter Category Name";

                cnt = 1;
            }
            if (!this.subCategoryData.description) {
                document.getElementById("sub_category_description_error").textContent = "Please enter Description";

                cnt = 1;
            }

            if (cnt == 0) {

                SubcategoryService.saveSubCategory(this.subCategoryData).then((result) => {
                    // var catId = result.data.data[0].parent_category_id;
                    localStorage.setItem('sucess_msg', result.data.response_msg);
                    this.$router.push({ path: '/sub-category/' + this.subCategoryData.parent_category_id });
                }).catch((err) => {
                    this.errorMessage = err.response.data.response_msg;
                    this.dangerToasterShow();
                });
            }

        },
        dangerToasterShow() {

            this.errorToastrHide = false;
            setTimeout(() => this.errorToastrHide = true, 5000);
        },
        errorClose: function () {
            this.errorToastrHide = true;
        },
        successToasterShow() {
            this.successToastrHide = false;
            setTimeout(() => this.successToastrHide = true, 5000);
        },
        successClose: function () {
            this.successToastrHide = true;
        },
    },


}
</script>