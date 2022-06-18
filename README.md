# Deno REST API

## インストール

```
curl -fsSL https://deno.land/install.sh | sh
```

.zshrc に追加(パスを通す)

```
export DENO_INSTALL="/Users/kata/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"
```

反映して確認

```
exec $SHELL -l

❯ deno --version
deno 1.23.0 (release, x86_64-apple-darwin)
v8 10.4.132.5
typescript 4.7.2
```

## サーバ起動

```
deno run --allow-net src/server.ts
```
