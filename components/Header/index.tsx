import Head from "next/head";
import { HeadTagProps } from "types/interfaces";

const HeadTags = ({ title, image, description, locale, currentUrl, mainColor }: HeadTagProps) => {
  return (
    <Head>
      <meta name="apple-mobile-web-app-title" content={title ?? 'Kudzai Mabika • Portfolio'} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="application-name" content={title ?? 'Kudzai Mabika • Portfolio'} />
      {mainColor && <meta name="theme-color" content={mainColor} />}
      <title>{title ?? 'Kudzai Mabika • Portfolio'}</title>
      <meta name="title" property="title" content={title ?? 'Kudzai Mabika • Portfolio'} />
      <meta
        name="description"
        property="description"
        content={description ?? 'Kudzai Mabika • Portfolio'}
      />
      <meta name="og:title" property="og:title" content={title ?? 'Kudzai Mabika • Portfolio'} />
      <meta
        name="og:description"
        property="og:description"
        content={description ?? 'Kudzai Mabika • Portfolio'}
      />
      <meta name="og:image" property="og:image" content={image} />
      <meta name="og:url" property="og:url" content={currentUrl} />
      <meta name="og:type" property="og:type" content="website" />
      <meta name="og:locale" property="og:locale" content={locale} />
      <meta name="twitter:url" property="twitter:url" content={currentUrl} />
      <meta name="twitter:card" property="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        property="twitter:title"
        content={title ?? 'Kudzai Mabika • Portfolio'}
      />
      <meta
        name="twitter:description"
        property="twitter:description"
        content={description ?? 'Kudzai Mabika • Portfolio'}
      />
      <link
        rel="shortcut icon"
        href={`/images/favicon/favicon.png`}
      />
      <link
        rel="icon"
        sizes="192x192"
        href={`/images/favicon/favicon.png`}
      />
    </Head>
  )
}

export default HeadTags;