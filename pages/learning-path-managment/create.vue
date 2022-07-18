<template>
    <div class="content">
        <p class="page-title mb-20">Manage
            Learning Path</p>
        <div class="main-card">
            <div class="role-main learn-path-uper-gap">
                <button class="mb-18 back-text" onclick="history.back()">
                    <ImageComponent :log="require('~/assets/img/svg/arrow-left.svg')" className="classObj" />
                    <nuxt-link to="/learning-path-managment"><span>BACK </span></nuxt-link>
                </button>
                <div class="blue-text mb-20">
                    Create Learning Path
                </div>
                <div class="create-role-main">
                    <div class="slds-form-element custom-grid mb-30">
                        <label class="slds-form-element__label custom-label" for="text-input-id-46">
                            Learning
                            Path
                            Title</label>
                        <div class="slds-form-element__control  custom-grid-control">
                            <FormTextBoxField v-model="lerningPathData.learning_path_title"
                                fieldId="learning_path_title" placeHolder="" className="slds-input custom-grid-input"
                                ref="learning_path_title" />
                        </div>
                    </div>
                    <div class="slds-form-element custom-grid  mb-30">
                        <label class="slds-form-element__label custom-label" for="textarea-id-01">Learning
                            Path
                            Description
                        </label>
                        <div class="slds-form-element__control custom-grid-control">
                            <FormTextareaField v-model="lerningPathData.learning_path_description" rows="3"
                                placeHolder="" className="slds-textarea custom-grid-textarea" fieldId="category_desc"
                                ref="learning_path_description" />
                        </div>
                    </div>
                    <div class="slds-form-element custom-grid mb-30">
                        <label class="slds-form-element__label custom-label" for="textarea-id-01">Learning
                            Path
                            requirements
                            <span class="">*</span>
                        </label>
                        <div class="slds-form-element__control custom-grid-control">


                            <FormTextareaField rows="3" v-model="lerningPathData.learning_path_requirements"
                                placeHolder="" className="slds-textarea custom-grid-textarea" fieldId="category_desc"
                                ref="learning_path_requirements" />
                        </div>
                    </div>
                    <div class="slds-form-element  custom-grid  mb-20">
                        <label class="slds-form-element__label custom-label mb-0" for="textarea-id-01">Upload
                            Learning
                            Path
                            Thumbnail
                        </label>
                        <div class="slds-form-element__control custom-grid-control">
                            <div class="position-relative">
                                <button class="slds-button choose-file-btn  slds-button_brand  btnmain light-blue-btn  "
                                    href="#">Choose
                                    File
                                    <FormFileField v-model="lerningPathData.learning_path_thumbnail"
                                        fieldId="learning_path_thumbnail" placeHolder="" className="change-picture1"
                                        ref="learning_path_thumbnail" />
                                </button>
                            </div>
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
                            <div class="position:relative"><button
                                    class="slds-button choose-file-btn slds-button_brand btnmain light-blue-btn "
                                    href="#">Choose
                                    File
                                    <FormFileField v-model="lerningPathData.learning_path_video"
                                        fieldId="learning_path_video" placeHolder="" className="change-picture1"
                                        ref="learning_path_video" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="slds-form-element  custom-grid">
                        <label class="slds-form-element__label custom-label" for="select-01">Select
                            major
                            Category
                        </label>
                        <div class="slds-form-element__control custom-grid-control">
                            <div class="slds-select_container   cus-select-container">
                                <select class="slds-select  mb-30  custom-grid-input" id="select-01" @blur="
                                    (e) => (lerningPathData.learning_path_major_category = e.target.value)
                                " v-model="lerningPathData.learning_path_major_category">
                                    <option value=""></option>
                                    <option ref="learning_path_major_category">
                                        dasdad
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="slds-form-element custom-grid">
                        <label class="slds-form-element__label custom-label" for="select-01">Select
                            sub
                            Category
                        </label>
                        <div class="slds-form-element__control custom-grid-control">
                            <div class="slds-select_container cus-select-container">
                                <select class="slds-select mb-30  custom-grid-input" id="select-01" @blur="
                                    (e) => (lerningPathData.learning_path_sub_category = e.target.value)
                                " v-model="lerningPathData.learning_path_sub_category">
                                    <option value=""></option>
                                    <option ref="learning_path_sub_category">
                                        sadd
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="slds-form-element custom-grid">
                        <label class="slds-form-element__label custom-label" for="text-input-id-46">
                            instructor
                            name</label>
                        <div class="slds-form-element__control custom-grid-control">

                            <FormTextBoxField v-model="lerningPathData.learning_path_instructor_name"
                                fieldId="learning_path_instructor_name" placeHolder=""
                                className="slds-input custom-grid-input mb-30" ref="learning_path_instructor_name" />
                        </div>
                    </div>
                    <div class="slds-form-element check-element-main mb-20">
                        <label class="slds-form-element__label  custom-label" for="textarea-id-01">Courses
                        </label>
                        <div class="check-boxes">
                            <div class="slds-form-element  check-element-inner  checkbox2">
                                <div class="slds-form-element__control">
                                    <div class="slds-checkbox   role-check-main">
                                        <FormCheckboxField v-model="lerningPathData.learning_path_courses"
                                            className="role-check" idName="yes" checkboxName="options"
                                            checkboxVal="checkbox-unique-id-1" />
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
                                        <FormCheckboxField className="role-check" idName="no" checkboxName="options"
                                            checkboxVal="no" />
                                        <label class="slds-checkbox__label" for="no">
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
                            Certificate <span class="require-danger">*</span></label>
                        <div class="sub-categoty-inner">
                            <div class="slds-form-element__control custom-grid-control">

                                <FormTextBoxField fieldId="learning_path_certificate" placeHolder=""
                                    v-model="lerningPathData.learning_path_certificate"
                                    className="slds-input custom-grid-input" ref="learning_path_certificate" />
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
                    <a class="slds-button slds-button_brand  btnmain blue-btn  ml-10" v-on:click="submitData()">Next</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ImageComponent from '../../components/element/image.vue';
import FormTextBoxField from '../../components/element/formTextBoxField.vue';
import FormTextareaField from '../../components/element/textArea.vue';
import FormDropdownField from "../../components/element/formDropdown.vue";
import FormFileField from "../../components/element/inputFile.vue";
import FormCheckboxField from '../../components/element/formCheckbox.vue';



export default {
    layout: 'frontend',
    components: {
        ImageComponent,
        FormTextBoxField,
        FormTextareaField,
        FormDropdownField,
        FormFileField,
        FormCheckboxField,
    },
    data() {
        return {
            lerningPathData: {
                learning_path_title: '',
                learning_path_description: '',
                learning_path_requirements: '',
                learning_path_thumbnail: '',
                learning_path_video: '',
                learning_path_major_category: '',
                learning_path_sub_category: '',
                learning_path_courses: '',
                learning_path_certificate: '',
                learning_path_instructor_name: '',
            }
        }
    },
    methods: {
        checkInput: function () {
            if (this.categoryData.title) {
                document.getElementById("category_title_error").textContent = "";
            }
            if (this.categoryData.description) {
                document.getElementById("category_description_error").textContent = "";
            }


        },
        submitData() {
            console.log(this.lerningPathData, "ddaa");
        }
    }

}
</script>