<template>
    <div class="container">
       <img :src=imgUrl alt="" :width="width" height="150px">
       <div class="title" >
           {{title}}
       </div>
       <div>
          <el-tag size="mini" type="warning">小编推荐</el-tag>
          <el-tag size="mini" type="danger">退货包运费</el-tag>
        </div>
     <div class="sales">
        <span class="price">¥{{price}}</span> <span class="sellNum">已售出{{sellNum}}件</span>  
      </div>

    </div>
</template>
<style>
  .container{
      height: 500px;
      padding: 5px;
      text-align: left;
  }
  .title{
    margin: 7px 0px;
    font-size: 35px;
  }
  .el-tag {
       font-size: 30px;
  }
  .el-tag--mini {
    height: 1.2rem;
    padding: 0 0.1rem;
    line-height: 1.2rem;
}
.sales{
    margin-top: 7px;
}
.price{
    color: red;
    font-size: 1rem;
    font-weight: 600;
}
.sellNum{
    padding-left: 15px;
    color: #b3b3b3;
    font-size: 0.5rem;
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
        title: String,
        price: Number,
        sellNum: Number,
    }
};
</script>
