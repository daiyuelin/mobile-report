/*
 * @Description: 
 * @Autor: Dai YueLin
 * @Date: 2023-08-24 10:37:31
 * @LastEditors: Dai YueLin
 * @LastEditTime: 2025-08-08 15:29:58
 */
import VueRouter from 'vue-router';
import Report from '@/components/Report/Report'

var router = new VueRouter({
	routes:[
		{
				path: '/',
				name: 'Report',
				component: Report,
			}
	]
})
export default router;
