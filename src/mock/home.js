import Mock from 'mockjs';
export default {
    getHomeData : () => {
        return {
            code : 200,
            data : {
                videoData : [
                    {
                        name : 'springBoot',
                        vulue: Mock.Random.float(1000,10000,0,2)
                    },
                    {
                        name : 'Vue',
                        vulue: Mock.Random.float(1000,10000,0,2)
                    },
                    {
                        name : '小程序',
                        vulue: Mock.Random.float(1000,10000,0,2)
                    },
                    {
                        name : '数据库',
                        vulue: Mock.Random.float(1000,10000,0,2)
                    },
                    {
                        name : 'javaweb',
                        vulue: Mock.Random.float(1000,10000,0,2)
                    },
                    {
                        name : 'javascript',
                        vulue: Mock.Random.float(1000,10000,0,2)
                    }
                ]
            }
        }
    }
}