<template>
    <div class="c-wrapper-20 c-detail-box clearfix c-base-info">
        <img class="base-img" :src="baseData.vehicelPic">
        <div class="base-info">
            <div class="base-info-top">
                <label>车牌号：</label>
                <span>{{baseData.platNo}}</span>
            </div> 
            <ul class="base-info-bottom">
                <li v-for="(item,index) in baseData.list" :key="index" class="base-info-list">
                    <p class="title">{{item.name}}</p>
                    <p class="text c-yellow" v-if="item.isYellow">{{item.value || '--'}}</p>
                    <p class="text c-red" v-else-if="item.isRed">{{item.value || '--'}}</p>
                    <p class="text c-blue" v-else-if="item.isBlue">{{item.value || '--'}}</p>
                    <p class="text c-green" v-else-if="item.isGreen">{{item.value || '--'}}</p>
                    <p class="text" v-else>{{item.value || '--'}}</p>
                </li>

            </ul>     
        </div> 
    </div>
</template>
<script>
export default {
    name: "vehicleInfo",
    props: {
        baseData: Object
    },
    data() {
        return {}
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/theme.scss";
.c-base-info {
    height: 240px;
    .base-img{
        width: 240px;
        height: 100%;
        float: left;  
        object-fit: contain;
        object-position: center center;
        background-color: #e1e1e1;
    }
    .base-info {
        position: relative;
        height: 100%;
        margin-left: 240px;
        font-size: 16px;
        color: $fontGrayColor;
        .base-info-top {
            padding: 0 30px;
            height: 54px;
            @include layoutMode(align);
            span {
                color: $black;
            }
        }
        .base-info-bottom {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 54px;
            border-top: 1px solid $borderColor;
            display: flex;
            line-height: 24px;
            text-align: center;
            .base-info-list {
                flex: 1;
                border-right: 1px solid $borderColor;
                // @include layoutMode(align);
                &:last-child {
                    border-right: none;
                }
                .title {
                    margin-top: 45px;
                }
                .text {
                    margin-top: 20px;
                    color: $black;
                    word-break: break-all;
                    word-wrap: break-word;
                }
            }
        }
    }
}
</style>
