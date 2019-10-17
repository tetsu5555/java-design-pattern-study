// 期待する挙動
// const earth = new Earth();
// const earth2 = new Earth();

// earth === earth2 ? console.log("Singleton") : console.log("Not singleton");

// 第一段階
// インスタンスがパブリックなため書き換えられてしまう
// function Earth() {
//      既存のインスタンスが存在すれば返す
//     if (typeof Earth.instance === "object") {
//         return Earth.instance;
//     }

//     this.name = "Earth";
//     this.age = "4.7+E9";

//     キャッシュする
//     Earth.instance = this;
//     return this;
// }




// 第二段階
// クロージャーを使用
function Earth() {
    // キャッシュされたインスタンス
    var instance = this;

    Earth = function Earth() {
        return instance;
    }

    Earth.prototype = this;

    instance = new Earth();

    instance.constructor = Earth;

    instance.name = "Earth";
    instance.age = "4.7+E9";

    return instance;
}

var earth = new Earth();
console.log(earth.constructor === Earth);
console.log(earth.constructor);
console.log(Earth);


// クラスで書くとこんな感じか
class Hoge {
	constructor(name) {
		if (Hoge.instance !== undefined) return Hoge.instance;
		this.name = name;
		Hoge.instance = this;
    }
}

var hoge = new Hoge('name');
var newHoge = new Hoge('name');

console.log(hoge === newHoge);
