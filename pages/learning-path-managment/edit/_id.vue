<template>
    <div class="content">
        <p class="page-title mb-20">Manage
            Learning Path</p>
        <div class="main-card">
            <div class="role-main learn-path-uper-gap">
                <div class="mb-18 back-text">
                    <ImageComponent :log="require('~/assets/img/svg/arrow-left.svg')" :className="classObj" />
                    <nuxt-link to="/learning-path-managment"><span>BACK </span></nuxt-link>
                </div>
                <div class="blue-text mb-20">
                    Edit Learning Path
                </div>
                <form @submit="updateData" method="POST" ref="learning_path_data_submit" enctype="multipart/form-data">
                    <EditLearningPath :lerning-path-data="lerningPathData" :category-list="categoryList" />
                    <div class="btn-align-end">
                        <FormButton type="submit" buttonName="Next"
                            className="slds-button slds-button_brand  btnmain blue-btn  ml-10" />
                    </div>
                </form>
            </div>
        </div>
        <span>
            <ErrorToastr :errorMessage="errorMessage" v-if="!dangerHide" />
        </span>
    </div>
</template>
<script>
import ImageComponent from '../../../components/element/image.vue';
import FormTextBoxField from '../../../components/element/formTextBoxField.vue';
import FormTextareaField from '../../../components/element/textArea.vue';
import FormDropdownField from "../../../components/element/formDropdown.vue";
import FormFileField from "../../../components/element/inputFile.vue";
import FormCheckboxField from '../../../components/element/formCheckbox.vue';
import FormButton from '../../../components/element/formButton.vue';
import Editor from "@tinymce/tinymce-vue";
import ErrorToastr from '../../../components/element/errorToastr.vue';
import Dropzone from '../../../components/element/Dropzone.vue';
import LearningPathService from '../../../components/Service/LearningPathService.js';
import SubCategoryService from '../../../components/Service/SubCategoryService.js';
import CategoryService from '../../../components/Service/CategoryService';
import EditLearningPath from '../../../components/LearningPathManagment/create.vue'
export default {
    name: 'edit-learning-path',
    layout: 'frontend',
    components: {
        ImageComponent,
        FormTextBoxField,
        FormTextareaField,
        FormDropdownField,
        FormFileField,
        FormCheckboxField,
        FormButton,
        Editor,
        Dropzone,
        ErrorToastr,
        EditLearningPath
    },
    mounted() {
        this.getLearningPathData();
        this.getAllCategoryList();
        this.getSubCategoryDatById();
    },
    data() {
        return {
            subCategoryList: [],
            categoryList: [],
            lerningPathData: {},
            classObj: 'arrow-left',
            errorMessage: "",
            hides: true,
            hidessucces: true,
            successMessage: "",
            dangerHide: true,
            categoryId: '',
        }
    },

    methods: {
        updateData(event) {
            var cnt = 0;
            document.getElementById("requirement_error").textContent = "";
            if (!this.lerningPathData.requirement) {
                document.getElementById("requirement_error").textContent = "Enter the learning requirements title";
                event.preventDefault();
                cnt = 1;
            }
            if (cnt == 0) {
                LearningPathService.updateLearningPath(this.lerningPathData)
                    .then((result) => {
                        localStorage.setItem('sucess_msg', result.data.response_msg);
                        this.$router.push({ path: '/learning-path-managment' });
                    }).catch(error => {
                        console.log(error.response.data.response_msg, "Data");
                        this.errorMessage = error.response.data.response_msg;
                        this.dangerToasterShow();
                    })
            }
            event.preventDefault();
        },
        getLearningPathData() {
            LearningPathService.getEditDetails(this.$route.params.id)
                .then((result) => {
                    this.lerningPathData = result.data.data;
                    this.categoryId = result.data.data.entity_sub_category_relation.course_sub_categoryrelation[0].category_relation.id;
                    console.log(this.categoryId, "MainCat_id");
                }).catch(error => {
                    this.errorMessage = error.response.data.data.response_msg;
                    this.dangerToasterShow();
                })
        },
        dangerToasterShow() {
            this.dangerHide = false;
            setTimeout(() => this.dangerHide = true, 5000);
        },
        errorClose() {
            this.dangerHide = true;
        },
        getAllCategoryList() {
            CategoryService.getCategoryListNew().then((result) => {
                this.categoryList = result.data.data;
            }).catch((err) => {
                console.error(err);
            });
        },
        ChangeCategory(e) {
            SubCategoryService.getEditSubCategory(e.target.value).then((result) => {
                this.subCategoryList = result.data.data;
            }).catch((err) => {
                console.error(err);
            });
        },
        getSubCategoryDatById() {
            console.log(this.categoryId, 'this.categoryId')
            if (this.categoryId) {
                SubCategoryService.getEditSubCategory(1).then((result) => {
                    this.editSubCategoryList = result.data.data;
                    console.log(result.data.data, "dsadsad");
                }).catch((err) => {
                    console.error(err);
                });
            }
        }
    },

}
</script>