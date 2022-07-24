<template>

    <div class="create-role-main">
        <div class="slds-form-element custom-grid">
            <Labels labelName="Existing Password" className="slds-form-element__label custom-label" for="text-input-id-46"
                required="true" />

            <div class="slds-form-element__control custom-grid-control mb-20">
                <Inputs fieldId="password" :password="showPassword" placeHolder="Password" className="slds-input"
          v-model.trim="theUser.existing_password" />
                <span class="eye-btn toggle-password" @click="toggleShow">
                    <imageComponent :log="require('~/assets/img/svg/eye.svg')" alt="icon" v-if="showPassword"
                        :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }" />
                    <imageComponent :log="require('~/assets/img/svg/hide_password.svg')" v-if="!showPassword"
                        alt="icon"></imageComponent>

                </span>
                <span class="text-danger" id="old_password_error" ref="caterror"></span>
            </div>
        </div>
        <div class="slds-form-element custom-grid">
            <Labels labelName="New Password" className="slds-form-element__label custom-label" for="text-input-id-46"
                required="true" />

            <div class="slds-form-element__control custom-grid-control mb-20">
                <Inputs fieldId="password" :password="nPassword" placeHolder="New Password" className="slds-input"
          v-model.trim="theUser.new_password" />
                <span class="eye-btn toggle-password" @click="ntoggleShow">
                    <imageComponent :log="require('~/assets/img/svg/eye.svg')" alt="icon" v-if="nPassword"
                        :class="{ 'fa-eye-slash': nPassword, 'fa-eye': !nPassword }" />
                    <imageComponent :log="require('~/assets/img/svg/hide_password.svg')" v-if="!nPassword"
                        alt="icon"></imageComponent>

                </span>
                <span class="text-danger" id="new_password_error" ref="caterror"></span>
            </div>
        </div>
        <div class="slds-form-element custom-grid">
            <Labels labelName="Confirm Password" className="slds-form-element__label custom-label" for="text-input-id-46"
                required="true" />

            <div class="slds-form-element__control custom-grid-control mb-20">
                <Inputs fieldId="password" :password="cPassword" placeHolder="Confirm Password" className="slds-input"
          v-model.trim="theUser.confirm_password" />
                <span class="eye-btn toggle-password" @click="ctoggleShow">
                    <imageComponent :log="require('~/assets/img/svg/eye.svg')" alt="icon" v-if="cPassword"
                        :class="{ 'fa-eye-slash': cPassword, 'fa-eye': !cPassword }" />
                    <imageComponent :log="require('~/assets/img/svg/hide_password.svg')" v-if="!cPassword"
                        alt="icon"></imageComponent>

                </span>
                <span class="text-danger" id="confirm_password_error" ref="caterror"></span>
            </div>
        </div>
    </div>

</template>

<script>

import Inputs from '../element/formTextBoxField.vue';
import Labels from '../element/formLabel.vue';
import ButtonComponent from '../element/formButton.vue';
import imageComponent from '../element/image.vue';


export default {
    name: 'UserForm',
    components: {
        Inputs,
        Labels,
        ButtonComponent,
        imageComponent


    },
    data() {
        return {
            showPassword: true,
            nPassword:true,
            cPassword:true
        }
    },
    props: ['theUser'],
    mounted() {


    },
    methods:{
        toggleShow() {
            this.showPassword = !this.showPassword;
        },
        ntoggleShow() {
            this.nPassword = !this.nPassword;

        },
        ctoggleShow() {
            this.cPassword = !this.cPassword;

        }

    }
}
</script>