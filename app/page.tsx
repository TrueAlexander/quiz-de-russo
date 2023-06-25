'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
//Components
import Button from '@/components/Button/Button'
//Homepage Image
import HomepageImage from 'assets/home-pic.jpg'

const Home = () => {
  const router = useRouter()

  const handleButtonClick = () => router.push('/quiz')

  return (
    <div className='text-center'>
      <p className='text-white p-4 font-bold'>
        Quiz do idioma russo. Bora praticar!
      </p>
      <Image className='max-w-[450px] w-full rounded-[10px] border-4 border-[#9f50ac]' src={HomepageImage} alt='home-page'/>
      <p className='text-[#9f50ac] pt-4 pb-4 text-[18px] '>
        Clique abaixo
      </p>
      <Button text='Começar!' onClick={handleButtonClick} />
    </div>
  )
}

export default Home
