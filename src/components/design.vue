<template>

        <el-container style="border: 1px solid #eee">
                <el-tabs :tab-position="tabPosition" style="height: 800px;" >
                    <el-tab-pane >
                        <span slot="label"><i class="el-icon-date"></i> 首页</span>
                            <div class="grid-content bg-purple-light">
                                <el-image :src="src">
                                    <div slot="placeholder" class="image-slot">
                                        加载中<span class="dot">...</span>
                                    </div>
                                </el-image>
                            </div>

                    </el-tab-pane>
                    <el-tab-pane label="奖品详细">

                            <div class="grid-content bg-purple-light">
                                <el-image :src="src">
                                    <div slot="placeholder" class="image-slot">
                                        加载中<span class="dot">...</span>
                                    </div>
                                </el-image>
                            </div>
                    </el-tab-pane>
                    <el-tab-pane label="中奖界面">

                            <div class="grid-content bg-purple-light">
                                <el-image :src="src">
                                    <div slot="placeholder" class="image-slot">
                                        加载中<span class="dot">...</span>
                                    </div>
                                </el-image>
                            </div>

                    </el-tab-pane>
                    <el-tab-pane label="没中奖页面">

                            <div class="grid-content bg-purple-light">
                                <el-image :src="src">
                                    <div slot="placeholder" class="image-slot">
                                        加载中<span class="dot">...</span>
                                    </div>
                                </el-image>
                            </div>
                    </el-tab-pane>
                </el-tabs>

            <el-container>

                <el-main>

                    <el-row>

                        <el-col :span="16" style="margin-left:30px">
                            <div class="grid-content bg-purple">
                                <template>
                                    <el-tabs v-model="activeName" @tab-click="handleClick">
                                        <el-tab-pane label="基础设置" name="first">
                                            <el-form ref="formfirst" :model="form" label-width="80px">
                                                <el-form-item label="活动标题">
                                                    <el-input v-model="form.name"></el-input>
                                                </el-form-item>
                                                <el-form-item label="活动时间">
                                                    <el-col :span="11">
                                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.startDate" style="width: 100%;"></el-date-picker>
                                                    </el-col>
                                                    <el-col class="line" :span="2">-</el-col>
                                                    <el-col :span="11">
                                                        <el-date-picker type="date" placeholder="选择日期" v-model="form.endDate" style="width: 100%;"></el-date-picker>
                                                    </el-col>
                                                </el-form-item>
                                                <el-form-item label="参与人数">
                                                    <template>
                                                        <el-radio v-model="form.type" label="1">限制</el-radio>
                                                        <el-radio v-model="form.type" label="2">不限制</el-radio>
                                                    </template>
                                                </el-form-item>
                                                <el-form-item label="活动说明">
                                                    <el-input type="textarea" v-model="form.desc"></el-input>
                                                </el-form-item>
                                            </el-form>
                                        </el-tab-pane>
                                        <el-tab-pane label="派奖方式" name="second">
                                            <el-form ref="form" :model="form" label-width="80px">
                                                <el-form-item label="当前选择">
                                                    ：抽奖派发（该活动仅提供一种派奖方式）
                                                </el-form-item>

                                                <el-form-item label="总抽奖机会">
                                                    <template>
                                                        <el-radio v-model="form.type" label="1">限制</el-radio>
                                                        <el-radio v-model="form.type" label="2">不限制</el-radio>
                                                    </template>
                                                </el-form-item>


                                                <el-form-item label="每人抽奖机会">
                                                    <template>
                                                        <el-radio v-model="form.type" label="1">限制</el-radio>
                                                        <el-radio v-model="form.type" label="2">不限制</el-radio>
                                                    </template>
                                                </el-form-item>

                                                <el-form-item label="每人中奖次数">
                                                    <el-input v-model="form.name"></el-input>
                                                </el-form-item>

                                                <el-form-item label="抽奖模式">
                                                    <template>
                                                        <el-radio v-model="form.type" label="1">按人流量发放</el-radio>
                                                        <el-radio v-model="form.type" label="2">时间均匀发放</el-radio>
                                                    </template>
                                                </el-form-item>

                                            </el-form>

                                        </el-tab-pane>
                                        <!--<el-tab-pane label="奖项设置" name="third">

                                        </el-tab-pane>
                                        <el-tab-pane label="高级设置" name="fourth">
                                            高级设置
                                        </el-tab-pane>-->
                                    </el-tabs>
                                </template>
                           </div>
                        </el-col>

                    </el-row>

                </el-main>
            </el-container>
        </el-container>
        
</template>

<script>
  
</script>
