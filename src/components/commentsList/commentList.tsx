import Avatar from "../avatar/avatar";
import { CommentsListProps } from "./commentsListProps";

const CommentsList: React.FC<CommentsListProps> = ({ comments }) => {
  return (
    <div className="w-full flex flex-col gap-[24px]">
      {comments.map((comment, i) => (
        <div key={i} className="w-full flex flex-col gap-[8px]">
          <div className="w-full flex items-center justify-start gap-[8px]">
            <Avatar
              name={comment.author?.name}
              avatar={comment.author?.avatar}
              size={22}
            />
            <p className="text-[13px] text-stone-800">{comment.author?.name}</p>
          </div>
          <p>{comment.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
