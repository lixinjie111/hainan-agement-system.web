<template>
    <el-dialog 
        title="修改密码" 
        :visible.sync="visible"
        :before-close="cancleFunc"
        :close-on-click-modal="false"
        width="30%">
        <el-form ref="dialogForm" :model="formParams" :rules="rules" size="small" label-position="right" label-width="120px">
            <el-form-item label="原密码:" prop='password'>
                <el-input type="password" auto-complete="old-passwork" v-model.trim="formParams.password"></el-input>
            </el-form-item>
            <el-form-item label="新密码:" prop='newpassword'>
                <el-input type="password" auto-complete="new-passwork" v-model.trim="formParams.newpassword"></el-input>
            </el-form-item>
            <el-form-item label="重复密码:" prop='confirmpassword'>
                <el-input type="password" auto-complete="confirm-passwork" v-model.trim="formParams.confirmpassword"></el-input>
            </el-form-item>
        </el-form>
        <div class="c-text-center">
            <el-button type="warning" size="small" @click="submitFunc" :loading="submitloading">确定</el-button>
            <el-button type="warning" size="small" plain @click="cancleFunc">取消</el-button>
        </div>
    </el-dialog>
</template>

<script>
import md5 from 'js-md5'
import { requestPasswd } from "@/api/login"
import { removeAuthInfo } from '@/session/index';
export default {
    name: "resetPassword",
    data() {
        let _re =/[a-zA-Z0-9]{8,20}$/,
            _checkPassword = (rule, value ,callback) => {
                if(value){
                    if(_re.test(value)){
                        callback();
                    }else{
                        callback(new Error('密码格式有误,请重新输入!'));
                    }
                }else {
                    callback(new Error('原密码不能为空!'));
                }
            },
            _checkNewpassword =  (rule, value ,callback) => {
                if(value){
                    if(_re.test(value)){
                        let _confirmpassword = this.formParams.confirmpassword;
                        if(value != _confirmpassword) {
                            this.formParams.confirmpassword = "";
                        }
                        callback();
                    }else{
                        callback(new Error('密码格式有误,请重新输入!'));
                    }
                }else {
                    callback(new Error('新密码不能为空!'));
                }
            },
            _checkConfirmpassword = (rule, value ,callback) => {
                if(value){
                    let _newpassword = this.formParams.newpassword;
                    if(value == _newpassword) {
                        callback();
                    }else {
                        callback(new Error('重复密码和新密码不一致，请重新输入！'));
                    }
                }else {
                    callback(new Error('重复密码不能为空!'));
                }
            };
        return {
            visible: true,
            submitloading: false,
            formParams: {
                id: this.$store.state.admin.adminId,
                userNo: this.$store.state.admin.adminName,
                password:'',
                newpassword:'',
                confirmpassword:''
            },
            rules:{
                password:[
                    { required: true, validator: _checkPassword, trigger: 'blur' },
                ],
                newpassword:[
                    { required: true, validator: _checkNewpassword, trigger: 'blur' },
                ],
                confirmpassword:[
                    { required: true, validator: _checkConfirmpassword, trigger: 'blur' },
                ]
            }
        }
    },
    methods: {
        submitFunc() {
            this.$refs.dialogForm.validate((valid) => {
                if (valid) {
                    // 正则校验
                    this.submitloading = true;
                    let _param = Object.assign({}, this.formParams, {
                        password: md5(md5(this.formParams.password)),
                        newpassword: md5(md5(this.formParams.newpassword)),
                        confirmpassword: md5(md5(this.formParams.confirmpassword))
                    });
                    requestPasswd(_param).then(res => {
                    // requestPasswd(this.formParams).then(res => {
                        this.submitloading = false;
                        this.$message({
                            type: 'success',
                            duration: '1500',
                            message: res.message,
                            showClose: true
                        });
                        removeAuthInfo();
                        localStorage.removeItem("yk-token");
                        this.$router.push({ path: '/login' });
                    }).catch(err => {
                        this.submitloading = false;
                    });
                } else {
                    return false;
                }
            });
        },
        cancleFunc() {
            this.$emit("cancleFunc");
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/theme.scss';
</style>