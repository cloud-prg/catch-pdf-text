import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import sku1Img from '@/assets/sku-1.jpg'

import { baiduOcrAppConfig } from '@/constants';
import service from '@/api';
import { useStatic } from '@/hooks';
import { message } from '@/hooks/useStatic'

function App() {
  // const ocrRef = useRef<any>(null);
  useStatic();
  const init = async () => {
    try {
      const { data } = await service.baidu.getBaiduToken();
      const { access_token }   = data;
      if(access_token){
        localStorage.setItem('access_token', access_token);
      }
    }catch(error){
      console.error(`=== error`, error)      
    }
  }

  useEffect(() => {
    init();
  }, [])

  const handleOcr = async () => {
    const params = {
      pdf_file: '/erp-1.pdf',
      // url: 'http://skkzdmglh.hd-bkt.clouddn.com/9936ff8096e18bdd8ba2a0c5cc8da245-01.jpg?e=1727626091&token=x9_O16rYByRS9EwZXBKS3REtLPBIo4C3kmuNXqhe:Tplrfng63VQW9s5NdcfGRz_D-V4=',
      // language_type: "ENG" ,
      'detect_direction': 'false',
      'paragraph': 'false',
      'probability': 'false',
      'multidirectional_recognize': 'false'
    }
    const res = await service.baidu.getBaiscOcr(params);
    console.log(`=== res`, res);
  }

  const Header = () => {
    return <div className="font-bold text-3xl underline border border-blue-500">
      pdf转为图像
    </div>
  }

  return (
    <div className="app">
      <Header />
      <div className='flex flex-col items-center border border-blue-500 p-4'>
        <button onClick={handleOcr}>打印图片转换结果</button>
      </div>
    </div>
  )
}

export default App
