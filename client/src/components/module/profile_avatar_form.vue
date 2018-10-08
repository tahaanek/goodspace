<template lang="html">
   <div class="ui basic segment" id="file-drag-drop">
    <form ref="fileform"  class="ui form">
       <span class="drop-files">Drop the files here!</span>
        <a class="ui facebook button" v-on:click="submitFiles()" v-show="(files.length > 0) && (uploadComplete != 100)">Submit</a>
    </form>
    <div v-for="(file, key) in files" v-bind:key="key" class="file-listing">
      <img class="preview" v-bind:ref="'preview'+parseInt( key )"/>
      {{ file.name }}
</div>
<progress max="100" :value.prop="uploadPercentage"></progress>
  </div>        
</template>

<script>
import axios from 'axios';
export default{
    data() {
      return {
      dragAndDropCapable: true,
      files: [],
      uploadPercentage: 0,
      uploadComplete : 0
      }
    },

  methods: {
  /*
  Submits the files to the server
*/
submitFiles(){
  /*
    Initialize the form data
  */
  let fd = new FormData();

  /*
    Iteate over any file sent over appending the files
    to the form data.
  */
  //for( var i = 0; i < this.files.length; i++ ){
    let file = this.files[0];

    fd.append('imgFile', file, file.originalname); // imgFile is used in be and fe , the same name
  //}

  /*
    Make the request to the POST /file-drag-drop URL
  */
  axios.post( 'http://localhost:3000/upload/image', fd)
  .then(function(res){
    this.uploadComplete = 100;
    alert(res.data);
  })
  .catch(function(err){
    console.log(err);
  });
},
   /*
  Determines if the drag and drop functionality is in the
  window
*/
determineDragAndDropCapable(){
  /*
    Create a test element to see if certain events
    are present that let us do drag and drop.
  */
  var div = document.createElement('div');

  /*
    Check to see if the `draggable` event is in the element
    or the `ondragstart` and `ondrop` events are in the element. If
    they are, then we have what we need for dragging and dropping files.

    We also check to see if the window has `FormData` and `FileReader` objects
    present so we can do our AJAX uploading
  */
  return ( ( 'draggable' in div )
          || ( 'ondragstart' in div && 'ondrop' in div ) )
          && 'FormData' in window
          && 'FileReader' in window;
}
  
},
mounted() {


  /*
    Determine if drag and drop functionality is capable in the browser
  */
  this.dragAndDropCapable = this.determineDragAndDropCapable();
  //this.dragAndDropCapable = false;

  /*
    If drag and drop capable, then we continue to bind events to our elements.
  */
  if( this.dragAndDropCapable ){
    /*
      Listen to all of the drag events and bind an event listener to each
      for the fileform.
    */
    ['drag', 'dragstart', 'dragend', 'dragover', 'dragenter', 'dragleave', 'drop'].forEach( function( evt ) {
      /*
        For each event add an event listener that prevents the default action
        (opening the file in the browser) and stop the propagation of the event (so
        no other elements open the file in the browser)
      */
      this.$refs.fileform.addEventListener(evt, function(e){
        e.preventDefault();
        e.stopPropagation();
      }.bind(this), false);
    }.bind(this));

    /*
      Add an event listener for drop to the form
    */
    this.$refs.fileform.addEventListener('drop', function(e){
      /*
        Capture the files from the drop event and add them to our local files
        array.
      */
      for( let i = 0; i < e.dataTransfer.files.length; i++ ){
        this.files.push( e.dataTransfer.files[i] );
      }
    }.bind(this));
  }
}

}
</script>
<style>
 form{
    display: block;
    height: 400px;
    width: 400px;
    background: #ccc;
    margin: auto;
    margin-top: 40px;
    text-align: center;
    line-height: 400px;
      border-radius: 50%;
  }
  div.file-listing{
  width: 400px;
  margin: auto;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

div.file-listing img{
  height: 100px;
}
</style>
