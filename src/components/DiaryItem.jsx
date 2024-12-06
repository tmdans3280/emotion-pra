import { getEmotionImage } from "../Image/Image";
import Button from "./Button";
import "./DiaryItem.css"
import { useContext } from "react";
import { DiaryStateContext } from "../App";


const emotionId = 1;

const DiaryItem = () => {

  const data = useContext(DiaryStateContext)


  return <div className="DiaryItem">
    <section className={`img_section img_section_${emotionId}`}>
      <img src={getEmotionImage(1)} />
    </section>

    <section className="info_section">
      <div className="created_date">2024-12-02</div>
      <div className="content">{}</div>
    </section>

    <section className="btn_section">
      <Button text={"수정하기"} />
    </section>
  </div>
}

export default DiaryItem