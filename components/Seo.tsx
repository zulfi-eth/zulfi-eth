import Head from 'next/head';

export interface Meta {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

export const Seo = ({ ...props }) => {
  const { ...customMeta }: Meta = props;
  const meta: Meta = {
    title: 'zulfi-eth',
    description: 'Developer, designer and course creator.',
    image: '',
    type: 'website',
    ...customMeta,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta content={meta.description} name="description" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="zulfi-eth" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:site" content="@zulfi_eth" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      <link
        rel="z-icon"
        sizes="180x180"
        href="/static/images/z-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/images/z-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/images/z-icon.png"
      />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/static/images/z-icon.png"
        color="#171717"
      />
      <meta name="msapplication-TileColor" content="#171717" />
      <meta name="theme-color" content="#171717" />
    </Head>
  );
};
