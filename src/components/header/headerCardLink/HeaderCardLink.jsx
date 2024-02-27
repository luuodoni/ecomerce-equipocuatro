import Image from 'next/image'
import Link from 'next/link'


const HeaderCardLink = ({url, img, alt, classFlex, title }) => {
  return (
    <Link href={url}>
        <div className={`${classFlex} flex items-center gap-2 justify-center max-w-screen- max-w-rem border`}>
            <picture>
              <Image 
                className='w-[3rem]'
                width='auto'
                height='auto'
                src={img}
                alt={alt}
              />
            </picture>

            <span className='text-center'>{title}</span>
        </div>
    </Link>
  )
}

export default HeaderCardLink