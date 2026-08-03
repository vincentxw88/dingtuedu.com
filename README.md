# 鼎途教育公司网站

适用于 GitHub Pages 的纯静态网站，无需构建步骤。

## 本地预览

在本目录运行：

```powershell
& 'C:\\Users\\dingtu.vincent\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\bin\\node.exe' preview-server.js
```

然后访问 `http://localhost:8080`。

## GitHub Pages 部署

1. 将此目录初始化为 Git 仓库并推送到 GitHub。
2. GitHub Actions 会在每次推送到 `main` 后自动部署到 GitHub Pages。
3. 在仓库 **Settings → Pages** 中选择 **GitHub Actions** 作为发布源。
4. 根目录的 `CNAME` 已指定 `dingtuedu.com`；请按 GitHub 提示将域名 DNS 指向 GitHub Pages。
