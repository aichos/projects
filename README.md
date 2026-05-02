# West Maui Chocolatier — Static Site (HTML + CSS)

純粋なHTML + CSSで書かれた静的サイト。JavaScript不要。

## 構成

```
static/
├── index.html              # TOP
├── about.html              # ブランドストーリー
├── gift.html               # 用途別ギフト
├── story.html              # 素材と製法
├── faq.html                # よくあるご質問
├── contact.html            # お問い合わせ
├── cart.html               # ショッピングカート
├── products/
│   ├── index.html          # 商品一覧
│   ├── signature-bonbons-12.html
│   ├── lilikoi-bonbon.html
│   ├── geode-hearts.html
│   ├── kauai-truffles.html
│   ├── macadamia-bar.html
│   ├── moon-bonbon.html
│   ├── easter-egg.html
│   └── tasting-flight.html
├── assets/                 # 商品写真・ストーリー画像（21枚）
├── styles.css              # 共有スタイル
└── vercel.json             # Vercel設定（cleanUrls）
```

## Vercelへのデプロイ

1. このフォルダ全体をGitリポジトリにコミット
2. Vercel に新規プロジェクトとしてインポート
3. Root Directory を `static/` に設定（または `static/` の中身をリポジトリのルートに置く）
4. ビルドコマンドなし、出力ディレクトリもそのまま — Vercelが自動的に静的サイトとして配信

ドラッグ&ドロップでも可:
- Vercelダッシュボード > New Project > Deploy without Git
- `static/` フォルダをドロップ

## ローカル確認

`static/index.html` をブラウザで直接開けば動作します。
