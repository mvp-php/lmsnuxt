<template>
    <div class="content">
        <p class="page-title mb-20">Manage
            Learning Path</p>
        <div class="main-card">
            <div>
                <div class="role-main learn-path-uper-gap">
                    <!-- <button class="mb-18 back-text" onclick="history.back()">
                        <img src="" alt="" class="arrow-left">
                        <span>BACK
                        </span>
                    </button> -->

                    <button class="mb-18 back-text" onclick="history.back()">
                        <ImageComponent :log="require('~/assets/img/svg/arrow-left.svg')" className="classObj" />
                        <nuxt-link to="/learning-path-managment"><span>BACK </span></nuxt-link>
                    </button>
                    <div class="blue-text mb-20">
                        List Learning Path
                    </div>
                    <div class="table-main slds-course-table">
                        <!-- Datatables -->
                        <div class="table-main">

                            <Learningpath :header="header" :tableData="tableData"
                                :no_record_avalible="no_record_avalible" :paginateObj="paginate"
                                :searchkeyword="searchkeyword" :pageCount="pageCount"></Learningpath>
                        </div>
                        <!-- Datatables -->
                    </div>
                </div>
            </div>
        </div>

        <div class="slds-pagination">
            <div class="paginate">
                <ul>
                    <li class="slds-prev"><button class="slds-button slds-prev-box"><img src=""></button></li>
                    <li class="slds-items slds-active">
                        <a href="">1</a>
                    </li>
                    <li class="slds-items">
                        <a href="">2</a>
                    </li>
                    <li class="slds-items">
                        <a href="">3</a>
                    </li>
                    <li class="slds-next"><button class="slds-button slds-next-box"><img src=""></button></li>
                </ul>
            </div>
        </div>

    </div>
</template>
<script>
import successToastrVue from '../../components/element/successToastr.vue';
import errorToastr from '../../components/element/errorToastr.vue';
import ImageComponent from '../../components/element/image.vue';
import Learningpath from '../../components/LearningPath/learningpath.vue';
export default {
    layout: 'frontend',
    name: 'learning-path-managment',

    components: {
        successToastrVue,
        errorToastr,
        ImageComponent,
        Learningpath
    },
    data() {
        return {
            header: [],
            tableData: [],
            no_record_avalible: "",
            paginate: '',
            searchkeyword: '',
            pageCount: '',
        }
    },
    created() {
        this.header = ["", 'Sr No.', 'Learning Path Title', 'Major Category', 'Sub Category', 'Created On', 'Status', 'Action'];
    },
    mounted() {

    },
    methods: {


    }
}
</script>