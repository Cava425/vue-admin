function createUserList(){
    return [
        {
            user_id: 1,
            username: '张三',
            password: '123456'
        }
    ]
}


export default [
    {
        uri: '/api/user/info',
        method: 'get',
        response: (request) => {
            const user = createUserList()[0]
            return {
                code: 200,
                data: { user }
            }
        }
    }
]