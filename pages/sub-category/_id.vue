<template>
    <span>

        

        <div class="content">
            <p class="page-title mb-20">USER MANAGEMENT</p>
            <div class="main-card">
                <div class="tab-main">
                    <div class="btn-align-end">
                        <div class="slds-form-element">
                            <div class="slds-form-element__control search-inp-control">

                                <input type="text" id="text-input-id-50" placeHolder="Search user here…"
                                    class="slds-input search-inp" v-on:keyup="setCanMessageSubmit($event)" />


                            </div>
                        </div>
                        <NuxtLink :to="`/sub-category/create-subcategory/${this.$route.params.id}`"
                        class="slds-button slds-button_brand btnmain blue-btn ml-10">Add Sub Category</NuxtLink>


                    <button class="slds-button slds-button_brand btnmain light-blue-btn ml-10" href="javascript:void(0)"
                        @click="BulkDelete()" v-if="!bulk_delete_button">Delete
                        Category</button>
                    </div>
                    <div class="slds-tabs_default cus-tab-default">

            

                        <div class="table-main">
                             <SubCategory :header="header" :tableData="tableData" :no_record_avalible="no_record_avalible"
                        :paginateObj="paginate" :searchkeyword="searchkeyword" :="pageCount" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
        <successToastrVue :success-message="successMessage" id="successMsg" class="successMsg" v-if="!hides"
            ref="successNewMsg" />




        <!-- delete mdoel -->

        <!-- delete model -->
        <errorToastr :errorMessage="errorMessage" v-if="!error_hide" />
    </span>
</template>
<script>
import SubCategory from '../../components/SubCategory/sub_category_list.vue';

import successToastrVue from '../../components/element/successToastr.vue';
import errorToastr from '../../components/element/errorToastr.vue';
import SubcategoryService from '../../components/Service/SubcategoryService';
export default {
    layout: 'frontend',
    name: 'sub-category-form',
    components: {
        SubCategory,
        successToastrVue,
        errorToastr
    },
    data() {
        return {
            user: {},

            successMessage: '',
            errorMessage: '',
            hides: true,
            error_hide: true,
            DeleteId: '',
            header: [],
            tableData: [],
            no_record_avalible: "",
            paginate: '',
            searchkeyword: '',
            pageCount: '',
            bulk_delete_button: true,

        }
    },
    created() {
        this.header = ["", 'Sr No.', 'Category Name', 'Category Description', 'Created On', 'Action'];
        this.getAllCatData(1)
    },
    
    methods: {
        
        setCanMessageSubmit($event) {

            this.getAllCatData(1, $event.target.value,)
        },

        successToasterShow() {
            this.hides = false;
            setTimeout(() => this.hides = true, 5000);
        },

        errorToastrShow() {
            this.error_hide = false;
            setTimeout(() => this.error_hide = true, 5000);
        },
        
        getAllCatData(page = "", value = "") {
             SubcategoryService.callSubcategoryList(value, page, this.$route.params.id).then(
                function (response) {
                   this.tableData = response.data.data.data;
                     
                    // this.no_record_avalible = response.data.response_msg
                    // this.paginate = response.data.data;

                    // this.pageCount = response.data.data.data.length;
                    // this.searchkeyword = value;
                }.bind(this)
            );
            
            

        },
        
        
        getPaginatesMain: function (currentPage, value) {
            this.getAllCatData(currentPage, value);
        },
        
        successClose: function () {
            this.successToastrHide = true
        }

    }
}
</script>