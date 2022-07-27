<template>

  <video width="400" controls>
    <source src="mov_bbb.mp4" >

    
  </video>

</template>

<script>

export default {
  name: 'video-component',
  props: ['log'],
  
  log: {
    type: String,
    require: true

  },
  methods: {
    
  },


}
</script>