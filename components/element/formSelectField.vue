<template>
    <select>
        
        <option value="">Select Major Category</option>
        <option v-for="category in categoryList" :key="category.id" :value="category.id"  
       >
            {{ category.title }}</option>
    </select>
</template>
<script>
export default {
    name: "Drop-down-component",
    props: ['categoryList','value'],
    methods: {
        created: function () {
            alert("OK");
            console.log('user data from parent component:')
        },
    }
};
</script>