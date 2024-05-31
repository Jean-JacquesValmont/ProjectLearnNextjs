"use client"
import { useSession, signIn, signOut } from 'next-auth/react'
import { Button } from "@/components/ui/button"

const SignIn = () => {
    const { data: session } = useSession()

  return (
    <div>
        {session ?
        <div>
            <p>Signed in as {session?.user?.email}</p>
            <Button onClick={() => signOut()}>Sign out</Button>
        </div>
      :
        <div>
            <p>Not signed in</p>
            <Button onClick={() => signIn()}>Sign in</Button>
        </div>
    }
    </div>
  )
}

export default SignIn