import axios from 'axios';
import { message } from '@/hooks/useStatic'

import { handleInterceptorRequest, handleInterceptorResponse } from '@/api/http'

const baiduInstance = axios.create({
    baseURL: '/baidu'
})

baiduInstance.interceptors.request.use(handleInterceptorRequest)

baiduInstance.interceptors.response.use(
    handleInterceptorResponse
    , error => {
        message.error(error || '请求失败')
        return Promise.reject(error)
    })


export default baiduInstance;