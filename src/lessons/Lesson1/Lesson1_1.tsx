import { useState } from "react";

let age = 0;
        // useStateを使わない状態管理

const Lesson1_1 = () => {
  const [age, setAge] = useState()
  //setState(setAge):dispatch関数（Stateを更新したいときに呼び出す）
  // Hooks のルールとして、Reactの関数コンポーネントの中でしか、Hooksは呼び出せないので注意

  const handleClick = () => {
    // age = age + 1;    // useStateでは不要。
    console.log(age);
    // 加算チェック（ブラウザが再レンダリングされていない。初回レンダリングのみ描画）
  };
  // ここはJavaScriptの知識
  // これで実装しても、0のまま変わらない。（React特有の挙動）

  return (
    <div>
      <input type="text" />
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
