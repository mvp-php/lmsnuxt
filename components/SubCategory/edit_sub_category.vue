<template>
    <span>
        <div class="modal-row">

            <div class="modal-category-col1">
                <p class="mb-0 user-modal-title">Select Major Category</p>
            </div>
            <div class="modal-record-col2">
                <div class="slds-form-element__control  ">
                    <select v-model="subCategoryData.parent_category_id" class="slds-select custom-grid-input"
                        @change="ChangeCategory()" id="select-01">
                        <option value="">Select Major Category</option>
                        <option v-for="category in categoryList" :key="category.id" :value="category.id">
                            {{ category.title }}
                        </option>

                    </select>

                    <span class="text-danger" id="major_category_error" ref="majorCategoryerror"></span>
                </div>
            </div>
        </div>
        <div class="modal-row">
            <div class="modal-category-col1">
                <p class="mb-0 user-modal-title">Sub Category Name</p>
            </div>
            
            <div class="modal-record-col2">
                <div class="slds-form-element__control  ">
                    <FormTextBoxField v-model.trim="subCategoryData.title" fieldId="subCategory_name"
                        placeHolder="Enter category" className="slds-input custom-grid-input"
                        @keypress="checkInput()" />
                    <span class="text-danger" id="sub_category_title_error" ref="subcatnameeerror"></span>
                </div>
            </div>
        </div>
       
        <div class="modal-row">
            <div class="modal-category-col1">
                <p class="mb-0 user-modal-title">Category Description</p>
            </div>
           
            <div class="modal-record-col2">
                <div class="mb-0 user-modal-desc">
                    <div class="slds-form-element__control ">
                        <FormTextareaField v-model.trim="subCategoryData.description"
                            placeHolder="Description comes here with a character limit."
                            className="slds-input custom-grid-input" fieldId="subCategory_desc"
                            :bindValue="`${subCategoryData.description}`" @keypress="checkInput()" />
                        <span class="text-danger" id="sub_category_description_error" ref="subcatedescerror"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-row">
            <div class="modal-category-col1">
                <p class="mb-0 user-modal-title">Upload thumbnail</p>
            </div>
 
            <div class="modal-record-col2">
                <Dropzone v-bind:fileUploadSuccessEvent="fileUploadSuccessEvent" modelname="Dropzone"
                    v-model="subCategoryData.dropzoneImage" :type="`image`"  :extension="`.png, .jpeg, .jpg, .gif`" :existingImage="`${subCategoryData.image_name}`" />
            </div>
        </div>
    </span>

</template>
<script>

import Dropzone from '../../components/element/Dropzone.vue';
import FormTextBoxField from '../../components/element/formTextBoxField.vue';
import FormTextareaField from '../../components/element/textArea.vue';
export default {

    name: 'save-sub-category',
    props: ['subCategoryData', 'categoryList'],
    components: {
        Dropzone,
        FormTextBoxField,
        FormTextareaField,
    },

    data() {
        return {


        }
    },

    methods: {
       
        fileUploadSuccessEvent(file, response) {
            this.subCategoryData.image_name = response;

        },
        checkInput: function () {

            if (this.subCategoryData.title) {
                document.getElementById("sub_category_title_error").textContent = "";
            }
            if (this.subCategoryData.description) {
                document.getElementById("sub_category_description_error").textContent = "";
            }


        },
    },


}
</script>