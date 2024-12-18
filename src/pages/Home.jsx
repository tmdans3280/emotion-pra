import Header from "../components/Header";
import Button from "../components/Button";
import DIaryList from "../components/DIaryList";
import { useState } from "react";
import { useContext } from "react";
import { DiaryStateContext } from "../App";


const filterData = (pivotDate, data) => {

    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime()
    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime()

    return data.filter((item) => beginTime <= item.createdDate && item.createdDate <= endTime)
}


const Home = () => {

    const [pivotDate, setPivotDate] = useState(new Date())
    const data = useContext(DiaryStateContext)

    const onIncreaseBtn = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
    }
    const onDecreaseBtn = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
    }
    const getFilterData = filterData(pivotDate, data)

    return <div>
        <Header
            leftChild={<Button onClick={onDecreaseBtn} text={"<"} />}
            title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
            rightChild={<Button onClick={onIncreaseBtn} text={">"} />}
        />

        <DIaryList data={getFilterData}/>
    </div>
}

export default Home;