<template lang="pug">

    div(id="navigationSideBar" class="ui large divided very relaxed list")
        
        router-link(to="/" class="item")
            i(class="home icon")
            div(class="content") Home
        
        router-link(to="/registration" class="item")
            i(class="clipboard icon")
            div(class="content") Registration Form

        router-link(to="/children" class="item")
            i(class="users icon")
            div(class="content") children form
        
        router-link(to="/" class="item")
            i(class="chart pie icon")
            div(class="content") Report
        
        router-link(to="/" class="item")
            i(class="cog icon")
            div(class="content") Setting

    
</template>
<script>
    export default {
        
    }
</script>
<style scoped>

</style>
