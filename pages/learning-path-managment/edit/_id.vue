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
                    Edit Learning Path
                </div>
                <form @submit="updateData" method="POST" ref="learning_path_data_submit" enctype="multipart/form-data">
                    <div class="create-role-main">
                        <div class="slds-form-element custom-grid mb-30">
                            <label class="slds-form-element__label custom-label" for="text-input-id-46">
                                Learning
                                Path
                                Title</label>
                            <div class="slds-form-element__control  custom-grid-control">
                                <FormTextBoxField v-model="editLearningpathData.title" fieldId="learning_path_title"
                                    :value="editLearningpathData.title" placeHolder=""
                                    className="slds-input custom-grid-input" ref="learning_path_title" />
                                <span style="color: red;" id="learning_path_title_error"></span>
                            </div>
                        </div>
                        <div class="slds-form-element custom-grid  mb-30">
                            <label class="slds-form-element__label custom-label" for="textarea-id-01">Learning
                                Path
                                Description
                            </label>
                            <div class="slds-form-element__control custom-grid-control">
                                <editor class="slds-textarea custom-grid-textarea mb-20" placeHolder=""
                                    name="learning_path_description" id="learning_path_description" api-key="no-api-key"
                                    v-model="lerningPathData.description" :init="{
                                        height: 250,
                                        menubar: true,
                                        plugins: [
                                            'advlist autolink lists link image charmap print preview anchor',
                                            'searchreplace visualblocks code fullscreen',
                                            'insertdatetime media table paste code help wordcount',
                                        ],
                                        toolbar: 'undo redo | formatselect | bold italic backcolor | \alignleft aligncenter alignright alignjustify | \ bullist numlist outdent indent | removeformat | help',
                                    }" />
                                <span style="color: red;" id="learning_path_description_error"></span>
                            </div>
                        </div>
                        <div class="slds-form-element custom-grid mb-30">
                            <label class="slds-form-element__label custom-label" for="textarea-id-01">Learning
                                Path
                                requirements
                                <span class="">*</span>
                            </label>
                            <div class="slds-form-element__control custom-grid-control">
                                <editor class="slds-textarea custom-grid-textarea mb-20"
                                    :model="editLearningpathData.requirement" :value="editLearningpathData.requirement"
                                    placeHolder="" name="requirement" id="requirement" api-key="no-api-key"
                                    v-model="lerningPathData.requirement" :init="{
                                        height: 250,
                                        menubar: true,
                                        plugins: [
                                            'advlist autolink lists link image charmap print preview anchor',
                                            'searchreplace visualblocks code fullscreen',
                                            'insertdatetime media table paste code help wordcount',
                                        ],
                                        toolbar: 'undo redo | formatselect | bold italic backcolor | \alignleft aligncenter alignright alignjustify | \ bullist numlist outdent indent | removeformat | help',
                                    }" v-bind:value="editLearningpathData.requirement" />
                                <span style="color: red;" id="requirement_error"></span>
                            </div>
                        </div>
                        <div class="slds-form-element  custom-grid  mb-20">
                            <label class="slds-form-element__label custom-label mb-0" for="textarea-id-01">
                                Learning
                                Path
                                Thumbnail
                            </label>
                            <div class="slds-form-element__control custom-grid-control">
                                <div class="position-relative">
                                    <Dropzone v-dropzone="editLearningpathData.image_name"
                                        v-bind:fileUploadSuccessEvent="thumbnailUpload"
                                        :dropImage="`${editLearningpathData.image_name}`" modelname="Dropzone"
                                        v-model="lerningPathData.image_name" />
                                </div>
                                <span style="color: red;" id="learning_path_thumbnail_error"></span>
                            </div>
                        </div>
                        <div class="slds-form-element custom-grid  mb-30">
                            <label class="slds-form-element__label custom-label " for="textarea-id-01">
                                Learning
                                Path
                                preview
                                Video
                            </label>
                            <div class="slds-form-element__control custom-grid-control">
                                <Dropzone v-bind:fileUploadSuccessEvent="videoUpload" modelname="Dropzone"
                                    :dropImage="`${editLearningpathData.intro_video}`" />
                                <span style="color: red;" id="learning_path_video_error"></span>
                            </div>
                        </div>
                        <div class="slds-form-element  custom-grid">
                            <label class="slds-form-element__label custom-label" for="select-01">Select
                                major
                                Category
                            </label>
                            <div class="slds-form-element__control custom-grid-control mb-30">
                                <div class="slds-select_container   cus-select-container">
                                    <select class="slds-select    custom-grid-input" id="select-01"
                                        @change="ChangeCategory($event)" @blur="
                                            (e) => (lerningPathData.learning_path_major_category = e.target.value)
                                        " v-model="editLearningpathData.learning_path_major_category">
                                        <option value="">Select Major Category</option>
                                        <option ref="learning_path_major_category" v-for="category in categoryList"
                                            :key="category.id" :value="category.id">
                                            {{ category.title }}</option>
                                    </select>
                                    <span style="color: red;" id="learning_path_major_category_error"></span>
                                </div>
                            </div>
                        </div>
                        <div class="slds-form-element custom-grid">
                            <label class="slds-form-element__label custom-label" for="select-01">Select
                                sub
                                Category
                            </label>
                            <div class="slds-form-element__control custom-grid-control mb-30">
                                <div class="slds-select_container cus-select-container">
                                    <select class="slds-select   custom-grid-input" id="select-01" @blur="
                                        (e) => (lerningPathData.learning_path_sub_category = e.target.value)
                                    " v-model="lerningPathData.learning_path_sub_category">
                                        <option value="">Select Sub Category</option>
                                        <option ref="learning_path_sub_category" v-for="category in subCategoryList"
                                            :key="category.id" :value="category.id">
                                            {{ category.title }}</option>
                                    </select>
                                    <span style="color: red;" id="learning_path_sub_category_error"></span>
                                </div>
                            </div>
                        </div>
                        <div class="slds-form-element custom-grid">
                            <label class="slds-form-element__label custom-label" for="text-input-id-46">
                                instructor
                                name</label>
                            <div class="slds-form-element__control custom-grid-control mb-30">
                                <FormTextBoxField v-model="lerningPathData.learning_path_instructor_name"
                                    fieldId="learning_path_instructor_name" placeHolder=""
                                    className="slds-input custom-grid-input " ref="learning_path_instructor_name" />
                                <span style="color: red;" id="learning_path_instructor_name_error"></span>
                            </div>
                        </div>
                        <div class="slds-form-element check-element-main mb-20">
                            <label class="slds-form-element__label  custom-label" for="textarea-id-01">Certificate
                            </label>
                            <div class="check-boxes">
                                <div class="slds-form-element  check-element-inner  checkbox2">
                                    <div class="slds-form-element__control">
                                        <div class="slds-checkbox   role-check-main">
                                            <FormCheckboxField className="role-check" idName="yes"
                                                checkboxName="options" checkboxVal="yes" />
                                            <label class="slds-checkbox__label" for="yes">
                                                <span class="slds-checkbox_faux"></span>
                                                <span class="slds-form-element__label">Yes</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="slds-form-element  check-element-inner checkbox2">
                                    <div class="slds-form-element__control">
                                        <div class="slds-checkbox role-check-main">
                                            <FormCheckboxField className="role-check" idName="No" checkboxName="options"
                                                checkboxVal="No" />
                                            <label class="slds-checkbox__label" for="No">
                                                <span class="slds-checkbox_faux"></span>
                                                <span class="slds-form-element__label">No</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="slds-form-element cus-price-main-inner">
                            <label class="slds-form-element__label custom-label" for="text-input-id-46">
                                Course Pirce <span class="require-danger">*</span></label>
                            <div class="sub-categoty-inner">
                                <div class="slds-form-element__control custom-grid-control">
                                    <FormTextBoxField fieldId="learning_path_course_price" placeHolder=""
                                        v-model="editLearningpathData.price" :value="editLearningpathData.price"
                                        className="slds-input custom-grid-input" ref="learning_path_course_price" />
                                    <span style="color: red;" id="learning_path_course_price_error"></span>
                                </div>
                                <div class="price-checkbox">
                                    <div class="slds-form-element price-check-inner">
                                        <div class="slds-form-element__control">
                                            <div class="slds-checkbox role-check-main">
                                                <FormCheckboxField className="role-check" idName="free"
                                                    checkboxName="options" checkboxVal="free" />
                                                <label class="slds-checkbox__label" for="free">
                                                    <span class="slds-checkbox_faux"></span>
                                                    <span class="slds-form-element__label">Free</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slds-form-element price-check-inner">
                                        <div class="slds-form-element__control">
                                            <div class="slds-checkbox role-check-main">
                                                <FormCheckboxField className="role-check" idName="Basic"
                                                    checkboxName="options" checkboxVal="Basic" />
                                                <label class="slds-checkbox__label" for="Basic">
                                                    <span class="slds-checkbox_faux"></span>
                                                    <span class="slds-form-element__label">Basic</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slds-form-element price-check-inner">
                                        <div class="slds-form-element__control">
                                            <div class="slds-checkbox role-check-main">
                                                <FormCheckboxField className="role-check" idName="Premium"
                                                    checkboxName="options" checkboxVal="Premium" />
                                                <label class="slds-checkbox__label" for="Premium">
                                                    <span class="slds-checkbox_faux"></span>
                                                    <span class="slds-form-element__label">Premium</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btn-align-end">
                        <!-- <a class="slds-button slds-button_brand  btnmain blue-btn  ml-10"
                            v-on:click="submitData()">Next</a> -->
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
        ErrorToastr
    },
    data() {
        return {
            editLearningpathData: {},
            subCategoryList: [],
            categoryList: [],
            lerningPathData: {},
            // lerningPathData: {
            //     title: '',
            //     description: '',
            //     requirement: '',
            //     image_name: '',
            //     intro_video: '',
            //     learning_path_major_category: '',
            //     learning_path_sub_category: '',
            //     learning_path_courses: '',
            //     price: '',
            //     learning_path_instructor_name: '',
            // },
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
        updateData(event) {
            var cnt = 0;
            console.log(this.lerningPathData, "Data");
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
                        console.log(error, "Data");
                        this.errorMessage = error.response.data.response_msg;

                        this.dangerToasterShow();


                    })
            }
            event.preventDefault();
        },
        getLearningPathData() {
            LearningPathService.getEditDetails(this.$route.params.id)
                .then((result) => {
                    this.editLearningpathData = result.data.data;
                    console.log(this.editLearningpathData, "Learning");
                }).catch(error => {
                    // this.errorMessage = error.response.data.data.response_msg;
                    // this.dangerToasterShow();

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
                console.log(result.data.data, "NAYAN");

            }).catch((err) => {
                console.error(err);
            });
        },
    },
    mounted() {
        this.getLearningPathData();
        this.getAllCategoryList();
    }
}
</script>