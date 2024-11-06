import { useEffect, useState } from "react";

const Lesson2_1 = () => {

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {

    function handleMove(event: PointerEvent) {
      setPosition({ x: event.clientX, y: event.clientY });
    }

    window.addEventListener("pointermove", handleMove);

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
    // pageを離れる時に、イベントリスナーを削除する（クリーンアップ関数の追加）
    // アンマウント（DOMが削除：ページ切り替え、タブを閉じる）時にイベントリスナーを削除することで、メモリリークを防ぐ
  }, []);

  // useEffectは、第一引数に関数を受け取り、第二引数に配列を受け取る
  // 第二引数には、依存する値を入れることで、その値が変更された時だけ、第一引数の関数が呼ばれる
  // 依存する値がない場合は、初回レンダリング時だけ呼ばれる
  // https://ja.react.dev/reference/react/useEffect
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "blue",
        borderRadius: "50%",
        opacity: 0.6,
        pointerEvents: "none",
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -20,
        top: -20,
        width: 50,
        height: 50,
      }}
    ></div>
  );
};

export default Lesson2_1;
