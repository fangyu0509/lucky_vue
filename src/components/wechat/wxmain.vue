<template>
    <div class="container">

        main

    </div>
</template>
<style>
.container{
    height: auto !important;
    height: 100%; /*IE6不识别min-height*/
    position: relative;
    font-family:"Times New Roman";
    font-size: 14px;
}
</style>
<<script>
    import maCreate from "../create";
    export default {
        data () {
            return {
                srcHead:"https://portal.microport.com/shwcyl/images/logo.png?r=20191101"
            }
        },
        components:{
            maCreate
        }
    
    }
</script>
