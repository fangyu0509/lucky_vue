<template>
        <el-row type="flex" class="row-bg" justify="center" >
            <el-col :xs="20" :sm="12" :md="12" :lg="6" :xl="6">
               <div class="grid-content bg-purple">
                    <el-form :model="formLabelAlign">
                        <el-form-item>
                        <el-image :src="src"></el-image>
                        </el-form-item>
                        <el-form-item label="账号     ">
                            <el-input v-model="formLabelAlign.name"></el-input>
                        </el-form-item>
                        <el-form-item label="密码     ">
                            <el-input v-model="formLabelAlign.pwd"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">登陆</el-button>
                            <el-button>取消</el-button>
                            <el-tag type="info">暂无账号，去注册</el-tag>
                        </el-form-item>
                     </el-form>
                </div>
            </el-col>
        </el-row>
</template>
<script>
    export default {
        data() {
            return {
                labelPosition: 'right',
                src:require('../assets/login.jpg'),
                formLabelAlign: {
                    name: '',
                    pwd: '',
                },
                clientId:''
            };
        },
        methods: {
            onSubmit() {
                if(this.clientId=="wechat"){
                    this.$router.push("/ma");
                }else{
                    this.$router.push("/wx");
                }
                
            },
            isWeiXin(){
                var ua = navigator.userAgent.toLowerCase();
                if(ua.match(/MicroMessenger/i)!="micromessenger") {
                   this.clientId='pc'
                }else{
                   this.clientId='wechat'
                }
            }
        },
        mounted(){
           this.isWeiXin()
        }
    }
</script>