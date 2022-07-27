<template>
  <span>
    <div class="create-role-main">
      <div class="slds-form-element custom-grid">
        <Labels labelName="Course title" className="slds-form-element__label custom-label2" for="text-input-id-46"
                    required="true" />
       
        <div class="slds-form-element__control custom-grid-control mb-20">
          <FormTextBoxField 
            v-model="courseDetails.title" fieldId="cpurse_title" placeHolder=""
            className="slds-input custom-grid-input" @keypress="checkInput()"/>
          <span class="text-danger" id="course_title_error" ref="course_title_error"></span>
        </div>
      </div>
    </div>
    <div class="create-role-main">
      <div class="slds-form-element custom-grid">
        <Labels labelName="Course description" className="slds-form-element__label custom-label2" for="text-input-id-46"
                    required="true" />
        
        <div class="slds-form-element__control custom-grid-textarea-main  mb-20">
          <editor class="slds-textarea custom-grid-textarea " placeHolder="Please enter description"  @keypress="checkInput()"
          id="textarea-id-01" api-key="no-api-key"
            v-model="courseDetails.description" :init="{
              height: 250,
              menubar: true,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \
                                                            alignleft aligncenter alignright alignjustify | \
                                                            bullist numlist outdent indent | removeformat | help',
            }" />
          <span class="text-danger" id="course_description_error" ref="course_description_error"></span>
        </div>
      </div>
    </div>
    <div class="create-role-main">
      <div class="slds-form-element custom-grid">
        <Labels labelName="Course requirements " className="slds-form-element__label custom-label2" for="text-input-id-46"
                   />
      
        <div class="slds-form-element__control custom-grid-textarea-main mb-20">
          <editor class="slds-textarea custom-grid-textarea" placeHolder="Please enter course requirments"
            name="course_requirements" id="textarea-id-02" api-key="no-api-key"
            v-model="courseDetails.course_requirements" :init="{
              height: 250,
              menubar: true,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \
                                                                alignleft aligncenter alignright alignjustify | \
                                                                bullist numlist outdent indent | removeformat | help',
            }" />
          <span class="text-danger" id="course_course_requirements_error" ref="course_course_requirements_error"></span>
        </div>
      </div>
    </div>
    <div class="create-role-main">
      <div class="slds-form-element custom-grid">
        <Labels labelName="Major category" className="slds-form-element__label custom-label2" for="text-input-id-46"
                    required="true" />
        
        <div class="slds-form-element__control custom-grid-control  mb-20">
          <div class="slds-select_container cus-select-container">
           
            <formDropdown  
              v-model="courseDetails.category_id" class="slds-select custom-grid-input"
              selectName="Category " :selected="`${courseDetails.category_id}`" :options="categoryResponseList" @onChange="getCategoryList"/>
           
            <span class="text-danger" id="course_major_category_error" ref="course_major_category_error"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="create-role-main">
      <div class="slds-form-element custom-grid  mb-20">
        <Labels labelName="Sub Category" className="slds-form-element__label custom-label2" for="text-input-id-46"/>
        <div class="slds-form-element__control custom-grid-control">
          <div class="slds-select_container cus-select-container">
            <formDropdown
              v-model="courseDetails.sub_category" class="slds-select custom-grid-input"
              selectName="Sub Category " :options="subCategoryResponseList" @onChange="getSubCategory"/>
            <span class="text-danger" id="course_sub_category_error" ref="course_sub_category_error"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="create-role-main">
      <div class="slds-form-element custom-grid">
        <Labels labelName="Instructor name " className="slds-form-element__label custom-label2" for="text-input-id-46"
                   />
        
        <div class="slds-form-element__control custom-grid-control  mb-20">
          <div class="slds-select_container cus-select-container">
            <formDropdown v-model="courseDetails.instructor_name" :options="instructorList" class="slds-select custom-grid-input"
              selectName="Instructor Name " :selected="`${courseDetails.instructor_id}`"  @onChange="getInstructor"/>
            <span class="text-danger" id="course_instructor_name_error" ref="course_instructor_name_error"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="create-role-main">
      <div class="slds-form-element custom-grid mb-20">
         <Labels labelName="Course thumbnail" className="slds-form-element__label custom-label2" for="text-input-id-46"
                    required="true" />
        <div class="slds-form-element__control custom-grid-control">
         <Dropzone v-bind:fileUploadSuccessEvent="fileUploadSuccessEvent"
            v-model="courseDetails.course_tuhumbnail" :folder="`course`" :type="`image`"  :extension="`.png, .jpeg, .jpg, .gif`" :existingImage="`${courseDetails.image_name}`"/>
          <span class="text-danger" id="course_course_thumbnail_error" ref="course_course_thumbnail_error"></span>
        </div>
      </div>
    </div>
    <div class="create-role-main">
      <div class="slds-form-element custom-grid mb-20">
        <Labels labelName="Course video preview" className="slds-form-element__label custom-label2" for="text-input-id-46"
                 />
        <div class="slds-form-element__control custom-grid-control">
          <Dropzone v-bind:videoUploadSuccessEvent="videoUploadSuccessEvent" modelname="Dropzone"
            v-model="courseDetails.course_video" folder="course"  :type="`video`" :extension="`.mp4`" :existingImage="`${courseDetails.intro_video}`"/>
          <span class="text-danger" id="course_course_video_preview_error"
            ref="course_course_video_preview_error"></span>
        </div>
      </div>
    </div>
    <div class="create-role-main">

      <div class="price-main mb-40">
        <div class="slds-form-element cus-price-main-inner">
          <Labels labelName="Course Price" className="slds-form-element__label custom-label2" for="text-input-id-46"
                    required="true" />
          
          <div class="sub-categoty-inner">
            <div class="slds-form-element__control custom-grid-control">
              <FormTextBoxField fieldId="text-input-id-46" placeHolder="" className="slds-input custom-grid-input " v-model="courseDetails.price" @keypress="handleInput()" />
              <span class="text-danger" id="price_error"
           ></span>
            </div>
          
            <div class="price-checkbox">
              <div class="slds-form-element price-check-inner" v-for="item in courseType">
              
                <div class="slds-form-element__control">
                  <div class="slds-checkbox role-check-main">
                    <formCheckbox className="role-check" :id="`${item.value}`" :modelName="`${item.value}`"
                      @onClick="getChecked"/>
                    <label class="slds-checkbox__label" :for="`${item.value}`">
                      <span class="slds-checkbox_faux"></span>
                      <span class="slds-form-element__label">{{item.key}}</span>
                    </label>
                  </div>
                 
                </div>
                 
              </div>
            <span class="text-danger" id="plan_error"
           ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </span>
