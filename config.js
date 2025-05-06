export default {
  development: {
    hostBackend: process.env.NEXT_PUBLIC_HOST_BACKEND || 'http://localhost:8003',
    hostBackendServerSide: process.env.HOST_BACKEND || 'http://localhost:8003',
    host: process.env.NEXT_PUBLIC_HOST || 'http://203.150.243.195:3003',
    lifeTimeToken: 30,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    ckAuthKey: "ergo-web-backoffice",
    title_web: "Ergo back office",
    description_web: "Ergo back office description",
    og_image: process.env.NEXT_PUBLIC_HOST + "/images/logo.png",
    token_secret: process.env.TOKEN_SECRET,
    source_type_image: process.env.NEXT_PUBLIC_SOURCE_TYPE || 'http://localhost:8003/api/v1/source_type/image',
    // hostBackendArticle: process.env.NEXT_PUBLIC_HOST_BACKEND_ARTICLE || 'http://localhost:3306'
  },
  production: {
    hostBackend: process.env.NEXT_PUBLIC_HOST_BACKEND,
    hostBackendServerSide: process.env.HOST_BACKEND,
    host: process.env.NEXT_PUBLIC_HOST,
    lifeTimeToken: 30,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    ckAuthKey: "ergo-web-backoffice",
    title_web: "Ergo back office",
    description_web: "Ergo back office description",
    og_image: process.env.NEXT_PUBLIC_HOST + "/images/logo.png",
    token_secret: process.env.TOKEN_SECRET,
    source_type_image: process.env.NEXT_PUBLIC_SOURCE_TYPE,
    // hostBackendArticle: process.env.NEXT_PUBLIC_HOST_BACKEND_ARTICLE || 'http://localhost:3306'
  },
  test: {
    hostBackend: process.env.NEXT_PUBLIC_HOST_BACKEND || 'http://localhost:3001',
    hostBackendServerSide: process.env.HOST_BACKEND || 'http://203.150.107.8:3300/api/v1/',
    host: process.env.NEXT_PUBLIC_HOST || 'http://localhost:3003',
    lifeTimeToken: 30,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
    ckAuthKey: "ergo-web-backoffice",
    title_web: "Ergo back office",
    description_web: "Ergo back office description",
    og_image: process.env.NEXT_PUBLIC_HOST + "/images/logo.png",
    token_secret: process.env.TOKEN_SECRET,
    source_type_image: process.env.NEXT_PUBLIC_SOURCE_TYPE,
  }
}[process.env.NODE_ENV || 'development']
