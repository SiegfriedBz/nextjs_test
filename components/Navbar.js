import Link from "next/link"
import Image from "next/image"
export default function Navbar() {
  return (
    <nav>
      <div className='logo'>
        <Link href='/'>
          <a>
            <Image src='/shiba-inu.png' width={128} height={128} />
          </a>
        </Link>
      </div>
      <div className=''>
        <Link href='/'>
          <a className='me-2'>Home</a>
        </Link>
        <Link href='/about'>
          <a className='me-2'>About</a>
        </Link>
        <Link href='/shiba-inu'>
          <a>Shiba-Inu Listing</a>
        </Link>
      </div>
    </nav>
  )
}
