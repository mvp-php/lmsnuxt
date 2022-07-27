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
        <h4 class="course-details mb-20">COURSE DETAILS</h4>
    </div>
    <div class="course-detail-boxmain">
        <div class="slds-grid slds-wrap slds-gutters">
            <div class="slds-col slds-size_6-of-12">
                <nuxt-link :to="`/course-module/${this.$route.params.id}`">
                    <div class="course-detail-box">
                        <div class="text-center">
                            <div class="box-img slds-align_absolute-center mb-10">
                                <imageComponent :log="require('~/assets/img/svg/inbox.svg')" alt="box-img1"  :className="classObj" />
                              </div>
                            <div class="box-title mb-10">Add Modules</div>
                            <p class="box-para">Make the entire course structure by adding modules and chapters
                                in
                                it.<br>
                                These will be accessed by the student in their journey to learn the topic.</p>
                        </div>
                    </div>
                </nuxt-link>
                
            </div>
            <div class="slds-col slds-size_6-of-12">
                <a href="">
                    <div class="course-detail-box">
                        <div class="text-center">
                            <div class="box-img slds-align_absolute-center mb-10">
                                <imageComponent :log="require('~/assets/img/svg/event.svg')" alt="box-img2"  :className="classObj" />
         
                            </div>
                            <div class="box-title mb-10">Add Plan</div>
                            <p class="box-para">This plan is all about the sequence of learning. This plan tells
                                the student about
                                how they are going to learn and what they need to know before unlocking further.
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
  </div>
    
</template>
<script>
import imageComponent from '../../../components/element/image.vue';
export default {
  name: "course-detail",
  layout: "frontend",
    components: {
        imageComponent
    },
    data(){
        return{
            classObj:'cd-img'
        }
    }
};
</script>