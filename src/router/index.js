// 不在菜单导航里的路由
const Login = resolve => require(['@/views/login/index'], resolve)
const Err404 = resolve => require(['@/views/error/404'], resolve)
const Home = resolve => require(['@/views/home'], resolve)
//重新加载当前路由
const Refresh = resolve => require(['@/views/refresh'], resolve)

// 在菜单导航里的路由
// 首页
const Index = resolve => require(['@/views/index/index'], resolve)
// 车辆运行状态管理
const StatusManagement = resolve => require(['@/views/statusManagement/index'], resolve)
const StatusList = resolve => require(['@/views/statusManagement/list/index'], resolve)
// 车辆数据管理
const DataManagement = resolve => require(['@/views/dataManagement/index'], resolve)
const DataAdd = resolve => require(['@/views/dataManagement/add/index'], resolve)
const DataList = resolve => require(['@/views/dataManagement/list/index'], resolve)
const DataCertificate = resolve => require(['@/views/dataManagement/certificate/index'], resolve)
// 车辆设备管理
const DeviceManagement = resolve => require(['@/views/deviceManagement/index'], resolve)
const DeviceAdd = resolve => require(['@/views/deviceManagement/add/index'], resolve)
const DeviceBindList = resolve => require(['@/views/deviceManagement/bindList/index'], resolve)
// 车辆轨迹/行程数据管理
const TrackManagement = resolve => require(['@/views/trackManagement/index'], resolve)
const TrackList = resolve => require(['@/views/trackManagement/list/index'], resolve)
// 里程收费验证
const MileageManagement = resolve => require(['@/views/mileageManagement/index'], resolve)
const MileageSetting = resolve => require(['@/views/mileageManagement/mileageSetting/index'], resolve)
const VehicleMileage = resolve => require(['@/views/mileageManagement/vehicleMileage/index'], resolve)

// 不在菜单导航里的路由
export const publicRouterMap = [
    { path: '/login', name: 'Login', component: Login },
    { path: '/404', name: '404', component: Err404 },
    { path: '/refresh', name: 'Refresh', component: Refresh},
    { path: '*', redirect: '/404' }
]
// 在菜单导航里的路由
export const menuRouterMap = [
	{
        "path": "/",
      	"name": "home",
        "component": Home,
        "redirect": "/index",
        "children": [
            {
                "name": "Index",
                "path": "/index",
                "component": Index,
                "meta": {
                    "title": "首页",
                    "icon": "el-icon-mc-app",
                    "enable": "Y"
                },
                "children": []
            },
            {
                "name": "StatusManagement",
                "path": "/statusManagement",
                "component": StatusManagement,
                "meta": {
                    "title": "车辆运行状态",
                    "icon": "el-icon-odometer",
                    "enable": "Y"
                },
                "children": [{
                    "name": "StatusList",
                    "path": "/statusManagement/list",
                    "component": StatusList,
                    "meta": {
                        "title": "车辆查询",
                        "enable": "Y"
                    },
                    "children": [],
                }]
            },
            {
                "name": "DataManagement",
                "path": "/dataManagement",
                "component": DataManagement,
                "meta": {
                    "title": "车辆数据管理",
                    "icon": "el-icon-data-analysis",
                    "enable": "Y"
                },
                "children": [{
                    "name": "DataAdd",
                    "path": "/dataManagement/add",
                    "component": DataAdd,
                    "meta": {
                        "title": "新车录入",
                        "enable": "Y"
                    },
                    "children": [],
                }, {
                    "name": "DataList",
                    "path": "/dataManagement/list",
                    "component": DataList,
                    "meta": {
                        "title": "车辆列表",
                        "enable": "Y"
                    },
                    "children": [],
                }, {
                    "name": "DataCertificate",
                    "path": "/dataManagement/certificate",
                    "component": DataCertificate,
                    "meta": {
                        "title": "证书管理",
                        "enable": "Y"
                    },
                    "children": [],
                }]
            },
            {
                "name": "DeviceManagement",
                "path": "/deviceManagement",
                "component": DeviceManagement,
                "meta": {
                    "title": "车辆设备管理",
                    "icon": "el-icon-box",
                    "enable": "Y"
                },
                "children": [{
                    "name": "DeviceAdd",
                    "path": "/deviceManagement/add",
                    "component": DeviceAdd,
                    "meta": {
                        "title": "设备录入",
                        "enable": "Y"
                    },
                    "children": [],
                }, {
                    "name": "DeviceBindList",
                    "path": "/deviceManagement/bindList",
                    "component": DeviceBindList,
                    "meta": {
                        "title": "设备绑定",
                        "enable": "Y"
                    },
                    "children": [],
                }]
            },
            {
                "name": "TrackManagement",
                "path": "/trackManagement",
                "component": TrackManagement,
                "meta": {
                    "title": "车辆轨迹管理",
                    "icon": "el-icon-map-location",
                    "enable": "Y"
                },
                "children": [{
                    "name": "TrackList",
                    "path": "/trackManagement/list",
                    "component": TrackList,
                    "meta": {
                        "title": "轨迹查询",
                        "enable": "Y"
                    },
                    "children": [],
                }]
            },
            {
                "name": "MileageManagement",
                "path": "/mileageManagement",
                "component": MileageManagement,
                "meta": {
                    "title": "里程收费管理",
                    "icon": "el-icon-set-up",
                    "enable": "Y"
                },
                "children": [{
                    "name": "MileageSetting",
                    "path": "/mileageManagement/mileageSetting",
                    "component": MileageSetting,
                    "meta": {
                        "title": "收费标准配置",
                        "enable": "Y"
                    },
                    "children": [],
                }, {
                    "name": "VehicleMileage",
                    "path": "/mileageManagement/vehicleMileage",
                    "component": VehicleMileage,
                    "meta": {
                        "title": "车辆收费",
                        "enable": "Y"
                    },
                    "children": [],
                }]
            },
            // {
            //     "name": "MenuOne",
            //     "path": "/menu1",
            //     "component": MenuOne,
            //     "redirect": "/menu1/list",
            //     "meta": {
            //         "title": "列表页模板",
            //         "icon": "el-icon-mc-view-list",
            //         "enable": "Y"
            //     },
            //     "children": [
            //         {
            //             "name": "MenuOneList",
            //             "path": "/menu1/list",
            //             "component": MenuOneList,
            //             "meta": {
            //                 "title": "menu--1",
            //                 "enable": "Y"
            //             },
            //             "children": [],
            //         }，{
                    //     "name": "MenuOneAdd",
                    //     "path": "/menu1/add",
                    //     "component": MenuOneAdd,
                    //     "meta": {
                    //         "title": "menu--1--add",
                    //         "enable": "N",      //----------enable控制在菜单栏中是否显示
                    //         "active": "MenuOneList"  //----------action二级菜单中子页面指向的父级
                    //     },
                    //     "children": [],
                    // }
            //     ]
            // }
		]
	}
];

export default new VueRouter({
  // mode: 'history',
  routes: [
  	...publicRouterMap,
  	...menuRouterMap
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
