import { useEffect, useState } from "react";
import { fetchBio } from "./fetchBio";

const Lesson2_2 = () => {
  const [person, setPerson] = useState<string>("test");
  const [bio, setBio] = useState<string | null>(null);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let ignore = false;
    const startFetching = async () => {
      const response = await fetchBio(person);
      // console.log(response);
      if (!ignore) {
        setBio(response);
      }
    };
    startFetching();

    // setCount(count + 1); // これだと、依存配列にcountがあるとマウント時にインクリメントされて、無限ループになる

    return () => {
      ignore = true;
    };
  }, [person]);
  // useEffectは、第一引数に関数を受け取り、第二引数に配列を受け取る

  return (
    <div>
      <select onChange={(e) => setPerson(e.target.value)} value={person}>
        <option value="ShinCode">ShinCode</option>
        <option value="TestUser">TestUser</option>
        <option value="SampleUser">SampleUser</option>
      </select>

      <hr />

      <p className="text-black">{bio ?? "Loading..."}</p>
      {/* <p>{count}</p> */}
    </div>
  );
};
// このコンポーネントは、セレクトボックスとローディングメッセージを表示する。
// セレクトボックスは、3つのオプションを持っている。
// ローディングメッセージは、"Loading..."と表示される。
// データフェッチのためのローディングメッセージを表示するために、このコンポーネントを使用する。

export default Lesson2_2;
