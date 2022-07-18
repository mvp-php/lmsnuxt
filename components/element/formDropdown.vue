<script>

    export default{
        props: ['list','selectedValue',  'value', 'placeHolder', 'className', 'modelname','idName','selectName','selectArr'],
         emits: ['change'],
    };
</script>
<template>
    <select v-bind:class="className" v-bind:placeHolder="placeHolder" v-bind:name="modelname"
         v-bind:id="idName" @change="$emit('change')">
        <option  value="">Select {{selectName}}</option>
        <option v-for="plan in selectArr" :key="plan.id" :value="plan.id">
                                          {{plan.name}}
        </option>
    </select>
</template>


