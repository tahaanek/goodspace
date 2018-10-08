<template lang="html">
<div>
  <h2 class="ui header">ข้อมูลผู้ปกครอง</h2>
  <div class="ui styled fluid accordion">
  <div class="title">
    <i class="dropdown icon"></i>
    ข้อมูลบิดา
  </div>
  <div class="content">
    <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
  </div>
  <div class="title">
    <i class="dropdown icon"></i>
    ข้อมูลมารดา
  </div>
  <div class="content">
    <p>There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.</p>
  </div>
  <div class="title">
    <i class="dropdown icon"></i>
    ข้อมูลผู้ปกครอง
  </div>
  <div class="content">
    <p>Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters.</p>
    <p>A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.</p>
  </div>
</div>
</div>
</template>
<script>
export default {
  mounted() {

  $('.ui.styled.fluid.accordion').accordion();

  }
}
</script>
