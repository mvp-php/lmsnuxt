<template>
<div class="slds-modal__content slds-p-around_medium modal-content-group-view"
                        id="modal-content-id-1">
                     
                        <div class="modal-manage-group-main">
                            <div class="group-row-main">
                                <div class="group-col1 slds-view-model" >
                                    <div class="course-row-manage">
                                        <div class="course-col1">
                                            <div class="course-title-main">
                                                <p class="mb-0">First Name</p>
                                            </div>
                                        </div>
                                        <div class="course-col2">
                                            <div class="course-title-desc">
                                                <p class="mb-0">{{ viewDetails.first_name }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="course-row-manage">
                                        <div class="course-col1">
                                            <div class="course-title-main">
                                                <p class="mb-0">Last Name</p>
                                            </div>
                                        </div>
                                        <div class="course-col2">
                                            <div class="course-title-desc">
                                                <p class="mb-0">{{ viewDetails.last_name }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="course-row-manage">
                                        <div class="course-col1">
                                            <div class="course-title-main">
                                                <p class="mb-0">Email</p>
                                            </div>
                                        </div>
                                        <div class="course-col2">
                                            <div class="course-title-desc">
                                                <p class="mb-0">{{ viewDetails.email }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="course-row-manage">
                                        <div class="course-col1 mt-0" style="margin-top:0px !important">
                                            <div class="course-title-main">
                                                <p class="mb-0">Role</p>
                                            </div>
                                        </div>
                                        <div class="course-col2">
                                            <div class="course-title-desc">
                                                <p class="mb-0" v-if="viewDetails.user_role_relation_ship">{{ viewDetails.user_role_relation_ship.role_relation_ship.title }}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="group-col2 slds-view-model" >
                                    <div class="course-row-manage" v-if="studentSection">
                                        <div class="course-col1">
                                            <div class="course-title-main">
                                                <p class="mb-0">Membership</p>
                                            </div>
                                        </div>
                                        <div class="course-col2">
                                            <div class="course-title-desc">
                                                <p class="mb-0" v-if="viewDetails.user_custom_payment">{{ viewDetails.user_custom_payment.payment_plans.title }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="studentSection || instructorSection">
                                        <div class="course-row-manage" >
                                            <div class="course-col1">
                                                <div class="course-title-main">
                                                    <p class="mb-0">Valid From</p>
                                                </div>
                                            </div>
                                            <div class="course-col2">
                                                <div class="course-title-desc">
                                                    <p class="mb-0" v-if="viewDetails.user_custom_payment">{{ viewDetails.user_custom_payment.valid_from }}</p>
                                                    <p class="mb-0" v-if="viewDetails.user_instructor">{{viewDetails.user_instructor.valid_from }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="course-row-manage" >
                                            <div class="course-col1">
                                                <div class="course-title-main">
                                                    <p class="mb-0">Valid Till</p>
                                                </div>
                                            </div>
                                            <div class="course-col2">
                                                <div class="course-title-desc">
                                                    <p class="mb-0" v-if="viewDetails.user_custom_payment">{{ viewDetails.user_custom_payment.valid_till }}</p>
                                                    <p class="mb-0" v-if="viewDetails.user_instructor">{{viewDetails.user_instructor.valid_till }}</p>
                                                
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                    <div class="course-row-manage" v-if="studentSection">
                                        <div class="course-col1">
                                            <div class="course-title-main">
                                                <p class="mb-0">Amount</p>
                                            </div>
                                        </div>
                                        <div class="course-col2">
                                            <div class="course-title-desc">
                                                <p class="mb-0" v-if="viewDetails.user_custom_payment">{{ viewDetails.user_custom_payment.price }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
 
</template>

<script>

export default {
  name: 'view-role',

   props: ['viewDetails','studentSection','instructorSection'],
   data(){
        return{
           
        }
   },
}
</script>