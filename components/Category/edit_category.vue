<template>
<span>
    <div class="modal-row">
                            <div class="modal-category-col1">
                                <p class="mb-0 user-modal-title">Category Name</p>
                            </div>
                            <div class="modal-record-col2">
                                <div class="slds-form-element__control  ">
                                    <FormTextBoxField v-model="editModelData.title"
                                        fieldId="category_name_edit"
                                        :value="editModelData.title" placeHolder="Enter category"
                                        className="slds-input custom-grid-input"  @keypress="checkInput()"/>
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
                                        <FormTextareaField v-model="editModelData.description"
                                           :bindValue="`${editModelData.description}`"
                                           
                                            placeHolder="Description comes here with a character limit."
                                            className="slds-textarea custom-grid-textarea cat-desc"
                                            id="description_id"  @keypress="checkInput()"/>
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
                                <Dropzone v-bind:fileUploadSuccessEvent="fileUploadSuccessEvent" modelname="image"  :folder="`category`" :type="`image`"  :extension="`.png, .jpeg, .jpg, .gif`"  :existingImage="`${editModelData.image_name}`"/>
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
    props: ['editModelData'],
    components: {
        Dropzone,
        FormTextBoxField,
        FormTextareaField,
    },

    methods: {
        fileUploadSuccessEvent(file, response) {
            this.editModelData.image_name = response;
            this.editModelData.newDropzoneImage = response;
        },
        checkInput: function () {

            if (this.editModelData.title) {
                document.getElementById("category_title_error").textContent = "";
            }
            if (this.editModelData.description) {
                document.getElementById("category_description_error").textContent = "";
            }


        },
    }

}
</script>