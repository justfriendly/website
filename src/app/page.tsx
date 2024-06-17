'use client'

import Image from 'next/image'
import Manifest from './components/manifest'
import { QueryProvider } from './query-client'
import SignupForm from './components/signup-form'

export default function Home() {
  return (
    <QueryProvider>
      <main className="p-4 max-w-xl mx-auto">
        <Image className='mx-auto' src="/img/logo.png" alt="Just Friendly" width={400} height={400} />
        <Manifest />

        {/* minus margin in both sides */}
        {/* <div className="bg-white shadow-md overflow-hidden lg:-mx-8">
          <iframe style={{width: '100%', minHeight: '400px'}} src="https://www.youtube.com/embed?max-results=1&controls=0&showinfo=0&rel=0&listType=user_uploads&list=magmidt" frameBorder="0" allowFullScreen />
        </div> */}

        <SignupForm />
      </main>
    </QueryProvider>
  )
}
