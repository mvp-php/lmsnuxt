<template>


    <div class="create-role-main">
       
        <div class="slds-form-element custom-grid">
            <Labels labelName="First Name" className="slds-form-element__label custom-label" for="text-input-id-46"
                required="true" />

            <div class="slds-form-element__control custom-grid-control mb-20">
                <Inputs fieldId="first_name" placeHolder="First name" class="slds-input custom-grid-input "
                    @keypress="checkInput()" className="slds-input" v-model.trim="theUser.first_name" />

                <span class="text-danger" id="first_name_error" ref="caterror"></span>
            </div>
        </div>
        <div class="slds-form-element custom-grid">
            <Labels labelName="Last Name" className="slds-form-element__label custom-label" for="text-input-id-46"
                required="true" />

            <div class="slds-form-element__control custom-grid-control mb-20">
                <Inputs fieldId="last_name" placeHolder="Last Name" class="slds-input custom-grid-input "
                    className="slds-input" @keypress="checkInput()" v-model.trim="theUser.last_name" />

                <span class="text-danger" id="last_name_error" ref="caterror"></span>
            </div>
        </div>
        <div class="slds-form-element custom-grid">
            <Labels labelName="Email" className="slds-form-element__label custom-label" for="text-input-id-46"
                required="true" />

            <div class="slds-form-element__control custom-grid-control mb-20">
                <Inputs fieldId="email" placeHolder="Email" class="slds-input custom-grid-input "
                    @keypress="checkInput()" className="slds-input" v-model.trim="theUser.email" />

                <span class="text-danger" id="email_error" ref="caterror"></span>
            </div>
        </div>
        <div class="slds-form-element custom-grid">
            <Labels labelName="Role" className="slds-form-element__label custom-label" for="text-input-id-46"
                required="true" />

            <div class="slds-form-element__control custom-grid-control mb-20">
                <select v-model="theUser.role_id" class="slds-select custom-grid-input" @change="ChangeRole($event)">
                    <option value="">Select Role</option>
                    <option v-for="roles in rolelist" :key="roles.id" :value="roles.id" :data-option="`${roles.is_system_role}`" :data-flag="`${roles.flag}`">
                        {{ roles.title }}
                    </option>

                </select>
                <span class="text-danger" id="role_error" ref="caterror"></span>
            </div>
        </div>

        <div id="studentId">

            <div class="slds-form-element custom-grid" ref="test" v-if="!hides" >
                <Labels labelName="Select Membership" className="slds-form-element__label custom-label"
                    for="text-input-id-46" required="true" />

                <div class="slds-form-element__control custom-grid-control mb-20">
                    <select v-model="theUser.entity_id" class="slds-select custom-grid-input" @change="ChangeEntity()">
                        <option value="">Select Membership</option>
                        <option v-for="plan in paymentPlan" :key="plan.id" :value="plan.id">
                            {{ plan.title }}
                        </option>

                    </select>

                    <span class="text-danger" id="members_error" ref="caterror"></span>
                </div>

            </div>
            <span id="instructors_id" v-if="!hidesins">
                <div class="slds-form-element custom-grid valid-col1">
                    <Labels labelName="Valid From" className="slds-form-element__label custom-label"
                        for="text-input-id-46" />


                    <div class="slds-form-element__control custom-grid-control mb-20">
                        <Inputs type="date" fieldId="valid_from" id="valid_from"   placeHolder="Valid From"
                            class="slds-input custom-grid-input " className="slds-input"
                            v-model.trim="theUser.valid_from" @change="changeDate()" :min="minDate" />

                    </div>
                </div>
                <div class="slds-form-element custom-grid valid-col2">
                    <Labels labelName="Valid To" className="slds-form-element__label custom-label"
                        for="text-input-id-46" />

                    <div class="slds-form-element__control custom-grid-control mb-20">

                        <Inputs type="date" fieldId="valid_to" placeHolder="Valid To"
                            class="slds-input custom-grid-input " className="slds-input"
                            v-model.trim="theUser.valid_till" @change="changeDate()" :min='minTil'/>

                    </div>
                </div>
            </span>



            <div class="slds-form-element custom-grid" v-if="!hides">
                <Labels labelName="Amount" className="slds-form-element__label custom-label" for="text-input-id-46"
                    required="true" />


                <div class="slds-form-element__control custom-grid-control mb-20">
                    <Inputs fieldId="amount" placeHolder="Amount" class="slds-input custom-grid-input "
                        className="slds-input" v-model.trim="theUser.amount" @keypress="handleInput()"
                        />

                    <span class="text-danger" id="amount_error" ref="caterror"></span>
                </div>

            </div>
        </div>

    </div>

