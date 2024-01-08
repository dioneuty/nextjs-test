/** @type {import('next').NextConfig} */

const api = '';

const nextConfig = {
    async redirects(){
        return [
            {
                source : '/movies2'
                ,destination : '/about'
                ,permanent : false
            }
        ]
    },
    async rewrites(){
        return [
            {
                source : '/get-movie'
                ,destination : '/movie/api'
            }
        ]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                port: '',
                pathname: '/t/p/w500/**',
            },
        ],
    },
}

module.exports = nextConfig
