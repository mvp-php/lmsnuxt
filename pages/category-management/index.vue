<template>
    <span>
        <div class="content">
            <p class="page-title mb-20">MANAGE CATEGORIES</p>
            <div class="main-card">
                <div class="tab-main">
                    <div class="btn-align-end">
                        <div class="slds-form-element">
                            <div class="slds-form-element__control search-inp-control">

                                <input type="text" id="text-input-id-50" placeHolder="Search category here…"
                                    class="slds-input search-inp" v-on:keyup="search($event)" />
                            </div>
                        </div>
                        <nuxt-link to="/category-management/create-category"
                            class="slds-button slds-button_brand btnmain blue-btn ml-10">
                            Add Major Category</nuxt-link>


                        <button class="slds-button slds-button_brand btnmain light-blue-btn ml-10"
                            href="javascript:void(0)" @click="BulkDelete()" v-if="!bulk_delete_button">Delete
                            Major Category</button>
                    </div>
                    <div class="slds-tabs_default cus-tab-default">



                        <div class="table-main">
                            <Category :header="header" :tableData="tableData" :no_record_avalible="no_record_avalible"
                                :paginateObj="paginate" :searchkeyword="searchkeyword" :pageCount="pageCount" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
        <successToastrVue :success-message="successMessage" id="successMsg" class="successMsg" v-if="!successToastrHide"
            ref="successNewMsg" />

        <!-- view model -->
        <div class="user-record-modal">
            <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01"
                class="slds-modal " id="add-category" ref="openViewModelNew">
                <div class="slds-modal__container manage-view-dialog-modal slds-modal-category">
                    <div class="slds-modal__header modal-main-record-title category-title">
                        <h1 id="modal-heading-01" class="slds-modal__title slds-hyphenate">CATEGORY DETAILS</h1>
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
                    <div class="slds-modal__content slds-p-around_medium modal-content-group-view"
                        id="modal-content-id-1">
                        <div class="modal-manage-group-main">
                            <div class="group-row-main">
                                <div class="group-col1">
                                    <div class="course-row-manage">
                                        <div class="course-col1">
                                            <div class="course-title-main">
                                                <p class="mb-0">Category title</p>
                                            </div>
                                        </div>
                                        <div class="course-col2">
                                            <div class="course-title-desc">
                                                <p class="mb-0">{{ viewModelData.title }} </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="course-row-manage">
                                        <div class="course-col1">
                                            <div class="course-title-main">
                                                <p class="mb-0">Category description</p>
                                            </div>
                                        </div>
                                        <div class="course-col2">
                                            <div class="course-title-desc">
                                                <p class="mb-0">{{ viewModelData.description }}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="group-col2">
                                    <div class="img-section-manage mb-16px">
                                        <div class="img-tag-thumnails">
                                            <span v-if="viewModelData.image_name">
                                                <ImageComponent :log='`${viewModelData.image_name}`' />

                                            </span>
                                            <span v-else>
                                                <ImageComponent :log='require(`~/assets/img/img-manage.png`)' />

                                            </span>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="slds-backdrop " role="presentation" id="add-category-backdrop" ref="openViewModelNewbackdrop">
            </div>
        </div>
        <!-- end modal -->


        <!-- delete mdoel -->
        <div class="user-record-modal">
            <section role="dialog" tabindex="-1" aria-modal="true" aria-labelledby="modal-heading-01" class="slds-modal"
                id="delete-modal" ref="deleteCategoryModel">
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
                                <img src="../../assets/img/svg/delete.svg" alt="icon">
                            </div>
                            <div class="delete-text">
                                <h3>Are you sure?</h3>
                                <p>Do you really want to delete these category? This
                                    process cannot be undone</p>
                            </div>
                        </div>
                        <div class="delete-modal-footer">
                            <button class="slds-button slds-button_neutral btnmain blue-btn modal-btn"
                                aria-label="Cancel and close" v-on:click="deleteCategory()">Yes</button>
                            <button class="slds-button slds-button_brand btnmain light-blue-btn modal-btn"
                                id="close-btn1" v-on:click="closeDeleteModel()">No </button>
                        </div>
                    </div>
                </div>
            </section>
            <div class="slds-backdrop" role="presentation" id="delete-modal-backdrop">
            </div>
        </div>
        <!-- delete model -->
        <errorToastr :errorMessage="errorMessage" v-if="!error_hide" />
    </span>
</template>
<script>
import Category from '../../components/Category/category.vue';
import CategoryService from '../../components/Service/CategoryService';
import successToastrVue from '../../components/element/successToastr.vue';
import errorToastr from '../../components/element/errorToastr.vue';
import moment from 'moment';
import SubcategoryService from '../../components/Service/SubcategoryService';
import ImageComponent from '../../components/element/image.vue';

