<template>
    <div class="content">
        <p class="page-title mb-20">Manage
            Learning Path</p>
        <div class="main-card">
            <div class="role-main learn-path-uper-gap">
                  <div class="mb-18 back-text">
                    <ImageComponent :log="require('~/assets/img/svg/arrow-left.svg')" :className="classObj" />
                    <nuxt-link to="/learning-path-managment"><span>BACK </span></nuxt-link>
                </div>
                <div class="blue-text mb-20">
                    Create Learning Path
                </div>
                <form @submit="submitData" method="POST" ref="learning_path_data_submit" enctype="multipart/form-data">
                    <CreateLearningPath :lerning-path-data="lerningPathData" :category-list="categoryList"
                        :sub-category-list="subCategoryList" />
                   
                    <div class="btn-align-end">
                        <FormButton type="submit" buttonName="Next"
                            className="slds-button slds-button_brand  btnmain blue-btn  ml-10" />
                    </div>
                </form>
                 <div id="vishalpatel" v-html="test">
                       
                    </div>
            </div>
        </div>
        <span>
            <ErrorToastr :errorMessage="errorMessage" v-if="!dangerHide" />
        </span>
    </div>
</template>
<script>
import ImageComponent from '../../components/element/image.vue';
import CreateLearningPath from '../../components/LearningPathManagment/create.vue'
import FormButton from '../../components/element/formButton.vue';
import LearningPathService from '../../components/Service/LearningPathService.js';
import ErrorToastr from '../../components/element/errorToastr.vue';
import CategoryService from '../../components/Service/CategoryService';


export default {
    layout: 'frontend',
    components: {
        ImageComponent,
        CreateLearningPath,
        FormButton,
        ErrorToastr
    },
   
    data() {
        return {
            lerningPathData: {
                title: '',
                description: '',
                requirement: '',
                image_name: '',
                intro_video: '',
                category_id: '',
                learning_path_sub_category: '',
                learning_path_courses: '',
                price: '',
                learning_path_instructor_name: '',
            },
             classObj: 'arrow-left',
            categoryList: [],
            subCategoryList: [],
            errorMessage: "",
            hides: true,
            hidessucces: true,
            successMessage: "",
            dangerHide: true,
            test:''
        }
    },
     mounted(){
        this.getAllCategoryList();
     
      
        //document.getElementById('vishalpatel').innerHtml=();
    },
    methods: {
        submitData(event) {
            console.log(this.lerningPathData, "Data");
            document.getElementById("learning_path_title_error").textContent = "";
            document.getElementById("learning_path_description_error").textContent = "";
            document.getElementById("requirement_error").textContent = "";
            document.getElementById("learning_path_major_category_error").textContent = "";
            document.getElementById("learning_path_sub_category_error").textContent = "";
            document.getElementById("learning_path_instructor_name_error").textContent = "";
            document.getElementById("learning_path_thumbnail_error").textContent = "";
            document.getElementById("learning_path_video_error").textContent = "";
            document.getElementById("learning_path_course_price_error").textContent = "";
            var cnt = 0;
            if (!this.lerningPathData.title) {
                document.getElementById("learning_path_title_error").textContent = "Enter the learning path title";
                event.preventDefault();
                cnt = 1;
            }
            if (!this.lerningPathData.description) {
                document.getElementById("learning_path_description_error").textContent = "Enter the learning description title";
                event.preventDefault();
                cnt = 1;
            }
            if (!this.lerningPathData.requirement) {
                document.getElementById("requirement_error").textContent = "Enter the learning requirements title";
                event.preventDefault();
                cnt = 1;
            }
            if (!this.lerningPathData.category_id) {
                document.getElementById("learning_path_major_category_error").textContent = "Select major category";
                event.preventDefault();
                cnt = 1;
            }

            if (!this.lerningPathData.image_name) {
                document.getElementById("learning_path_thumbnail_error").textContent = "Select  learning path thumbnail";
                event.preventDefault();
                cnt = 1;
            }

            if (!this.lerningPathData.price) {
                document.getElementById("learning_path_course_price_error").textContent = "Enter the learning requirements course price";
                event.preventDefault();
                cnt = 1;
            }
            if (cnt == 0) {
                LearningPathService.addLearningPath(this.lerningPathData)
                    .then((result) => {
                        localStorage.setItem('sucess_msg', result.data.response_msg);
                        this.$router.push({ path: '/learning-path-managment' });
                    }).catch(error => {
                        console.log(error, "ddd");
                        this.errorMessage = error.response.data.response_msg;
                        this.dangerToasterShow();
                    })
            }
            event.preventDefault();
        },
        dangerToasterShow() {
            this.dangerHide = false;
            setTimeout(() => this.dangerHide = true, 5000);
        },
        errorClose() {
            this.dangerHide = true;
        },
        getAllCategoryList() {
            CategoryService.getCategoryListNew().then((result) => {
                this.categoryList = result.data.data;
            }).catch((err) => {
                console.error(err);
            });
        },
    },
   
}
</script>