import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import { useParams } from "react-router-dom";

const Edit = () => {

    const nav = useNavigate();
    const param = useParams()
    const { onDelete } = useContext(DiaryDispatchContext)
    const data = useContext(DiaryStateContext)

    const onClickDelete = () => {
        if (window.confirm("정말 삭제하시겠습니까")) {
            onDelete(param.id)
            nav('/', { replace: true })
        }
    }

    return <div>
        <Header title={"일기 수정하기"}
            leftChild={<Button onClick={() => nav('/', { replace: true })} text={"<뒤로 가기"} />}
            rightChild={<Button onClick={onClickDelete} type={"NEGATIVE"} text={"삭제하기"} />} />


        <Editor />
    </div>
}

export default Edit;