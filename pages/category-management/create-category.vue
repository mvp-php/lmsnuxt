<template>
    <span>
        <div class="content">
            <p class="page-title mb-20">Add Major Category</p>
            <div class="main-card">
                <div class="role-main">
                    <div class="mb-18 back-text">
                        <imageComponent :log="require('~/assets/img/svg/arrow-left.svg')" :className="classObj" />
                        <nuxt-link to="/category-management"><span>BACK </span></nuxt-link>
                    </div>
                    <form @submit="addNewCategory" ref="add_category_submit" enctype="multipart/form-data">
                        <div class="modal-row">
                            <div class="modal-category-col1">
                                <p class="mb-0 user-modal-title">Category Name</p>
                            </div>
                            <div class="modal-record-col2">
                                <div class="slds-form-element__control  ">
                                    <FormTextBoxField v-model="categoryData.title" fieldId="category_name"
                                        placeHolder="Category Name" className="slds-input" ref="category_name" />
                                    <span class="text-danger" id="catnameeerror" ref="caterror"></span>
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
                                            fieldId="category_desc" ref="category_description" />

                                        <span class="text-danger" id="catedescerror" ref="caterror"></span>
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
                        <div class="btn-align-end p-0">
                            <FormButton type="submit" buttonName="Add Major Category"
                                className="slds-button slds-button_brand btnmain blue-btn" />
                        </div>
                    </form>

                </div>
            </div>


        </div>
           <errorToastr :errorMessage="errorMessage" v-if="!dangerHide" />
    </span>



</template>
<script>

import Dropzone from '../../components/element/Dropzone.vue';
import FormTextBoxField from '../../components/element/formTextBoxField.vue';
import FormTextareaField from '../../components/element/textArea.vue';
import FormButton from '../../components/element/formButton.vue';
import CategoryService from '../../components/Service/CategoryService';
import imageComponent from '../../components/element/image.vue';
// import successToastrVue from '../../components/element/successToastr.vue';
import errorToastr from '../../components/element/errorToastr.vue';
export default {
    layout: 'frontend',
    name: 'UserForm',
    props: ['theUser'],
    title: null,
    image_name: null,
    description: null,
    newDropzoneImage: null,
    components: {

        Dropzone,
        FormTextBoxField,
        FormTextareaField,
        FormButton,
        imageComponent,
        errorToastr
    },
    data() {
        return {
            user: {},
            
               dangerHide: true,
            categoryData: {
                title: '',
                description: '',
                image_name: '',
            }
        }
    },
    methods: {
        fileUploadSuccessEvent(file, response) {
            this.categoryData.image_name = response;
            this.categoryData.newDropzoneImage = response;
        },
        addNewCategory(e) {
            document.getElementById("catnameeerror").textContent = "";
            document.getElementById("catedescerror").textContent = "";
            console.log(this.categoryData.title);
            if (!this.categoryData.title.trim()) {
                document.getElementById("catnameeerror").textContent = "Please enter Category Name";
                e.preventDefault();
            }
            if (!this.categoryData.description.trim()) {
                document.getElementById("catedescerror").textContent = "Please enter Description";
                e.preventDefault();
            }
            if (this.categoryData.title && this.categoryData.description) {
                CategoryService.addCategory(this.categoryData).then((result) => {
                    
                    this.$router.push({ path: '/category-management' });

                }).catch(error => {
                   
                   this.errorMessage = error.response.data.response_msg;

                        this.dangerToasterShow();
                });
                e.preventDefault();
            }
        },
        dangerToasterShow() {

            this.dangerHide = false;
            setTimeout(() => this.dangerHide = true, 5000);
        },
        errorClose(){
            this.dangerHide = true;
            }
    }

}
</script>