import "./Header.css"

const Header = ({ leftChild, title, rightChild }) => {
    return <div className="Header">
        <div className="leftchild">{leftChild}</div>
        <div className="title">{title}</div>
        <div className="rightchild">{rightChild}</div>
    </div>
}

export default Header;