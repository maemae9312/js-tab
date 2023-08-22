// 即時関数
// グローバル汚染を防ぐために、関数内で定数、変数を定義する
(() => {
    // タブ取得
    const $doc = document;
    const $tab = $doc.getElementById('js-tab');

    // nav取得
    // querySelectorAll → DOM要素の中から条件に当てはまるDOMを取得する
    const $nav = $tab.querySelectorAll('[data-nav]');
    
    // contents取得
    const $content = $tab.querySelectorAll('[data-content]');
    
    // 初期化
    // JavaScriptで最初に実行させたい命令の時に、initをよく使う
    const init = () => {

    };
})();

// メモ
// 変数名に$がついていると、DOM要素だよと明示的に表すことができる