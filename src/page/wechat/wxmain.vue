<template>
    <div class="container">
       <!-- 查询 -->
        <div class='search'>
            <el-row :gutter="10">
                <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
                  <div class="sign">
                      <img :src="srcHead" alt="">
                  </div>
                </el-col>
                <el-col :xs="21" :sm="21" :md="21" :lg="21" :xl="21">
                    <el-input :placeholder="placeholder"  class="input-with-select">
                        <el-button slot="prepend" icon="el-icon-full-screen"></el-button>
                        <el-button slot="append" icon="el-icon-camera"></el-button>
                        <el-button slot="append">搜索</el-button>
                    </el-input>
                </el-col>
            </el-row>
        </div>
       <!-- 分类 -->
       <div class="tabClass">
           <el-row :gutter="10">
                <el-col :xs="21" :sm="21" :md="21" :lg="21" :xl="21">
                   <ul>
                        <li style="" v-for="(item,i) in tabList">
                        {{item}}
                        </li>
                    </ul>
                </el-col>
                <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
                  <el-button @click="drawer =true" size="small" class="el-icon-s-operation" style="position:fixed;top:48px;right:0px;font-size:15px;border:none"> </el-button>
                </el-col>
            </el-row>
       </div>
       <!-- 轮播 -->
       <div class="polling">
            <el-carousel height="100px">
                <el-carousel-item v-for="item in pollingImg">
                    <img :src="item">
                </el-carousel-item>
            </el-carousel>
       </div>
       <!-- 导航 -->
       <div> </div>
       <!-- 推荐 -->
       <div></div>
       <!-- 我喜欢 -->
       <div> </div>
       <!-- 列表 -->
       <div></div>

       <!-- //侧面抽屉菜单 -->
       <el-drawer
            title="我是标题"
            :visible.sync="drawer"
            :with-header="false">
            <span>我来啦!</span>
        </el-drawer>
    </div>
</template>
<style>
.el-carousel__item img{
    height:100%;
    width: 100%;
}
.el-carousel{
  border-radius: 30px;
}
.tabClass ul li{
   flex-shrink: 0;
   -webkit-flex-shrink: 0;
   box-sizing: border-box;
   width:25%;
   display: inline-block;
   width: 100px;
   font-size: 35px; 
   font-weight: 500;
}
.tabClass ul{
    display:flex;
    padding-inline-start: 0px;
}
.tabClass{
    overflow:scroll;
   
}
.sign img{
    height: 65px;
    border-radius: 50%;
}
.search{
    text-align: center;
    line-height: 80px;
}
.container{
    margin-top: -55px;
    position: relative;
    font-family:"Times New Roman";
    font-size: 40px;
    
}
.el-input__inner{
    font-size: 30px;
    height: 1.7rem;
    line-height: 1.7rem;
    border-radius:1.5rem;
    border-top: 3px solid #e8662a;
    border-bottom: 3px solid #e8662a;
}
.el-input-group__prepend{
    font-size: 30px;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    border-top-right-radius: 0rem;
    border-bottom-right-radius: 0rem;
    border-top: 3px solid #e8662a;
    border-bottom: 3px solid #e8662a;
    border-left: 3px solid #e8662a;
}
.el-input-group__append{
    font-size: 30px;
    border-top-left-radius: 0rem;
    border-bottom-left-radius: 0rem;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius:1.5rem;
    border-top: 3px solid #e8662a;
    border-bottom: 3px solid #e8662a;
    border-right: 3px solid #e8662a;
}
.container{
    height: auto !important;
    height: 100%; /*IE6不识别min-height*/
    position: relative;
    font-family:"Times New Roman";
    font-size: 14px;
}
</style>
<<script>
    export default {
        data () {
            return {
                srcHead:"https://wwc.alicdn.com/avatar/getAvatar.do?userNick=&width=50&height=50&type=sns&_input_charset=UTF-8",
                placeholder:"",
                placeholderIndex:0,
                timer: '',
                tabList:["首页","女装","洗护","美妆","医药","食品","运动","数码","进口","饰品","鞋靴","男装","手机","母婴","箱包","百货","内衣","电器","车品","企业"],
                pollingImg:["https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg",
                            "https://img.alicdn.com/tps/i4/TB1WSccN7L0gK0jSZFtSutQCXXa.jpg_q90_.webp",
                            "https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg",
                            "https://aecpm.alicdn.com/simba/img/TB183NQapLM8KJjSZFBSutJHVXa.jpg"]
            }
        },
        mounted() {
             this.timer = setTimeout(this.changePlaceholder, 10);
        },
        methods: {
            changePlaceholder() {
                var arra = ["衣服","鞋子","电脑","零食","随便看看","化妆品"]
                if(this.placeholderIndex<6){
                    this.placeholder=arra[this.placeholderIndex];
                    this.placeholderIndex++;
                }else{
                    this.placeholderIndex=0;
                }
                  
            }
        },
        beforeDestroy() {
            clearTimeout(this.timer);
        }
    }
</script>
