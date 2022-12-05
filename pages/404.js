import { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function NotFound() {
  const router = useRouter()
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/")
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className='not-found'>
      <h1>Ooops..</h1>
      <h2>That page doesn't exist</h2>
      <p>You will be redirected to Homepage in 2sec...</p>
    </div>
  )
}
