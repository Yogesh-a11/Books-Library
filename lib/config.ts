

const config = {
    
    env: {
        resendToken: process.env.RESEND_TOKEN!,
        apiEndpoint: process.env.NEXT_PUBLIC_API_ENDPOINT,
        prodApiEndpoint: process.env.NEXT_PUBLIC_PROD_API_ENDPOIT,
        imagekit: {
            publicKey : process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
            privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
            urlEndpoint : process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT
        },
        databaseUrl: process.env.DATABASE_URL,
        upstash: {
            redisUrl: process.env.UPSTASH_REDIS_URL!,
            redisToken: process.env.UPSTASH_REDIS_REST_TOKEN!,
            qstashUrl: process.env.QSTASH_URL!,
            qstashToken: process.env.QSTASH_TOKEN!
        },
    }
}

export default config;