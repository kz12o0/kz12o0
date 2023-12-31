---
sidebar_label: 環境
sidebar_position: 2
---

# 実行環境の準備

:::info
ボットのバージョンによって、必要な環境は異なります。このページではv3.x系で必要になる環境を解説しています。v2.x系での実行環境については、[`v2`ブランチのREADME](https://github.com/mtripg6666tdr/Discord-SimpleMusicBot/tree/v2#readme)を参照してください。
:::

## 必須事項
- Node.js v12以上v18以下がサポートされていて、インストールされていること  
- `npm`が利用できること。
- `ffmpeg`が利用できること。

## 推奨事項
- Puthon2.xまたはPython3.xがインストールされていること。
- Unix系の環境であれば、`nscd`がインストールされていること。

:::info
`nscd`は、`apt`でインストールできます
:::

## 注意事項
- `ffmpeg`は、インストール時に自動的にダウンロードされるため、事前にダウンロードしたり、パスを通したりする必要はありませんが、一部の環境ではこれが利用できない場合があります。その際には、`npm install`したときに、その旨の表示がされます。この場合、自分で別途ffmpegをインストールする必要があります。
- 一部の`ffmpeg`のバージョンは対応していない可能性があるため、最新版を推奨します。
- Cloudflare WARPなどが設定されているとうまく動かないことがあるみたいなので、動作しないようであれば設定を解除してください。

