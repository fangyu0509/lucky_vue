<template>
    <div class="container">
        <!-- 查询框 -->
        <div class='search'>
            <el-row :gutter="10">
                <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
                    <div style="font-weight:900">消息</div>
                </el-col>
                <el-col :xs="16" :sm="16" :md="16" :lg="16" :xl="16">
                    <el-input placeholder="搜索"  class="input-with-select">
                        <el-button slot="prepend" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>
                <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                    <div ><i class="el-icon-user"></i></div>
                </el-col>
                <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                     <div><i class="el-icon-plus"></i></div>
                </el-col>
            </el-row>
        </div>
        <!-- 消息提示 -->
        <div class="unread">
            <span>8条未读消息</span>  &emsp; <span class="el-icon-brush">  清除未读</span>
        </div>
        <!-- 提醒 -->
        <div class="notify">
            <div>
                <el-row :gutter="10">
                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                        <div>
                           <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png" alt="">
                           <span>交易物流</span>
                        </div>
                    </el-col>
                    <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
                         <img src="https://static.easyicon.net/preview/128/1285859.gif">
                         <span>优惠活动</span>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!-- 消息列表 -->
        <div class="mesitem">
            <div v-for="(item,i) in mesData" :v-bind="item.id">
              <mesItem :imgUrl="item.imgUrl" :name="item.name" :content="item.content" :mesNum="item.mesNum" :date="item.date"></mesItem>
            </div>
        </div>
        <!-- 前两周消息列表 -->
        <div class="space"></div>
        <div>
             <div class="histitle">  <i class="el-icon-timer"></i> 两周前的消息</div>
             <div v-for="(item,i) in HistoryMesData" :v-bind="item.id">
              <mesItem :imgUrl="item.imgUrl" :name="item.name" :content="item.content" :mesNum="item.mesNum" :date="item.date"></mesItem>
            </div>
        </div>
    </div>
</template>
<style>
.el-icon-timer{
    color:#e8c723;
}
.space{
    width: 100%;
    height: 15px;
    background-color: #f6f6ff;
}
.histitle{
    font-weight: 900;
    font-size: 40px;
    text-align: left;
    height: 80px;
    line-height: 80px;
}

.mesitem{
    margin-top: 30px;
}
.notify img{
    weight:80px;
    height:80px;
    border-radius: 25px;
    display: inline-block; 
    vertical-align: middle;
}
.notify{
    height: 150px;
    line-height: 150px;
    border-radius: 20px;
    box-shadow: 5px 5px 5px 5px #f6f6f6;
    font-size: 30px;
}
.unread{
    text-align: left;
    line-height: 40px;
    font-size: 20px;
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
}
.el-input-group__prepend{
    font-size: 30px;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    border-top-right-radius: 0rem;
    border-bottom-right-radius: 0rem;
}
</style>
<<script>
    import mesItem from "../../layout/mesItem.vue";
    export default {
        data () {
            return {
                 srcHead:"http://qn.guide.1o2o.com/FrJRogk0EeUZAdOYrAm4YNdSPKtm",
                 mesData:[{"id":1,"imgUrl":"http://qn.guide.1o2o.com/FrJRogk0EeUZAdOYrAm4YNdSPKtm","name":"金币庄园","content":"最近发现低风险地区电影院7月20日恢复营业 出门还是做好防护这话题成为了网友关注的焦点","mesNum":0,"date":"昨天"},
                                {"id":2,"imgUrl":"https://wx.qlogo.cn/mmopen/vi_32/OyMUqcNiahPAz8RMlZVQEHY3ibWia8ibcycF6TLicnt4aZtCiaCmRxBlmhaPTFFxtOMmzBsKHrniaFk2XqcRRticNcicMMw/132","name":"自然堂","content":"坚持分区分级原则","mesNum":0,"date":"今天"},
                                {"id":3,"imgUrl":"http://qn.guide.1o2o.com/FujsScNnfzh1PcsNyHwKl2uQW0u-?imageView2/2/w/300|imageslim","name":"8*****a","content":"content","mesNum":3,"date":"昨天"},
                                {"id":4,"imgUrl":"http://qn.guide.1o2o.com/FshTcEmDNxvdVd-QFppIhTKjjD8W?imageView2/2/w/300|imageslim","name":"梦宇","content":"严格落实属地管理和行业管理责任","mesNum":1,"date":"前天"},
                                {"id":5,"imgUrl":"http://qn.guide.1o2o.com/FqWY8Fg5bG32Oxlav3CasyYEoUWe","name":"电子商城服务","content":"精准科学落实防控措施","mesNum":0,"date":"今天"},
                                {"id":6,"imgUrl":"http://qn.guide.1o2o.com/FibYJdn8noPUUNCqPzz9rU7Elq0O","name":"服饰","content":"要制定疫情防控方案和应急预案","mesNum":1,"date":"昨天"}],
                HistoryMesData:[{"id":7,"imgUrl":"http://qn.guide.1o2o.com/FrpxFrDZ0nwKR9u3qXuVEw0IygoP","name":"服务通知","content":"该更新的大小约为67.5MB","mesNum":1,"date":"05-01"},
                                {"id":8,"imgUrl":"http://qn.guide.1o2o.com/Fjg9T4gMgu4n-9Og2nI__uaSYayR","name":"内容号","content":"收到更新后","mesNum":2,"date":"05-01"},
                                {"id":9,"imgUrl":"http://qn.guide.1o2o.com/FrTZgaVp2zVlvyvJ0I0al7R1dg8P","name":"零食店","content":"请至少为手机充电50%。","mesNum":3,"date":"昨天"},
                                {"id":10,"imgUrl":"http://qn.guide.1o2o.com/FsXMli1jwFakX7mARlHIJ9kMnwgQ","name":"医疗器械","content":"三星还对自己的软件中发现的11个漏洞进行了更正","mesNum":2,"date":"05-01"},
                                {"id":11,"imgUrl":"http://qn.guide.1o2o.com/FiSW7n4gERQp70BLMJVdIJ0zQgTS","name":"我的小蜜","content":"并且随附固件版本 N960FXX","mesNum":1,"date":"05-01"},
                                {"id":12,"imgUrl":"http://qn.guide.1o2o.com/FuAHo0hebIHiiDk4PeFSiO4mjdQ-?imageView2/2/w/300|imageslim","name":"互动消息","content":"三星终于开始在其","mesNum":3,"date":"05-01"}] 
            }
        },
        components:{
            mesItem
        }
    }
</script>