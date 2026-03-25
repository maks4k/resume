import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Products } from '@/components/Resume/Content/ui/products/Products'

export const ProductsPage = () => {
  return (
    <>
      <Helmet>
        <title>Услуги | Создание сайтов в Брянске — веб-разработка на React и Next.js</title>
        <meta name="description" content="Профессиональная веб-разработка в Брянске. Создание современных сайтов и приложений на React и Next.js. Полный цикл разработки. Включая SEO-оптимизацию и развертывание приложений. Сайты-визитки. Лендинги. Создание сайтов с нуля. Разработка сайтов с нуля. Интернет-магазины, корпоративные порталы, лендинги под ключ." />
        <meta name="keywords" content="услуги веб-разработка брянск, создание сайтов брянск цены, react разработка заказать, node.js программист брянск, лендинг под ключ, сайт визитка брянск, создание интернет-магазина брянск, разработка сайтов с нуля брянск" />
        <link rel="canonical" href="https://sozdat-moshniy-web.ru/products" />
        
        {/* Open Graph для страницы Услуги */}
        <meta property="og:title" content="Услуги веб-разработки в Брянске | Создание сайтов на React" />
        <meta property="og:description" content="Профессиональная веб-разработка в Брянске. Создание сайтов на React и Node.js с SEO и развертыванием. Сайты-визитки, лендинги, интернет-магазины, корпоративные порталы. Полный цикл разработки. Закажите сайт под ключ." />
        <meta property="og:url" content="https://sozdat-moshniy-web.ru/products" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sozdat-moshniy-web.ru/og-image.png" />
      </Helmet>
      
      <Products />
    </>
  )
}