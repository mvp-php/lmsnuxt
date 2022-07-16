<template>
    <span>
        <div class="content">
            <p class="page-title mb-20">Edit Major Category</p>
            <div class="main-card">
                <div class="role-main">
                    <div class="mb-18 back-text">
                        <ImageComponent :log="require('~/assets/img/svg/arrow-left.svg')"  />
                        <nuxt-link to="/category-management"><span>BACK </span></nuxt-link>
                    </div>
                    <form @submit="updateCategory">
                        <CategoryEdit   :edit-model-data="editModelData"></CategoryEdit>
                        <div class="btn-align-end p-0">
                            <FormButton type="submit" buttonName="Update Major Category"
                                className="slds-button slds-button_brand btnmain blue-btn" />
                        </div>
                    </form>

                </div>
            </div>


        </div>
        <errorToastr :errorMessage="errorMessage" v-if="!dangerHide" />
    </span>
</template>
<script>
// import Category from '../../components/Category/category.vue';
import Dropzone from '../../../components/element/Dropzone.vue';
import FormTextBoxField from '../../../components/element/formTextBoxField.vue';
import FormTextareaField from '../../../components/element/textArea.vue';
import FormButton from '../../../components/element/formButton.vue';
import CategoryService from '../../../components/Service/CategoryService';
import ImageComponent from '../../../components/element/image.vue';
import  CategoryEdit  from  '.../../../components/Category/edit_category.vue';
// import successToastrVue from '../../../components/element/successToastr.vue';
import errorToastr from '../../../components/element/errorToastr.vue';
export default {
    layout: 'frontend',
    name: 'UserForm',
    props: ['theUser'],
    components: {
        // Category,
        Dropzone,
        FormTextBoxField,
        FormTextareaField,
        FormButton,
        ImageComponent,
        CategoryEdit,
        // successToastrVue,
        errorToastr
    },
    data() {
        return {
          
            dangerHide: true,
            editModelData: {
               
            },
        }
    },
    methods: {
       
        editData(id) {
            CategoryService.getEditDetails(id).then((result) => {
                this.editModelData = result.data.data;
                console.log(result.data.data);
            }).catch((err) => {
                console.error(err);
            });

        },
        updateCategory(e) {
            // id = this.$route.params.id;

            document.getElementById("category_title_error").textContent = "";
            document.getElementById("category_description_error").textContent = "";
            if (!this.editModelData.title) {
                document.getElementById("category_title_error").textContent = "Please enter Category Name";
                e.preventDefault();
            }
            if (!this.editModelData.description) {
                document.getElementById("category_description_error").textContent = "Please enter Description";
                e.preventDefault();
            }
            CategoryService.updateCategory(this.editModelData).then((result) => {
                localStorage.setItem('sucess_msg',result.data.response_msg);
               this.$router.push({ path: '/category-management' });
            }).catch((error) => {
               this.errorMessage = error.response.data.response_msg;

                        this.dangerToasterShow();
            });
            e.preventDefault();
        },
         dangerToasterShow() {

            this.dangerHide = false;
            setTimeout(() => this.dangerHide = true, 5000);
        },
        errorClose(){
            this.dangerHide = true;
            }
    }
    , created() {
        this.editData(this.$route.params.id);
    }

}
</script>