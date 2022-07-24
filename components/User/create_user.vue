<template>
    <div class="create-role-main">
        <div class="slds-form-element custom-grid">
            <Labels labelName="First Name" className="slds-form-element__label custom-label" for="text-input-id-46"
                required="true" />

            <div class="slds-form-element__control custom-grid-control mb-20">
                <Inputs fieldId="first_name" placeHolder="First name" class="slds-input custom-grid-input "
                    className="slds-input" v-model.trim="theUser.first_name" @keypress="checkInput()" />

                <span class="text-danger" id="first_name_error" ref="caterror"></span>
            </div>
        </div>
        <div class="slds-form-element custom-grid">
            <Labels labelName="Last Name" className="slds-form-element__label custom-label" for="text-input-id-46"
                required="true" />

            <div class="slds-form-element__control custom-grid-control mb-20">
                <Inputs fieldId="last_name" placeHolder="Last Name" class="slds-input custom-grid-input "
                    className="slds-input" v-model.trim="theUser.last_name" @keypress="checkInput()" />

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
                <formDropdown :options="rolelist"   v-model="theUser.role_id" selectName="Role" class="slds-select custom-grid-input" @onChange="ChangeRole" :selected="`${theUser.role_id}`"></formDropdown>
                
                <span class="text-danger" id="role_error" ref="caterror"></span>
            </div>
        </div>

        <div id="studentId">
            <div class="slds-form-element custom-grid" v-if="studentSectionHide">
                <Labels labelName="Select Membership" className="slds-form-element__label custom-label"
                    for="text-input-id-46" required="true" />

                <div class="slds-form-element__control custom-grid-control mb-20">
                    <formDropdown :options="paymentPlan"   v-model="theUser.entity_id" selectName="Membership" class="slds-select custom-grid-input" @onChange="ChangeEntity" :selected="`${theUser.entity_id}`"></formDropdown>
                
                  
                    <span class="text-danger" id="members_error" ref="caterror"></span>
                </div>

            </div>
            <span id="instructors_id" v-if="instructorSectionHide">
                <div class="slds-form-element custom-grid valid-col1">
                    <Labels labelName="Valid From" className="slds-form-element__label custom-label"
                        for="text-input-id-46" />


                    <div class="slds-form-element__control custom-grid-control mb-20">
                        <Inputs type="date" fieldId="valid_from" placeHolder="Valid From"
                            class="slds-input custom-grid-input "   id="valid_from" className="slds-input"
                            v-model.trim="theUser.valid_from"  @change="changeDate($event)"   :min="minDate" />

                    </div>
                </div>
                <div class="slds-form-element custom-grid valid-col2">
                    <Labels labelName="Valid To" className="slds-form-element__label custom-label"
                        for="text-input-id-46" />

                    <div class="slds-form-element__control custom-grid-control mb-20">

                        <Inputs type="date" fieldId="valid_to" placeHolder="Valid To"
                            class="slds-input custom-grid-input " className="slds-input"
                            v-model.trim="theUser.valid_till" :min="minTil"/>

                    </div>
                </div>
            </span>



            <div class="slds-form-element custom-grid" v-if="studentSectionHide">
                <Labels labelName="Amount" className="slds-form-element__label custom-label" for="text-input-id-46"
                    required="true" />


                <div class="slds-form-element__control custom-grid-control mb-20">
                    <Inputs type="number" fieldId="amount" placeHolder="Amount" class="slds-input custom-grid-input "
                        className="slds-input" v-model.trim="theUser.amount" @keypress="handleInput()" />

                    <span class="text-danger" id="amount_error" ref="caterror"></span>
                </div>

            </div>
        </div>

    </div>

</template>

<script>

import Inputs from '../element/formTextBoxField.vue';
import Labels from '../element/formLabel.vue';
import formDropdown from '../element/formDropdown.vue';

import moment from 'moment';

export default {
    name: 'create-user',
    components: {
        Inputs,
        Labels,
        formDropdown
    },
    props: ['theUser', 'rolelist', 'paymentPlan','userId','studentSectionHides','instructorSectionHides'],
    data() {
        return {
            studentSectionHide: this.studentSectionHides,
            instructorSectionHide: this.instructorSectionHides,
            minDate:moment().format('YYYY-MM-DD'),
            minTil:moment().format('YYYY-MM-DD'),
        }
    },
    
    mounted:function(){
       setTimeout(()=>{
        this.studentSectionHide=this.studentSectionHides,
       this.instructorSectionHide=this.instructorSectionHides;
       },2000);
    },
    methods: {
        ChangeRole(selected) {
            console.log(selected.value);
            if (selected.options.selectedIndex > -1) {
                var systemRole = selected.options[selected.options.selectedIndex].dataset.option;
                var systemText = selected.options[selected.options.selectedIndex].dataset.flag;

                if (systemText == 'Student' && systemRole == 1) {
                    this.studentSectionHide = true;
                    this.instructorSectionHide = true;
                } else if (systemText == 'Instructor' && systemRole == 1) {
                    this.studentSectionHide = false;
                    this.instructorSectionHide = true;
                } else {
                    this.studentSectionHide = false;
                    this.instructorSectionHide = false;
                }
        
                this.theUser.srole_title = systemText;
                this.theUser.role_id = selected.value;
                if(this.theUser.role_id){
                    document.getElementById("role_error").textContent = "";
                }
            }

        },

        handleInput: function () {
           
            // console.log($event.keyCode); //keyCodes value
            let keyCode = (event.keyCode ? event.keyCode : event.which);
            if(this.theUser.amount){
                if ((keyCode < 48 || keyCode > 57) && (keyCode !== 46 || this.theUser
                .amount.indexOf('.') != -1)) { // 46 is dot
                    event.preventDefault();
                }

                // restrict to 2 decimal places
                if (this.theUser.amount!= null && this.theUser.amount.indexOf(".") > -1 && (this.theUser.amount.split('.')[1].length > 1)) {
                    event.preventDefault();
                }
            }
            // only allow number and one dot
            
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
        ChangeEntity(selected){
            this.theUser.entity_id=selected.value;
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
