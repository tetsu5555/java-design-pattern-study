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
- （初期化が？）重い処理のクラス(RealSubject)と軽い処理のクラス(Proxy)を分けて、実際い重い処理をする時に初期化して処理を実行する。それまではProxyで対応する。
- ProsyとRealSubjectを分けることで、プログラムの部品化が進み、個別に修正を加えることができる。
- 透過的ということ
  - Printableインターフェースを実装してるため、Printerを使っても、間にPrinterProxyが入っても問題なく使用できること
- 様々なProxy
  - Virtual Proxy
  - Remote Proxy
  - Access Proxy
