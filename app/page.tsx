'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
//Components
import Button from '@/components/Button/Button'
//Homepage Image
import HomepageImage from 'assets/home-pic.png'

const Home = () => {
  const router = useRouter()

  const handleButtonClick = () => router.push('/quiz')

  return (
    <div className='text-center'>
      <p className='text-white p-4'>
        Quiz do idioma russo. Bora praticar!
      </p>
      <Image className='max-w-[550px] w-full rounded-[10px]' src={HomepageImage} alt='home-page'/>
      <p className='text-[#9f50ac] pt-2 pb-8 text-[10px]'>
        Image from Unsplash by Milad Fakurian
      </p>
      <Button text='Começar!' onClick={handleButtonClick} />
    </div>
  )
}

export default Home
