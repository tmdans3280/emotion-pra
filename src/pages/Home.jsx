import Header from "../components/Header";
import Button from "../components/Button";
import DIaryList from "../components/DIaryList";
import { useState } from "react";



const Home = () => {

    const [pivotDate, setPivotDate] = useState(new Date())

    const onIncreaseBtn = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() +1))
    }
    const onDecreaseBtn = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
    }

    return <div>
        <Header
            leftChild={<Button onClick={onDecreaseBtn} text={"<"} />}
            title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
            rightChild={<Button onClick={onIncreaseBtn} text={">"} />}
        />

        <DIaryList />
    </div>
}

export default Home;