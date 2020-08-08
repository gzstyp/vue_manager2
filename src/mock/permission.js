import Mock from 'mockjs'
export default {
    getMenu : config => {
        const { username, password } = JSON.parse(config.body);
        console.log(JSON.parse(config.body));
        // 先判断用户是否存在
        if (username === 'admin' || username === 'wp') {
            // 判断账号和密码是否对应
            if (username === 'admin' && password === '123456') {
                return {
                    data : {
                        code : 200,
                        data : [
                            {
                                path : '/',
                                name : 'home',
                                label : '首页',
                                icon : 'el-icon-s-home',
                                url : 'Home/Home'
                            },
                            {
                                path: '/video',
                                name: 'video',
                                label: '视频管理页',
                                icon: 'el-icon-video-camera',
                                url: 'VideoManage/VideoManage'
                            },
                            {
                                path: '/user',
                                name: 'user',
                                label: '用户管理页',
                                icon: 'el-icon-user',
                                url: 'UserManage/UserManage'
                            },
                            {
                                label: '其他页面',
                                icon: 'el-icon-monitor',
                                children: [
                                    {
                                        path: '/page1',
                                        name: 'page1',
                                        label: '页面1',
                                        icon: 'el-icon-present',
                                        url: 'Other/PageOne'
                                    },
                                    {
                                        path: '/page2',
                                        name: 'page2',
                                        label: '页面2',
                                        icon: 'el-icon-setting',
                                        url: 'Other/PageTwo'
                                    }
                                ]
                            }
                        ],
                        token : Mock.Random.guid(),
                        message : '获取成功'
                    }
                }
            } else if (username === 'wp' && password === '123456') {
                return {
                    data : {
                        code : 200,
                        data : [
                            {
                                path : '/',
                                name : 'home',
                                label : '首页',
                                icon : 'el-icon-s-home',
                                url : 'Home/Home'
                            },
                            {
                                path: '/video',
                                name: 'video',
                                label: '视频管理页',
                                icon: 'el-icon-video-camera',
                                url: 'VideoManage/VideoManage'
                            },
                        ],
                        token : Mock.Random.guid(),
                        message : '获取成功'
                    }
                }
            } else {
                return {
                    data : {
                        code : 205,
                        msg: '密码错误'
                    }
                }
            }
        } else {
            return {
                data : {
                    code : -202,
                    msg: '用户不存在'
                }
            }
        }
    }
}