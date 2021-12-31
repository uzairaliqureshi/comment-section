import "./replyBox.scss";
import img1 from "../../images/avatars/image-ramsesmiron.png";
import img2 from "../../images/avatars/image-juliusomo.png";
import Comment from "../comment/Comment";

const ReplyBox = () => {
    const comment3 = "If you're still new. I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first. ";

    const comment4 = "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/ framework. But the fundamentals are what stay constant. ";

    return (
        <div className="replyBox">
            <div className="replyBox__line"></div>
            <div className="replyBox__replies">
                <Comment tagName="@maxblagun" img={img1} name='ramsesmiron' time='1 weeks ago' likes='4' text={comment3} />
                <Comment you={true} tagName="@ramsesmiron" img={img2} name='juliusomo' time='2 days ago' likes='2' text={comment4} />
            </div>
        </div>
    );
};

export default ReplyBox;
