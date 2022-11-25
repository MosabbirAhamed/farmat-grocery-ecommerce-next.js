/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i0.wp.com'],
  },
  env: {
    FIREBASE_API_KEY: "AIzaSyCRBLWUbObNVKoZGJamikoWIgmlo-mEV4I",
    FIREBASE_AUTH_DOMAIN: "farmart-afb8b.firebaseapp.com",
    FIREBASE_PROJECT_ID: "farmart-afb8b",
    FIREBASE_STORAGE_BUCKET: "farmart-afb8b.appspot.com",
    FIREBASE_MESSAGING_ID: "852333223241",
    FIREBASE_APP_ID: "1:852333223241:web:008cf4ba8868f1c5bd4e98"
  }
}

module.exports = nextConfig
