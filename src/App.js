import "./app.scss";
import img1 from "./images/avatars/image-amyrobson.png";
import img2 from "./images/avatars/image-maxblagun.png";
import Comment from "./components/comment/Comment";
import ReplyBox from "./components/reply-box/ReplyBox";
import SendComment from "./components/send-comment/SendComment";

const App = () => {

    const comment1 = "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well. ";

    const comment2 = "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where lean learn React? Thanks! ";

    return (
        <div className="container">
            <Comment img={img1} name='amyrobson' time='1 month ago' likes='12' text={comment1} />
            <Comment img={img2} name='maxblagun' time='2 weeks ago' likes='5' text={comment2} />
            <ReplyBox />
            <SendComment />
        </div>
    );
};

export default App;