</template> 
<style>
  .price-checkbox .price-check-inner{
    padding-right: 0 !important;
}
</style>
<script>
import FormTextBoxField from "../../components/element/formTextBoxField.vue";
import FormTextareaField from "../../components/element/textArea.vue";
import formDropdown from "../../components/element/formDropdown.vue";
import formRadio from "../../components/element/formRadio.vue";
import formCheckbox from "../../components/element/formCheckbox.vue";
import formTynymc from "../../components/element/formTynymc.vue";
import Dropzone from "../../components/element/Dropzone.vue";
import Editor from "@tinymce/tinymce-vue";

import Labels from '../../components/element/formLabel.vue';



export default {
  name: 'create-category',
  props: ['course-details','categoryResponseList','subCategoryResponseList','instructorList'],
  components: {
    FormTextBoxField,
    FormTextareaField,
    formDropdown,
    formRadio,
    formCheckbox,
    formTynymc,
    Editor,
    Dropzone,
    Labels,
  },
  data(){
    return{
      couserType:[],
      final_array:[]
    }
  },
  mounted(){
    this.courseType=[{'key':'Free','value':'Free'},{'key':'Basic','value':'Basic'},{'key':'Premium','value':'Premium'}];
    
  },
  
  methods: {
    
  
    fileUploadSuccessEvent(file, response) {
      this.courseDetails.image_name = response;
      document.getElementById("course_course_thumbnail_error").textContent = "";
      
    },
    videoUploadSuccessEvent(file,response){
      this.courseDetails.intro_video = response;
    },
    getCategoryList(selected){
        this.$parent.subCategoryList(selected.value);
        this.courseDetails.category_id = selected.value;
        document.getElementById("course_major_category_error").textContent = "";
    },
    getSubCategory(selected){
     this.courseDetails.category_id = selected.value;
    },
    
    getInstructor(selected){
      this.courseDetails.instructor_id = selected.value;
    },
    getChecked(event){
         var regenerateArray = {};
       if(this.final_array.length !=0){
          this.final_array.map(function (value, key) {
           
              if(value !=event){
               regenerateArray = value;
              }
              
          });
          this.final_array.push(regenerateArray);
       }else{
        this.final_array.push(event);
       }
      
       console.log(this.final_array);
      this.courseDetails.payment_plan = event;
    },
    checkInput: function () {
      
        if (this.courseDetails.title) {
            document.getElementById("course_title_error").textContent = "";
        }
        if (this.courseDetails.description) {
            document.getElementById("course_description_error").textContent = "";
        }
        if (this.courseDetails.price) {
            document.getElementById("price_error").textContent = "";
        }
  
    },
    handleInput: function () {
        

        let keyCode = (event.keyCode ? event.keyCode : event.which);
      
            if ((keyCode < 48 || keyCode > 57) && (keyCode !== 46 || this.courseDetails
            .price.indexOf('.') != -1)) { // 46 is dot
         
                event.preventDefault();
            }

            // restrict to 2 decimal places
            if (this.courseDetails.price!= null && this.courseDetails.price.indexOf(".") > -1 && (this.courseDetails.price.split('.')[1].length > 1)) {
                event.preventDefault();
            }
            document.getElementById("price_error").textContent = "";
        
        // only allow number and one dot
        
    },
  }
}
</script>