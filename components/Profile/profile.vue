<template>
    <span>

        <div class="create-role-main">
            <div class="slds-form-element custom-grid">
                <Labels labelName="First Name" className="slds-form-element__label custom-label" for="text-input-id-46"
                    required="true" />

                <div class="slds-form-element__control custom-grid-control mb-20">
                    <Inputs fieldId="first_name" placeHolder="First name" class="slds-input custom-grid-input "
                        className="slds-input" v-model.trim="theUser.first_name" @keypress="validation($event)" />

                    <span class="text-danger" id="first_name_error" ref="caterror"></span>
                </div>
            </div>
        </div>
        <div class="create-role-main">
            <div class="slds-form-element custom-grid">
                <Labels labelName="Last Name" className="slds-form-element__label custom-label" for="text-input-id-46"
                    required="true" />

                <div class="slds-form-element__control custom-grid-control mb-20">
                    <Inputs fieldId="last_name" placeHolder="Last name" class="slds-input custom-grid-input "
                        className="slds-input" v-model.trim="theUser.last_name" @keypress="validation($event)" />

                    <span class="text-danger" id="last_name_error" ref="caterror"></span>
                </div>
            </div>
        </div>
        <div class="create-role-main">
            <div class="slds-form-element custom-grid">
                <Labels labelName="Email" className="slds-form-element__label custom-label" for="text-input-id-46"
                    required="true" />
            {{ theUser}}
                <div class="slds-form-element__control custom-grid-control mb-20">
                    <Inputs fieldId="email" placeHolder="Email" class="slds-input custom-grid-input "
                        className="slds-input" v-model.trim="theUser.email" @keypress="validation($event)" />

                    <span class="text-danger" id="email_error" ref="caterror"></span>
                </div>
            </div>
        </div>
        <div class="create-role-main">
            <div class="slds-form-element custom-grid">
                <Labels labelName="Bio" className="slds-form-element__label custom-label" for="text-input-id-46" />

                <div class="slds-form-element__control custom-grid-control mb-20">
                    <TextArea fieldId="hio" placeHolder="Bio" class="slds-input custom-grid-input "
                        className="slds-input" v-model.trim="theUser.Bio" @keypress="validation($event)" />


                </div>
            </div>
        </div>
        <div class="create-role-main">
            <div class="slds-form-element__control custom-grid-control mb-20">
                    <div class="slds-form-element custom-grid mb-20">
                       <Labels labelName="Profile Image" className="slds-form-element__label custom-label"
                    for="text-input-id-46" />
                        <div class="slds-form-element__control custom-grid-control">

                            <div class="edit-content-inner">
                                <span v-if="theUser.profile_image_name">
                                
                                </span>
                                <span v-else>
                                    <ImageComponent :log="require('~/assets/img/svg/avtar1.svg')" alt="" id="profiles" class="edit-content-img"></ImageComponent>
                                </span>
                                
                               
                                <div class="edit-btns">
                                    <div class="position-relative">
                                        <a class="slds-button slds-button_brand btnmain blue-btn ml-10 whiteSpace" href="#">upload
                                            profile</a>
                                           <input type="file" class="upload-profile"  @change="handleSelectedFiles" >
                                            </div>

                                    <a class="slds-button slds-button_brand btnmain light-blue-btn ml-10 whiteSpace"
                                        href="#" @click="RemoveImage" >Remove profile</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        </div>
    </span>



</template>
<style>
    .whiteSpace{
        white-space: nowrap;
    }
</style>
<script>

import Inputs from '../element/formTextBoxField.vue';
import InputFile from '../element/inputFile.vue';
import Labels from '../element/formLabel.vue';
import ButtonComponent from '../element/formButton.vue';
import TextArea from '../element/textArea.vue';
import ImageComponent from '../element/image.vue';
import UploadDocument from '../../components/Service/DocumentUpload';


export default {
    name: 'UserForm',
    components: {
        Inputs,
        Labels,
        ButtonComponent,
        TextArea,
        ImageComponent,
        InputFile

    },
    data() {
        return {
        }
    },
    props: ['theUser'],
    mounted() {


    },
    methods: {
       async handleSelectedFiles(event) {
            console.log(event.target.files,"Event")
          var output = document.getElementById('profiles');
            output.src = URL.createObjectURL(event.target.files[0]);
            var filename = await UploadDocument(event.target.files[0],'user');
            this.theUser.profile_image_name = filename[0].response;
            
        },
        RemoveImage(){
            var output = document.getElementById('profiles');
            output.src = '/_nuxt/assets/img/svg/avtar1.svg';
        },
    }

}
</script>