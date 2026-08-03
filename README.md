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
2. 在仓库 **Settings → Pages** 中选择 **Deploy from a branch**。
3. 选择 `main` 分支与 `/(root)` 目录并保存。
4. 自定义域名可在同一页面绑定 `dingtuedu.com`，并按 GitHub 提示配置 DNS。
