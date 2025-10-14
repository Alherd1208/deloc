import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import PlayToEarn from '@/components/PlayToEarn'
import Tokenomics from '@/components/Tokenomics'
import Roadmap from '@/components/Roadmap'
import CoFounders from '@/components/CoFounders'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main>
            <Header />
            <Hero />
            <Features />
            <PlayToEarn />
            <Tokenomics />
            <Roadmap />
            <CoFounders />
            <Contact />
            <Footer />
        </main>
    )
}

