<template lang="pug">
div(class="eachSection")
    h2(class="ui dividing header") Education information

    //- Row
    div(class="two fields")
        div(class="field")
            label School name
            input(tpye="text")
        div(class="field")
            label Date of Receipt
            datepicker
            //- div(class="ui action input")
                input(type="text")
                button(class="ui icon button")
                    i(class="calendar alternate outline icon")
    
    //- Row
    div(class="two fields")
        div(class="field")
            label Grade
            select(class="ui fluid dropdown")
                option(value="") Please Select
    
    
    
</template>
<script>
import datepicker from 'vuejs-datepicker'
    export default {
     components: {
         datepicker
     }   
    }
</script>
<style scoped>

</style>