オブジェクト指向でundo、redoなどを実装する際は、インスタンスの持っている情報を保持しておいて、保存しておいた状態から元の状態に戻せる必要がある。
しかし、インスタインスの復元のために不用意にアクセスを許してしまうと、クラスの内部構造に依存したコードがプログラムのあちこちに散らばりクラスの修正がしにくくなる（カプセル化の破壊）

Mementoパターン
インスタンスの状態を表す役割を導入してカプセル化の破壊に陥ることなく保存、復元を行う

- undo
- redo
- history
- snapshot
ができるようになる


Mementoクラス
- Gamerの状態を表現するクラス
- moneyとfruitsはGamerクラスからアクセスさせたいので、privateにしない
- Mementクラスのコンストラクタはpulicが付いていない。
  - インスタンスは誰でも作れる訳ではなく、同じパッケージに属しているクラスからしか使うことができない
- gameパッケージ以外からMementoを操作することができない

## 登場人物
- Originator(Gamer)
  - 自分の状態を保存したい時にMementoを作る
  - 以前のMementoを渡されるとその時点に戻る
- Memento(Memento)
  - Originatorの内部情報をまとめる
    - 誰にでも情報を公開しない
    - 2つのインターフェースを持つ
        - wide interface
        - narrow interface
- Caretaker(Main)
  - Originatorの状態を保存したい時にOriginatorにそのことを伝える
      - Originatorはそのことを受けてMementoを作り、Caretakerに渡す
  - Mementoを保持しておく(内部の状態は見れない)


## memo
コンパイルするとunchecked警告が出たから以下のような書き換えを行った
```
(<ClassName>)<cast target>
↓
<ClassName>.class.cast(<cast target>)
```
@SuppressWarnings("unchecked")でもいける？

