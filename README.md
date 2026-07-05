# ロボカップ研究部webサイト(仮)

rrcsangi.com

チームごとにディレクトリを作って、そこにページを置いてもらう形になっています<br>
<span style="color: gray">
(中身がラズパイ3である関係で、Next.jsサーバーをぽんぽん立てられるか怪しかったのでこうなっています...)
</span>

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
上で言ったとおり、src/app/チーム名 を編集してもらうことになっています

(TODO もうちょっと何か書く？)

メインからブランチをきって

新しくパッケージを入れたいときは教えてください


## 完成したら
PRを送ってください！
このとき、差分は自チームディレクトリ以下とproxy.tsだけにしてください

マージされてちょっとしたら(チーム名).rrcsangi.comで作ったページが見れるようになってると思います。



(PR気付いてなかったら`discordid: oisi_gohan`に言ってください🙏)



## misc
### 自チームのページを見る
デフォルトでは、localhost:3000にアクセスするとrrcsangi.comと同じページが表示されます。src/proxy.tsのlocalhostのあるif文の箇所をrootからチームのディレクトリに変えると見れます

自己責任でやってほしいですが、PCのほうのhostsファイルを書き換える方法もあります

### commit/push
commit, pushにはbiomeのチェック
pnpm run lint:fix
