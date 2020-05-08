<template>

        <div class="grid-content bg-purple-light" style="margin-left:75px">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/active' }">我的活动</el-breadcrumb-item>
                <el-breadcrumb-item>中奖记录</el-breadcrumb-item>
            </el-breadcrumb>

            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="name"
                        label="活动名称"
                        width="230">
                </el-table-column>
                <el-table-column
                        prop="no"
                        label="活动编号"
                        width="230">
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="日期"
                        width="230">
                </el-table-column>

                <el-table-column
                        prop="status"
                        label="状态"
                        width="230">
                </el-table-column>

                <el-table-column
                        prop="num"
                        label="参与人数/最大限制"
                        width="230">
                </el-table-column>

            </el-table>

        </div>
        
</template>
<style>
    .el-breadcrumb{
        height: 50px;
    }
</style>
<script>
    const item = {
            date: '2016-05-02',
            name: '大转盘',
            no:'10',
            address: '上海市普陀区金沙江路 1518 弄',
            num: '0/100',
            status:'未开始'
        };
    export default {
        data() {
            return {
                srcHead:"https://portal.microport.com/shwcyl/images/logo.png?r=20191101",
                tableData: Array(20).fill(item)
            }
      }
    }
</script>
