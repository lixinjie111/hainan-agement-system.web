<template>
    <div class="c-wrapper-20" v-cloak>
        <el-form ref="searchForm" :inline="true" :model="searchKey" :rules="rules" size="small">
            <el-form-item label="活动名称" prop='name'>
                <el-input v-model.trim="searchKey.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="warning" icon="el-icon-search" @click="searchClick" :loading="searchloading">查询</el-button>
                <el-button type="warning" plain icon="el-icon-setting" @click="resetClick">重置</el-button>
            </el-form-item>
        </el-form>
        <el-table 
            ref="table"
            class="c-mb-70"
            :data="listData"
            v-loading="tableLoading"
            border
            max-height="724"
            stripe>
            <el-table-column label="序号" type="index" :index="indexMethod"></el-table-column>
            <el-table-column min-width="20%" label="摄像头序列号" prop="serialNum"></el-table-column>
            <el-table-column min-width="20%" label="文件名称" prop="fileName"></el-table-column>
            <el-table-column min-width="20%" label="开始时间">
                <template slot-scope="scope">{{$dateUtil.formatTime(scope.row.startTime)}}</template>
            </el-table-column>
            <el-table-column min-width="20%" label="结束时间">
                <template slot-scope="scope">{{$dateUtil.formatTime(scope.row.endTime)}}</template>
            </el-table-column>
            <el-table-column min-width="20%" label="操作">
                <template slot-scope="scope">
                    <el-button size="small" icon="el-icon-view" circle type="warning" plain :loading="scope.row.viewLoading" @click="openDetial(scope.row)"></el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 分页 -->
        <pagination :total="pageOption.total" :page.sync="pageOption.page" :size.sync="pageOption.size" @pagination="initData"></pagination>

        <dialog-detail title="详情" v-if="dialogDetailFlag" @closeDialog="closeDialog"></dialog-detail>
    </div>
</template>

<script>
import Pagination from '@/components/pagination';
import DialogDetail from "./components/detail.vue";
export default {
    name: 'StatusList',
    components: {
        Pagination,
        DialogDetail
    },
    data () {
        return {
            searchloading: false,
            tableLoading: false,
            pageOption: {
                size: 10,
                total: 100,
                page: 1     //从1开始
            },
            listData: [{
                fileName: 'status-1',
                endTime: 1562860724413,
                plateNo: "沪A923456",
                routeId: "B21E-00-024",
                startTime: 1562809632481
            },{
                fileName: 'status-2',
                endTime: 1562860726413,
                plateNo: "沪A923456",
                routeId: "B21E-00-024",
                startTime: 1562860724413
            }],
            searchKey: {
                name: ""
            },
            historySearchKey: {},
            rules:{
                name:[
                    { required: true, message: '活动名称不能为空!', trigger: 'blur' },
                ]

            },
            dialogDetailFlag: false
        }
    },
    mounted() {
    },
    methods: {
        initPageOption() {
            this.listData = [];
            this.pageOption.total = 100;
            this.pageOption.page = 1;
        },
        indexMethod(index) {
            return (this.pageOption.page-1) * this.pageOption.size + index + 1;
        },
        initData() {
            this.tableLoading = true;
            console.log("这里做请求，注意传参方式");

            let _params = Object.assign({}, this.historySearchKey, {
                pageSize: this.pageOption.size,
                pageIndex: this.pageOption.page - 1
            });

            setTimeout(() => {
                console.log("更新数据以及关闭loading");
                // this.listData = res.data.list;
                // this.pageOption.total = res.data.pagaTotal || 0;
                this.$refs.table.bodyWrapper.scrollTop = 0;
                this.tableLoading = false;
                this.searchloading = false;
            }, 2000);
        },
        searchClick(){
            this.$refs.searchForm.validate((valid) => {
                if (valid) {
                    this.searchloading = true;
                    this.historySearchKey = this.searchKey;
                    this.initPageOption();
                    this.initData();
                } else {
                    return false;
                }
            });
        },
        resetClick() {
            this.$refs.searchForm.resetFields();
        },
        openDetial(row) {
            this.dialogDetailFlag = true;
        },
        closeDialog() {
            this.dialogDetailFlag = false;
        },
    }
}
</script>