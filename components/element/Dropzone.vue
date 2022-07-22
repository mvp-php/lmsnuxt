<template>
    <dropzone id="foo" ref="el" :options="options" :destroyDropzone="true" @vdropzone-success="fileUploadSuccessEvent"
        v-bind:dropImage="dropImage">
        <!-- <div class="dropzone-custom-content">
            <h3 class="dropzone-custom-title">Drag and drop to upload content!</h3>
            <div class="subtitle">...or click to select a file from your computer</div>
        </div> -->
    </dropzone>
</template>
<style>
.dropzone .dz-preview .dz-image img {
    max-width: 200px !important;
}
</style>
<script>
import Dropzone from 'nuxt-dropzone'
import 'nuxt-dropzone/dropzone.css'
export default {
    props: ['fileUploadSuccessEvent', 'existingImage', 'dropImage'],
    components: {
        Dropzone
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
                headers: { "My-Awesome-Header": "header value" }
            },
            dataV: this.data,
            loading: true,
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
    mounted() {
        const instance = this.$refs.el.dropzone
        setTimeout(() =>
            this.dropzonePrivew(),
            1000);
    },
    methods: {
        dropzonePrivew() {

            if (this.$options.propsData.dropImage != 'undefined' && this.$options.propsData.dropImage != null) {

                const instance = this.$refs.el.dropzone;
                var mockFile = { name: this.$options.propsData.dropImage, size: 12345 };
                instance.options.addedfile.call(instance, mockFile);
                instance.options.thumbnail.call(instance, mockFile, this.$options.propsData.dropImage);
            }
        }
        // fileUploadSuccessEvent(file, response) {
        //     console.log(response, "response");
        // }
        //     sendingEvent(file, xhr, formData) {
        //         console.log(file)
        //         formData.append('paramName', 'some value or other');
        //     },
        //     async submit() {
        //         DropZoneService.testDropzone(this.form).then((result) => {
        //             console.log("Result", result);
        //         }).catch(error => {
        //         })
        //     },
        //     start() {
        //         this.loading = true
        //     },
        //     finish() {
        //       this.loading = false
        //     },
        //     onError(e) {
        //         console.log(e, "kjuuhhhh");
        //     },
    }
}
</script>