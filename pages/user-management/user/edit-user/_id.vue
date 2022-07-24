<template>
    <span>
        <div class="content">
            <p class="page-title mb-20">USER MANAGEMENT</p>
            <div class="main-card">
                <div class="role-main">
                    <div class="mb-18 back-text">
                        <imageComponent :log="require('~/assets/img/svg/arrow-left.svg')" :className="classObj" />
                        <nuxt-link to="/user-management/user"><span>BACK </span></nuxt-link>
                    </div>
                    <div class="blue-text mb-20">
                        Edit A User
                    </div>
                    <form v-on:submit.prevent="submitData">
                        <EditUser :the-user="user" :rolelist="allRoleList"  :paymentPlan="paymentPlan"  :instructorSectionHides="instructorSectionHide"    :studentSectionHides="studentSectionHide"
                           />
                        <div class="btn-align-end">
                            <ButtonComponent type="submit" class="slds-button slds-button_brand btnmain blue-btn ml-10"
                                :buttonName="ButtonName" />
                        </div>
                    </form>
                </div>
            </div>


        </div>
        <errorToastr :errorMessage="errorMessage" v-if="!dangerHide" />
    </span>


</template>

<script>
import EditUser from '../../../../components/User/create_user.vue';
import imageComponent from '../../../../components/element/image.vue';
import RoleDataService from "../../../../components/Service/RoleDataService";
import PaymentPlanService from "../../../../components/Service/PaymentPlanService";
import ButtonComponent from '../../../../components/element/formButton.vue';
import errorToastr from '../../../../components/element/errorToastr.vue';
import userService from '../../../../components/Service/UserService';
import moment from 'moment';

export default {
    layout: 'frontend',
    components: {
        EditUser,
        imageComponent,
        ButtonComponent,
        errorToastr
    },
    props: {
        isTableDataVisible: {
            type: Boolean,
            default: true
        },
        showForm: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            user: {},
            ButtonName: "Update User",
            errorMessage: "",
            classObj: 'arrow-left',
            studentSectionHide: false,
            instructorSectionHide:false,
            allRoleList: [],
            paymentPlan: [],
            dangerHide: true,
            userForm: [],
            
        };
    },
    created() {
        this.getRoleList();
        this.PaymentPlanList();
        this.getUserDetails();
    },
    methods: {
        getRoleList() {

            RoleDataService.getAllRoleList().then(response => {
                var final =[];
                response.data.data.map(function (value, key) {

                    var objectElement = {};
                    objectElement.id = value.id;
                    objectElement.title = value.title;
                    objectElement.flag = value.flag;
                    objectElement.is_system_role = value.is_system_role;
                    final.push(objectElement);

                })
                this.allRoleList =final;

            }).catch(e => {
                console.log(e)
            });

        },
        PaymentPlanList() {
            PaymentPlanService.getPaymentPlan().then(response => {

                this.paymentPlan = response.data.data;

            }).catch(e => {
                console.log(e)
            });
        },
        getUserDetails() {
            userService.getUserDetails(this.$route.params.id).then(response => {
               
                this.user = response.data.data[0];
                this.user.role_id = response.data.data[0].user_role_relation_ship.role_relation_ship.id;
                var entity_id='';
                var amount='';
                if(response.data.data[0].user_custom_payment){
                   amount= response.data.data[0].user_custom_payment.price;
                        entity_id=response.data.data[0].user_custom_payment.payment_plans.id;
                }
                this.user.entity_id = entity_id;

                    if(response.data.data[0].user_custom_payment){
                        entity_id=response.data.data[0].user_custom_payment.payment_plans.id;
                }



                this.user.entity_id = entity_id;
                this.user.amount = amount;
                var validFrom='';
                var validTill='';
               

                if(response.data.data[0].user_role_relation_ship){
                    if(response.data.data[0].user_role_relation_ship.role_relation_ship.flag=="Instructor"){
                   
                        this.instructorSectionHide=true;
                    }
                    if(response.data.data[0].user_role_relation_ship.role_relation_ship.flag=="Student"){
                        this.studentSectionHide=true;
                        this.instructorSectionHide=true;
                    }
                }
                if(response.data.data[0].user_instructor){
                   
                    if(response.data.data[0].user_instructor.valid_from){
                        console.log(moment(response.data.data[0].user_instructor.valid_from));
                        validFrom  = moment(response.data.data[0].user_instructor.valid_from).format('YYYY-MM-DD');
                    }
                    if(response.data.data[0].user_instructor.valid_till){
                        validTill  = moment(response.data.data[0].user_instructor.valid_till).format('YYYY-MM-DD');
                    }
                }
                if(response.data.data[0].user_custom_payment){
               
                    if(response.data.data[0].user_custom_payment.valid_from){
                        validFrom  = moment(response.data.data[0].user_custom_payment.valid_from).format('YYYY-MM-DD');
                    }
                    if(response.data.data[0].user_custom_payment.valid_till){
                        validTill  = moment(response.data.data[0].user_custom_payment.valid_till).format('YYYY-MM-DD');
                    }
                    
                }
                this.user.valid_from=validFrom;
                this.user.valid_till=validTill;

                
            }).catch(e => {
                console.log(e)
            });
        },
       
        submitData(event) {
            document.getElementById("first_name_error").textContent = "";
            document.getElementById("last_name_error").textContent = "";
            document.getElementById("email_error").textContent = "";
            document.getElementById("role_error").textContent = "";
            var cnt = 0;
            if (!this.user.first_name) {
                document.getElementById("first_name_error").textContent = "Enter the first name";
                event.preventDefault();
                cnt = 1;
            }
            if (!this.user.last_name) {
                document.getElementById("last_name_error").textContent = "Enter the last name";
                event.preventDefault();
                cnt = 1;
            }
            if (!this.user.email) {
                document.getElementById("email_error").textContent = "Enter the email id";
                event.preventDefault();
                cnt = 1;
            }
            if (!this.user.role_id) {
                document.getElementById("role_error").textContent = "Select one role at a time";
                event.preventDefault();
                cnt = 1;
            }

             if(this.user.srole_title =='Student'){
                document.getElementById("members_error").textContent = "";
                document.getElementById("amount_error").textContent = "";

                if (!this.user.entity_id) {
                    document.getElementById("members_error").textContent = "Select one plan at a time";
                    event.preventDefault();
                    cnt = 1;
                }
                if (!this.user.amount) {
                    document.getElementById("amount_error").textContent = "Enter the amount";
                    event.preventDefault();
                    cnt = 1;
                }
            }

            if (cnt == 0) {
                userService.updateUser(this.user, this.$route.params.id)
                    .then((result) => {
                       localStorage.setItem('sucess_msg',result.data.response_msg);
                        this.$router.push({ path: '/user-management/user' });
                    }).catch(error => {

                        this.errorMessage = error.response.data.response_msg;

                        this.dangerToasterShow();


                    })
            }

        },
        dangerToasterShow() {

            this.dangerHide = false;
            setTimeout(() => this.dangerHide = true, 5000);
        },
        errorClose() {
            this.dangerHide = true;
        }
    }
};
</script>