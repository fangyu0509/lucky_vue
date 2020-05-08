<template>
        <div class="demo-image" style="margin-left: 80px;">
                <el-row :gutter="20">
                        <div class="block" v-for="fit in fits" :key="fit">
                                <el-col :span="4">
                                        <el-card :body-style="{ padding: '0px' }">
                                                <div class="grid-content bg-purple" >
                                                        <el-image
                                                        style="width: 300px; height: 300px"
                                                        :src="fit"
                                                        fit="cover"></el-image> 
                                
                                                </div>
                                               
                                                <div style="padding: 14px;">
                                                        <span>好吃的汉堡</span>
                                                        <div class="bottom clearfix">
                                                        <time class="time">{{ currentDate }}</time>
                                                        <el-button type="text" class="button">操作按钮</el-button>
                                                        </div>
                                                </div>
                                        </el-card>
                                       
                                </el-col>
                       </div>
                </el-row>
        </div>

</template>

<style>


  
</style>

<script>
  export default {
    data() {
      return {
        fits: ['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
         'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 
         'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
         'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 
         'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg']
      }
    }
  }
</script>
