<template>
    <div class="c-wrapper-20 c-detail-box">
        <p class="c-title" :class="infoTagData.length ? '' : 'c-border-bottom'" v-if="title">{{title}}</p>
        <ul class="c-detail-table-vertical clearfix" v-if="infoTagData.length">
            <li v-for="(item,index) in infoTagData" :key="index" class="list" :style="{'margin-top': item.title ? '0' : '-1px'}">
                <p class="title" v-if="item.title">{{item.title}}</p>
                <div v-for="(subItem,subIndex) in item.list" :key="subIndex" class="inner-list">
                    <span class="sub-title">{{subItem.name}}</span>
                    <em class="desc" :title="subItem.value || '--'">{{subItem.value || '--'}}</em>
                </div>
            </li>         
        </ul>
        <div class="c-empty-box" v-else>暂无数据</div>
    </div>
</template>
<script>
export default {
    name: "vehicleInfoTag",
    props: {
        title: String,
        infoTagData: Array
    },
    data() {
        return {}
    }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/theme.scss";
.c-detail-table-vertical{
    text-align: center;   
    display: flex;
    border: 1px solid $borderColor;
    .list{
        flex: 1; 
        border-right: 1px solid $borderColor;
        margin-bottom: -1px;
        &:last-child {
            border-right: none;
        }   
        .title{
            height: 46px;
            @include layoutMode();
            background-color: $tableBgColor;
        }
        .inner-list{
            width: 100%;
            height: 46px;
           .sub-title{
                float: left;
                width: 50%;
                height: 100%;
                box-sizing: border-box;
                border-top: 1px solid  $borderColor;
                border-right: 1px solid $borderColor;
                background-color: $tableBgColor;
                @include layoutMode();
                @include lineClamp(2);
           }
           .desc{
                float: left;
                box-sizing: border-box;
                width: 50%;
                height: 100%;
                border-top: 1px solid  $borderColor;
                background-color: #fff;
                @include layoutMode();
                @include lineClamp(2);
                word-break: break-all;
                word-wrap: break-word;
           }
           &:last-child {
                .sub-title, .desc {
                    border-bottom: 1px solid  $borderColor;
                }
           }
        }
    }

}
</style>
