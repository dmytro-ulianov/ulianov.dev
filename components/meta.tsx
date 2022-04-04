interface MetaProps {
  description?: string
  image?: string
  title?: string
  url?: string
}

export function Meta(props: MetaProps) {
  const { title, description, url, image } = props
  return (
    <>
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
      {url && <meta property="og:url" content={url} />}

      {title && <meta property="twitter:title" content={title} />}
      {description && (
        <meta property="twitter:description" content={description} />
      )}
      {image && <meta property="twitter:image" content={image} />}

      <meta property="og:type" content="website" />
    </>
  )
}
