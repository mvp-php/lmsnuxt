<template>
    <div class="content">
        <p class="page-title mb-20">Manage
            Learning Path</p>
        <div class="main-card">
            <div class="role-main learn-path-uper-gap">
                <button class="mb-18 back-text">
                    <ImageComponent :log="require('~/assets/img/svg/arrow-left.svg')" className="classObj" />
                    <nuxt-link to="/learning-path-managment"><span>BACK </span></nuxt-link>
                </button>
                <div class="blue-text mb-20">
                    Create Learning Path
                </div>
                <form @submit="submitData" method="POST" ref="learning_path_data_submit" enctype="multipart/form-data">
                    <CreateLearningPath :lerning-Path-data="lerningPathData" />
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
import ImageComponent from '../../components/element/image.vue';
import CreateLearningPath from '../../components/LearningPathManagment/create.vue'
// import FormTextBoxField from '../../components/element/formTextBoxField.vue';
// import FormTextareaField from '../../components/element/textArea.vue';
// import FormDropdown from "../../components/element/formDropdown.vue";
// import FormFileField from "../../components/element/inputFile.vue";
// import FormCheckboxField from '../../components/element/formCheckbox.vue';
import FormButton from '../../components/element/formButton.vue';
// import Editor from "@tinymce/tinymce-vue";
import LearningPathService from '../../components/Service/LearningPathService.js';
import ErrorToastr from '../../components/element/errorToastr.vue';
// import Dropzone from '../../components/element/Dropzone.vue';
import CategoryService from '../../components/Service/CategoryService';
import SubCategoryService from '../../components/Service/SubCategoryService';


export default {
    layout: 'frontend',
    components: {
        ImageComponent,
        CreateLearningPath,
        // FormTextBoxField,
        // FormTextareaField,
        // FormDropdown,
        // FormFileField,
        // FormCheckboxField,
        FormButton,
        // Editor,
        // Dropzone,
        ErrorToastr
    },
    data() {
        return {
            lerningPathData: {
                title: '',
                description: '',
                requirement: '',
                image_name: '',
                intro_video: '',
                category_id: '',
                learning_path_sub_category: '',
                learning_path_courses: '',
                price: '',
                learning_path_instructor_name: '',
            },
            // lerningPathData: {},

            categoryList: [],
            subCategoryList: [],
            errorMessage: "",
            hides: true,
            hidessucces: true,
            successMessage: "",
            dangerHide: true,

        }
    },
    methods: {
        videoUpload(file, response) {
            this.lerningPathData.intro_video = response;
        },
        thumbnailUpload(file, response) {
            this.lerningPathData.image_name = response;
        },
        submitData(event) {
            console.log(this.lerningPathData, "Data");
            document.getElementById("learning_path_title_error").textContent = "";
            document.getElementById("learning_path_description_error").textContent = "";
            document.getElementById("requirement_error").textContent = "";
            document.getElementById("learning_path_major_category_error").textContent = "";
            document.getElementById("learning_path_sub_category_error").textContent = "";
            document.getElementById("learning_path_instructor_name_error").textContent = "";
            document.getElementById("learning_path_thumbnail_error").textContent = "";
            document.getElementById("learning_path_video_error").textContent = "";
            document.getElementById("learning_path_course_price_error").textContent = "";
            var cnt = 0;

            if (!this.lerningPathData.requirement) {
                document.getElementById("requirement_error").textContent = "Enter the learning requirements title";
                event.preventDefault();
                cnt = 1;
            }
            if (cnt == 0) {
                LearningPathService.addLearningPath(this.lerningPathData)
                    .then((result) => {
                        localStorage.setItem('sucess_msg', result.data.response_msg);
                        this.$router.push({ path: '/learning-path-managment' });
                    }).catch(error => {
                        console.log(error, "ddd");
                        this.errorMessage = error.response.data.response_msg;

                        this.dangerToasterShow();


                    })
            }
            event.preventDefault();
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
        getSubCategory(id) {
            console.log(id);
            SubCategoryService.getEditSubCategory(id).then((result) => {
                this.subCategoryList = result.data.data;
                console.log(result.data.data, "NAYAN");

            }).catch((err) => {
                console.error(err);
            });
        },
    },
    mounted() {
        this.getAllCategoryList();
    }
}
</script>