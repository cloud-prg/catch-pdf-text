import { message } from '@/hooks/useStatic'

export const handleInterceptorRequest = (request: any) => {
//   const headers = request.headers;
//   const token = headers.get('Authorization');
//   if (token) {
//     request.headers.set('Authorization', `Bearer ${token}`);
//   }
  return request;
};

export const handleInterceptorResponse = (response:any) => {
    const { status , data } = response;
    if (status === 200 && !data?.error_msg) {
        return response
    }else{
        message.error(data?.error_msg || '请求失败') 
        return Promise.reject(data)
    }
}