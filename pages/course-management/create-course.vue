<template>
  <div class="content pt-20">
    <!-- First Content start -->

    <div class="">
      <div class="braed-crumb-main">
        <nav role="navigation" aria-label="Breadcrumbs">
          <ol class="slds-breadcrumb slds-list_horizontal slds-wrap braed-crumb-list">
            <li class="slds-breadcrumb__item">
              <a href="#">MANAGE COURSES</a>
            </li>
            <li class="slds-breadcrumb__item">
              <a href="#">CREATE A COURSE</a>
            </li>
          </ol>
        </nav>
        <div class="steps-section mb-30">
          <ul class="progressbar steps-list-main">
            <li class="current"><span>Basic Details</span></li>
            <li><span>Course Details</span></li> 
            <li><span>Course Preview</span></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main-card">
      <div class="create-course">
        <form v-on:submit.prevent="saveAsDraft">
          <CreateCource :course-details="courseDetails" :categoryResponseList="categoryResponseList" :subCategoryResponseList="subCategoryResponseList" :instructorList="instructorResponseList"  :paymentPlan="paymentPlan"/>
          <div class="btn-align-end p-0">
             <FormButton type="submit" buttonName="Save As Draft"
                                className="slds-button slds-button_brand btnmain blue-btn ml-10" />
          
          </div>
        </form>


      </div>
    </div>
     <errorToastr :errorMessage="errorMessage" v-if="!dangerHide" />
  </div>

</template>
<script>


import CreateCource from '../../components/Course/createCource.vue';
import CategoryService from '../../components/Service/CategoryService';
import FormButton from '../../components/element/formButton.vue';
import InstructorService from '../../components/Service/InstructorService';
import CourseService from '../../components/Service/CourseService';
import errorToastr from '../../components/element/errorToastr.vue';
import PaymentPlanService from "../../components/Service/PaymentPlanService";
export default {
  name: "IndexPage",
  layout: "frontend",
  components: {
    CreateCource,
    FormButton,
    errorToastr
  },
  data() {
    return {

      courseDetails: {
        intro_video:"",
        image_name:"",
        instructor_id:""
      },
      categoryResponseList: [],
      subCategoryResponseList:[],
      instructorResponseList:[],
      classObj: 'cd-img',
      dangerHide:true,
      paymentPlan:[]
    };
  },
  beforeMount() {
    this.getAllCategoryList();
    this.getInstructorList();
    this.PaymentPlanList();
  },

  methods: {

    saveAsDraft(e) {
      document.getElementById("course_title_error").textContent = "";
      document.getElementById("course_description_error").textContent = "";
      document.getElementById("course_course_requirements_error").textContent = "";
      document.getElementById("course_major_category_error").textContent = "";
      document.getElementById("plan_error").textContent = "";
      document.getElementById("course_course_thumbnail_error").textContent = "";

      
      var cnt =0;

      if(!this.courseDetails.title){
        document.getElementById("course_title_error").textContent = "Enter the course title name";
        cnt =1;
      }
      if(!this.courseDetails.description){
        document.getElementById("course_description_error").textContent = "Enter the course description";
        cnt =1;
      }
     
     if(!this.courseDetails.category_id){
        document.getElementById("course_major_category_error").textContent = "Select the major category";
        cnt =1;
      }
      if(!this.courseDetails.price){
        document.getElementById("price_error").textContent = "Enter the course price";
        cnt =1;
      }
      if(!this.courseDetails.image_name){
        document.getElementById("course_course_thumbnail_error").textContent = "Select Course Thumbnail";
        cnt =1;
      }
      if(!this.courseDetails.payment_plan){
        document.getElementById("plan_error").textContent = "Plan";
      }
      console.log(this.courseDetails)
      if(cnt ==0){
        if(this.courseDetails.sub_category){
          this.courseDetails.category_id=this.courseDetails.sub_category;
        }
        CourseService.saveCourse(this.courseDetails)
          .then((result) => {
              localStorage.setItem('sucess_msg',result.data.response_msg);
       
              this.$router.push({ path: '/course-management/course-details/'+result.data.data[0].id });
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
      errorClose(){
        this.dangerHide = true;
      },
      PaymentPlanList() {
          PaymentPlanService.getPaymentPlan().then(response => {

              this.paymentPlan = response.data.data;

          }).catch(e => {
              console.log(e)
          });
      },
    getAllCategoryList() {
      CategoryService.getCategoryListNew().then((result) => {

        var final = [];

        result.data.data.map(function (value, key) {

          var objectElement = {};
          objectElement.id = value.id;
          objectElement.title = value.title;
          final.push(objectElement);

        })

        this.categoryResponseList = final;
        console.log(this.categoryResponseList);

      }).catch((err) => {
        console.error(err);
      });
    },
    subCategoryList:function(id){
      
      CategoryService.getSubCategoryListByCategoryId(id).then((result) => {

          var final = [];

          result.data.data.map(function (value, key) {

            var objectElement = {};
            objectElement.id = value.id;
            objectElement.title = value.title;
            final.push(objectElement);

          })

          this.subCategoryResponseList = final;
          console.log(this.subCategoryResponseList);

        }).catch((err) => {
          console.error(err);
        });
    },
    getInstructorList(){
        InstructorService.getInstructorUserList().then((result) => {
          var final = [];

          result.data.data.map(function (value, key) {
              console.log(value);
            var objectElement = {};
            objectElement.id = value.id;
            objectElement.title = value.instructor_name;
            final.push(objectElement);

          })
          this.instructorResponseList = final;

        });
    }

  },
};
</script>