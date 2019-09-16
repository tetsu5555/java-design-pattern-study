public class PrintBanner implements Print {
    // フィールドにBannerを持つ
    private Banner banner;
    // コンストラクタでBannerを初期化して、フィールドに格納する
    public PrintBanner(String string) {
        this.banner = new Banner(string);
    }
    // それぞれのメソッドでBannerのメソッドを呼び出す
    public void printWeak() {
        this.banner.showWithParen();
    }
    public void printStrong() {
        this.banner.showWithAster();
    }
}
