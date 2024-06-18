'use client'
import LogoAndWelcomeBackMessage from '@/components/login/welcome'
import Fill from '@/components/login/fill'
import CantLogin from '@/components/login/cantlogin'

export default function Login() {

    return (
        <div>
            <LogoAndWelcomeBackMessage/>
            <Fill/>
            <CantLogin/>
            </div>
    )
}
