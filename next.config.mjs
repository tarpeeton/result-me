/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["ucarecdn.com", "shotambrat.github.io"], // Добавьте домен, откуда будут загружаться изображения
    deviceSizes: [640, 750, 1080, 1200, 1920], // Задайте размеры для оптимизации под разные устройства
    imageSizes: [16, 32, 48, 64, 96], // Размеры для использования внутри компонента Image
    minimumCacheTTL: 60, // Минимальное время кеша (например, 60 секунд)
    formats: ["image/avif", "image/webp"], // Задайте форматы для сжатия изображений
  },
  reactStrictMode: false, // Включает строгий режим React
};

export default nextConfig;
