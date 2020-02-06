<template>
    <div class="c-view-dialog-54" v-cloak>
        <div class="c-scroll-wrap">
            <div class="c-scroll-inner">
                <div class="c-title-fixed">
                    <h3 class="c-title">
                        车辆详情
                        <el-page-header @back="backClick" class="c-return-btn"></el-page-header>
                    </h3>
                </div>
                
                <vehicle-info :baseData="baseData"></vehicle-info>
                <!-- 基本信息 -->

                <vehicle-info-tag title="车辆统计信息" :infoTagData="infoTagData"></vehicle-info-tag>  

                <!-- 基本信息 -->
                <vehicle-info-tag title="车辆统计信息" :infoTagData="infoTagData2"></vehicle-info-tag>  
             
                <!-- 车身状态信息 -->
                <vehicle-travel title="车身状态信息" :travelData="travelData"></vehicle-travel>
                
                <!-- 地图模块--行程概览 -->
                <div class="c-wrapper-20 c-detail-box">
                    <p class="c-title c-border-bottom">行程概览</p>
                    <div class="c-padding-10">
                        <div class="c-map-big-wrapper" id='map-container' :class="isScaleMap ? 'c-map-on' : 'c-map-off'">
                            <span class="c-map-scale-btn" :class="isScaleMap ? 'c-map-scale-off' : 'c-map-scale-on'" @click="isScaleMap = !isScaleMap"></span>
                            <a href="javascript:;" class="c-map-reset-position" @click="resetMapPosition('distanceMap')"></a>
                        </div>
                    </div>
                </div>

                <!-- 地图模块--车辆实时位置 -->
                <div class="c-wrapper-20 c-detail-box">
                    <p class="c-title c-border-bottom">车辆实时位置</p>
                    <div class="c-padding-10">
                        <div class="c-map-big-wrapper" id='map-container-position' :class="isScaleMap1 ? 'c-map-on' : 'c-map-off'">
                            <span class="c-map-scale-btn" :class="isScaleMap1 ? 'c-map-scale-off' : 'c-map-scale-on'" @click="isScaleMap1 = !isScaleMap1"></span>
                            <a href="javascript:;" class="c-map-reset-position" @click="resetMapPosition('distanceMap1')"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vehicleInfo from '@/components/detail/vehicleInfo';
import vehicleTravel from '@/components/detail/vehicleTravel';
import vehicleInfoTag from '@/components/detail/vehicleInfoTag';

