import React from 'react'
import { Helmet } from 'react-helmet-async'
import { About } from '@/components/Resume/Content/ui/about/About'

export const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>О нас | Веб-разработка в Брянске — команда профессионалов</title>
        <meta name="description" content="Профессиональная веб-разработка в Брянске. Создание современных сайтов и приложений на React и Next.js. Полный цикл разработки. Включая SEO-оптимизацию и развертывание приложений. Сайты-визитки. Лендинги. Создание сайтов с нуля. Разработка сайтов с нуля. Узнайте больше о нашей команде и подходах к работе." />
        <meta name="keywords" content="о нас веб-разработка брянск, команда разработчиков брянск, создание сайтов брянск, react разработка, node.js программист, создание сайтов с нуля брянск" />
        <link rel="canonical" href="https://sozdat-moshniy-web.ru/about" />
        
        {/* Open Graph для страницы About */}
        <meta property="og:title" content="О нас | Веб-разработка в Брянске" />
        <meta property="og:description" content="Профессиональная веб-разработка в Брянске. Создание сайтов на React и Node.js с SEO и развертыванием. Команда профессионалов. Более 50 реализованных проектов. Сайты-визитки, лендинги, интернет-магазины." />
        <meta property="og:url" content="https://sozdat-moshniy-web.ru/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sozdat-moshniy-web.ru/og-image.png" />
      </Helmet>
      
      <About />
    </>
  )
}