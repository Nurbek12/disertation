export default {
    logo: <span>Диссертация</span>,
    head: (
        <>
            <title>Диссертация</title>
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
                        "url": "https://examole.com",
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
    editLink: {
        component: false
    },
    feedback: {
        content: false
    },
    toc: {
        title: 'На этой странице',
        backToTop: 'Прокрутить вверх'
    },
}