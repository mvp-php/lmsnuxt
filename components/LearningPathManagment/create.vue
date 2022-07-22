<template>
    <div class="create-role-main">
        <div class="slds-form-element custom-grid mb-30">
            <label class="slds-form-element__label custom-label" for="text-input-id-46">
                Learning
                Path
                Title</label>
            <div class="slds-form-element__control  custom-grid-control">
                <FormTextBoxField v-model="lerningPathData.title" fieldId="learning_path_title" placeHolder=""
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
                <editor class="slds-textarea custom-grid-textarea mb-20" placeHolder="" name="learning_path_description"
                    id="learning_path_description" api-key="no-api-key" v-model="lerningPathData.description" :init="{
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
                <editor class="slds-textarea custom-grid-textarea mb-20" placeHolder="" name="requirement"
                    id="requirement" api-key="no-api-key" v-model="lerningPathData.requirement" :init="{
                        height: 250,
                        menubar: true,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount',
                        ],
                    
                        toolbar: 'undo redo | formatselect | bold italic backcolor | \alignleft aligncenter alignright alignjustify | \ bullist numlist outdent indent | removeformat | help',
                    }" />
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
                    <Dropzone v-bind:fileUploadSuccessEvent="thumbnailUpload" modelname="Dropzone"
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
                    v-model="lerningPathData.intro_video" />
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
                    <FormDropdown class="slds-select custom-grid-input" selectName="Category "
                        @blur="e => lerningPathData.category_id = e.target.value" :options="categoryList"
                        @onChange="getSubCategory" v-model="lerningPathData.category_id" />
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
                    <FormDropdown class="slds-select custom-grid-input" selectName="Sub Category "
                        :options="subCategoryList" />
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
                    fieldId="learning_path_instructor_name" placeHolder="" className="slds-input custom-grid-input "
                    ref="learning_path_instructor_name" />
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
                            <FormCheckboxField className="role-check" idName="yes" checkboxName="options"
                                checkboxVal="yes" />
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
                        v-model="lerningPathData.price" className="slds-input custom-grid-input"
                        ref="learning_path_course_price" />
                    <span style="color: red;" id="learning_path_course_price_error"></span>
                </div>
                <div class="price-checkbox">
                    <div class="slds-form-element price-check-inner">
                        <div class="slds-form-element__control">
                            <div class="slds-checkbox role-check-main">
                                <FormCheckboxField className="role-check" idName="free" checkboxName="options"
                                    checkboxVal="free" />
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
                                <FormCheckboxField className="role-check" idName="Basic" checkboxName="options"
                                    checkboxVal="Basic" />
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
                                <FormCheckboxField className="role-check" idName="Premium" checkboxName="options"
                                    checkboxVal="Premium" />
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

</template>
<script>
import ImageComponent from '../element/image.vue';
import FormTextBoxField from '../element/formTextBoxField.vue';
import FormTextareaField from '../element/textArea.vue';
import FormDropdown from "../element/formDropdown.vue";
import FormFileField from "../element/inputFile.vue";
import FormCheckboxField from '../element/formCheckbox.vue';
import FormButton from '../element/formButton.vue';
import Editor from "@tinymce/tinymce-vue";
import LearningPathService from '../Service/LearningPathService.js';
import ErrorToastr from '../element/errorToastr.vue';
import Dropzone from '../element/Dropzone.vue';
import CategoryService from '../Service/CategoryService';
import SubCategoryService from '../Service/SubCategoryService';


export default {
    name: 'create-role',

    components: {
        ImageComponent,
        FormTextBoxField,
        FormTextareaField,
        FormDropdown,
        FormFileField,
        FormCheckboxField,
        FormButton,
        Editor,
        Dropzone,
        ErrorToastr
    },
    props: ['lerningPathData'],
    methods: {

    }

}
</script>