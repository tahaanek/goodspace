<template lang="pug">
    Template
        div(class="ui grid")
            div(class="column")
                div(class="ui basic segment") 
                    
        div(class="ui padded grid")
            div(class="column")
                div(class="ui segment") 
                    avatar

        div(class="ui padded grid")
            div(class="column")
                div(class="ui very padded segment")
                    //- Main form (required single "DIV" of class "ui form")   
                    form(class="ui form")             
                        Form_2
                        Form_3
                        Form_4
                        Form_6
                        div(class="ui divider")
                        div(class="ui center aligned basic segment")
                            button(id="submitButton" class="ui big button") Submit
                
            
</template>
<script>

    // ------------------------------------------------------------
    // Registration Form Components
    // ------------------------------------------------------------
    // * This File is Parent class 'ui form'

    // * Each section of Form is a single component
    // * It's able to add or remove 

    // Child Components ( Each section of form )
    import Form_1 from './regis_form_1.vue';
    import Form_2 from './regis_form_2.vue';
    import Form_3 from './regis_form_3.vue';
    import Form_4 from './regis_form_4.vue';
    import Form_6 from './regis_form_6.vue';
    import Form_error from './regis_form_error.vue';
    import avatar from './image_upload.vue';
    // Main Template
    import Template from '../template/template.vue';
    export default {
        components: {
            Template,
            //Form_1,
            avatar,
            Form_2,
            Form_3,
            Form_4,
            Form_6,
            Form_error
        },
        mounted(){
            
        }
    }

    $('.ui.dropdown').dropdown();
</script>
<style scoped>

</style> 