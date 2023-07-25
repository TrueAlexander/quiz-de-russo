'use client'

// import Image from 'next/image'
import { useRouter } from 'next/navigation'
//Components
import Button from '@/components/Button/Button'

const Categories = () => {
  const router = useRouter()

  return (
    <div className='text-center flex flex-col justify-center'>
      <p className='text-white p-4 font-bold'>
        Quiz do idioma russo. Bora praticar!
      </p>
      <p className='text-[#9f50ac] pt-4 pb-4 text-[18px] '>
        Escolhe a categoria de perguntas:
      </p>
      <Button text='Vocabulario' disabled={false} onClick={() => router.push('/categories/vocabulary')} />
      <br />
      <Button text='Verbos' disabled={false} onClick={() => router.push('/categories/verbs')} />
      <br />
      {/* <Button text='Casos' disabled={false} onClick={() => router.push('/categories/cases')} /> */}
      <br />
    </div>
  )
}

export default Categories
