<template>
    <div class="slds-modal__content slds-p-around_medium modal-content-group-view" id="modal-content-id-1">
        <div class="modal-manage-group-main">
            <div class="group-row-main">
                <div class="group-col1">
                    <div class="course-row-manage">
                        <div class="course-col1">
                            <div class="course-title-main">
                                <p class="mb-0">Learning Path title</p>
                            </div>
                        </div>
                        <div class="course-col2">
                            <div class="course-title-desc">
                                <p class="mb-0"> {{ viewModelData.title }} </p>
                            </div>
                        </div>
                    </div>
                    <div class="course-row-manage">
                        <div class="course-col1">
                            <div class="course-title-main">
                                <p class="mb-0">Learning Path description</p>
                            </div>
                        </div>
                        <div class="course-col2">
                            <div class="course-title-desc">
                                <p class="mb-0">{{ viewModelData.description }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="course-row-manage">
                        <div class="course-col1">
                            <div class="course-title-main">
                                <p class="mb-0">Learning Path Requirements</p>
                            </div>
                        </div>
                        <div class="course-col2">
                            <div class="course-title-desc">
                                <p class="mb-0">{{ viewModelData.requirement }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="course-row-manage">
                        <div class="course-col1">
                            <div class="course-title-main">
                                <p class="mb-0">Major Category</p>
                            </div>
                        </div>
                        <div class="course-col2">
                            <div class="course-title-desc">
                                <p class="mb-0" v-if="viewModelData.entity_sub_category_relation">{{
                                        viewModelData.entity_sub_category_relation.course_sub_categoryrelation[0].category_relation.title
                                }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="course-row-manage">
                        <div class="course-col1">
                            <div class="course-title-main">
                                <p class="mb-0">Sub Category</p>
                            </div>
                        </div>
                        <div class="course-col2">
                            <div class="course-title-desc">
                                <p class="mb-0" v-if="viewModelData.entity_sub_category_relation">{{
                                        viewModelData.entity_sub_category_relation.course_sub_categoryrelation[0].title
                                }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="course-row-manage">
                        <div class="course-col1">
                            <div class="course-title-main">
                                <p class="mb-0">Instructor Name</p>
                            </div>
                        </div>
                        <div class="course-col2">
                            <div class="course-title-desc">
                                <p class="mb-0"></p>
                            </div>
                        </div>
                    </div>
                    <div class="course-row-manage">
                        <div class="course-col1">
                            <div class="course-title-main">
                                <p class="mb-0">Cource Price</p>
                            </div>
                        </div>
                        <div class="course-col2">
                            <div class="course-title-desc">
                                <p class="mb-0">{{ viewModelData.price }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="course-row-manage">
                        <div class="course-col1">
                            <div class="course-title-main">
                                <p class="mb-0">Enable Certification</p>
                            </div>
                        </div>
                        <div class="course-col2">
                            <div class="course-title-desc">
                                <p class="mb-0"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="group-col2">
                    <div class="img-section-manage mb-16px">
                        <div class="img-tag-thumnails">
                            <span v-if="viewModelData.image_name">
                                <ImageComponent :log='`${viewModelData.image_name}`' />
                            </span>
                            <span v-else>
                                <ImageComponent :log='require(`~/assets/img/img-manage.png`)' />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ImageComponent from '../element/image.vue';
export default {
    props: ['viewModelData'],
    components: {
        ImageComponent
    },
}
</script>