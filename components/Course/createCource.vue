<template>
   <span>
        <div class="create-role-main">
            <div class="slds-form-element custom-grid">
              <label
                class="slds-form-element__label custom-label2"
                for="text-input-id-46"
              >
                Course title <span class="require-danger">*</span></label
              >
              <div class="slds-form-element__control custom-grid-control">
                <FormTextBoxField
                  @blur="(e) => (courseDetails.course_title = e.target.value)"
                  v-model="courseDetails.course_title"
                  fieldId="cpurse_title"
                  placeHolder=""
                  className="slds-input custom-grid-input mb-20"
                />
                <span
                  class="text-danger"
                  id="course_title_error"
                  ref="course_title_error"
                ></span>
              </div>
            </div>
        </div>
        <div class="create-role-main">
            <div class="slds-form-element custom-grid">
              <label
                class="slds-form-element__label custom-label2"
                for="textarea-id-01"
                >Course description
                <span class="require-danger">*</span>
              </label>
              <div
                class="slds-form-element__control custom-grid-textarea-main mb-20"
              >
                <editor
                  class="slds-textarea custom-grid-textarea mb-20"
                  placeHolder="Please enter description"
                  name="course_description"
                  id="textarea-id-01"
                  api-key="no-api-key"
                  v-model="courseDetails.course_description"
                  :init="{
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
                  }"
                />
                <span
                  class="text-danger"
                  id="course_description_error"
                  ref="course_description_error"
                ></span>
              </div>
            </div>
        </div>
        <div class="create-role-main">
            <div class="slds-form-element custom-grid">
              <label
                class="slds-form-element__label custom-label2"
                for="textarea-id-01"
                >Course requirements <span class="require-danger">*</span>
              </label>
              <div
                class="slds-form-element__control custom-grid-textarea-main mb-20"
              >
                <editor
                  class="slds-textarea custom-grid-textarea mb-20"
                  placeHolder="Please enter course requirments"
                  name="course_requirements"
                  id="textarea-id-02"
                  api-key="no-api-key"
                  v-model="courseDetails.course_requirements"
                  :init="{
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
                  }"
                />
                <span
                  class="text-danger"
                  id="course_course_requirements_error"
                  ref="course_course_requirements_error"
                ></span>
              </div>
            </div>
        </div>
        <div class="create-role-main">
            <div class="slds-form-element custom-grid">
              <label
                class="slds-form-element__label custom-label2"
                for="text-input-id-46"
              >
                Major category <span class="require-danger">*</span></label
              >
              <div class="slds-form-element__control custom-grid-control">
                <div class="slds-select_container cus-select-container">
                   <select
                    @blur="
                      (e) => (courseDetails.major_category = e.target.value)
                    "
                    v-model="courseDetails.major_category"
                    class="slds-select custom-grid-input mb-20"
                    id="select-01"
                  >
                    <option value="">Select Major category</option>
                    <option
                      v-for="category in selectArray"
                      :key="category.id"
                      :value="category.id"
                    >
                      {{ category.name }}
                    </option>
                  </select>
                  <span
                    class="text-danger"
                    id="course_major_category_error"
                    ref="course_major_category_error"
                  ></span>
                </div>
              </div>
            </div>
        </div>
        <div class="create-role-main">
            <div class="slds-form-element custom-grid">
              <label
                class="slds-form-element__label custom-label2"
                for="text-input-id-46"
              >
                Sub category <span class="require-danger">*</span></label
              >
              <div class="slds-form-element__control custom-grid-control">
                <div class="slds-select_container cus-select-container">
                  <formDropdown
                    @blur="(e) => (courseDetails.sub_category = e.target.value)"
                    v-model="courseDetails.sub_category"
                    className="slds-select custom-grid-input mb-20"
                    selectName="Sub category "
                  />
                  <span
                    class="text-danger"
                    id="course_sub_category_error"
                    ref="course_sub_category_error"
                  ></span>
                </div>
              </div>
            </div>
        </div>
        <div class="create-role-main">
            <div class="slds-form-element custom-grid">
              <label
                class="slds-form-element__label custom-label2"
                for="select-01"
                >Instructor name <span class="require-danger">*</span></label
              >
              <div class="slds-form-element__control custom-grid-control">
                <div class="slds-select_container cus-select-container">
                  <formDropdown
                    @blur="
                      (e) => (courseDetails.instructor_name = e.target.value)
                    "
                    v-model="courseDetails.instructor_name"
                    className="slds-select custom-grid-input mb-20"
                    selectName="Instructor name "
                  />
                  <span
                    class="text-danger"
                    id="course_instructor_name_error"
                    ref="course_instructor_name_error"
                  ></span>
                </div>
              </div>
            </div>
        </div>
        <div class="create-role-main">
             <div class="slds-form-element custom-grid mb-20">
              <label
                class="slds-form-element__label custom-label2"
                for="select-01"
                >Course thumbnail <span class="require-danger">*</span></label
              >
              <div class="slds-form-element__control custom-grid-control">
                <!-- <FormTextBoxField @blur="e => courseDetails.course_tuhumbnail = e.target.value" v-model="courseDetails.course_tuhumbnail" type="file"  fieldId="cpurse_title"
                                            placeHolder="" className="slds-input custom-grid-input mb-20" /> -->
                <Dropzone
                  v-bind:fileUploadSuccessEvent="fileUploadSuccessEvent"
                  modelname="Dropzone"
                  v-model="courseDetails.course_tuhumbnail"
                />
                <span
                  class="text-danger"
                  id="course_course_thumbnail_error"
                  ref="course_course_thumbnail_error"
                ></span>
              </div>
            </div>
        </div>
        <div class="create-role-main">
              <div class="slds-form-element custom-grid mb-20">
              <label
                class="slds-form-element__label custom-label2"
                for="select-01"
                >Course video preview
                <span class="require-danger">*</span></label
              >
              <div class="slds-form-element__control custom-grid-control">
                <!-- <FormTextBoxField @blur="e => courseDetails.course_video = e.target.value" v-model="courseDetails.course_video" type="file"  fieldId="cpurse_title" placeHolder="" className="slds-input custom-grid-input mb-20" /> -->
                <Dropzone
                  v-bind:fileUploadSuccessEvent="fileUploadSuccessEvent"
                  modelname="Dropzone"
                  v-model="courseDetails.course_video"
                />
                <span
                  class="text-danger"
                  id="course_course_video_preview_error"
                  ref="course_course_video_preview_error"
                ></span>
              </div>
            </div>
        </div>
        <div class="create-role-main">
            <div class="price-main mb-40">
              <div class="slds-form-element cus-price-main-inner">
                <label
                  class="slds-form-element__label custom-label2"
                  for="text-input-id-46"
                >
                  Course price <span class="require-danger">*</span></label
                >
                <div class="sub-categoty-inner">
                  <div class="slds-form-element__control custom-grid-control">
                    <FormTextBoxField
                      fieldId="text-input-id-46"
                      placeHolder=""
                      className="slds-input custom-grid-input "
                    />
                  </div>
                  <div class="price-checkbox">
                    <div class="slds-form-element price-check-inner">
                      <div class="slds-form-element__control">
                        <div class="slds-checkbox role-check-main">
                          <formCheckbox
                            className="role-check"
                            checkboxName="options"
                            idName="free"
                            checkboxVal="checkbox-unique-id-1"
                            v-model="courseDetails.course_types"
                            @click="getChecked()"
                          />
                          <label class="slds-checkbox__label" for="free">
                            <span class="slds-checkbox_faux"></span>
                            <span class="slds-form-element__label">Free</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="slds-form-element price-check-inner">
                      <div class="slds-form-element__control">
                        <div class="slds-checkbox role-check-main">
                          <formCheckbox
                            className="role-check"
                            checkboxName="options"
                            idName="Basic"
                            checkboxVal="checkbox-unique-id-1"
                            v-model="courseDetails.course_types"
                            @click="getChecked()"
                          />
                          <label class="slds-checkbox__label" for="Basic">
                            <span class="slds-checkbox_faux"></span>
                            <span class="slds-form-element__label">Basic</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="slds-form-element price-check-inner">
                      <div class="slds-form-element__control">
                        <div class="slds-checkbox role-check-main">
                          <formCheckbox
                            className="role-check"
                            checkboxName="options"
                            idName="Premium"
                            checkboxVal="checkbox-unique-id-1"
                            v-model="courseDetails.course_types"
                            @click="getChecked()"
                          />
                          <label class="slds-checkbox__label" for="Premium">
                            <span class="slds-checkbox_faux"></span>
                            <span class="slds-form-element__label"
                              >Premium</span
                            >
                          </label>
                        </div>
                      </div>
                    </div>
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
export default {
    name: 'role-list',
    props:[],
    components: {
    CreateCource,
    FormTextBoxField,
    FormTextareaField,
    formDropdown,
    formRadio,
    formCheckbox,
    formTynymc,
    Editor,
    Dropzone,
    
  },
    
}
</script>