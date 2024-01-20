import { postLogin } from '@/app/actions'
import { Button } from '@nextui-org/button'
import { Input } from "@nextui-org/react"
import { Link } from "@nextui-org/react"
import { Image } from "@nextui-org/react"

export default function Login() {
  return (
    <div className="">
      <div className='mx-4 py-4 space-y-4 bg-lime-200'>
        <Link href="/" color="secondary">Home</Link>
        <Image
          width={200}
          alt="NextUI hero Image"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
        <form action={postLogin}>
          <Input
            name="email"
            type="email"
            label="Email"
            className="max-w-xs"
            />
          <Input
            name="password"
            type="password"
            label="Password"
            className="max-w-xs"
            />
          <Button color="primary" type="submit">Login</Button>
        </form>
      </div>
    </div>
  )
}
