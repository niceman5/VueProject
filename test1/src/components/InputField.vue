<template>
    <div>
        <label for="">Name</label>
        <!-- <input 
            type="text"             
            :value = "name"
            style="padding: 30px; border:2px solid green;"
            @input="updateName"
        > -->
         <!-- <input 
            type="text"             
            :value = "name"
            style="padding: 30px; border:2px solid green;"
            @input="$emit('update-name', $event)"
        > -->
        <input 
            type="text"             
            :value = "value"
            style="padding: 30px; border:2px solid green;"
            @input="$emit('input', $event.target.value)"
        >        
    </div>
</template>

<script>
export default {
    // props : {
    //     name: {
    //         type : String,
    //         required : true
    //     }
    // },
    props : {
        value: {
            type : String,
            required : true
        }
    },    
    // methods: {
    //     updateName(e) {
    //         console.log(e.target.value);
    //         this.$emit('update-name', e.target.value);
    //     }
    // },
}
</script>