export default {
    name: 'DialogDetail',
    components: {
        vehicleInfo,
        vehicleTravel,
        vehicleInfoTag
    },
    data () {
        return {
            // 行程概览地图参数
            distanceMap: null,  
            isScaleMap: false,
            markers: {
                markerStart: null,
                markerPolyline: null,
                // polylinePath: [],
                polylinePath: [
                    new AMap.LngLat(121.19266459849537, 31.27346006390074),
                    new AMap.LngLat(121.19203361102413, 31.273945836512183),
                    new AMap.LngLat(121.19071475281814, 31.274436772623098),
                    new AMap.LngLat(121.18939749004576, 31.27458180873782),
                    new AMap.LngLat(121.18677368783268, 31.274455586685995),
                    new AMap.LngLat(121.18580045738989, 31.2747048034886),
                    new AMap.LngLat(121.18486959679427, 31.27516181603355),
                    new AMap.LngLat(121.18086928340612, 31.27829675603719),
                    new AMap.LngLat(121.18031760823138, 31.279144067659022),
                    new AMap.LngLat(121.17967596176048, 31.280611903502326),
                    new AMap.LngLat(121.17906168678358, 31.281300725496852),
                    new AMap.LngLat(121.17823676918434, 31.28185557340776),
                    new AMap.LngLat(121.17709616970149, 31.28228605474757),
                    new AMap.LngLat(121.17610332113826, 31.28243657639529),
                    new AMap.LngLat(121.1750990926882, 31.282359369949305)
                ],
                markerEnd: null
            },

            // 实时位置地图参数
            distanceMap1: null,
            isScaleMap1: false,
            vehicleMarker: null,  //车辆的实时位置标记点
            vehiclePoint: null,  //车辆的实时位置，默认设置成null

            baseData:{
                vehicelPic: require('@/assets/images/Development/vehicle_01.png'),
                platNo: "沪A 234567",
                list: [{
                        name:"小小标题1",
                        value:"内容1",
                    },{
                        name:"小小标题2",
                        value:"内容2",
                        isYellow: true
                    },{
                        name:"小小标题3",
                        value:"内容3",
                        isBlue: true
                    },
                ]
            },
            travelData:[
               {
                    name:"小小标题",
                    value:"内容",
                    icon: require("@/assets/images/vehicleDetail/icon-1.png")
                },
               {
                    name:"小小标题",
                    value:"内容",
                    icon: require("@/assets/images/vehicleDetail/icon-2.png")
                },
               {
                    name:"小小标题",
                    value:"内容内容内容内容",
                    icon: require("@/assets/images/vehicleDetail/icon-3.png")
                },
               {
                    name:"小小标题",
                    value:"内容",
                    icon: require("@/assets/images/vehicleDetail/icon-4.png")
                },
               {
                    name:"小小标题",
                    value:"内容",
                    icon: require("@/assets/images/vehicleDetail/icon-5.png")
                },
               {
                    name:"小小标题",
                    value:"内容",
                    icon: require("@/assets/images/vehicleDetail/icon-6.png")
                },
               {
                    name:"小小标题",
                    value:"内容",
                    icon: require("@/assets/images/vehicleDetail/icon-7.png")
                },
               {
                    name:"小小标题",
                    value:"内容",
                    icon: require("@/assets/images/vehicleDetail/icon-8.png")
                }
            ],
            infoTagData:[
               {
                   title:"大大标题",
                   list:[{
                            name:"小小标题",
                            value:"内容",
                        },
                        {
                            name:"小小标题222",
                            value:"内容222",
                        },
                        {
                            name:"小小标题333",
                            value:"内容333",
                        }
                   ]
               },
               {
                   title:"大大标题2",
                   list:[
                        {
                            name:"小小标题",
                            value:"内容",
                        },
                        {
                            name:"小小标题标题标题标题标题标题标题标题标题",
                            value:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
                        },
                   ],
               },
            ],
            infoTagData2:[
               {
                   title:"",
                   list:[{
                            name:"小小标题",
                            value:"内容",
                        },
                        {
                            name:"小小标题222",
                            value:"内容222",
                        },
                        {
                            name:"小小标题333",
                            value:"内容333",
                        }
                   ]
               },
               {
                   title:"",
                   list:[
                        {
                            name:"小小标题",
                            value:"内容",
                        },
                        {
                            name:"小小标题222",
                            value:"内容222",
                        },
                        {
                            name:"小小标题333",
                            value:"内容333",
                        },
                   ],
               },
               {
                   title:"",
                   list:[
                        {
                            name:"小小标题",
                            value:"内容",
                        },
                        {
                            name:"小小标题标题标题标题标题标题标题标题标题",
                            value:"内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容",
                        }
                   ],
               },
            ],
        }
    },
    mounted() {
        this.initMap();
    },
    methods: {
        initMap(){
            let _scale = new AMap.Scale(),
                _toolbar = new AMap.ToolBar({
                    liteStyle: true,
                    position: 'LT'
                });
            // 行程概览    
            this.distanceMap = new AMap.Map('map-container', window.defaultMapOption);
            this.distanceMap.setZoom(12);
            this.distanceMap.addControl(_scale);
            this.distanceMap.addControl(_toolbar);
            this.addLine();

            // 实时位置
            let _scale1 = new AMap.Scale(),
                _toolbar1 = new AMap.ToolBar({
                    liteStyle: true,
                    position: 'LT'
                });
            this.distanceMap1 = new AMap.Map('map-container-position', window.defaultMapOption);
            this.distanceMap1.setZoom(12);
            this.distanceMap1.addControl(_scale1);
            this.distanceMap1.addControl(_toolbar1);

            this.vehiclePoint = [121.551976, 31.276054];
            this.drawVehicleMarker();
        },
        addLine() {
            if(!this.markers.markerStart) {
                this.drawStartMarker();
            }else {
                this.markers.markerStart.setPosition = this.markers.polylinePath[0];
            }
            if(!this.markers.markerEnd) {
                this.drawEndMarker();
            }else {
                this.markers.markerEnd.setPosition = this.markers.polylinePath[this.markers.polylinePath.length-1];
            }
            if(!this.markers.markerPolyline) {
                this.drawLine();
            }
        },
        drawStartMarker() {
            this.markers.markerStart = new AMap.Marker({
                position: this.markers.polylinePath[0],
                icon:'static/images/map/start-point.png',
                offset: new AMap.Pixel(-10, -26)
            });
            this.distanceMap.add(this.markers.markerStart);
        },
        drawEndMarker() {
            this.markers.markerEnd = new AMap.Marker({
                position: this.markers.polylinePath[this.markers.polylinePath.length-1],
                icon:'static/images/map/end-point.png',
                offset: new AMap.Pixel(-10, -26)
            });
            this.distanceMap.add(this.markers.markerEnd);
        },
        drawLine() {
            this.markers.markerPolyline = new AMap.Polyline({
                path: this.markers.polylinePath,
                strokeColor: "#03812e",     //绿色
                strokeWeight: 2,
                strokeStyle: "solid",
                lineJoin: 'round',
                lineCap: 'round',
                zIndex: 50
            });
            this.distanceMap.add(this.markers.markerPolyline);
            this.distanceMap.setFitView();
        },
        drawVehicleMarker() {
            if(!this.vehicleMarker) {
                this.vehicleMarker = new AMap.Marker({
                    position: this.vehiclePoint
                });
                this.distanceMap1.add(this.vehicleMarker);
            }else {
                this.vehicleMarker.setPosition(this.vehiclePoint);
            }
            this.distanceMap1.setFitView();
        },
        resetMapPosition(mapObj) {
            this[mapObj].setFitView();
        },
        backClick() {
            this.$emit('cancleFunc');
        }
    }
}
</script>