<template>
    <input type="checkbox" v-bind:id="idName" v-bind:class="className" v-bind:click="onselected"
        v-on:input="checkboxVal = $event.target.value" />
</template>
<script>
export default {
    props: ['className', 'onselected', 'idName'],
    created() {
        console.log(this.onselected);
    },
    data() {
        return {
            checkboxVal: "",
            selectedId: [],
            tempSelected: []
        }
    },
    methods: {
        
    }
};
</script>
