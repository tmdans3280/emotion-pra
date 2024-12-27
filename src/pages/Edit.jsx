import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

const Edit = () => {
    return <div>
        <Header title={"일기 수정하기"}
            leftChild={<Button text={"<뒤로 가기"} />}
            rightChild={<Button type={"NEGATIVE"} text={"삭제하기"} />} />


        <Editor />
    </div>
}

export default Edit;