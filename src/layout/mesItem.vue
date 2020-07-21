<template>
    <div class="itemDetai">
        <el-row :gutter="10">
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
                <div class="touxiang"><img :src=imgUrl alt=""></div>
            </el-col>
            <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
                <div class="mesname">{{name}} </div>
                <div class="mescontent">{{content}} </div>
            </el-col>
            <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
                <div class="noyifyTime">{{date}}  </div>
                <div class="mesNotifyNum" v-if="mesNum>0">{{mesNum}}</div>
            </el-col>
        </el-row>
    </div>
</template>
<style>
    .noyifyTime{
        font-size: 25px;
    }
    .mesNotifyNum{
        margin:7px 0px 0px 30px ;
        margin-top: 7px;
        width: 30px;
        height: 30px;
        border-radius: 50px;
        background-color: red;
        font-size: 25px;
        color: seashell;
        font-weight: 900;
    }
  .el-row{
      padding-top: 20px;
  }
  .mescontent{
    text-align: left;
    font-size: 25px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    margin-top: 10px;
  }
  .mesname{
        text-align: left;
        font-size: 30px;
        color: black;
    }
  .touxiang img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        display: inline-block; 
        vertical-align: middle;
  }
  .touxiang{
      width: 90px;
      height: 90px;
      border-radius: 50%;
  }
  .itemDetai{
    height:130px;
    border-bottom: 1px solid #f6f6ff;
    color:#9b9b9b;
  }
</style>
<<script>
   
export default {
     data () {
            return {
               width:document.body.clientWidth/2+"px",
            } 
        },
    // 接受父组件的值
    props: {
        imgUrl: String,
        name: String,
        content: String,
        mesNum: Number,
        date: String
    }
};
</script>
