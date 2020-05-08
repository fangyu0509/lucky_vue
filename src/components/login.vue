<template>
        <el-row :gutter="20" >
            <el-col :span="6" :offset="9"><div class="grid-content bg-purple">
             <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
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
            </div></el-col>
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
                }
            };
        },
        methods: {
        onSubmit() {
            console.log('submit!');
            this.$router.push("/ma");
        }
        }
    }
</script>