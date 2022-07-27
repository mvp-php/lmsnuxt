<template>
  <div class="content pt-20">
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
                <li class="current active">
                    <p>Basic Details</p>
                </li>
                <li class="current">
                    <p>Course Details</p>
                </li>
                <li>
                    <p>Course Preview</p>
                </li>
            </ul>
        </div>
      </div>
    </div>
    <div class="course-details-main">
        <h4 class="course-details mb-20">COURSE DETAILS1</h4>
    </div>
    <div class="modual-main">
        <div class="modual-col modual-col-1">
            <div class="modual-box-inner">
                <div class="course-details mb-10">Module Name</div>
                <div class="d-flex mb-10">
                    <div class="slds-form-element pr-10">
                        <div class="slds-form-element__control">
                            <input type="text" id="text-input-id-46 " placeholder="" required=""
                                class="slds-input custom-grid-input" value="Main theory " />
                        </div>
                    </div>
                    <button class="slds-button blue-plusbtn slds-align_absolute-center">
                        <imageComponent :log="require('~/assets/img/svg/white-plus.svg')" alt=""
                                        ></imageComponent>
                        </button>
                </div>
                <div>
                    <ul class="del-content-ul">
                        <li class="active">
                            <div class="del-content-main">
                                <label for="" class="del-label">Introduction</label>
                                <button class="slds-button del-btn">
                                    <imageComponent :log="require('~/assets/img/svg/delete.svg')" alt=""
                                        class="del-module"></imageComponent>
                                    </button>
                            </div>
                        </li>
                        <li>
                            <div class="del-content-main">
                                <label for="" class="del-label">Components</label>
                                <button class="slds-button del-btn">
                                    <imageComponent :log="require('~/assets/img/svg/delete.svg')" alt=""
                                        class="del-module"></imageComponent>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
       
    </div>
  </div>
    
</template>
<script>
import imageComponent from '../../components/element/image.vue';
export default {
  name: "course-detail",
  layout: "frontend",
    components: {
        imageComponent
    }
};
</script>