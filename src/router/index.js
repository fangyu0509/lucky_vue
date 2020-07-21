 import Vue from 'vue'
 import Router from 'vue-router'
 import ma from '@/components/ma'
 import active from '@/components/active'
 import crate from '@/components/create'
 import my from '@/components/my'
 import recode from '@/components/recode'
 import design from '@/components/design'
 import wx from '@/page/wechat/wxindex'
 import wxfind from '@/page/wechat/wxfind'
 import wxmain from '@/page/wechat/wxmain'
 import wxmes from '@/page/wechat/wxmes'
 import wxmy from '@/page/wechat/wxmy'
 import login from '@/page/login'

 Vue.use(Router)

 export default new Router({
   routes: [
     {
       path: '/',
       name: 'login',
       component: login,
     },{
       path: '/design',
       name: 'design',
       component: design
     },{
       path: '/ma',
       name: 'ma',
       component: ma,
       children:[
         {
           path: 'crate',
           name: 'crate',
           component: crate
         },
         {
           path: 'active',
           name: 'active',
           component: active
         },
         {
           path: 'my',
           name: 'my',
           component: my
         },
         {
           path: 'recode',
           name: 'recode',
           component: recode
         }
       ]
     },{
       path: '/wx',
       name: 'wx',
       component: wx
     },{
       path: '/wxfind',
       name: 'wxfind',
       component: wxfind
     },{
       path: '/wxmain',
       name: 'wxmain',
       component: wxmain
     },{
       path: '/wxmes',
       name: 'wxmes',
       component: wxmes
     },{
       path: '/wxmy',
       name: 'wxmy',
       component: wxmy
     }
   
   ]
 })

