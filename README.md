# ロボカップ研究部webサイト(仮)

rrcsangi.com

チームごとにディレクトリを作って、そこにページを置いてもらう形になっています<br>
<span style="color: gray">
(中身がラズパイ3である関係で、Next.jsサーバーをぽんぽん立てられるか怪しかったのでこうなっています...)
</span>

新しくパッケージを入れたいときは教えてください

## webページ立ち上げまで
pnpmが必要です
### 初期設定
以下のコマンドを実行してください
```
pnpm install
```

### 起動方法
```
pnpm run dev
```
Webサイトが`http://localhost:3000`で起動します

## 開発について
### localhost:3000にアクセスしたときのページを変える
デフォルトでは、localhost:3000にアクセスするとrrcsangi.comにアクセスしたときと同じページが表示されるようになっています。src/proxy.tsを編集することでこれを変えられます

hostsファイルを書き換える方法もあります

### commit/push
commit, pushにはbiomeのチェック
pnpm run lint:fix
