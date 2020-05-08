<template>
  <el-container style="height:1000px; border: 1px solid #eee">
        <el-header style="font-size: 12px">
            <el-image :src="srcHead">
                <div slot="placeholder" class="image-slot" >
                    加载中<span class="dot">...</span>
                </div>
            </el-image>
        </el-header>

        <el-container>

                <el-col :span="2">
                    <el-menu
                            default-active="1"
                            class="el-menu-vertical-demo">
                            <router-link to="/ma/crate">
                                <el-menu-item index="1">
                                <i class="el-icon-menu"></i><span slot="title">创建活动</span>
                                </el-menu-item>
                            </router-link>

                           <router-link to="/ma/active">
                               <el-menu-item index="2">
                                   <i class="el-icon-menu"></i>
                                   <span slot="title">我的活动</span>
                               </el-menu-item>
                           </router-link>

                            <router-link to="/ma/my">
                                <el-menu-item index="3">
                                    <i class="el-icon-document"></i>
                                    <span slot="title">个人中心</span>
                                </el-menu-item>
                            </router-link>

                    </el-menu>
                </el-col>

            <el-col :span="18">
                <router-view></router-view>
            </el-col>

        </el-container>
    </el-container>
</template>
<style>
        .el-header {
            background-color: #B3C0D1;
            color: #333;
            line-height: 60px;
          }

          .el-aside {
            color: #333;
          }
        .el-tabs--left .el-tabs__item.is-left {
            height: 54px;
            text-align: right;
        }
        .el-image__inner{
            margin-top: 10px;
        }
        .el-breadcrumb {
            font-size: 14px;
            line-height: 7;
        }
        #app {
            text-align:justify;
             margin-top: 0px; 
        }
        .el-icon-menu{
            text-decoration:none
        }

    </style>
<<script>

    export default {
        data () {
            return {
                srcHead:"https://portal.microport.com/shwcyl/images/logo.png?r=20191101"
            }
        }
        
    }
</script>