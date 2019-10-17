Proxyパターン

## 登場人物
- Subject(Printable inteface)
  - ProxyとRealSubjectを同一視するためのインターフェースを定める。
  - Clientは、ProxyとRealSubjectの違いを意識する必要がない
- Proxy(Printer Proxy)
  - Clientからの要求をできるだけ処理する
  - 自分だけでできなくなったらRealSubjectに処理を渡す
    - 本当にRealSubjectが必要になってからRealSubjectを生成する
- RealSubject(Printer)
  - Proxyでは処理しきれなくなったら生成され、処理をする
- Client(Main)

## memo
初期化に時間がかかるシステムが場合、起動時点では必要ない機能まで全部初期化すると起動に時間がかかってしまう。（ユーザーのストレスになる）だから、その機能を使う段階になって初めて初期化した方が、ユーザーに与えるストレスは少なくなる
