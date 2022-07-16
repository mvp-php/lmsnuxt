<script>

    export default{
        props: ['fieldId','FieldType','bindValue','placeHolder','className','modelname','password','searchKeyup','min'],
        emits: ['change'],
       
    };
</script>
<template>
    <input type="file"  v-bind:class="className" v-bind:name="modelname" @change="$emit('change')"/>
        
</template>


