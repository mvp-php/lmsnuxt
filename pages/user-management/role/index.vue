<template>
    <span>
        <div class="content">
            <p class="page-title mb-20">USER MANAGEMENT</p>
            <div class="main-card">
                <div class="tab-main">
                    <div class="btn-align-end">
                        <div class="slds-form-element">
                            <div class="slds-form-element__control search-inp-control">
                                <input type="text" id="text-input-id-50" placeHolder="Search role here…"
                                    class="slds-input search-inp" v-on:keyup="searchText($event)" />

                            </div>
                        </div>
                        <nuxt-link to="role/create-role" class="slds-button slds-button_brand btnmain blue-btn ml-10">
                            Create Role</nuxt-link>
                        <nuxt-link to="role/set-default-role"
                            class="slds-button slds-button_brand btnmain light-blue-btn ml-10">
                            Set Default
                            Roles</nuxt-link>

                        <button class="slds-button slds-button_brand btnmain light-blue-btn ml-10"
                            href="javascript:void(0)" @click="BulkDelete()" v-if="!bulk_delete_button">Delete
                            Role</button>
                    </div>
                    <div class="slds-tabs_default cus-tab-default">

                        <Tabs :tabsList="tablsList" :selectedTabs="this.selectedTab" />

                        <div class="table-main">
                            <roles :header="header" :tableData="tableData" :no_record_avalible="no_record_avalible"
                                :paginateObj="paginate" :searchkeyword="searchkeyword" :pageCount="pageCount" />
                        </div>
                    </div>

                </div>

            </div>
        </div>

        <div class="user-record-modal">
            <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01"
                class="slds-modal " id="role" ref="addrole">
                <div class="slds-modal__container addcategory-dialog-modal p-0">
                    <div class="slds-modal__header modal-main-record-title category-title">
                        <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate">View Role Details</h1>
                        <button
                            class="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse close-modal-record">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11.354" height="11.385"
                                viewBox="0 0 11.354 11.385" v-on:click="closeViewModel()">
                                <g id="icons_utility_close-copy" data-name="icons/utility/close-copy"
                                    transform="translate(-0.462 -0.462)">
                                    <path id="Mask"
                                        d="M7.677,5.954l4-4.031a.446.446,0,0,0,0-.646L11.062.631a.446.446,0,0,0-.646,0L6.385,4.662a.3.3,0,0,1-.431,0L1.923.6a.446.446,0,0,0-.646,0l-.646.646a.446.446,0,0,0,0,.646L4.662,5.923a.3.3,0,0,1,0,.431L.6,10.415a.446.446,0,0,0,0,.646l.646.646a.446.446,0,0,0,.646,0L5.923,7.677a.3.3,0,0,1,.431,0l4.031,4.031a.446.446,0,0,0,.646,0l.646-.646a.446.446,0,0,0,0-.646l-4-4.031a.3.3,0,0,1,0-.431Z"
                                        fill="#06529c" />
                                </g>
                            </svg>
                            <span class="slds-assistive-text">Cancel and close</span>
                        </button>
                    </div>
                    <viewRole  :viewDetails="viewDetails"></viewRole>
                    
                </div>
            </section>
            <div class="slds-backdrop " role="presentation" id="role-backdrop" ref="addRoleBackup">
            </div>
            <div class="slds-backdrop " role="presentation" id="edit-role-backdrop" ref="editsubcategorybackdrop">
            </div>
        </div>
        <div class="user-record-modal">
            <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="slds-modal"
                id="delete-modal" ref="deleteRoleModel">
                <div class="slds-modal__container record-dialog-modal">
                    <div class="slds-modal__header modal-main-record-title">
                        <!-- <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate">USER ROLE DETAILS</h1> -->
                        <button v-on:click="closeDeleteModel()"
                            class="slds-button slds-button_icon slds-modal__close slds-button_icon-inverse close-modal-record">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11.354" height="11.385"
                                viewBox="0 0 11.354 11.385">
                                <g id="icons_utility_close-copy" data-name="icons/utility/close-copy"
                                    transform="translate(-0.462 -0.462)">
                                    <path id="Mask"
                                        d="M7.677,5.954l4-4.031a.446.446,0,0,0,0-.646L11.062.631a.446.446,0,0,0-.646,0L6.385,4.662a.3.3,0,0,1-.431,0L1.923.6a.446.446,0,0,0-.646,0l-.646.646a.446.446,0,0,0,0,.646L4.662,5.923a.3.3,0,0,1,0,.431L.6,10.415a.446.446,0,0,0,0,.646l.646.646a.446.446,0,0,0,.646,0L5.923,7.677a.3.3,0,0,1,.431,0l4.031,4.031a.446.446,0,0,0,.646,0l.646-.646a.446.446,0,0,0,0-.646l-4-4.031a.3.3,0,0,1,0-.431Z"
                                        fill="#06529c" />
                                </g>
                            </svg>
                            <span class="slds-assistive-text">Cancel and close</span>
                        </button>
                    </div>
                    <div class="slds-modal__content slds-p-around_medium modal-content-record" id="modal-content-id-1">
                        <div class="delete-modal-main">
                            <div class="del-big-img">
                                <ImageComponent :log="require('~/assets/img/svg/delete.svg')" alt="avtar-header">
                                </ImageComponent>

                            </div>
                            <div class="delete-text">
                                <h3>Are you sure ?</h3>
                                <p>Do you really want to delete these role? This
                                    process cannot be undone</p>
                            </div>
                        </div>
                        <div class="delete-modal-footer">
                            <button class="slds-button slds-button_neutral btnmain blue-btn modal-btn"
                                aria-label="Cancel and close" v-on:click="deleteRole()" buttonName="Yes">Yes</button>
                            <button class="slds-button slds-button_brand btnmain light-blue-btn modal-btn"
                                id="close-btn1" v-on:click="closeDeleteModel()">No</button>




                        </div>
                    </div>
                </div>
            </section>
            <div class="slds-backdrop" role="presentation" id="delete-modal-backdrop">
            </div>
        </div>
        <errorToastr :errorMessage="errorMessage" v-if="!errorToastrHide" />
        <successToastr :successMessage="successMessage" v-if="!successToastrHide" />
    </span>
