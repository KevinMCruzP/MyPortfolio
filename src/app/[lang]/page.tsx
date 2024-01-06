import Main from '@/src/components/home/Main'
import ShapeDivider from '@/src/components/home/ShapeDivider'
import { Locale } from '@/i18n-config'
import RevealLeftToRight from '@/src/components/utils/RevealLeftToRight'
import ContactMeFooter from '@/src/components/home/ContactMeFooter'
import { Icons } from '@/src/assets/icons'
import CardProject from '@/src/components/CardProject'
import MoveIt from '@/public/img/Moveit.png'
import Feedback from '@/public/img/Feedback.png'
import Podcastr from '@/public/img/Podcastr.png'
import RedditClone from '@/public/img/RedditClone.png'
import Dashadmin from '@/public/img/Dashadmin.png'
import PortfolioImg from '@/public/img/Portfolio.png'
import MessageImg from '@/public/img/Message.png'
import { getDictionary } from '@/src/get-dictionary'


export default async function Home ({
  params: { lang },
}: {params: {lang: Locale}}) {

  const dictionary = await getDictionary(lang)

  return (
    <div className='h-full w-full '>
      <RevealLeftToRight width='w-full'>
        <section className='h-screen w-full max-w-screen-xl m-auto'>
            <Main lang={lang} />
        </section>
      </RevealLeftToRight>
      
      <section className='min-h-screen w-full bg-bg flex flex-col'>
        <RevealLeftToRight width='w-full'>
          <ShapeDivider />
        </RevealLeftToRight>

        <div className='flex flex-1 w-full bg-bg_secondary'>

          <div className='w-full max-w-screen-lg mx-auto flex flex-col px-2 py-8 gap-5'>
            <div className='flex justify-between'>
              <span className='text-lg font-medium'>📂 My projects</span>
              <span className='flex text-xs font-semibold items-center text-sky-700 cursor-pointer hover:opacity-90'>
                See all
                <Icons.ArrowRight className='w-4 h-4' />
              </span>
            </div>

            <CardProject title={dictionary.portfolio.podcast.title} description={dictionary.portfolio.podcast.description} img={Podcastr} pageURL='https://podcastr-next-kevinmcruzp.vercel.app/' sourceCodeURL='https://github.com/KevinMCruzP/podcastr-next' />
            <CardProject title={dictionary.portfolio['reddit-clone'].title} description={dictionary.portfolio['reddit-clone'].description} img={RedditClone} pageURL='https://reddit-clone-nextjs-firebase-gamma.vercel.app/' sourceCodeURL='https://github.com/KevinMCruzP/Reddit_Clone-Nextjs-Firebase' imgPosition='left' />
            <CardProject title={dictionary.portfolio['dash-admin'].title} description={dictionary.portfolio['dash-admin'].description} img={Dashadmin} pageURL='https://dashadmin-kevinmcruzp.vercel.app/dashboard' sourceCodeURL='https://github.com/KevinMCruzP/dashadmin' />

          </div>

        </div>
      </section>

      <ContactMeFooter lang={lang} />
      
    </div>
  )
}
