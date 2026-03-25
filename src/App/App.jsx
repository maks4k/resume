import { Helmet } from 'react-helmet-async'
import { AppRouter } from './AppRouter'

function App() {
  return (
    <>
      <Helmet>
        {/* Язык страницы */}
        <html lang="ru" />
        
        {/* Базовые метатеги */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="IG_6XEmUB3JvKKE0m4RfIrTVppNHLwBKseTJEOrbM3U" />
        
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Шрифты */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap" rel="stylesheet" />
        
        {/* Управление индексацией */}
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Language" content="ru" />
        
        {/* Геотаргетинг для Брянска */}
        <meta name="geo.region" content="RU-BRY" />
        <meta name="geo.placename" content="Брянск" />
        
        {/* Open Graph базовые (переопределяются на страницах) */}
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sozdat-moshniy-web.ru/og-image.png" />
        
        {/* Базовый title и description (будут переопределены на страницах) */}
        <title>Веб-разработка Брянск | Создание сайтов</title>
        <meta name="description" content="Профессиональная веб-разработка в Брянске. Создание современных сайтов и приложений на React и Next.js. Полный цикл разработки.Включая Seo-оптимизацию и Развертывание приложений. Сайты-визитки.Лендинги. Создание сайтов с нуля. Разработка сайтов с нуля." />
        <meta name="keywords" content="веб-разработка брянск, создание сайтов брянск, react разработка, node.js программист,seo-оптимизация,развертывание веб-приложения .Сайты-визитки.Лендинги. Создание сайтов с нуля. Разработка сайтов с нуля." />
        
        {/* Open Graph для главной */}
        <meta property="og:title" content="Веб-разработка Брянск | Создание сайтов" />
        <meta property="og:description" content="Профессиональная веб-разработка в Брянске. Создание сайтов на React и Node.js с SEO и развертыванием. Сайты-визитки.Лендинги" />
        <meta property="og:url" content="https://sozdat-moshniy-web.ru" />
        
        {/* Каноническая ссылка для главной */}
        <link rel="canonical" href="https://sozdat-moshniy-web.ru" />
      </Helmet>
      
      <AppRouter />
    </>
  )
}

export default App