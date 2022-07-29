<template>
    <div class="content">
        <p class="page-title mb-20">Manage
            Learning Path</p>
        <div class="main-card">
            <div class="btn-align-end">
                <div class="slds-form-element">
                    <div class="slds-form-element__control search-inp-control">

                        <input type="text" id="text-input-id-50" placeHolder="Search learning path…"
                            class="slds-input search-inp" v-on:keyup="search($event)" />
                    </div>
                </div>
                <nuxt-link to="/learning-path-managment/create"
                    class="slds-button slds-button_brand btnmain blue-btn ml-10">
                    Add Learning Path</nuxt-link>


                <button class="slds-button slds-button_brand btnmain light-blue-btn ml-10" href="javascript:void(0)"
                    @click="BulkDelete()" v-if="!bulk_delete_button">Delete
                    Learning Path</button>
            </div>
            <div>
                <div class="role-main learn-path-uper-gap">
                    <div class="blue-text mb-20">
                        List Learning Path
                    </div>
                    <div class="table-main slds-course-table">
                        <!-- Datatables -->
                        <div class="table-main">
                            <Learningpath :header="header" :tableData="tableData"
                                :no_record_avalible="no_record_avalible" :paginateObj="paginate"
                                :searchkeyword="searchkeyword" :pageCount="pageCount" />
                        </div>
                        <!-- Datatables -->
                    </div>
                </div>
            </div>
        </div>
        <!-- view model -->
        <div class="user-record-modal">
            <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01"
                class="slds-modal " id="add-category" ref="openViewModelNew">
                <div class="slds-modal__container manage-view-dialog-modal slds-modal-category">
                    <div class="slds-modal__header modal-main-record-title category-title">
                        <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate">LEARNING PATH DETAILS</h1>
                        <button v-on:click="closeViewModel()"
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
                    <viewLearningPath :viewModelData="viewModelData"></viewLearningPath>
                    
                </div>
            </section>
            <div class="slds-backdrop " role="presentation" id="add-category-backdrop" ref="openViewModelNewbackdrop">
            </div>
        </div>
        <!-- end view modal -->

        <!-- start delete model -->
        <div class="user-record-modal">
            <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="slds-modal"
                id="delete-modal" ref="deleteUserModel">
                <div class="slds-modal__container record-dialog-modal">
                    <div class="slds-modal__header modal-main-record-title">
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
                                <h3>Are you sure?</h3>
                                <p>Do you really want to delete these Learning path? This
                                    process cannot be undone</p>
                            </div>
                        </div>
                        <div class="delete-modal-footer">
                            <button class="slds-button slds-button_neutral btnmain blue-btn modal-btn"
                                @click="deleteLearningPath()">Yes
                            </button>

                            <button id="close-btn1"
                                class="slds-button slds-button_brand btnmain light-blue-btn modal-btn"
                                @click="closeDeleteModel()">No
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div class="slds-backdrop" role="presentation" id="delete-modal-backdrop">
            </div>
        </div>
        <!-- end delete model -->
        <errorToastr :errorMessage="errorMessage" v-if="!errorToastrHide" />
        <successToastrVue :successMessage="successMessage" v-if="!successToastrHide" />
    </div>
