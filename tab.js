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
    
    const active_class = 'is-active';
    const navLen = $nav.length;
    // 初期化
    // JavaScriptで最初に実行させたい命令の時に、initをよく使う
    const init = () => {
        $content[0].style.display = 'block';
    };
    init();

    // クリックしたら起こるイベント
    const handleClick = (e) => {
        e.preventDefault();

        // クリックされたnavとそのdataを取得
        const $this = e.target;
        const targetVal = $this.dataset.nav;

        //対象外のnav,content全てリセットする
        let index = 0;
        while(index < navLen){
            $content[index].style.display = 'none';
            $nav[index].classList.remove(active_class);
            index++;
        }

        // 対象のコンテンツをアクティブ化する
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block';
        $nav[targetVal].classList.add(active_class);
    };

    // 全nav要素に対して関数を適応•発火
    let index = 0;
    while(index < navLen){
        $nav[index].addEventListener('click', (e) => handleClick(e));
        index++
    }

    

})();

// メモ
// 変数名に$がついていると、DOM要素だよと明示的に表すことができる