"use client"

import { useSearchParams, useRouter } from 'next/navigation'
import Button from '@/components/Button/Button'

const ResultPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const result = searchParams.get('res')
  const total = searchParams.get('total')

  return (
    <div className='text-white text-center uppercase flex-auto'>
      <p className="p-6 text-[#9f50ac] font-bold text-[24px]" >Seu resultado:</p>
      <p className="p-6  font-bold text-[34px]" >{result} <span className='text-[24px] text-[#9f50ac] lowercase'>de</span> {total}</p>
      <p className="lowercase text-[#9f50ac] mb-6">Tente fazer o teste de novo</p>
      <Button text='Bora praticar!' disabled={false} onClick={() => router.push('/')}/>
    </div>
    
  )
}

export default ResultPage