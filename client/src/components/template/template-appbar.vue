<template lang="pug">
div 
    //- -----------------
        Application Bar 
        -----------------
    div(class="ui basic segment")
        div(class="ui middle aligned grid")
            
            //- Dynamic Responsive (mobile - Tablet - Desktop)
            //- 1. Logo (2 - 2 - 1) 
            div(class="two wide mobile two wide tablet one wide computer column")
                img(class="ui image" src="assets/images/logo/techbilogo.svg" )
            
            //- 2. Application Name (10 - 8 - 12 wide) 
            div(class="thirteen wide mobile eight wide tablet eleven wide computer column")
                h2(id="applicationName" class="ui header") The Good Space
            
            //- 3. User Status (1 - 6 - 3 wide)
            div(class="one wide mobile six wide tablet four wide computer column")
                div(class="ui two column middle aligned  grid")
                    
                    //- 1. user status (10) 
                    div(class="ten wide right aligned column")
                        img(class="ui middle aligned mini spaced image" src="assets/images/icon/user-01.svg")
                        span Suralert
                    //- 2. logout button (6)      
                    div(class="six wide column")
                        button(class="ui tiny button") LOG OUT
                    
                            
                            
</template>
<script>
    export default {
        
    }
</script>
<style scoped>

</style>
