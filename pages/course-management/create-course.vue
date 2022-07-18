<template>
  <div class="content pt-20">
    <!-- First Content start -->
    <div id="firstPage" class="">
      <div class="">
        <div class="braed-crumb-main">
          <nav role="navigation" aria-label="Breadcrumbs">
            <ol
              class="slds-breadcrumb slds-list_horizontal slds-wrap braed-crumb-list"
            >
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
            <CreateCource   />
            <div class="btn-align-end p-0">
              <a
                class="slds-button slds-button_brand btnmain blue-btn ml-10"
                v-on:click="saveAsDraft()"
                >Save As Draft</a
              >
            </div>
         
        </div>
      </div>
    </div>
    <!-- First Content End -->
    <!-- Second Content Add -->
    
    <!-- Second Content End -->
    <!-- Third Content End -->

    <!-- Third Content End -->
  </div>
</template>
<script>


import  CreateCource    from    '../../components/Course/createCource.vue';

export default {
  name: "IndexPage",
  layout: "frontend",
  components: {
    CreateCource,
   
  },
  data() {
    return {
      // dataV: this.data,
      FinalArray: [],
      selectedId: [],
      courseDetails: {
        course_title: "",
        course_description: "",
        course_requirements: "",
        major_category: "",
        sub_category: "",
        instructor_name: "",
        course_tuhumbnail: "",
        course_video: "",
        radio_check: "",
        course_types: "",
        classObj: 'cd-img',
      },
      selectArray: [
        { id: "1", name: "Fronted Dev" },
        { id: "2", name: "Backend Dev" },
      ],
    };
  },
  methods: {
    selectedMajorCategory(change) {
      console.log(this.$refs.majorCategory);
    },
    fileUploadSuccessEvent(file, response) {
      this.courseDetails.course_tuhumbnail = response;
      this.courseDetails.course_video = response;
    },
    saveAsDraft(e) {
    //   console.log(this.courseDetails.major_category, "NAYAN");
    //   document.getElementById("course_title_error").textContent = "";
    //   document.getElementById("course_description_error").textContent = "";
    //   document.getElementById("course_course_requirements_error").textContent =
    //     "";
    //   document.getElementById("course_major_category_error").textContent = "";
    //   document.getElementById("course_sub_category_error").textContent = "";
    //   document.getElementById("course_instructor_name_error").textContent = "";
    //   document.getElementById("course_course_thumbnail_error").textContent = "";
    //   document.getElementById("course_course_video_preview_error").textContent =
    //     "";

    //   if (!this.courseDetails.course_title) {
    //     document.getElementById("course_title_error").textContent =
    //       "Please Enter  course title";
    //   }
    //   if (!this.courseDetails.course_description) {
    //     document.getElementById("course_description_error").textContent =
    //       "Please Enter  course title";
    //   }
    //   if (!this.courseDetails.course_requirements) {
    //     document.getElementById(
    //       "course_course_requirements_error"
    //     ).textContent = "Please Enter  course title";
    //   }
    //   if (!this.courseDetails.major_category) {
    //     document.getElementById("course_major_category_error").textContent =
    //       "Please Select Major Category";
    //   }
    //   if (!this.courseDetails.sub_category) {
    //     document.getElementById("course_sub_category_error").textContent =
    //       "Please Enter Sub Category";
    //   }
    //   if (!this.courseDetails.instructor_name) {
    //     document.getElementById("course_instructor_name_error").textContent =
    //       "Please Enter Instructor name";
    //   }
    //   if (!this.courseDetails.course_tuhumbnail) {
    //     document.getElementById("course_course_thumbnail_error").textContent =
    //       "Please Select Course thumbnail";
    //   }
    //   if (!this.courseDetails.course_video) {
    //     document.getElementById(
    //       "course_course_video_preview_error"
    //     ).textContent = "Please Select Course Video preview";
    //   }
      document.getElementById("firstPage").classList.add("hideContent");
      document.getElementById("secondPage").classList.remove("hideContent");
      // SubcategoryService.saveSubCategory(this.subCategoryData).then((result) => {
      //        this.$router.push({ path: '/SubCategory' });
      // }).catch((err) => {
      //     console.log(err)
      // });
    },
    getChecked() {
      var selectedChecked = [];
      if (event.target.checked == true) {
        this.FinalArray.push(event.target.value);
      } else {
        this.FinalArray.filter(function (elm) {
          if (event.target.value != elm) {
            console.log(event.target.value + "=====" + elm);
            selectedChecked.push(elm);
          }
        });
        this.FinalArray = selectedChecked;
      }
      this.$parent.selectedId(this.FinalArray);
    },
    submitSecondPage(){
      document.getElementById("secondPage").classList.add("hideContent");
      document.getElementById("thirdPage").classList.remove("hideContent");
    },
    addMoreModules(){
          this.$router.push({ path: '/course/add-module-descriptions' });
    }
  },
};
</script>
