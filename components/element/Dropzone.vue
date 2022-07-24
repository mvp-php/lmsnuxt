<template>
    <dropzone id="foo" ref="el" :options="options" :destroyDropzone="true" @vdropzone-success="fileUploadSuccessEvent">
     
    </dropzone>
</template>
<style>
.dropzone .dz-preview .dz-image img{
    max-width: 200px !important;
}
</style>
<script>
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'
export default {
    props: ['fileUploadSuccessEvent','existingImage'],
    components: {
        Dropzone
    },
    mounted: function () {
       setTimeout(() =>this.dropzoeFetch(), 2000);
    },
   
    data() {
        return {
            options: {
                url: process.env.baseUrl + "/dropzone-image-upload",
                thumbnailWidth: 200,
                paramName: "image",
                acceptedFiles: ".png, .jpeg, .jpg, .gif",
                maxFilesize: 0.5,
                addRemoveLinks: true,
                uploadMultiple: false,
                clickable: true,
                maxFiles: 1,
                parallelUploads: 5,
                headers: { "My-Awesome-Header": "header value"}
            },
            
            loading: {
                color: 'blue',
                continuous: true,
                height: '5px'
            },
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    },
   
   methods:{
    dropzoeFetch(){
        if(this.existingImage){
            console.log(this.existingImage)
                if(this.existingImage !=null){
                    const instance = this.$refs.el.dropzone;
            
                    var mockFile = { name: this.existingImage, width: "100" };
                    instance.options.addedfile.call(instance, mockFile);
                    instance.options.thumbnail.call(instance, mockFile, this.existingImage);
                }
                
            }
    }
     
   }

}
</script>