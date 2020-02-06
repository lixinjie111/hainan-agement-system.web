 <template>        
    <div class="c-wrapper-20 c-detail-box">
        <p class="c-title c-border-bottom">新车录入</p>
        <div class="c-padding-30">
            <el-form ref="addForm" :inline="true" :model="formParams" size="mini" label-position="right" label-width="120px">
                <el-form-item label="编号" prop='name'>
                    <el-input v-model.trim="formParams.name"></el-input>
                </el-form-item>
                <el-form-item label="车牌号" prop='plateNo'>
                    <el-select
                        v-model.trim="formParams.plateNo">
                        <el-option
                            v-for="item in plateNoList"
                            :key="item.plateNo"
                            :label="item.plateNo"
                            :value="item">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="车辆编号" prop='vehicleId'>
                    <el-select
                        v-model.trim="formParams.vehicleId">
                        <el-option
                            v-for="item in vehicleIdList"
                            :key="item.vehicleId"
                            :label="item.vehicleId"
                            :value="item">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="摄像头编号" prop='camDeviceId'>
                    <el-select
                        v-model.trim="formParams.camSerialNum">
                        <el-option
                            v-for="item in camCodeList"
                            :key="item.value"
                            :label="item.label"
                            :value="item">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="摄像头朝向">
                    <p class="el-input-inner">{{formParams.camDirection}}</p>
                </el-form-item>
                <el-form-item label="百公里能耗" prop="oilConsumption">
                    <el-input v-model="formParams.oilConsumption" class="c-input-append-select">
                        <el-select v-model="oilConsumptionUnit" slot="append" >
                            <el-option label="L" value="L"></el-option>
                            <el-option label="kWh" value="kWh"></el-option>
                            <el-option label="kg" value="kg"></el-option>
                        </el-select>
                    </el-input>
                </el-form-item>
                <el-form-item label="默认影响范围" prop="alertRadius">
                    <el-input-number v-model.trim="formParams.alertRadius" controls-position="right" :min="1" :max="1024"></el-input-number>
                </el-form-item>
                <el-form-item label="默认影响范围" prop="alertRadius">
                    <el-input-number v-model.trim="formParams.alertRadius" class="c-input-number" controls-position="right" :min="1" :max="1024"></el-input-number>
                    <span class="c-form-tip">单位：10cm</span>
                </el-form-item>
                <el-form-item label="开始时间" prop='startTime'>
                    <el-date-picker
                        v-model.trim="formParams.startTime"
                        type="datetime"
                        placeholder="开始时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="结束时间" prop='endTime'>
                    <el-date-picker
                        v-model.trim="formParams.endTime"
                        type="datetime"
                        placeholder="结束时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="解绑原因" prop='causeUntying'>
                    <el-input
                        type="textarea"
                        :rows="8"
                        placeholder="请输入解绑原因"        
                        v-model.trim="formParams.causeUntying">
                    </el-input>
                </el-form-item>
            </el-form>
            <div class="c-text-center">
                <el-button type="warning" size="small" @click="submitFunc" :loading="submitloading">确定</el-button>
                <el-button type="warning" size="small" plain @click="backClick">取消</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DataAdd',
    data () {
        return {
            submitloading: false,
            oilConsumptionUnit: "L",
            formParams: {
                name: '',
                plateNo: '',
                vehicleId: '',
                camSerialNum:'',//摄像头序列号
                camDeviceId:'',//摄像头编号
                // camId: '',      //摄像头序列号
                // camCode: '',    //摄像头编号
                camDirection: '--',
                oilConsumption: "",
                alertRadius: 1000,
                startTime: '',
                endTime: '',
                protocal: '',
                causeUntying: ''
            },
            plateNoList: [],
            vehicleIdList: [],
            camCodeList: []
        }
    },
    methods: {
        submitFunc() {
            this.$message.warning("一般都需要加表单验证后再提交");
        },
        backClick() {
            this.$router.push({
                path: "/menu1/list"
            });
        }
    }
}
</script>