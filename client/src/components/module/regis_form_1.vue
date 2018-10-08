<template lang="pug">
div(class="eachSection")
    
    h2(class="ui dividing header") Camp Information
    
    div(class="field")
        label Code
        div(class="two fields")
            div(class="field") 123456789

    div(class="field")
        label Project
        div(class="two fields")
            div(class="field")
                select(class="ui fluid dropdown")
                    option(value="") Please Select

    div(class="field")
        label Camp Name
        div(class="two fields")
            div(class="field")
                select(class="ui fluid dropdown")
                    option(value="") Please Select        
        
    div(class="two fields")
        div(class="field")
            label Department
            select(class="ui fluid dropdown")
                option(value="") Please Select 
        div(class="field")
            label Province
            select(class="ui fluid dropdown")
                option(value="") Please Select 
                            

</template>
<script>
    export default {
        
    }
</script>
<style scoped>

</style>