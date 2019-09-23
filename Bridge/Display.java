// 抽象的な「何かを表示するもの」
// 「機能のクラス階層」の最上位にあるクラス

public class Display {
    // Displayクラスの実装を表すクラスのインスタンスをフィールドとして持つ
    // このインスタンスが今後の処理で使われる
    private DisplayImpl impl;
    // コンストラクタで実装を表すクラスのインスタンスを受け取る
    public Display(DisplayImpl impl) {
        this.impl = impl;
    }
    public void open() {
        impl.rawOpen();
    }
    public void print() {
        impl.rawPrint();
    }
    public void close() {
        impl.rawClose();
    }
    public final void display() {
        open();
        print();
        close();
    }
}
