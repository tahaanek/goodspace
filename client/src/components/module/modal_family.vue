<template lang="pug">

    div(id="modalFamily" class="ui modal")
        div(class="header") Add Family
        
        div(class="content")
            div(class="ui very padded basic segment")
                
                form(class="ui form")
                    
                    div(class="field")
                        label First Name
                        input(type="text" placeholder="First Name")
                    div(class="field")
                        label Last Name
                        input(type="text" placeholder="Last Name")
                    
                    
        div(class="actions")  
            div(class="ui deny button") Cancel
            div(id="submitButton" class="ui button") Add 


    
</template>
<script>
    export default {

    }
</script>
<style scoped>

</style>