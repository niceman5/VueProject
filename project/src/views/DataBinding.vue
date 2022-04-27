<template>
    <div>
        <h1>Hello, {{ title }} </h1>
    </div>
</template>
<script>
export default {
    name :'dataBind',	//컴포넌트 이름    
    data () : {		// html과 자바스크립트 코드에서 사용할 데이터 변수 선언
        return {
            title : 'World'
        };
    }
}
</script>
