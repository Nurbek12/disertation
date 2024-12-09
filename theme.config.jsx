import Link from 'next/link'

export default {
    logo: <span>Диссертация</span>,
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content="Диссертация" />
            <meta property="og:description" content="The next site builder" />
            <meta property="og:type" content="website" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "Website",
                        "name": "Диссертация",
                        "url": "https://samarkand-veterinariya-med-disertatio.netlify.app",
                    }),
                }}
            />
        </>
    ),
    search: {
        placeholder: 'Поиск документации...'
    },
    footer: {
        component: false
    },
    themeSwitch: {
        useOptions() {
          return {
            light: 'Светлая',
            dark: 'Темная',
            system: 'Системная'
          }
        }
    },
    gitTimestamp: (
        <div></div>
    ),
    editLink: {
        component: false
    },
    feedback: {
        content: false
    },
    toc: {
        title: 'На этой странице',
        backToTop: 'Прокрутить вверх',
        extraContent: (
            <div className='flex flex-col gap-4'>
                <Link href='/news' className='text-gray-300 hover:underline hover:text-white'>Янгиликлар</Link>
                <Link href='/references' className='text-gray-300 hover:underline hover:text-white'>Фойдаланилган адабиётлар рўйхати</Link>
            </div>
        )
    },
}