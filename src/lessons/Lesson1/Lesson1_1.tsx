import { ChangeEvent, useState } from "react";

// let age = 0;       // useStateを使わない状態管理

const Lesson1_1 = () => {
  // Lesson1_1という関数コンポーネントも純粋な関数である必要がある。
  // 毎回毎回、その入力に対して、同じ出力結果JSXの結果を返さないといけないため
  // 純関数であれば、出力結果は2回呼び出したとしても同じ
  // 純関数でないと、出力結果は1回目と2回目で異なる可能性がある。そうならないように、デフォルトでStrictモードになっている。
  // 意図せぬ不随処理（副作用）
  // https://ja.react.dev/learn/keeping-components-pure#side-effects-unintended-consequences
  // 2回呼び出された後に、意図せぬ挙動になっている場合は、純粋な関数コンポーネントではないので、ちゃんと純関数になるようにリファクタリングする必要がある

  const [age, setAge] = useState<number>(0);
  //setState(setAge):dispatch関数（Stateを更新したいときに呼び出す）
  // Hooks のルールとして、Reactの関数コンポーネントの中でしか、Hooksは呼び出せないので注意
  // 役割としては、数字の状態を保存できるようになる。（メモ化）＋ 再レンダリング

  const [name, setName] = useState("fujikeeeen");
  // 1文字打ち込むたびに、set関数が走っている。→ 再レンダリングされる
  // for文などが変に入っていると、再レンダリングされる度にfor文がloopするので、注意が必要（パフォーマンス低下）
  // あとは、handleClickという関数が再生成されるので、それもパフォーマンス低下を招くため、関数をメモ化しておくのも手


  // 再レンダリングが行われるのを体感
  console.log("レンダリング！");
  // 初回レンダリングと、handleClickのボタンに関するイベントを呼ばれたので、再レンダリング
  // Point: 状態変数が更新された時に再レンダリングされる
  // レンダリングされるタイミングを把握しておかないといけないのは、パフォーマンスチューニングする時（アプリが重くなった時など）
  // 2回呼ばれているのは、Strictモード（Reactのデフォルトモード）で呼ばれているため
  // src\main.tsxを確認

  const handleClick = () => {
    // 更新用関数（イベントハンドラーの挙動）
    // set関数に対して、関数を入れ込むことによって、更新用関数となる。

    // input属性について、どのように打ち込んだ値を取得できるのか？
    // この状態変数の管理の仕方

       setAge((state) => state + 1); //setAge((0) => 0 + 1)
       console.log(age);
       setAge((state) => state + 1); //setAge((1) => 1 + 1)
       console.log(age);
       setAge((state) => state + 1); //setAge((2) => 2 + 1)
       console.log(age);
       console.log(name);
    // 複数セット存在する場合、最後まで待機してすべてのセット関数が実行された後に最後だけ、ageはレンダリングされた
    // setAge((age) => age + 1);
    // console.log(age);
    // setAge(age + 1);
    // console.log(age);
    // setAge(age + 1);
    // // stateの変更が即時反映されない理由（＋３にならない理由）
    // // 再リロードされていない状態なので、全て age +1(batch処理がReactでは行われている)
    // // 状態変更の関数が呼ばれる場合は、グループでまとめて呼ばれる。最後のsetAgeが終わればバッチ処理が終了し、再レンダリングされる。

    // パフォーマンスチューニングのメモ化（useMemo, useCallback）
    // ＜レンダリングのタイミング＞
    // ・レンダリングのタイミング（リロードボタン、ページ初回訪問で1回レンダリングされる）：JavaScriptなどHTMLでも同じ
    // ・useStateを使っていて、setAgeが状態を更新した時、この時に再レンダリングが行われる（Reactの場合）



    // // age = age + 1;    // useStateでは不要。
    // console.log(age);
    // 加算チェック（ブラウザが再レンダリングされていない。初回レンダリングのみ描画）
  };
  // ここはJavaScriptの知識
  // これで実装しても、0のまま変わらない。（React特有の挙動）

  return (
    <div>
      <input 
        type="text"
        value={name} 
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}/>
      {/* input に打ち込むたびに発火されるようになるので、Nameという変数の中に状態が保存されるようになる。 */}
      {/* パフォーマンス低下を考えると、onChangeトリガーで、状態更新は避けた方がいい場合がある。 */}
      {/* その場合は、useLessというhooksを使って、一回だけ値を見るようにする */}
      <button 
        onClick={handleClick}
        // useStateを使わない状態管理
        className="border p-2 rounded-md bg-red-100"
        >
          Add Age
        </button>
      <p>You are {age}</p>
    </div>
  );
};

export default Lesson1_1;
