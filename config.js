export default {
  development: {
    hostBackend: process.env.NEXT_PUBLIC_HOST_BACKEND || 'http://localhost:3001',
    hostBackendServerSide: process.env.HOST_BACKEND || 'http://localhost:3001',
    host: process.env.NEXT_PUBLIC_HOST || 'http://localhost:3003',
    lifeTimeToken: 55 * 3,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    ckAuthKey: "ergo-web-backoffice",
    title_web: "Ergo back office",
    description_web: "Ergo back office description",
    og_image: process.env.NEXT_PUBLIC_HOST + "/images/logo.png",
    token_secret: process.env.TOKEN_SECRET,
    // hostBackendArticle: process.env.NEXT_PUBLIC_HOST_BACKEND_ARTICLE || 'http://localhost:3306'
  },
  production: {
    hostBackend: process.env.NEXT_PUBLIC_HOST_BACKEND,
    hostBackendServerSide: process.env.HOST_BACKEND,
    host: process.env.NEXT_PUBLIC_HOST,
    lifeTimeToken: 55 * 3,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    ckAuthKey: "ergo-web-backoffice",
    title_web: "Ergo back office",
    description_web: "Ergo back office description",
    og_image: process.env.NEXT_PUBLIC_HOST + "/images/logo.png",
    token_secret: process.env.TOKEN_SECRET,
    // hostBackendArticle: process.env.NEXT_PUBLIC_HOST_BACKEND_ARTICLE || 'http://localhost:3306'
  },
  test: {
    hostBackend: process.env.NEXT_PUBLIC_HOST_BACKEND || 'http://localhost:3001',
    hostBackendServerSide: process.env.HOST_BACKEND || 'http://203.150.107.8:3300/api/v1/',
    host: process.env.NEXT_PUBLIC_HOST || 'http://localhost:3003',
    lifeTimeToken: 55 * 3,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    ckAuthKey: "ergo-web-backoffice",
    title_web: "Ergo back office",
    description_web: "Ergo back office description",
    og_image: process.env.NEXT_PUBLIC_HOST + "/images/logo.png",
    token_secret: process.env.TOKEN_SECRET,
  }
}[process.env.NODE_ENV || 'development']
