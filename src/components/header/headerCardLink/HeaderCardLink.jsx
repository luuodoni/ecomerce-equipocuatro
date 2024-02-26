import Link from 'next/link'


const HeaderCardLink = ({title}) => {
  return (
    <Link href={'*'}>
        <div>
            <img src="" alt="" />

            <span>{title}</span>
        </div>
    </Link>
  )
}

export default HeaderCardLink