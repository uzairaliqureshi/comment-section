import "./comment.scss";
import { ReactComponent as ReplyIcon } from "../../images/icon-reply.svg";
import { ReactComponent as EditIcon } from "../../images/icon-edit.svg";
import { ReactComponent as DeleteIcon } from "../../images/icon-delete.svg";
import { ReactComponent as PlusIcon } from "../../images/icon-plus.svg";
import { ReactComponent as MinusIcon } from "../../images/icon-minus.svg";
import { useState } from "react";
import SendComment from "../send-comment/SendComment";
import img2 from "../../images/avatars/image-juliusomo.png";
import prettyMilliseconds from "pretty-ms";

const Comment = ({ img, name, time, likes, tagName, you, text }) => {
    const [reply, setReply] = useState(false);

    const getData = (key) =>
        JSON.parse(localStorage.getItem(key));

    const data = getData(name);

    const replies = () => (
        data.map(m => <Comment
            key={m[0]}
            you={true}
            tagName={`@${name}`}
            img={img2}
            name='juliusomo'
            time={prettyMilliseconds(Date.now() - m[1], { compact: true, verbose: true }) + " ago"}
            likes='0'
            text={m[0]} />)
    );


    return (
        <>
            <div className="comment">
                <div className="comment__likes">
                    <button className="comment__likes--btn"><PlusIcon /></button>
                    <div className="comment__likes--counter">{likes}</div>
                    <button className="comment__likes--btn"><MinusIcon /></button>
                </div>
                <div className="comment__user">
                    <img src={img} alt="use image" />
                    <div className="comment__user--name">{name}</div>
                    {you && <div className="comment__user--you">you</div>}
                    <div className="comment__user--comment-time">{time}</div>
                </div>
                {!you && <button onClick={() => setReply(!reply)} className="comment__reply"><ReplyIcon /> Reply</button>}
                {you && <div className="comment__btn">
                    <button className="comment__btn--delete"><DeleteIcon /> Delete</button>
                    <button className="comment__btn--edit"><EditIcon /> Edit</button>
                </div>}
                <p>
                    <span>{tagName}</span> {text}
                </p>
            </div>
            {reply && <SendComment setReply={setReply} tagName={name} />}
            {data && <div className="replyBox">
                <div className="replyBox__line"></div>
                <div className="replyBox__replies">
                    {replies()}
                </div>
            </div>}
        </>
    );
};

export default Comment;