import buttons from '../../components/element/formButton.vue';
export default {
    layout: 'frontend',
    name: 'category-list',

    components: {
        Category,
        successToastrVue,
        errorToastr,
        ImageComponent, buttons
    },
    data() {
        return {
            successMessage: '',
            errorMessage: '',
            error_hide: true,
            DeleteId: '',
            header: [],
            tableData: [],
            no_record_avalible: "",
            paginate: '',
            searchkeyword: '',
            pageCount: '',
            bulk_delete_button: true,
            successToastrHide: true,
            viewModelData: [],
            categoryData: {},
            deleteFlag: '',
            multipleDelete: '',
            searchText: '',
            done: true
        }
    },
    created() {
        this.header = [{ "Key": "", 'column': '' }, { "Key": "Sr No.", 'column': 'id' }, { "Key": "Category Name", 'column': 'title' }, { "Key": "Category Description", 'column': 'description' }, { "Key": "Created On", 'column': 'created_at' }, { 'Key': 'Add Sub Category', 'column': '' }, { "Key": "Action", 'column': 'created_at' }];
        this.getAllCatData(1, "", 'created_at', 'desc')
        this.successSMG();
    },

    methods: {
        successSMG() {
            const ISSERVER = typeof window === "undefined";

            if (!ISSERVER) {
                var msh = localStorage.getItem('sucess_msg');
                if (msh) {
                    this.successMessage = msh;
                    this.successToasterShow();
                }
            }
        },
        search($event) {
            this.searchText = $event.target.value;
            this.getAllCatData(1, $event.target.value, 'created_at', 'desc')
        },
        fileUploadSuccessEvent(file, response) {
            console.log(response, "Response");
            this.categoryData.dropzoneImage = response;
            this.categoryData.newDropzoneImage = response;
            this.subCategoryData.subCatImage = response;
        },
        openModel() {
            this.$refs.addcategory.classList.add("slds-fade-in-open");
            this.$refs.addcategorybackdrop.classList.add("slds-backdrop_open");
        },
        closeModel() {
            this.$refs.addcategory.classList.remove("slds-fade-in-open");
            this.$refs.addcategorybackdrop.classList.remove("slds-backdrop_open");
            document.getElementById("add_category_form").reset();
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

        getAllCatData(page = "", value = "", sortBy, sortOrder) {

            CategoryService.getCategoryList(value, page, sortBy, sortOrder).then(
                function (response) {
                    var final = [];
                    this.tableData = [];
                    response.data.data.data.map(function (value, key) {

                        var temp_array = {};
                        temp_array.key = '';
                        temp_array.id = value.id;
                        temp_array.title = value.title;
                        temp_array.description = value.description;
                        temp_array.created_at = moment(value.created_at).format('MM-DD-YYYY');
                        temp_array.parent_category_id = '<a v-on:click="openSubCategoryModel(item.id)" href="javascript:void(0)" class="btn btn-table-add"> <img src="../../assets/img/svg/plus-add.svg" alt="add-img"  class="all-img-add"> add </a>';
                        final.push(temp_array)
                    })
                    this.tableData = final;


                    this.no_record_avalible = response.data.response_msg
                    this.paginate = response.data.data;

                    this.pageCount = response.data.data.data.length;
                    this.searchkeyword = value;
                }.bind(this)
            );

        },
        openViewModel: function (id) {

            CategoryService.getEditDetails(id).then((result) => {
                this.viewModelData = result.data.data;
            }).catch((err) => {
                console.error(err);
            });

            this.$refs.openViewModelNew.classList.add("slds-fade-in-open");
            this.$refs.openViewModelNewbackdrop.classList.add("slds-backdrop_open");
        },
        closeViewModel() {
            this.$refs.openViewModelNew.classList.remove("slds-fade-in-open");
            this.$refs.openViewModelNewbackdrop.classList.remove("slds-backdrop_open");
        },
        viewEditPage: function (id) {
            this.$router.push({ path: "/category-management/edit/" + id });
        },
        userEdit(id) {
            CategoryService.getEditDetails(id).then((result) => {
                this.editModelData = result.data.data;
                this.$refs.editcategory.classList.add("slds-fade-in-open");
                this.$refs.editcategorybackdrop.classList.add("slds-backdrop_open");
            }).catch((err) => {
                this.errorMessage = err.response.data.response_msg;
                this.errorToastrShow();
            });

        },

        getPaginatesMain: function (currentPage, value, sortBy, sortOrder) {
            this.getAllCatData(currentPage, this.searchText, sortBy, sortOrder);
        },
        userDelete(id) {
            this.$refs.deleteCategoryModel.classList.add("slds-fade-in-open");
            this.DeleteId = id;
            this.deleteFlag = 'single';
        },
        closeDeleteModel() {
            this.$refs.deleteCategoryModel.classList.remove("slds-fade-in-open");
        },
        deleteCategory() {
            if (this.deleteFlag == 'single') {
                CategoryService.deleteCategory(this.DeleteId).then((result) => {

                    localStorage.setItem('sucess_msg', result.data.response_msg);
                    this.successMessage = result.data.response_msg;
                    this.successToasterShow();

                    this.closeDeleteModel();

                    this.getAllCatData(1, "");

                    this.getAllCatData(1, "", sortBy, sortOrder);
                    this.errorMessage = err.response.data.response_msg;
                    this.errorToastrShow();
                })
            } else {
                CategoryService.bulkCategoryDelete(this.multipleDelete).then((result) => {
                    localStorage.setItem('sucess_msg', result.data.response_msg);
                    this.successMessage = result.data.response_msg;
                    this.successToasterShow();

                    this.closeDeleteModel();
                    this.getAllCatData(1, "", sortBy, sortOrder);
                }).catch((err) => {
                    this.errorMessage = err.response.data.response_msg;
                    this.errorToastrShow();
                });
            }


        },

        closeSubCategoryModel() {
            this.$refs.addsubcategory.classList.remove("slds-fade-in-open");
            this.$refs.addsubcategorybackdrop.classList.remove("slds-backdrop_open");
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
        mainOpenMainSubCategory: function (id) {
            this.$router.push({ path: "/sub-category/" + id });

        },

    }
};
</script>