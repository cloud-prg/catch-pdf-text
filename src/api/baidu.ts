import { baiduOcrAppConfig } from '@/constants';
import { baiduInstance } from '@/api/instance';

// const { message } = useStatic();
const currentApp = 'pdf-ocr'
const { apiKey, secretKey } = baiduOcrAppConfig[currentApp]

export const getBaiduToken = (params?: any) => {
    return baiduInstance.post(`/oauth/2.0/token?client_id=${apiKey}&client_secret=${secretKey}&grant_type=client_credentials`, params)
}

export const getBaiscOcr = (params: {
    image?: string,
    url?: string,
    pdf_file?: string,
    ofd_file?: string,
    pdf_file_num?: string,
    language_type?: string | "CHN_ENG" | "ENG" | "JAP",
    detect_direction?: string, // "true" | "false"
}) => {
    const access_token = localStorage.getItem('access_token') || '';
    if (!access_token) {
        return Promise.reject('access_token is null')
    }

    return baiduInstance.post(`https://aip.baidubce.com/rest/2.0/ocr/v1/accurate_basic?access_token=${access_token}`, params, {
        'headers': {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        },
    })
}

export default {
    getBaiduToken,
    getBaiscOcr
}


