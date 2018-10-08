<template lang="pug">
  router-view
</template>

<script>
export default{
  
}
</script>

<style>
  
  /* 
  ----------------------------------------------------------------
  Global Seting
  ----------------------------------------------------------------
  Body
  -------------------------------------------
   */ 
  body {
   
    -webkit-font-smoothing: antialiased;
  }
  /* override .ui.cell.grid by remove margin bottom */ 
  #wrapper {
    margin-bottom: 0;
  }
  
  /* 
  Header
  -------------------------------------------
  */ 
  h1.ui.header {
    font-size: 2.5em;
  }
  /* assign a new font to all sub header */ 
  .ui.header {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
  .ui.header .sub.header {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }
  
  /* 
  Application bar 
  -------------------------------------------
  */ 
  #applicationName {
    font-weight: 600;
  }

   /* 
  Navigation bar 
  -------------------------------------------
  */ 
  #navigationSideBar .content {
    font-family: 'Montserrat', sans-serif;
    color: #007bad;
  }

  /* 
  Registrarion Form 
  -------------------------------------------
  */ 
  #registrationform {
    background-image: linear-gradient( #e5e5e5, #c1c2c4)
  }

  /* Add margin between each component */ 
  .eachSection {
    margin-bottom: 7em;
  }
  /* 
  Footer 
  -------------------------------------------
  */ 
  div#footerContainer {
    margin-top: 0;
  }

  /* 
  Submit button
  -------------------------------------------
  */ 
  #submitButton {
    background: #007bad;
    color: white;
  }

 </style>
