import { ChangeEvent, useState } from "react";

const Lesson1_2 = () => { //関数コンポーネント
  
  const [form, setForm] = useState({
    firstName: "test",
    lastName: "testtest",
    email: "test@gmail.com",
  }); //オブジェクトの初期値を設定
  // form.firstName = "test2"; //ミュータブルなオブジェクトのため、再レンダリングされない
  // https://ja.react.dev/learn/updating-arrays-in-state
  return (
    <div>
      <div className="flex mb-5">
        <label>
          First Name:
          <input type="text" className="border border-slate-500" onChange={(e: ChangeEvent<HTMLInputElement>) => 
            setForm({ 
              ...form, //スプレッド構文でオブジェクトを展開
              firstName: e.target.value, //入力された値を取得
              // lastName: form.lastName,
              // email: form.email,
            })}/>
        </label>
        <label>
          Last Name:
          <input type="text" className="border border-slate-500" onChange={(e: ChangeEvent<HTMLInputElement>) => 
            setForm({
              ...form,
              // firstName: form.firstName,
              lastName: e.target.value,
              // email: form.email,
            })}/>
        </label>
        <label>
          Email:
          <input type="text" className="border border-slate-500" onChange={(e: ChangeEvent<HTMLInputElement>) => 
            setForm({
              ...form,
              // firstName: form.firstName,
              // lastName: form.lastName,
              email: e.target.value,
            })}/>
        </label>
      </div>
      <p>
        {form.firstName}
        <br />
        {form.lastName}
        <br />
        {form.email}
      </p>
    </div>
  );
};

export default Lesson1_2;
