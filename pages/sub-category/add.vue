<template>
    <span>
        <div class="content">
            <p class="page-title mb-20">Add Sub Category</p>
            <div class="main-card">
                <div class="role-main">
                    <div class="mb-18 back-text">
                        <imageComponent :log="require('~/assets/img/svg/arrow-left.svg')" />
                        <nuxt-link to="/SubCategory"><span>BACK </span></nuxt-link>
                    </div>
                      <form @submit="addSubCategory">
                            <div class="modal-row">
                                <div class="modal-category-col1">
                                    <p class="mb-0 user-modal-title">Select Major Category</p>
                                </div>
                                <div class="modal-record-col2">
                                    <div class="slds-form-element__control  ">
                                        <formSelectField @blur="e => subCategoryData.majorCategory = e.target.value"
                                            v-model="SubCategoryAllData" :category-list="SubCategoryAllData"
                                            class="slds-select mb-20 custom-grid-input" id="select-01" />
                                        <!-- <formSelectField @blur="e => subCategoryData.majorCategory = e.target.value"
                                            :category-list="SubCategoryAllData"
                                            class="slds-select mb-20 custom-grid-input" id="select-01" /> -->
                                        <span class="text-danger" id="majorCategoryerror"
                                            ref="majorCategoryerror"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-row">
                                <div class="modal-category-col1">
                                    <p class="mb-0 user-modal-title">Sub Category Name</p>
                                </div>
                                <div class="modal-record-col2">
                                    <div class="slds-form-element__control  ">
                                        <FormTextBoxField @blur="e => subCategoryData.subCategoryName = e.target.value"
                                            v-model="subCategoryData.subCategoryName" fieldId="subCategory_name"
                                            placeHolder="Enter category" className="slds-input custom-grid-input" />
                                        <span class="text-danger" id="subcatnameeerror" ref="subcatnameeerror"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-row">
                                <div class="modal-category-col1">
                                    <p class="mb-0 user-modal-title">Category description</p>
                                </div>
                                <div class="modal-record-col2">
                                    <div class="mb-0 user-modal-desc">
                                        <div class="slds-form-element__control ">
                                            <FormTextareaField rows="3" v-model="subCategoryData.subCategoryDescription"
                                                @blur="e => subCategoryData.subCategoryDescription = e.target.value"
                                                no-resize placeHolder="Description comes here with a character limit."
                                                className="slds-input custom-grid-input" fieldId="subCategory_desc" />
                                            <span class="text-danger" id="subcatedescerror"
                                                ref="subcatedescerror"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-row">
                                <div class="modal-category-col1">
                                    <p class="mb-0 user-modal-title">Upload thumbnail</p>
                                </div>
                                <div class="modal-record-col2">
                                    <Dropzone v-bind:fileUploadSuccessEvent="fileUploadSuccessEvent"
                                        modelname="Dropzone" v-model="subCategoryData.dropzoneImage" />
                                </div>
                            </div>
                            <div class="btn-align-end p-0">
                                <FormButton type="submit" buttonName="Add Sub Category"
                                    className="slds-button slds-button_brand btnmain blue-btn" />
                            </div>
                        </form>

                </div>
            </div>


        </div>
    </span>
