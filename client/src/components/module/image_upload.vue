<template lang="pug">

div(class="ui basic segment") 
    h1(class="ui header") user profile photo
    div(id="preview" class="ui center floated large image")
        a(class="ui left yellow corner label")
            i(clss="star icon")

        img(
                v-if="previewUrl" 
                :src="previewUrl"
                class="ui medium rounded image"
            )

    input(
        id="avatar" 
        style="display:none" 
        ref="fileInput" 
        type="file" 
        @change="onFileSelected"
        )

    button(
        class="ui secondary button" 
        @click="$refs.fileInput.click()"
     ) upload photo

    button(
            class="ui secondary button" 
            v-show="submitBtn" 
            type="button" 
            @click="onFileSubmit"
    ) submit

    button(
        class="ui button" 
        id="resetBn" 
        @click="onFileReset"
     ) Reset

    strong(
        v-if="uploadMessage"
     ) {{uploadMessage}}
     
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            file: '',
            previewUrl: null,
            fileSelected : null,
            submitBtn : false,
            uploadMessage : '',
            showPreview: false,
            imagePreview: ''
        }
    },
    methods: {
        onFileSelected(event) {
            this.fileSelected = event.target.files[0];
            this.submitBtn = true;
            this.previewUrl = URL.createObjectURL(this.fileSelected);
            console.log(this.fileSelected);
        },
        onFileReset(){
            this.fileSelected = null;
            this.uploadMessage = 'no file selected!';
            this.previewUrl = null;
            var input = $("input#avatar");
            setTimeout(function(){
                input.val(''); // reset inptu type=file msg
            }, 500);

            console.log('reset done!');
        },
    onImagePreview() {
    /*
      Set the local file variable to what the user has selected.
    */
    this.file = this.$refs.fileInput.files[0];

    /*
      Initialize a File Reader object
    */
    let reader  = new FileReader();

    /*
      Add an event listener to the reader that when the file
      has been loaded, we flag the show preview as true and set the
      image to be what was read from the reader.
    */
    reader.addEventListener("load", function () {
      this.showPreview = true;
      this.imagePreview = reader.result;
    }.bind(this), false);

    /*
      Check to see if the file is not empty.
    */
    if( this.file ){
      /*
        Ensure the file is an image file.
      */
      if ( /\.(jpe?g|png|gif)$/i.test( this.file.name ) ) {
        /*
          Fire the readAsDataURL method which will read the file in and
          upon completion fire a 'load' event which we will listen to and
          display the image in the preview.
        */
        reader.readAsDataURL( this.file );
      }
    }

        },
        onFileSubmit() {
            /*
                Initialize the form data
            */
            let fd = new FormData();

            /*
                Iteate over any file sent over appending the files
                to the form data.
            */
            //for( var i = 0; i < this.files.length; i++ ){
                let file = this.fileSelected;
                const max_file_size = 1024*1024*2; //2097152 Bytes = 2 MB
                if(file.type === 'image/jpg' || file.type === 'image/jpeg' || file.type === 'image/png' 
                || file.type === 'image/gif'){
                    if(file.size < max_file_size){
                        fd.append('imgFile', file, file.name); // imgFile is used in be and fe , the same name
                    }else{
                        console.log('file size exceed 2 MB!');
                    
                    }
                }
            //}

            /*
                Make the request to the POST /file-drag-drop URL
            */
            axios.post( 'http://localhost:3000/upload/image', fd, {
                onUploadProgress: uploadEvent => {
                    const loadComplete = Math.round(uploadEvent.loaded / uploadEvent.total) * 100;
                    console.log('complete:' + loadComplete + '%');
                }
            })
            .then(function(res){
                this.uploadMessage = res.data.message;
            })
            .catch(function(err){
                console.log(err);
            });
        }
        // file submit
    },
    mounted() {
        this.onImagePreview();
    }
}
</script>

<style>
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  width: 100%;
  max-width: 400px;
  height: auto
}
</style>