</template>

<script>
import Tabs from '../../../components/element/Tabs.vue';
import roleService from "../../../components/Service/RoleDataService";
import roles from '../../../components/Role/Role.vue';
import viewRole from '../../../components/Role/view_role.vue';
import dataTable from '../../../components/element/dataTable.vue';
import ImageComponent from '../../../components/element/image.vue';
import ButtonComponent from '../../../components/element/formButton.vue';
import errorToastr from '../../../components/element/errorToastr.vue';
import successToastr from '../../../components/element/successToastr.vue';
export default {
    layout: 'frontend',
    name: 'UserList',

    components: {
        Tabs,
        dataTable,
        roles,
        ImageComponent,
        ButtonComponent,
        errorToastr, successToastr,
        viewRole

    },

    data() {
        return {
            tablsList: [],
            selectedTab: "role",
            header: [],
            tableData: [],
            no_record_avalible: "",
            viewDetails: [],
            bulk_delete_button: true,
            deletedId: "",
            multipleDeleteId: '',
            errorMessage: "",
            errorToastrHide: true,
            successMessage: "",
            successToastrHide: true,
            paginate: '',
            searchkeyword: '',
            pageCount: '',
            deleteFlag: ''

        }
    },
    created() {
        this.tablsList = [];
        var tabs = [{ "Key": "User Roles", 'url': 'role' }, { "Key": "User", 'url': 'user' }];
        this.tablsList = tabs;
        this.header = [{ "Key": "", 'column': '' },{ "Key": "Sr No.", 'column': 'id' },{ "Key": "Role Title", 'column': 'title' },{ "Key": "No of User", 'column': 'no_of_user' },{ "Key": "Created On", 'column': 'created_at' },{ "Key": "Action", 'column': 'created_at' }];
        var value = this.$route.query.search;
        this.successM();
        this.getRoleList(1, "");


    },

    methods: {
        successM() {
            const ISSERVER = typeof window === "undefined";
            if (!ISSERVER) {
                var msh = localStorage.getItem('sucess_msg');
                if (msh) {
                    this.successMessage = msh;
                    this.successToastrShow();
                }

            }


        },
        getPaginatesMain: function (currentPage, value) {
            this.getRoleList(currentPage, value);
        },

        searchText($event) {

            this.getRoleList(1, $event.target.value,)
        },

        getRoleList(page = "", value = "") {

            roleService.getRoleList(page, value)
                .then(async response => {
                    var final = [];
                    this.tableData = [];

                    response.data.data.data.map(function (value, key) {
                        var temp_array = {};
                        temp_array.key = '';
                        temp_array.id = value.id;
                        temp_array.title = value.title;
                        temp_array.no_of_user = value.no_of_user;

                        temp_array.created_at = value.created_at;
                        temp_array.is_system_role = value.is_system_role;
                        final.push(temp_array)
                    })


                    this.tableData = final;
                    this.no_record_avalible = response.data.response_msg
                    this.paginate = response.data.data;
                    this.pageCount = response.data.data.data.length;
                    this.searchkeyword = value;
                }).catch(e => {
                    console.log(e)
                });

        },
        openViewModel: function (id) {

            roleService.getViewRoleDetail(id).then((result) => {
                this.viewDetails = result.data.data;
            }).catch((err) => {
                this.$router.push('/user-management/role');
            });
            this.$refs.addrole.classList.add("slds-fade-in-open");
            this.$refs.addRoleBackup.classList.add("slds-backdrop_open");
        },
        closeViewModel() {
            this.$refs.addrole.classList.remove("slds-fade-in-open");
            this.$refs.addRoleBackup.classList.remove("slds-backdrop_open");
        },
        userDelete(id) {

            this.$refs.deleteRoleModel.classList.add("slds-fade-in-open");
            this.DeleteId = id;
            this.deleteFlag = 'single';

        },
        deleteRole() {
            if (this.deleteFlag == 'single') {
                roleService.deleteRole(this.DeleteId).then((result) => {

                    localStorage.setItem('sucess_msg', result.data.response_msg);
                    this.successMessage = result.data.response_msg;
                    this.successToastrShow();
                    this.getRoleList(1, "");
                    this.closeDeleteModel();
                    this.bulk_delete_button = true;
                }).catch((err) => {
                    this.errorMessage = err.response.data.response_msg;
                    this.dangerToasterShow();
                });
            } else {
                roleService.bulkRoleDelete(this.multipleDeleteId).then((result) => {
                    this.getRoleList(1, "");
                    this.successMessage = result.data.response_msg;
                    this.successToastrShow();
                    this.bulk_delete_button = true;
                }).catch((err) => {
                    this.errorMessage = err.response.data.response_msg;
                    this.dangerToasterShow();
                });

            }

            this.closeDeleteModel();
        },
        closeDeleteModel() {
            this.$refs.deleteRoleModel.classList.remove("slds-fade-in-open");
        },
        userEdit(id) {
            this.$router.push('/user-management/role/edit-role/' + id);
        },
        bulkDeleteds: function (id) {
            if (id.length != 0) {
                this.bulk_delete_button = false;
            } else {
                this.bulk_delete_button = true;
            }
            this.multipleDeleteId = id;
        },
        BulkDelete() {
            this.$refs.deleteRoleModel.classList.add("slds-fade-in-open");
            this.deleteFlag = 'multiple';
        },
        successToastrShow: function () {
            this.successToastrHide = false;
        },

        successClose: function () {
            localStorage.removeItem('sucess_msg');
            this.successToastrHide = true
        },

        dangerToasterShow() {

            this.errorToastrHide = false;
            setTimeout(() => this.errorToastrHide = true, 5000);
        },
        errorClose() {
            this.errorToastrHide = true;
        }

    }

}
</script>