<template lang="pug">

    div(id="modalVaccine" class="ui modal")
        
        div(class="header") Add Vaccine
        
        div(class="content")
            div(class="ui very padded basic segment")
                form(class="ui form")
                    
                    div(class="field")
                        label Vaccine Name
                        input(type="text" placeholder="Vaccine Name")
                    div(class="two fields")
                        div(class="field")
                            label Appointment
                            div(class="ui action input")
                                    input(type="text")
                                    button(class="ui icon button")
                                        i(class="calendar alternate outline icon")
                        div(class="field")
                            label Date of Received
                            div(class="ui action input")
                                    input(type="text")
                                    button(class="ui icon button")
                                        i(class="calendar alternate outline icon")
                    div(class="field") 
                        label Information
                        input(type="text" placeholder="Additional information")  
        
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