# cloud-run-jobs-node-date

Javascript(Typescript)にて環境によらない日本時間取得

Dockerfile を別階層に配置したときの Cloud Run Jobs 操作を gcloud コマンドで行う

## 事前準備

gcloud 使えるようにしておく

## Javascript 生成

```
(npm install 完了前提で)
$ npx tsc
```

## お試し実行

```
$ node dist/index.js
```

## プロジェクト設定

```
$ gcloud projects list
...

$ gcloud config list
...

$ gcloud config set project [USE_PROJECT_ID]
$ gcloud config list
...
```

## イメージの作成と GCR へのプッシュ

```
$ gcloud builds submit --config config/cloudbuild.yml
```

Artifact Registry を利用する場合は、事前にリポジトリを作成してイメージ名を Artifact Registry 用の形式に合わせればいいと思う

## Cloud Run Jobs のジョブを作成

```
$ gcloud beta run jobs create cloud-run-jobs-node-date --image gcr.io/[USE_PROJECT_ID]/cloud-run-jobs-node-date --region asia-northeast1
```

## ジョブの手動実行

```
$ gcloud beta run jobs execute cloud-run-jobs-node-date --region asia-northeast1
```

## イメージの更新

上記のイメージの作成と GCR へのプッシュを実行する

ジョブの実行時は latest なイメージを利用するようになっている（ジョブの詳細にて確認）
