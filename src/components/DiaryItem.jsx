import { getEmotionImage } from "../Image/Image";
import Button from "./Button";
import "./DiaryItem.css"
import { useContext } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";




const DiaryItem = ({ id, emotionId, createdDate, content }) => {

  const data = useContext(DiaryStateContext)
  const nav = useNavigate()


  return <div className="DiaryItem">
    <section onClick={() => nav(`/diary/${id}`)} className={`img_section img_section_${emotionId}`}>
      <img src={getEmotionImage(emotionId)} />
    </section>

    <section onClick={() => nav(`/diary/${id}`)} className="info_section">
      <div className="created_date">{new Date(createdDate).toLocaleDateString()}</div>
      <div className="content">{content}</div>
    </section>

    <section className="btn_section">
      <Button onClick={() => nav(`/diary/${id}`)} text={"수정하기"} />
    </section>
  </div>
}

export default DiaryItem  