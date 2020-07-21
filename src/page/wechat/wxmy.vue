<template>
    <div>
        <div>
            <el-row>
                <el-col :span="5">
                    <div class="userAvatar">
                        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                    </div>
                </el-col>
                <el-col :span="11" >
                    <div class="userName">
                        <el-link disabled style="font-size:18px">crystal</el-link>
                        <tr></tr>
                        <el-button size="minis" round>更新资料</el-button>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="userMoney">
                        <el-button size="mini" round icon="el-icon-coin">拼单返现</el-button>
                    </div>
                </el-col>
            </el-row>
             <div class="userVIP" style="margin-top:15px">
                <div class = "userVIP-detail">
                    <el-row>
                        <el-col :span="12">
                            <span style="float:left;padding-left:6px"><font style="font-size:14px">省钱月卡</font></span>
                        </el-col>
                        <el-col :span="12">
                            <span style="float:right;padding-right:10px;">
                                <el-button size="mini" round style="padding: 4px 4px;font-size:14px" type="danger">领4张五元无门槛<i class="el-icon-arrow-right"></i></el-button>
                                
                            </span>
                        </el-col>
                    </el-row>
                    
                </div>
            </div> 

           <div style="clear:both;height:10px"></div>

            <div class="myOrder">
                 <div class="myOrder—main">
                     <el-row>
                        <el-col :span="12">
                            <span style="float:left;padding-left:20px;font-size:17px">
                                我的订单
                            </span>
                        </el-col>
                        <el-col :span="12">
                            <span style="float:right;padding-right:10px">
                            <el-link type="info" style="font-size:12px">查看全部</el-link>
                            <i class="el-icon-arrow-right"></i>
                            </span>
                        </el-col>
                    </el-row>
                 </div>
                 <div style="clear:both;height:10px"></div>
                 <div class="myOrder—detail">
                     <el-row>
                        <el-col :span="5">
                            <div >
                               <i class="el-icon-bank-card"></i>  
                            </div>
                            <div class="myOrder—detail-title">待付款</div>
                        </el-col>
                        <el-col :span="5">
                            <div > 
                                <i class="el-icon-connection"></i>
                            </div>
                            <div class="myOrder—detail-title">待分享</div>
                        </el-col>
                        <el-col :span="5">
                            <div >
                               <i class="el-icon-time"></i>  
                            </div>
                            <div class="myOrder—detail-title">待发货</div>
                        </el-col>
                        <el-col :span="5">
                            <div >
                               <i class="el-icon-truck"></i>  
                            </div>
                            <div class="myOrder—detail-title">待收获</div>
                        </el-col>
                        <el-col :span="4">
                            <div >
                               <i class="el-icon-chat-dot-round"></i>  
                            </div>
                            <div class="myOrder—detail-title">待评价</div>
                        </el-col>
                    </el-row>
                 </div>
            </div>
        </div>
        <div class="space"></div>
        <div class="favourable myOrder—detail  ">
                     <el-row>
                        <el-col :span="5">
                            <div >
                               <i class="el-icon-s-ticket"></i>  
                            </div>
                            <div class="myOrder—detail-title">优惠券</div>
                        </el-col>
                        <el-col :span="5">
                            <div > 
                                <i class="el-icon-s-goods"></i>
                            </div>
                            <div class="myOrder—detail-title">商品收藏</div>
                        </el-col>
                        <el-col :span="5">
                            <div >
                               <i class="el-icon-video-camera-solid"></i>  
                            </div>
                            <div class="myOrder—detail-title">历史浏览</div>
                        </el-col>
                        <el-col :span="5">
                            <div >
                               <i class="el-icon-s-release"></i>  
                            </div>
                            <div class="myOrder—detail-title">退款售后</div>
                        </el-col>
                        <el-col :span="4">
                            <div >
                               <i class="el-icon-s-comment"></i>  
                            </div>
                            <div class="myOrder—detail-title">我的评价</div>
                        </el-col>
                    </el-row>
        </div>
        <div class="space"></div>
        <div class="active myOrder—detail">
                     <el-row>
                        <el-col :span="5">
                            <div >
                               <i class="el-icon-video-camera"></i>  
                            </div>
                            <div class="myOrder—detail-title">看视频赚钱</div>
                        </el-col>
                        <el-col :span="5">
                            <div > 
                                <i class="el-icon-grape"></i>
                            </div>
                            <div class="myOrder—detail-title">多多果园</div>
                        </el-col>
                        <el-col :span="5">
                            <div >
                               <i class="el-icon-coin"></i>  
                            </div>
                            <div class="myOrder—detail-title">领10元</div>
                        </el-col>
                        <el-col :span="5">
                            <div >
                               <i class="el-icon-price-tag"></i>  
                            </div>
                            <div class="myOrder—detail-title">红包补贴</div>
                        </el-col>
                        <el-col :span="4">
                            <div >
                               <i class="el-icon-location-information"></i>  
                            </div>
                            <div class="myOrder—detail-title">收货地址</div>
                        </el-col>
                    </el-row>
                    
        </div>
       <div class="active myOrder—detail" style="margin-top:-10px">
            <el-row>
                <el-col :span="5">
                    <div >
                        <i class="el-icon-tickets"></i>  
                    </div>
                    <div class="myOrder—detail-title">火车票</div>
                </el-col>
                <el-col :span="5">
                    <div > 
                        <i class="el-icon-service"></i>
                    </div>
                    <div class="myOrder—detail-title">官方客服</div>
                </el-col>
                <el-col :span="5">
                    <div >
                        <i class="el-icon-setting"></i>  
                    </div>
                    <div class="myOrder—detail-title">设置</div>
                </el-col>
            </el-row>
       </div>
       <div class="space"></div>
       <!-- 精选推荐 -->
       <div class="recommend" :style="obj">
          <div>
              <el-button type="text" icon="el-icon-star-on" disabled style="font-size:15px" >精选推荐</el-button>
          </div>
          <div>
                <el-row :gutter="10">
                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12"  v-for="(item,i) in list" v-bind:key="item.id">
                        <div class="grid-content bg-purple" >
                            <display :imgUrl="item.imgUrl" :title="item.title" :price="item.price" :sellNum="item.sellNum"></display>
                        </div>
                    </el-col>
                </el-row>
              
          </div>
       </div>
       


    </div>
