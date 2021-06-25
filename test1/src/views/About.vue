<template>
  <div class="about">
    <h1>This is an about page</h1>

    <ucrm>
      <!-- <template v-slot:header> 
        slot에 변수를 전달할때....
        -->

      <template #header="{ kth }">
        <div>
          <h1>hello hedaer {{ kth }} </h1>
          <p>hi</p>
        </div>
      </template>

      <!-- <template v-slot:default> #으로 대체 가능함-->
      <template #default>  
        <div>
          <h2>hello body default</h2>
        </div>
      </template>
      가나다라마
    </ucrm>
  </div>
</template>

<script>
import ucrm from '@/components/ucrm.vue';

export default {
  components : {
    ucrm
  }  
}
</script>