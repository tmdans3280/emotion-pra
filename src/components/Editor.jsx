import "./Editor.css";
import Button from "./Button";
import EmotionItem from "./EmotionItem";

const emotionList = [{
  emotionId: 1,
  emotionName: "완전 좋음"
},
{
  emotionId: 2,
  emotionName: "좋음"
},
{
  emotionId: 3,
  emotionName: "보통"
},
{
  emotionId: 4,
  emotionName: "나쁨"
},
{
  emotionId: 5,
  emotionName: "매우 나쁨"
}
]


const Editor = () => {

  const selectid =3

  return <div className="Editor">
    <section className="date_section">
      <h4>오늘의 날짜</h4>
      <input type="date" />
    </section>

    <section className="emotion_section">
      <h4>오늘의 감정</h4>
      <div className="emotion_list_wrapper">
        {emotionList.map((item) => <EmotionItem 
        isSelected={item.emotionId===selectid} 
        key={item.emotionId} {...item} />)}
      </div>

    </section>

    <section className="content_section">
      <h4>오늘의 일기</h4>
      <textarea placeholder="오늘은 어땠나요?" />
    </section>

    <section className="button_section">
      <Button text={"취소하기"} />
      <Button text={"작성완료"} type={"POSITIVE"} />
    </section>
  </div>
}

export default Editor;