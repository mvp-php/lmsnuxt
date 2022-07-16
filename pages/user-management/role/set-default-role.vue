<template>
    <span>
        <div class="content">
            <p class="page-title mb-20">USER MANAGEMENT</p>
            <div class="main-card">
                <div class="role-main">
                    <div class="mb-18 back-text">
                        <imageComponent :log="require('~/assets/img/svg/arrow-left.svg')" :className="classObj" />
                        <nuxt-link to="/user-management/role"><span>BACK </span></nuxt-link>
                    </div>
                    <div class="blue-text mb-20">
                        Set Default Roles
                    </div>
                    <form v-on:submit.prevent="submitData">
                        <SetDefaultRole :the-user="user" :role_list="allRoleList" :selected="selected" />
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
import imageComponent from '../../../components/element/image.vue';
import SetDefaultRole from '../../../components/Role/set_default_roles.vue';

import RoleDataService from "../../../components/Service/RoleDataService";

import ButtonComponent from '../../../components/element/formButton.vue';
import errorToastr from '../../../components/element/errorToastr.vue';

export default {
    layout: 'frontend',
    components: {
        SetDefaultRole,
        ButtonComponent,
        errorToastr,
        imageComponent
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
            user: {
                admin: '',
                student: '',
                instructor: ''
            },
            selected: '',
            ButtonName: "Save Role",
            errorMessage: "",
            classObj: 'arrow-left',
            hides: true,
            hidessucces: true,
            successMessage: "",

            allRoleList: [],

            dangerHide: true,
            selectedArray: ''
        };
    },
    mounted() {
        this.getRoleList();
        this.selected = "Admin";
    },

    methods: {
        getRoleList() {

            RoleDataService.getAllRoleList().then(response => {

                this.allRoleList = response.data.data;
                response.data.data.map(function (value, key) {
                    console.log(value.flag);
                    this.instructor = '';
                    this.student = '';
                    this.admin = '';
                    if (value.is_system_role == 1) {
                        if (value.flag == 'Instuctor') {
                            this.instructor = value.id;
                        }
                        if (value.flag == 'Student') {
                            this.student = value.id;
                        }
                        if (value.flag == 'Admin') {
                            this.admin = value.id;
                        }
                    }

                    console.log(this.instructor);

                });

            }).catch(e => {
                console.log(e)
            });

        },
        submitData(event) {
            document.getElementById("admin_error").textContent = "";
            document.getElementById("student_error").textContent = "";
            document.getElementById("instructor_error").textContent = "";


            var cnt = 0;
            if (!this.user.admin) {
                document.getElementById("admin_error").textContent = "Enter the role  title";
                event.preventDefault();
                cnt = 1;
            }

            if (!this.user.student) {
                document.getElementById("student_error").textContent = "Please select any one permission";
                event.preventDefault();
                cnt = 1;
            }

            if (!this.user.instructor) {
                document.getElementById("instructor_error").textContent = "Please select any one permission";
                event.preventDefault();
                cnt = 1;
            }
            if (cnt == 0) {
                RoleDataService.setDefaultRoles(this.user).then(response => {
                }).catch(e => {
                    console.log(e)
                });

            }

        },

    }
};
</script>