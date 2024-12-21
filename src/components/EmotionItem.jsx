import "./EmotionItem.css";
import { getEmotionImage } from "../Image/Image";

const EmotionItem = ({emotionId,emotionName}) => {
    return <div className={`EmotionItem EmotionItem_on_${emotionId}`}> 
        <img className="emotion_img" src={getEmotionImage(emotionId)}/>
        <div className="emotion_name">{emotionName}</div>
    </div>
}

export default EmotionItem;