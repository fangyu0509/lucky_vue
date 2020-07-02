<template>
    <div class="container">

        <div>
            <div v-if="type === 'main'">
              <wxmain></wxmain>
            </div>
            <div v-else-if="type === 'find'">
              <wxfind></wxfind>
            </div>
            <div v-else-if="type === 'mes'">
              <wxmes></wxmes>
            </div>
            <div v-else>
              <wxmy></wxmy>
            </div>
           
        </div>

        <div class="footer">
            <el-row>
               <el-col :span="6" >
                     <div v-on:click="type = 'main'">
                      <i class="el-icon-picture-outline-round icon-nav"></i>
                      </div>
                      <div>首页</div>
                </el-col>
                <el-col :span="6" >
                     <div v-on:click="type = 'find'">
                      <i class="el-icon-search icon-nav"></i>
                     </div>
                      <div>发现</div>
                </el-col>   
                
                <el-col :span="6"  >
                    <div v-on:click="type = 'mes'">
                      <i class="el-icon-message icon-nav"></i>
                   </div>
                   <div>消息</div>
                </el-col>

                <el-col :span="6" >
                    <div v-on:click="type = 'my'">
                        <i class="el-icon-user icon-nav"></i>
                    </div>
                    <div>我的</div>
                </el-col>
            </el-row>
        </div>


    </div>
</template>
<style>
.container{
    height: auto !important;
    height: 100%; /*IE6不识别min-height*/
    position: relative;
    font-family:"Times New Roman";
    font-size: 11px;
}
.footer{
  position:fixed; 
  left:0px;
  bottom:0px;
  width:100%; 
  height:50px;
  z-index:9999;
  text-align: center;
 
}
.el-row, .el-col{
    height: 100%;
}

.bg-purple {
     background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.grid-content{
    height: 100%;
}
.icon-nav{
     font-size: 30px;
}

</style>
<<script>
    import wxmy from "../wechat/wxmy";
    import wxmain from "../wechat/wxmain";
    import wxmes from "../wechat/wxmes";
    import wxfind from "../wechat/wxfind";
    export default {
        data () {
            return {
                srcHead:"https://portal.microport.com/shwcyl/images/logo.png?r=20191101",
                type:"shouye" 
            }
        },
        components:{
            wxmy,
            wxmain,
            wxmes,
            wxfind
        }
    
    }
</script>