</template>
<script>
import successToastrVue from '../../components/element/successToastr.vue';
import errorToastr from '../../components/element/errorToastr.vue';
import ImageComponent from '../../components/element/image.vue';
import Learningpath from '../../components/LearningPathManagment/learningPathList.vue';
import learningPathService from "../../components/Service/LearningPathService";
import viewLearningPath from '../../components/LearningPathManagment/viewLearning.vue';
export default {
    layout: 'frontend',
    name: 'learning-path-managment',
    components: {
        successToastrVue,
        errorToastr,
        ImageComponent,
        Learningpath,
        viewLearningPath
    },
    data() {
        return {
            header: [],
            tableData: [],
            viewModelData: [],
            no_record_avalible: "",
            paginate: '',
            searchkeyword: '',
            pageCount: '',
            successMessage: '',
            errorMessage: '',
            error_hide: true,
            DeleteId: '',
            errorToastrHide: true,
            bulk_delete_button: true,
            successToastrHide: true,
        }
    },
    created() {
        this.header = [{ "Key": "", 'column': '' }, { "Key": "Sr No.", 'column': 'id' }, { "Key": "Learning Path Title", 'column': 'title' }, { "Key": "Major Category", 'column': '' }, { "Key": "Sub Category", 'column': '' }, { "Key": "Created On", 'column': 'created_at' }, { "Key": "Status", 'column': '' }, { "Key": "Action", 'column': '' }];
        this.getLearningPathList("", 1, 'created_at', 'desc');
        this.successNewMessage();
    },
    methods: {
        openViewModel: function (id) {
            console.log(id);
            learningPathService.getEditDetails(id).then((result) => {
                this.viewModelData = result.data.data;

                this.$refs.openViewModelNew.classList.add("slds-fade-in-open");
                this.$refs.openViewModelNewbackdrop.classList.add("slds-backdrop_open");
            }).catch((err) => {
                console.error(err);
            });

        },
        openEditPage: function (id) {
            this.$router.push({ path: '/learning-path-managment/edit/' + id });
        },
        search($event) {
            this.searchText = $event.target.value;
            this.getLearningPathList(1, $event.target.value, 'created_at', 'desc')
        },
        closeViewModel() {
            this.$refs.openViewModelNew.classList.remove("slds-fade-in-open");
            this.$refs.openViewModelNewbackdrop.classList.remove("slds-backdrop_open");
        },
        successToasterShow() {
            this.successToastrHide = false;
            setTimeout(() => this.successToastrHide = true, 5000);
        },
        successClose: function () {
            localStorage.removeItem('sucess_msg');
            this.successToastrHide = true
        },
        errorToastrShow() {
            this.error_hide = false;
            setTimeout(() => this.error_hide = true, 5000);
        },
        dangerToasterShow() {
            this.errorToastrHide = false;
            setTimeout(() => this.errorToastrHide = true, 5000);
        },
        errorClose() {
            this.errorToastrHide = true;
        },
        getLearningPathList(value = "", currentPage = "", sortBy = "", sortOrder = "") {
            learningPathService.getLearningPathList(value, currentPage, sortBy, sortOrder)
                .then(async response => {
                    var final = [];
                    this.tableData = [];
                    response.data.data.data.map(function (value, key) {
                        var temp_array = {};
                        temp_array.key = '';
                        temp_array.id = value.id;
                        temp_array.title = value.title;
                        temp_array.category = value.entity_sub_category_relation.course_sub_categoryrelation[0].category_relation.title;
                        temp_array.sub_category = value.entity_sub_category_relation.course_sub_categoryrelation[0].title;
                        temp_array.created_at = value.created_at;
                        temp_array.status = '<div class="slds-select_container cus-select-container"> <select class="slds-select custom-grid-input" id="select-01"> <option value="">Active</option> <option value="">Inactive</option> </select> </div>';
                        final.push(temp_array)
                    })
                    this.tableData = final;
                    this.no_record_avalible = response.data.response_msg;
                    this.paginate = response.data.data;
                    this.searchkeyword = value;
                    this.pageCount = response.data.data.data.length;
                    // console.log(this.pageCount)
                }).catch(e => {
                    console.log(e)
                });
        },
        successNewMessage() {
            const ISSERVER = typeof window === "undefined";
            if (!ISSERVER) {
                var msh = localStorage.getItem('sucess_msg');
                if (msh) {
                    this.successMessage = msh;
                    this.successToasterShow();
                }
            }
        },
        bulkDeleteds: function (id) {
            if (id.length != 0) {
                this.bulk_delete_button = false;
            } else {
                this.bulk_delete_button = true;
            }
            this.multipleDelete = id;
        },
        BulkDelete() {
            this.$refs.deleteCategoryModel.classList.add("slds-fade-in-open");
            this.deleteFlag = 'multiple';
        },
        learnigPathDelete: function (id) {
            this.$refs.deleteUserModel.classList.add("slds-fade-in-open");
            this.DeleteId = id;
        },
        deleteLearningPath() {
            learningPathService.deleteLearningPath(this.DeleteId).then((result) => {
                localStorage.setItem('sucess_msg', result.data.response_msg);
                this.successMessage = result.data.response_msg;
                this.getLearningPathList("", 1, 'created_at', 'desc');
                this.successToasterShow();
                this.closeDeleteModel();
                this.bulk_delete_button = true;
            }).catch((err) => {

                this.errorMessage = err.response.data.response_msg;
                this.dangerToasterShow();
            });
        },
        closeDeleteModel() {
            this.$refs.deleteUserModel.classList.remove("slds-fade-in-open");
        },
        getPaginatesMain: function (currentPage, value, sortBy, sortOrder) {
            this.getAllCatData(currentPage, this.searchText, sortBy, sortOrder);
        },
    }
}
</script>