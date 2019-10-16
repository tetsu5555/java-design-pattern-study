// 機能クラスの階層
// 機能はこっちに実装する
// 機能を拡張する場合は継承を使う？
class Display {
    constructor(impl) {
        this.impl = impl;
    }
    open() {
        this.impl.open();
    }
    print() {
        this.impl.print();
    }
    close() {
        this.impl.close();
    }
    display() {
        this.open();
        this.print();
        this.close();
    }
}

class DisplayMultiple extends Display {
    constructor(impl) {
        super(impl);
    }
    displayMultiple(time) {
        this.open();
        for (let i = 0; i < time; i++) {
            this.print();
        }
        this.close();
    }
}

class DisplayStair extends Display {
    constructor(impl) {
        super(impl);
    }
    displayStair(time) {
        this.open();
        for (let i = 0; i < time; i++) {
            this.print();
        }
        this.close();
    }
}

// 実装クラスの階層
class DisplayImplementor {
    constructor(message) {
        this.message = message;
        this.width = message.length;
    }
    open() {
        process.stdout.write("+");
        for(let i = 0; i < this.width; i++) {
            process.stdout.write("-");
        }
        process.stdout.write("+");
        console.log("");
    }
    print() {
        process.stdout.write("|");
        process.stdout.write(this.message);
        process.stdout.write("|");
        console.log("");
    }
    close() {
        process.stdout.write("+");
        for(let i = 0; i < this.width; i++) {
            process.stdout.write("-");
        }
        process.stdout.write("+");
        console.log("");
    }
}

class SlashDisplayImplementor {
    constructor(message) {
        this.message = message;
        this.width = message.length;
    }
    open() {
        process.stdout.write("<");
    }
    print(time) {
        for (let i = i; i < time; i++) {
            process.stdout.write("*")
        }
    }
    close() {
        process.stdout.write(">");
    }
}

// コード実行
const dispImpl = new DisplayImplementor("Hello, World");
const disp = new Display(dispImpl);
const dispMulti = new DisplayMultiple(dispImpl);

disp.display();
dispMulti.displayMultiple(8);