</template>
<style>
.recommend{
    font-size: 22px;
}

.active{
    margin-top:20px;
    height: 90px;
}
.myOrder—detail-title{
    font-size: 25px;
}
.active i{
   color:  #D22B26;
}
.favourable{
    height: 50px;
    margin-top: 20px;
}
.favourable i{
  color: #D22B26;
}
.favourable div{
  color: #a2a2a2;
}
.space{
    content: "";   
    display: block;   
    background-color: #f1f1f1;
    height: 15px;
}
.myOrder—detail{
    height: 150px;
}
.myOrder—main{
    height: 50px;
    text-align: center;
    line-height: 50px;
}
 *{
     margin: 0px;
     padding: 0px;
 }
.el-avatar{
    height: 3.25rem;
    width: 3.25rem;
}
 .el-header{
     padding: 0px;
 }
 .userAvatar{
     text-align: center;
     padding: 10px;
 }
 .userName{
     text-align: left;
    padding-top: 15px;
 }
.userMoney{
    line-height: 70px;
    text-align: center;
}
.el-button--mini, .el-button--mini.is-round {
    padding: 4px 7px;
     font-size: 22px;
}
.el-button--minis, .el-button--minis.is-round {
    background-color: pink;
    padding: 2px 6px;
    font-size: 11px;
    color: #FFF;
}
.bg-purple-dark {
    background: #99a9bf;
  }
.userVIP{
    height:120px;
    text-align: center;
    
}
.userVIP-detail{
    width:90%;
    background-color:#fcedec;
    height:100%;
    margin:0 auto;
    border-radius: 15px;
    line-height: 120px;
}
.myOrder—detail div i{
    font-size: 40px;
}
</style>
<<script>
    import display from "../../layout/display.vue";
    export default {
        data () {
            return {
                srcHead:"https://portal.microport.com/shwcyl/images/logo.png?r=20191101",
                list:[
                    {"imgUrl":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1592817586.03891296.jpg","title":"小米助力电动车","price":2999.00,"sellNum":200,"id":1},
                    {"imgUrl":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1591872046.56035016.jpg","title":"垃圾桶家用","price":522.00,"sellNum":20000,"id":2},
                    {"imgUrl":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581411766.42359239.jpg","title":"手持小风扇","price":122.00,"sellNum":200,"id":3},
                    {"imgUrl":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1575427252.0524222.jpg","title":"胶囊雨伞","price":43.00,"sellNum":200,"id":4},
                    {"imgUrl":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1566998167.20454521.jpg","title":"商品5","price":78.00,"sellNum":200,"id":5}
                ],
                obj:{
                        width:document.body.clientWidth-15+"px"
                    }
            }
        },
        components:{
            display
        }
    }
</script>
