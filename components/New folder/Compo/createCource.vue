<template>
  <span>
    <div class="create-role-main">
      <div class="slds-form-element custom-grid">
        <Labels labelName="Course title" className="slds-form-element__label custom-label2" for="text-input-id-46"
                    required="true" />
       
        <div class="slds-form-element__control custom-grid-control">
          <FormTextBoxField 
            v-model="courseDetails.title" fieldId="cpurse_title" placeHolder=""
            className="slds-input custom-grid-input mb-20" @keypress="checkInput()" />
          <span class="text-danger" id="course_title_error" ref="course_title_error"></span>
        </div>
      </div>
    </div>
    <div class="create-role-main">
      <div class="slds-form-element custom-grid">
        <Labels labelName="Course description" className="slds-form-element__label custom-label2" for="text-input-id-46"
                    required="true" />
        
        <div class="slds-form-element__control custom-grid-textarea-main mb-20">
          <editor class="slds-textarea custom-grid-textarea mb-20" placeHolder="Please enter description"
            name="course_description" id="textarea-id-01" api-key="no-api-key" 
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
          <editor class="slds-textarea custom-grid-textarea mb-20" placeHolder="Please enter course requirments"
            name="course_requirements" id="textarea-id-02" api-key="no-api-key"
            v-model="courseDetails.requirement" :init="{
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
        
        <div class="slds-form-element__control custom-grid-control">
          <div class="slds-select_container cus-select-container">
  
            <formDropdown  
              v-model="courseDetails.category_id" class="slds-select custom-grid-input mb-20"
              selectName="Category " :options="categoryResponseList" @onChange="getCategoryList"  :selected="`${courseDetails.category_id}`"/>
           
            <span class="text-danger" id="course_major_category_error" ref="course_major_category_error"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="create-role-main">
      <div class="slds-form-element custom-grid">
        <Labels labelName="Sub category" className="slds-form-element__label custom-label2" for="text-input-id-46"
                     />
        <div class="slds-form-element__control custom-grid-control">
          <div class="slds-select_container cus-select-container">
            <formDropdown
              v-model="courseDetails.sub_category" class="slds-select custom-grid-input mb-20"
              selectName="Sub category " :options="subCategoryResponseList" @onChange="getSubCategory"  :selected="`${courseDetails.sub_category}`"/>
            <span class="text-danger" id="course_sub_category_error" ref="course_sub_category_error"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="create-role-main">
      <div class="slds-form-element custom-grid">
        <Labels labelName="Instructor name " className="slds-form-element__label custom-label2" for="text-input-id-46"
                    />
        
        <div class="slds-form-element__control custom-grid-control">
          <div class="slds-select_container cus-select-container">
            <formDropdown v-model="courseDetails.instructor_id" class="slds-select custom-grid-input mb-20"
              selectName="Instructor name " />
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
         <Dropzone v-bind:fileUploadSuccessEvent="fileUploadSuccessEvent" modelname="Dropzone"
            v-model="courseDetails.course_tuhumbnail"  :folder="`course`"  :type="`image`"  :extension="`.png, .jpeg, .jpg, .gif`"  :existingImage="`${courseDetails.image_name}`"/>
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
          <Labels labelName="Course price" className="slds-form-element__label custom-label2" for="text-input-id-46"
                    required="true" />
          
          <div class="sub-categoty-inner">
            <div class="slds-form-element__control custom-grid-control">
              <FormTextBoxField fieldId="text-input-id-46" placeHolder="" v-model="courseDetails.price"  className="slds-input custom-grid-input " @keypress="handleInput()" />
              <span class="text-danger" id="price_error"
            ref="course_course_video_preview_error"></span>
            </div>
            <div class="price-checkbox">
              <div class="slds-form-element price-check-inner"  v-for="items  in  paymentPlan"  :key="items.id">
                <div class="slds-form-element__control">
                  <div class="slds-checkbox role-check-main">
                    <formCheckbox className="role-check" :id="`${items.id}`" :modelName="`${items.id}`"
                      @onClick="getChecked"/>
                    <label class="slds-checkbox__label" :for="`${items.id}`">
                      <span class="slds-checkbox_faux"></span>
                      <span class="slds-form-element__label">{{items.title}}</span>
                    </label>
                  </div>
                </div>
              </div>
              <span class="text-danger" id="plan_error"
            ref="course_course_video_preview_error"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </span>
</template>
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
  props: ['course-details','categoryResponseList','subCategoryResponseList','paymentPlan'],
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
   
      final_array:[]
    }
  },
  methods: {
    
  
    fileUploadSuccessEvent(file, response) {
      this.courseDetails.image_name = response;
     
    },
    videoUploadSuccessEvent(file, response){
       this.courseDetails.intro_video = response;
    },

    getCategoryList(selected){
      
        this.$parent.subCategoryList(selected.value);
        this.courseDetails.category_id = selected.value;
    },
    getSubCategory(selected){
     this.courseDetails.sub_category = selected.value;
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
      this.courseDetails.payment_plan = event;
    },
    handleInput: function () {
        let keyCode = (event.keyCode ? event.keyCode : event.which);
        
            if ((keyCode < 48 || keyCode > 57) && (keyCode !== 46 || this.courseDetails
            .price.indexOf('.') != -1)) { // 46 is dot
                event.preventDefault();
            }

            if (this.courseDetails.price!= null && this.courseDetails.price.indexOf(".") > -1 && (this.courseDetails.price.split('.')[1].length > 1)) {
                event.preventDefault();
            }
    
    },
    checkInput: function () {
      
      if(this.courseDetails.title){
        document.getElementById("course_title_error").textContent = "";
      }
      if(this.courseDetails.description){
        document.getElementById("course_description_error").textContent = "";
      }
     
     if(this.courseDetails.category_id){
        document.getElementById("course_major_category_error").textContent = "";
      }
      if(this.courseDetails.price){
        document.getElementById("price_error").textContent = "";
      }
      if(this.courseDetails.payment_plan){
        document.getElementById("price_error").textContent = "";
      }
    },
   
  }
}
</script>