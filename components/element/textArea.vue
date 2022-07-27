
<template>
    <textarea  v-bind:class="className" @input="$emit('input', $event.target.value)" v-bind:placeHolder="placeHolder" :value="bindValue" @keyup ="$emit('keyup')"   @keypress="$emit('keypress')" ></textarea>
</template>
<script>

export default {
    name: "text-component",
    props: ['fieldId','FieldType','bindValue','placeHolder','className'],
    emits: ['keypress','keyup'],

    data(){
        return {
            textAreaVal:"",
        }
    },
    
    mounted: function () {
      
     
        if(this.bindValue){
            this.textAreaVal = this.bindValue;
        }
    
    
        
    },
    
}
</script>