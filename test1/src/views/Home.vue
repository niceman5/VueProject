<template>
<div>
    <h1>This is Home Page</h1>
    <p> {{ name }} </p>

    <!-- <ucrm title="home title" ></ucrm> -->
    <form action="">
      <!-- <InputField :name="name" @update-name="updateName"></InputField> -->
      <!-- <InputField :name="name" @update-name="name = $event.target.value"></InputField> -->
      <InputField v-model="name"></InputField>
      <br>
      <button>Submit</button>
    </form>
    {{ name }}
</div>  
</template>

<script>
// import ucrm from '@/components/ucrm.vue';
import InputField from '@/components/InputField.vue';

export default {
  // components : {
  //   ucrm
  // },

  components : {
    InputField
  }, 
  data() {
    return {
      name : 'kossie coder'
    }
  },
  // methods: {
  //   updateName(name) {
  //     this.name = name;
  //   }
  // },
  beforeCreate() {
    //data에 접근이 불가능함. 미생성
    console.log('beforeCreate', this.name);
  },
  created() {
    // data에 접근이 가능함....서버에 요청을 보내서 data에 update해줄때 여길 많이 씀. mounted에서도 
    console.log('created', this.name);
  },
  beforeMount() {
    console.log('beforeMount', this.name);
  },
  mounted() {
    // dom에 접근 가능 ...dom을 컨트롤하고 싶으면 여기서 할것
    console.log('mounted', this.name);
    
  },
  beforeUpdate() {
    alert('beforeUpdate');
  },
  updated() {    
    alert('updated');
  },
  beforeDestroy() {
    alert('beforeDestroy');
  },
  destroyed() {
    // 페이지 나갈때 메모리 누수방지를 위해 이벤트 리스러나 해지나 데이터 초기화처리
    alert('destroyed');
  },
}
</script>

// scoped가 있으면 이 템플릿에먄 적용되고 없으면 전체 style이 먹음
<style scoped>
h1 {
  font-size: 20px;
  color: red;
}
</style>