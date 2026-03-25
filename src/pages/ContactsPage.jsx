import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Contacts } from '@/components/Resume/Content/ui/contacts/Contacts'

export const ContactsPage = () => {
  return (
    <>
      <Helmet>
        <title>Контакты | Веб-разработка в Брянске — свяжитесь с нами</title>
        <meta name="description" content="Профессиональная веб-разработка в Брянске. Свяжитесь с нами для создания сайтов и приложений на React и Next.js. Полный цикл разработки. Включая SEO-оптимизацию и развертывание. Сайты-визитки. Лендинги. Создание сайтов с нуля. Телефон, email, адрес офиса. Бесплатная консультация по веб-разработке." />
        <meta name="keywords" content="контакты веб-разработка брянск, связаться с разработчиком брянск, создание сайтов брянск контакты, react разработка контакты, node.js программист брянск, телефон веб-разработчика брянск" />
        <link rel="canonical" href="https://sozdat-moshniy-web.ru/contacts" />
        
        {/* Open Graph для страницы Контакты */}
        <meta property="og:title" content="Контакты | Веб-разработка в Брянске" />
        <meta property="og:description" content="Профессиональная веб-разработка в Брянске. Свяжитесь с нами — обсудим ваш проект и рассчитаем стоимость разработки сайта. Создание сайтов на React и Node.js. Бесплатная консультация." />
        <meta property="og:url" content="https://sozdat-moshniy-web.ru/contacts" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sozdat-moshniy-web.ru/og-image.png" />
      </Helmet>
      
      <Contacts />
    </>
  )
}