</template>

<script>

import Inputs from '../element/formTextBoxField.vue';
import Labels from '../element/formLabel.vue';
import moment  from 'moment';
import { format } from 'path';
export default {
    name: 'create-user',
    components: {
        Inputs,
        Labels,
    },
    data() {
        return {
            hides: true,
            hidesins: true,
            minDate:moment().format('YYYY-MM-DD'),
            minTil:moment().format('YYYY-MM-DD')
        }
    },
    props: ['theUser', 'rolelist', 'paymentPlan'],
    mounted(){
       
      setTimeout(() =>
                this.selectedRole(),

                1000);
    },
    methods: {
        selectedRole(){
           
            if( this.theUser.user_role_relation_ship.role_relation_ship.flag =='Student' && this.theUser.user_role_relation_ship.role_relation_ship.is_system_role ==1){
                 this.hides = false;
                    this.hidesins = false;
            } else if (this.theUser.user_role_relation_ship.role_relation_ship.flag == 'Instructor' && this.theUser.user_role_relation_ship.role_relation_ship.is_system_role == 1) {
                    this.hides = true;
                    this.hidesins = false;
                } else {
                    this.hides = true;
                    this.hidesins = true;
                }
        },
        ChangeRole(e) {
           
            if (e.target.options.selectedIndex > -1) {
                var systemRole = e.target.options[e.target.options.selectedIndex].dataset.option;
                var systemText = e.target.options[e.target.options.selectedIndex].dataset.flag;
              //  theUser.user_role_relation_ship.role_relation_ship.flag =systemText;
                if (systemText == 'Student' && systemRole == 1) {
                    this.hides = false;
                    this.hidesins = false;
                    
                } else if (systemText == 'Instructor' && systemRole == 1) {
                    this.hides = true;
                    this.hidesins = false;
                } else {
                    this.hides = true;
                    this.hidesins = true;
                }
                this.theUser.srole_title = systemText;

                if (this.theUser.role_id) {
                    document.getElementById("role_error").textContent = "";
                }
            }

        },
       
        handleInput() {
           
            let keyCode = (event.keyCode ? event.keyCode : event.which);
            if (this.theUser.amount) {
                if ((keyCode < 48 || keyCode > 57) && (keyCode !== 46 || this.theUser
                    .amount.indexOf('.') != -1)) { // 46 is dot
                    event.preventDefault();
                }

                if (this.theUser.amount != null && this.theUser.amount.indexOf(".") > -1 && (this.theUser.amount.split('.')[1].length > 1)) {
                    event.preventDefault();
                }
                document.getElementById("amount_error").textContent = "";
            }
          

        },
        checkInput: function () {
            if (this.theUser.first_name) {
                document.getElementById("first_name_error").textContent = "";
            }
            if (this.theUser.last_name) {
                document.getElementById("last_name_error").textContent = "";
            }
            if (this.theUser.email) {
                document.getElementById("email_error").textContent = "";
            }
            if (this.theUser.amount) {
                document.getElementById("amount_error").textContent = "";


            }



        },
        ChangeEntity() {
            if (this.theUser.entity_id) {
                document.getElementById("members_error").textContent = "";

            }

        },
        changeDate(e) {
            var valid_from=document.getElementById("valid_from").value;
           var  fDate= moment(valid_from).format('YYYY-MM-DD');
           this.minTil=fDate;

         },

    }


}
</script>