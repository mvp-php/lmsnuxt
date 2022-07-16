<template>
    <div class="alert-main">
        <div class="cus-alert success-alert ">
            <div class="warning-inner">
                <imageComponent :log="require('~/assets/img/svg/success-alert.png')" alt="" class="warning-img" />
                <div>{{ successMessage }}</div>
            </div>
            <button v-on:click="successToasterHide()" class="slds-button alert-btn">
                <imageComponent :log="require('~/assets/img/svg/success-close.png')" alt=""/>
            </button>
        </div>
    </div>
</template>
<script>
import imageComponent from './image.vue';
export default {
    name: "successToastr",
    props: ['successMessage'],
    components:{
        imageComponent
    },
    data() {
        return {
            //hidessucces: true,
        }
    },
    mounted(){
        if(this.successMessage){
           setTimeout(() =>this.successToasterHide(),3000);
        }
    },
    methods: {
        successToasterHide() {
            this.$parent.successClose();
        }
    }
}
</script>