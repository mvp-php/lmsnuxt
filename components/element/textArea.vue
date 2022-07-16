
<template>
    <textarea type="text" @input="$emit('input', $event.target.value)" v-bind:class="className"  v-bind:placeHolder="placeHolder" :value="bindValue"    @keypress="$emit('keypress')" ></textarea>
</template>
<script>

export default {
    name: "text-component",
    props: ['fieldId','FieldType','bindValue','placeHolder','className'],
    emits: ['keypress'],
    data(){
        return {
            textAreaVal:"",
        }
    }
    
}
</script>