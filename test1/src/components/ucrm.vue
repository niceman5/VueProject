<template>
    <div>
        <p>header</p>
        <slot name="header" :kth="kth"></slot>
        <!-- <p>{{ name }} </p> -->
        <p>body</p>
        <slot></slot>
        <!-- <button @click="updateNmae" >Change Name</button> -->
        <p>footer</p>
    </div>
</template>
<script>
export default {
    //props : ['title'],
    // props에 있는 변수는 직접 변경하면 안됨.
    // 변경하려면 부모에게 이벤트를 통해 변경 요청을 하고 부모가 변경하게 해야 할것임
    props : {
        title : {
            type : String,          //data형
            // required: true          //필수여부
            default : 'default title'
        },
        // name : {
        //     type : String,
        //     default : 'default name'
        // }
    },
    data() {
        return {
            name : '개발 테스트 일걸',
            kth : '대한민국',
        }        
    },
    methods: {
        updateNmae() {
            console.log('updateNmae()');
            this.name = '개발 테스트 이름 수정됨!!!!!!';
        }
    },
}
</script>

<style scoped>
    
</style>