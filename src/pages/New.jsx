import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { replace, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {

    const nav = useNavigate()
    const { onCreate } = useContext(DiaryDispatchContext)
    const onSubmit = (input) => {
        onCreate(input.createdDate, input.emotionId, input.content)
        nav(`/`, { replace: true })
    }
    return <div>
        <Header title={"새 일기쓰기"}
            leftChild={<Button onClick={() => nav("/")} text={"<뒤로 가기"} />} />

        <Editor onSubmit={onSubmit} />
    </div>
}

export default New;