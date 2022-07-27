<template>
    <button v-bind:type="type" v-bind:class="className" >{{buttonName}}</button>
        
</template>

<script>

    export default{
         props: {
            type: {required: true, type: String},
            dones: {default: false, type: Boolean},
            buttonName: {required: true, type: String},
            className: {required: true, type: String}
        },
      
        data() {
            return {
            isDone : this.done,
            }
        },
    };
</script>
