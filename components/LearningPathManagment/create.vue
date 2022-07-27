<template>
    <div class="create-role-main">
        <div class="slds-form-element custom-grid mb-30">
            <FormLabel required="true" className="slds-form-element__label custom-label" labelName=" Learning
                Path
                Title"></FormLabel>
            <div class="slds-form-element__control  custom-grid-control">
                <FormTextBoxField v-model="lerningPathData.title" fieldId="learning_path_title" placeHolder=""
                    className="slds-input custom-grid-input" ref="learning_path_title" />
                <span style="color: red;" id="learning_path_title_error"></span>
            </div>
        </div>
        <div class="slds-form-element custom-grid  mb-30">
            <FormLabel required="true" className="slds-form-element__label custom-label" labelName=" Learning
                Path
                Description"></FormLabel>
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
            <FormLabel className="slds-form-element__label custom-label" labelName=" Learning
                Path
                requirements" required="true" for="textarea-id-01"> </FormLabel>
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
            <FormLabel required="true" className="slds-form-element__label custom-label" labelName=" Learning
                Path
                Thumbnail" for="textarea-id-01"> </FormLabel>
            <div class="slds-form-element__control custom-grid-control">
                <div class="position-relative">
                    <!-- <Dropzone v-bind:fileUploadSuccessEvent="thumbnailUpload" modelname="Dropzone"
                        v-model="lerningPathData.image_name" /> -->

                    <Dropzone v-bind:fileUploadSuccessEvent="thumbnailUpload" :folder="`learningPathThumbnails`"
                        :type="`image`" :extension="`.png, .jpeg, .jpg, .gif`" modelname="Dropzone"
                        v-model="lerningPathData.image_name" />
                </div>
                <span style="color: red;" id="learning_path_thumbnail_error"></span>
            </div>
        </div>
        <div class="slds-form-element custom-grid  mb-30">

            <FormLabel className="slds-form-element__label custom-label" labelName="  Learning
                Path
                preview
                Video" for="textarea-id-01"> </FormLabel>
            <div class="slds-form-element__control custom-grid-control">

                <Dropzone v-bind:fileUploadSuccessEvent="videoUpload" :folder="`learningPathThumbnails`" :type="`video`"
                    :extension="`.MPEG, .AVI, .MKV, .mp4`" modelname="Dropzone" v-model="lerningPathData.intro_video" />
                <span style="color: red;" id="learning_path_video_error"></span>
            </div>
        </div>
        <div class="slds-form-element  custom-grid">
            <FormLabel className="slds-form-element__label custom-label" labelName="  Select
                major
                Category" required="true" for="textarea-id-01"> </FormLabel>
            <div class="slds-form-element__control custom-grid-control mb-30">
                <div class="slds-select_container   cus-select-container">
                    <FormDropdown class="slds-select custom-grid-input" selectName="Category " :options="categoryList"
                        @onChange="getSubCategory" v-model="lerningPathData.category_id" />
                    <span style="color: red;" id="learning_path_major_category_error"></span>
                </div>
            </div>
        </div>
        <div class="slds-form-element custom-grid">
            <FormLabel className="slds-form-element__label custom-label" labelName="Select
                sub
                Category" for="textarea-id-01"> </FormLabel>
            <div class="slds-form-element__control custom-grid-control mb-30">
                <div class="slds-select_container cus-select-container">
                    <FormDropdown class="slds-select custom-grid-input" selectName="Sub Category "
                        :options="subCategoryList" @onChange="getSubCategoryData" />
                    <span style="color: red;" id="learning_path_sub_category_error"></span>
                </div>
            </div>
        </div>
        <div class="slds-form-element custom-grid">
            <FormLabel className="slds-form-element__label custom-label" labelName="instructor
                name" for="textarea-id-01"> </FormLabel>
            <div class="slds-form-element__control custom-grid-control mb-30">
                <FormTextBoxField v-model="lerningPathData.learning_path_instructor_name"
                    fieldId="learning_path_instructor_name" placeHolder="" className="slds-input custom-grid-input "
                    ref="learning_path_instructor_name" />
                <span style="color: red;" id="learning_path_instructor_name_error"></span>
            </div>
        </div>
        <div class="slds-form-element check-element-main mb-20">
            <FormLabel className="slds-form-element__label custom-label" labelName="Certificate" required="true"
                for="textarea-id-01"> </FormLabel>
            <div class="check-boxes">
                <div class="slds-form-element  check-element-inner  checkbox2">
                    <div class="slds-form-element__control">
                        <div class="slds-checkbox   role-check-main">
                            <FormCheckboxField className="role-check" idName="yes" checkboxName="options"
                                checkboxVal="yes" />
                            <label class="slds-checkbox__label " for="yes">
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
            <FormLabel className="slds-form-element__label custom-label" labelName="Course Pirce" required="true"
                for="textarea-id-01"> </FormLabel>
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
import FormTextBoxField from '../element/formTextBoxField.vue';
import FormTextareaField from '../element/textArea.vue';
import FormDropdown from "../element/formDropdown.vue";
import FormCheckboxField from '../element/formCheckbox.vue';
import FormButton from '../element/formButton.vue';
import FormLabel from '../element/formLabel.vue';
import Editor from "@tinymce/tinymce-vue";
import ErrorToastr from '../element/errorToastr.vue'; 
import Dropzone from '../element/Dropzone.vue';
import SubCategoryService from '../Service/SubCategoryService';


export default {
    name: 'create-role',
    props: ['lerningPathData', 'categoryList', 'subCategoryList'],
    components: {
        FormTextBoxField,
        FormTextareaField,
        FormDropdown,
        FormCheckboxField,
        FormButton,
        Editor,
        Dropzone,
        ErrorToastr,
        FormLabel
    },
    data() {
        return {

        }
    },
    methods: {
        videoUpload(file, response) {
            this.lerningPathData.intro_video = response;
        },
        thumbnailUpload(file, response) {
            this.lerningPathData.image_name = response;
        },
        getSubCategory(selected) {


            SubCategoryService.getEditSubCategory(selected.value).then((result) => {
                this.subCategoryList = result.data.data;
                this.lerningPathData.category_id = selected.value;
                console.log(result.data.data, "NAYAN");

            }).catch((err) => {
                console.error(err);
            });
        },
        getSubCategoryData(selected) {
            this.lerningPathData.learning_path_sub_category = selected.value;
        },
    }

}
</script>