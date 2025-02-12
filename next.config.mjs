/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
//* Remove the output and the basePath if it doesn't work when we run dev. heeehee. this was just for exporting the static site
const nextConfig = {
    output: 'export',
    basePath: isProd ? '/spinwintest' : '',
};

export default nextConfig;
