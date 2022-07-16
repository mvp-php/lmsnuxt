<template>
<span>
    <div class="modal-row">
                            <div class="modal-category-col1">
                                <p class="mb-0 user-modal-title">Category Name</p>
                            </div>
                            <div class="modal-record-col2">
                                <div class="slds-form-element__control  ">
                                    <FormTextBoxField v-model="categoryData.title" fieldId="category_name"
                                        placeHolder="Category Name" className="slds-input" ref="category_name"  @keypress="checkInput()"/>
                                    <span class="text-danger" id="category_title_error" ref="caterror"></span>
                                </div>
                            </div>
                        </div> 
                        <div class="modal-row">
                            <div class="modal-category-col1">
                                <p class="mb-0 user-modal-title">Category description</p>
                            </div>
                            <div class="modal-record-col2">
                                <div class="mb-0 user-modal-desc">
                                    <div class="slds-form-element__control ">
                                        <FormTextareaField rows="3" v-model="categoryData.description" 
                                            placeHolder="Description comes here with a character limit."
                                            className="slds-textarea custom-grid-textarea cat-desc"
                                            fieldId="category_desc" ref="category_description" @keypress="checkInput()"/>

                                        <span class="text-danger" id="category_description_error" ref="caterror"></span>
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
                                    v-model="categoryData.image_name" />
                            </div>
                        </div>
</span>
   
</template>
<script>
import Dropzone from '../../components/element/Dropzone.vue';
import FormTextBoxField from '../../components/element/formTextBoxField.vue';
import FormTextareaField from '../../components/element/textArea.vue';


export default {
    name: 'create-role',
    props: ['categoryData'],
    components: {
        Dropzone,
        FormTextBoxField,
        FormTextareaField, 
    },
   
    methods: {
        fileUploadSuccessEvent(file, response) {
            this.categoryData.image_name = response;
            this.categoryData.newDropzoneImage = response;
        },
        checkInput: function () {
            console.log(this.categoryData)
            if (this.categoryData.title) {
                document.getElementById("category_title_error").textContent = "";
            }
            if (this.categoryData.description) {
                document.getElementById("category_description_error").textContent = "";
            }


        },
    }

}
</script>