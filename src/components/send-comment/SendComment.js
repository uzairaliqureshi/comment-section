import "./sendComment.scss";
import img from "../../images/avatars/image-juliusomo.png";
import { useState } from "react";

const SendComment = ({ tagName, setReply }) => {
    const [value, setValue] = useState();

    const getData = (key) => JSON.parse(localStorage.getItem(key));
    const saveData = (key, data) =>
        localStorage.setItem(key, JSON.stringify(data));

    const data = getData(tagName);
    const message = value?.slice(value.indexOf(' ')).trimStart();


    return (
        <div className="sendComment">
            <img src={img} alt="image" />
            <textarea
                value={value}
                onChange={e => setValue(e.target.value)}
                autoFocus
                rows="5"
                placeholder="Add a comment..."
                defaultValue={tagName && `@${tagName}, `}
            ></textarea>
            <button
                onClick={() => {
                    saveData(tagName, data && [...data, [message, Date.now()]] || [[message, Date.now()]]);
                    setReply && setReply(false);
                }}>
                send
            </button>
        </div>
    );
};

export default SendComment;
