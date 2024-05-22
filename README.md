# Megumi UI

自分好みのUIテンプレートを作っています。

次のコマンドでNext.jsのプロジェクト作成時にテンプレートとして使用できます。

```bash
pnpm create next-app --example https://github.com/mizphses/megumi
```

## GTMの設定

GTMを使用して、イベントを取得するなどの分析操作を行うことができます。

実施するには、環境変数`NEXT_PUBLIC_GTM_ID`にGoogle Tag Managerから取得したIDを登録してください。（下図の青色部分です）

![image](https://github.com/mizphses/megumi/assets/49401718/5600d9d1-6cb0-4165-a91d-6874bba76d26)
