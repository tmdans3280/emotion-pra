import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css"

const DIaryList = () => {
  return <div className="DiaryList">
    <div className="menu_bar">
      <select>
        <option value="latest">최신순</option>
        <option value="oldest">오래된 순</option>
      </select>

      <Button text={"새 일기 쓰기"} type={"POSITIVE"} />
    </div>

    <div>
      <DiaryItem />
    </div>
  </div>
}

export default DIaryList;