import { RouteButtons } from '@/components/route-buttons'
import { config } from '@/util/site-config'
import { Metadata } from 'next'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            {/* <h1 className="text-4xl font-bold">Welcome to fundpoint</h1> */}
            <div>
                <img src="/logo.png" alt="fundpoint" className="my-4" />
                <RouteButtons />
            </div>
            <p className="text-lg pt-8">{config.description}.</p>
        </main>
    )
}
