<template>
     <input type="radio"  v-bind:id="idName" v-bind:class="className"   v-bind:value="value" v-bind:name="modelname" v-bind:checked="checkedVal">
</template>

<script>

    export default{
        props: ['value', 'className', 'modelname','idName','checkedVal','selectArr'],
    };
</script>