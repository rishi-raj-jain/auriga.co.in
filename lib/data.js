export const defaultDescription = `Providing renewable, financial and innovative solutions.`

export const defaultTitle = 'Auriga | Providing renewable, financial and innovative solutions.'

export const deploymentUrl =
  process.env.NODE_ENV == 'production' ? 'https://auriga.co.in' : 'http://localhost:3000'

export const structuredData = {
  '@id': deploymentUrl,
  '@context': 'https://schema.org',
  '@type': 'Website',
  name: defaultTitle,
  description: defaultDescription,
  url: deploymentUrl,
}