</template>
<script>
import Category from '../../components/Category/category.vue';
import Dropzone from '../../components/element/Dropzone.vue';
import FormTextBoxField from '../../components/element/formTextBoxField.vue';
import formSelectField from '../../components/element/formSelectField.vue';
import FormTextareaField from '../../components/element/textArea.vue';
import FormButton from '../../components/element/formButton.vue';
import successToastrVue from '../../components/element/successToastr.vue';
import CategoryService from '../../components/Service/CategoryService';
import SubcategoryService from '../../components/Service/SubcategoryService';
export default {                                                                                                                                                                                                                                                                                                                                    
    layout: 'frontend',
    name: 'SubCategory',
    props: ['theUser'],
    categoryName: null,
    dropzoneImage: null,
    categoryDescription: null,
    components: {
        Category,
        Dropzone,
        FormTextBoxField,
        FormTextareaField,
        FormButton,
        successToastrVue,
        formSelectField
    },
    data() {
        return {
            user: {},
            categoryAllData: [],
            SubCategoryAllData: [],
            successMessage: '',
            hideshow: true,
            hides: true,
            newCategoryName: null,
            newCategoryDescription: null,
            newDropzoneImage: null,
            subCatImage: null,
            DeleteId: '',
            selectedCategory: null,
            categoryData: {
                categoryName: '',
                categoryDescription: '',
                dropzoneImage: '',
            },
            editData:[],
            editModelData: {
                newCategoryName: '',
                newCategoryDescription: '',
                newDropzoneImage: '',
            },
            viewModelData: {
                categoryeditName: '',
                categoryeditDescription: '',
                dropzoneeditImage: '',
            },
            subCategoryData: {
                majorCategory: '',
                subCategoryName: '',
                subCategoryDescription: '',
                subCatImage: '',
            },
        }
    },
    methods: {
        fileUploadSuccessEvent(file, response) {
            this.categoryData.dropzoneImage = response;
            this.categoryData.newDropzoneImage = response;
            this.subCategoryData.subCatImage = response;
        },
        getAllSubCatData() {
            SubcategoryService.getSubCategoryList().then(
                function (response) {
                    this.categoryAllData = response.data;
                }.bind(this)
            );
        },
        categoryList() {
            CategoryService.getCategoryList().then(
                function (response) {
                    
                    this.SubCategoryAllData = response.data.data;
                }.bind(this)
            );
        },
        openSubCategoryModel() {
            this.categoryList();
            this.$refs.addsubcategory.classList.add("slds-fade-in-open");
            this.$refs.addsubcategorybackdrop.classList.add("slds-backdrop_open");
        },
        closeSubCategoryModel() {
            this.$refs.addsubcategory.classList.remove("slds-fade-in-open");
            this.$refs.addsubcategorybackdrop.classList.remove("slds-backdrop_open");
        },
        addSubCategory(e) {
            console.log(this.subCategoryData);
            document.getElementById("majorCategoryerror").textContent = "";
            document.getElementById("subcatnameeerror").textContent = "";
            document.getElementById("subcatedescerror").textContent = "";
            // if (!this.subCategoryData.majorCategory) {
            //     document.getElementById("majorCategoryerror").textContent = "Please select Major Category";
            //     e.preventDefault();
            // }
            if (!this.subCategoryData.subCategoryName) {
                document.getElementById("subcatnameeerror").textContent = "Please enter Category Name";
                e.preventDefault();
            }
            if (!this.subCategoryData.subCategoryDescription) {
                document.getElementById("subcatedescerror").textContent = "Please enter Description";
                e.preventDefault();
            }
            if (this.subCategoryData.subCategoryName && this.subCategoryData.subCategoryDescription) {
                    SubcategoryService.saveSubCategory(this.subCategoryData).then((result) => {
                           this.$router.push({ path: '/SubCategory' });
                    }).catch((err) => {
                        console.log(err)
                    });
            }
            e.preventDefault();
        },
        openViewModel(id) {
            SubcategoryService.getEditSubCategory(id).then((result) => {
                this.editModelData = result.data.data;
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
        openEditModel(id) {
            // get Data By Id
            SubcategoryService.getEditSubCategory(id).then((result) => {
                console.log(result,"dsaadsa");
                this.editData = result.data.data;
                this.editModelData.majorCategory = result.data.data.parent_category_id;
                //console.log("editModelData",this.editModelData);
            }).catch((err) => {
                console.error(err);
            });
            this.$refs.editcategory.classList.add("slds-fade-in-open");
        },
        closeEditModel() {
            this.$refs.editcategory.classList.remove("slds-fade-in-open");
            //this.$refs.editcategorybackdrop.classList.remove("slds-backdrop_open");
        },
    }, created() {
        this.categoryList();
        this.getAllSubCatData();
    }
}
</script>