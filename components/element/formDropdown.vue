
<template> 
 <select  v-on:change="emitbackthecatalog" >
        <option value="">Select {{selectName}}</option>
        <option v-for="item in options" :value="item.id">{{ item.title}}</option>
    </select>
</template>
<script>

    export default{
        props: ['list','selectName','options'],
        methods:{
            emitbackthecatalog(event){
                var selected = event.target.value;
                this.$emit('onChange',selected);
           
            }
        }
    };
</script>