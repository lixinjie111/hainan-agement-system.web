window.config = {
	
	//海南地址
    staticUrl: "http://120.133.21.14:9090/", //静态文件路径
	url: "http://120.133.21.14:9090/operateApp/",  	//平台地址 运营平台 登录，登出，修改密码使用

	version: "1.0"       // 版本号
};
//地图额外配置项添加
window.mapOption = {
	center: [121.551976, 31.276054],	//上海-高德地图坐标点
	mapStyleEmpty: "amap://styles/bc5a63d154ee0a5221a1ee7197607a00", // 纯灰色背景地图
};

window.defaultMapOption = {
	center: window.mapOption.center,
	zoom: 17,		// 默认：比例尺显示100m
	resizeEnable: true, //是否监控地图容器尺寸变化
	rotateEnable: true,
	mapStyle: "amap://styles/3312a5b0f7d3e828edc4b2f523ba76d8"
}