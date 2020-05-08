<template>

        <div class="grid-content bg-purple-light" style="margin-left:75px">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/active' }">我的活动</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            </el-breadcrumb>

            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="name"
                        label="活动名称"
                        width="280">
                </el-table-column>
                <el-table-column
                        prop="no"
                        label="活动编号"
                        width="280">
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="日期"
                        width="280">
                </el-table-column>

                <el-table-column
                        prop="status"
                        label="状态"
                        width="280">
                </el-table-column>

                <el-table-column
                        prop="num"
                        label="参与人数/最大限制"
                        width="280">
                </el-table-column>

                <el-table-column label="操作" width="400">
                    <template slot-scope="scope">
                      
                        <el-button  size="mini"  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        
                        <router-link to="/recode">
                            <el-button
                                    size="mini">中奖纪录</el-button>
                        </router-link>
                        
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">删除</el-button>

                    </template>
                </el-table-column>
            </el-table>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="100" style="float:right">
          </el-pagination>
            <!-- 编辑对话框 -->
           <el-dialog title="编辑活动" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                  <el-form-item label="活动名称" label-width="120px">
                    <el-input v-model="form.name" ></el-input>
                  </el-form-item>
                   <el-form-item label="活动编号" label-width="120px">
                    <el-input v-model="form.no"  ></el-input>
                  </el-form-item>
                  <el-form-item label="活动时间" label-width="120px">
                    <el-col :span="8">
                      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">   ----</el-col>
                    <el-col :span="8">
                      <el-date-picker type="date" placeholder="选择日期" v-model="form.date2" style="width: 100%;"></el-date-picker>
                    </el-col>
                  </el-form-item>
                   <el-form-item label="活动状态" label-width="120px">
                      <el-select v-model="form.status" placeholder="请选择活动状态">
                          <el-option label="预约" value="order"></el-option>
                          <el-option label="开始" value="start"></el-option>
                          <el-option label="进行中" value="ing"></el-option>
                          <el-option label="结束" value="end"></el-option>
                      </el-select>
                  </el-form-item>
                   <el-form-item label="活动最大人数" label-width="120px">
                    <el-input v-model="form.num"  ></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
          </el-dialog>

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
        methods: {
          tableRowClassName({row, rowIndex}) {
            if (rowIndex === 1) {
              return 'warning-row';
            } else if (rowIndex === 3) {
              return 'success-row';
            }
            return '';
          },
          handleEdit(index, row) { //编辑
            this.dialogFormVisible=true;
            console.log(index,row);
            this.form.name=row.name;
            this.form.no=row.no;
            this.form.status=row.status;
            this.form.date=row.date1;
            this.form.date=row.date2;
            this.form.num=row.num;
          },
          handleDelete(index, row) {//删除
            console.log(index, row);

            this.$confirm('是否删除此数据?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });          
            });
          },
          handleSizeChange(val) {  //翻页
            console.log(`每页 ${val} 条`);
          },
          handleCurrentChange(val) {//翻页
            console.log(`当前页: ${val}`);
          }
        },
        data() {
            return {
                srcHead:"https://portal.microport.com/shwcyl/images/logo.png?r=20191101",
                tableData: Array(10).fill(item),
                dialogTableVisible: false,
                dialogFormVisible: false,
                form: {
                  name: '',
                  status: '',
                  date1: '',
                  date2: '',
                  no: '',
                  num: ''
                }
            }
      }
    }
</script>
