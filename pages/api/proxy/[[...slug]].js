import { createProxyMiddleware } from "http-proxy-middleware";

const rewrite = function () {
  if (process.env.NODE_ENV === "development") {
    return { "/api/proxy": "/" };
  } else {
    return { "/api/proxy": "/" };
  }
};

export default createProxyMiddleware({
  target: process.env.NEXT_PUBLIC_API_URL,
  secure: false,
  changeOrigin: true,
  pathRewrite: rewrite(),
  onError(err, req, res) {
    res.json(err || {});
  },
  onProxyReq(proxyReq, req) {
    if ((req.method == "POST" || req.method == "PATCH" || req.method == "PUT") && req.body) {
      if (req.body) {
        const bodyData = JSON.stringify(req.body);
        // proxyReq.setHeader('Content-Type', 'application/json');
        proxyReq.setHeader("Content-Length", Buffer.byteLength(bodyData));
        proxyReq.write(bodyData);
      }
    }
  },
});

export const config = {
  api: {
    // Enable `externalResolver` option in Next.js
    externalResolver: true,
    bodyParser: false,
  },
};
