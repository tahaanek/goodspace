<template lang="pug">
div(class="eachSection")
    h2(class="ui dividing header") แฟ้มข้อมูลเด็ก

    //- Row
    div(class="two fields")
        div(class="field")
            label ชื่อ
            input(type="text")

        div(class="field")
            label นามสกุล
            input(type="text")

    //- Row
    div(class="two fields")
        div(class="field")
            label ชื่อเล่น
            input(type="text")

        div(class="field")
            label เลขประจำตัว
            input(type="text")
    
    //- Row
    div(class="two fields")
        div(class="field")
            label เพศ
            select(class="ui fluid search dropdown" name="boss_camp" v-model="regis_child_gender" id="regis_child_gender_id")
                option(value="" selected) select from
                option(v-for="sx in genders" class="ui icon-users icon") {{sx.name}} 
        div(class="field")
            label วันเกิด
            div
            datepicker(type="text" v-model="child_dob" class="calendar alternate outline icon")
                input(type="text")
                button(class="ui icon button")
                i(class="calendar alternate outline icon")
    
    //- Row
    div(class="two fields")
        div(class="field")
            label สัญชาติ
            select(class="ui fluid dropdown" v-model="regis_child_nationality")
               option(value="" selected) ระบุสัญชาติ
               option(v-for="nation in nations" class="ui icon-users icon") {{nation}}

</template>
<script>
import datepicker from 'vuejs-datepicker'
//import natDropdown from './nationality_dropdown.vue'
    export default {
      data() {
          return {
              regis_child_gender: '',
              regis_child_nationality: '',
              child_dob: new Date(),
              genders: [
                  { id:1, name: "ชาย", role: "auto" },
                  { id:2, name: "หญิง", role: "auto" }
                  ],
            nations: [
   "Afghan",
   "Albanian",
   "Algerian",
   "American",
   "Andorran",
   "Angolan",
   "Antiguans",
   "Argentinean",
   "Armenian",
   "Australian",
   "Austrian",
   "Azerbaijani",
   "Bahamian",
   "Bahraini",
   "Bangladeshi",
   "Barbadian",
   "Barbudans",
   "Batswana",
   "Belarusian",
   "Belgian",
   "Belizean",
   "Beninese",
   "Bhutanese",
   "Bolivian",
   "Bosnian",
   "Brazilian",
   "British",
   "Bruneian",
   "Bulgarian",
   "Burkinabe",
   "Burmese",
   "Burundian",
   "Cambodian",
   "Cameroonian",
   "Canadian",
   "Cape Verdean",
   "Central African",
   "Chadian",
   "Chilean",
   "Chinese",
   "Colombian",
   "Comoran",
   "Congolese",
   "Costa Rican",
   "Croatian",
   "Cuban",
   "Cypriot",
   "Czech",
   "Danish",
   "Djibouti",
   "Dominican",
   "Dutch",
   "East Timorese",
   "Ecuadorean",
   "Egyptian",
   "Emirian",
   "Equatorial Guinean",
   "Eritrean",
   "Estonian",
   "Ethiopian",
   "Fijian",
   "Filipino",
   "Finnish",
   "French",
   "Gabonese",
   "Gambian",
   "Georgian",
   "German",
   "Ghanaian",
   "Greek",
   "Grenadian",
   "Guatemalan",
   "Guinea-Bissauan",
   "Guinean",
   "Guyanese",
   "Haitian",
   "Herzegovinian",
   "Honduran",
   "Hungarian",
   "I-Kiribati",
   "Icelander",
   "Indian",
   "Indonesian",
   "Iranian",
   "Iraqi",
   "Irish",
   "Israeli",
   "Italian",
   "Ivorian",
   "Jamaican",
   "Japanese",
   "Jordanian",
   "Kazakhstani",
   "Kenyan",
   "Kittian and Nevisian",
   "Kuwaiti",
   "Kyrgyz",
   "Laotian",
   "Latvian",
   "Lebanese",
   "Liberian",
   "Libyan",
   "Liechtensteiner",
   "Lithuanian",
   "Luxembourger",
   "Macedonian",
   "Malagasy",
   "Malawian",
   "Malaysian",
   "Maldivan",
   "Malian",
   "Maltese",
   "Marshallese",
   "Mauritanian",
   "Mauritian",
   "Mexican",
   "Micronesian",
   "Moldovan",
   "Monacan",
   "Mongolian",
   "Moroccan",
   "Mosotho",
   "Motswana",
   "Mozambican",
   "Namibian",
   "Nauruan",
   "Nepalese",
   "New Zealander",
   "Nicaraguan",
   "Nigerian",
   "Nigerien",
   "North Korean",
   "Northern Irish",
   "Norwegian",
   "Omani",
   "Pakistani",
   "Palauan",
   "Panamanian",
   "Papua New Guinean",
   "Paraguayan",
   "Peruvian",
   "Polish",
   "Portuguese",
   "Qatari",
   "Romanian",
   "Russian",
   "Rwandan",
   "Saint Lucian",
   "Salvadoran",
   "Samoan",
   "San Marinese",
   "Sao Tomean",
   "Saudi",
   "Scottish",
   "Senegalese",
   "Serbian",
   "Seychellois",
   "Sierra Leonean",
   "Singaporean",
   "Slovakian",
   "Slovenian",
   "Solomon Islander",
   "Somali",
   "South African",
   "South Korean",
   "Spanish",
   "Sri Lankan",
   "Sudanese",
   "Surinamer",
   "Swazi",
   "Swedish",
   "Swiss",
   "Syrian",
   "Taiwanese",
   "Tajik",
   "Tanzanian",
   "Thai",
   "Togolese",
   "Tongan",
   "Trinidadian or Tobagonian",
   "Tunisian",
   "Turkish",
   "Tuvaluan",
   "Ugandan",
   "Ukrainian",
   "Uruguayan",
   "Uzbekistani",
   "Venezuelan",
   "Vietnamese",
   "Welsh",
   "Yemenite",
   "Zambian",
   "Zimbabwean"
]
          }
      },
       components: {
         datepicker
       },
       mounted() {
           $('#regis_form_gender_id').dropdown();
       }
    }
</script>
<style scoped>

</style>