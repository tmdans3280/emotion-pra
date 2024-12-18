import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DIaryList = ({ data }) => {

  const [sortType, setSortType] = useState("latest")
  const nav = useNavigate()

  const onChangeSortType = (e) => {
    setSortType(e.target.value)
  }

  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return Number(a.createdDate) - Number(b.createdDate)
      } else {
        return Number(b.createdDate) - Number(a.createdDate)
      }
    })
  }
  const sortedData = getSortedData()




  return <div className="DiaryList">
    <div className="menu_bar">
      <select onChange={onChangeSortType}>
        <option value="latest">최신순</option>
        <option value="oldest">오래된 순</option>
      </select>

      <Button onClick={()=>nav('./new')} text={"새 일기 쓰기"} type={"POSITIVE"} />
    </div>

    <div>
      {sortedData.map((item) => <DiaryItem key={item.id} {...item} />)}
    </div>
  </div>
}

export default DIaryList;