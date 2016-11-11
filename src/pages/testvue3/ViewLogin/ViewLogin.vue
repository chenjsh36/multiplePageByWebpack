<template lang="html">
    <div class="login-container" v-if="show">
        <a class="login-title" href="/testvue/main.html">
        </a>
        <div class="login-form">
            <el-form ref="form" :model="form" :rules="loginrules" label-width="80px" @submit.native.prevent="onSubmit">
                <el-form-item label="母账号" prop="monName">
                    <el-input v-model="form.monName" type="text"></el-input>
                </el-form-item>
                <el-form-item label="子账号">
                    <el-input v-model="form.sonName" type="text"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="passwd">
                    <el-input v-model="form.passwd" type="password" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="code">
                    <el-row type="flex" class="row-bg" justify="space-between">
                        <el-col :span="11">
                            <el-input v-model="form.code" type="text" auto-complete="off"></el-input>
                        </el-col>
                        <el-col :span="11">
                            <div class="code-wrapper"></div>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" native-type="submit">登录</el-button>
                </el-form-item>
            </el-form>                    
        </div>
        <ul class="todos" v-for="todo in toDos">
            <li>{{todo.id}} : {{todo.text}} : {{todo.done}}</li>
        </ul>
    </div>
</template>
<script>
    // 简化获取 store 变量值的过程
    import { mapState } from 'vuex'
    // 同理简化获取getter值的过程
    import { mapGetters } from 'vuex'

    export default {
        data() {
            var checkMonName = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入母账号'));
                } else if (/^[\s]+$/.test(value)) {
                    callback(new Error('账号名称含有空格等空字符！'));
                } else {
                    callback();
                }
            };

            var checkPasswd = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };

            var checkCode = (rule, value, callback) => {

                // setTimeout(() => {
                //     if (value === '') {
                //         callback(new Error('请输入验证码'));
                //     } else {
                //         callback();
                //     }
                // }, 2000)
                if (value === '') {
                    callback(new Error('请输入验证码'));
                } else {
                    callback();
                }
            }
            return {
                form: {
                    monName: '',
                    sonName: '',
                    passwd: '',
                    code: ''
                }, 
                loginrules: {
                    monName: [
                        { required: true, message: '请填写母账号名称', trigger: 'blur' },
                        { validator: checkMonName}
                    ],
                    passwd: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { validator: checkPasswd}
                    ],
                    code: [
                        { required: true, message: '请填写验证码', trigger: 'blur' },
                        { validator: checkCode, trigger: 'change'}
                    ],
                }
            }
        },

        // // 正常获取全局变量的方法
        // computed: {
        //     ifLogin () {
        //         return this.$store.state.ifLogin === true ? '已经登录' : '未登录';
        //     }
        // }
        
        // 使用 mapState 获取    
        computed: {
            show: {
                get: function() {
                    console.log('get:', this.$store.state.ifLogin);
                    return !this.$store.state.ifLogin;
                },
                set: function(value) {
                    this.$store.commit('login', value);
                }                
            },
            // localComputed() {
            // },
            ...mapState({
                // show: state => !state.ifLogin,
                ifLogin: (state) => {
                    return (state.ifLogin === true ? '已经登录' : '未登录');
                },
                toDos: state => state.toDos
            }),
            ...mapGetters({
                doneCount: 'toDosCountDone', // 修改为不同名称
                toDosOfDone: 'toDosOfDone'
            })
        },
        methods: {
            onSubmit() {
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        alert('submit！');
                        var _this = this;
                        setTimeout(function(){
                            _this.$store.commit('login');
                            // _this.$store.dispatch('addToDos');
                        }, 2000)
                    } else {
                        console.log('error before submit!');
                        return false;
                    }
                })
            }
        }
    }
</script>
<style lang="less" >
    .login-container {
        position: relative;
        width: 460px;
        margin: 100px auto;
        .login-title {
            position: relative;
            display: block;
            width: 100%;
            height: 60px;
            text-align: center;
            font-size: 20px;
            font-weight: bold;
            background: url(../imgs/hqy_logo_long.png) no-repeat;
            background-position: 43% 0;
        }
        .login-form {
            position: relative;
            border: 1px solid transparent;
            margin: 15px auto;
            padding: 30px 20px 0 0px;        
            background-color: #fefefe;
            box-shadow: 0px 0px 12px #3d4eca;
            border-radius: 4px;
        }
    }
    // 验证码
    .code-wrapper {
        height: 36px;
        width: 200px;
        background: url(../imgs/captcha.jpg) no-repeat;
        background-size: contain; // size should add after background
    }
    // end 验证码
</style>
