import Trash from "@phosphor-icons/react/dist/icons/Trash";
import {
  StyledDivAuthorAndTime,
  StyledDivComment,
  StyledDivCommentBox,
  StyledDivCommentContent,
} from "../styles/components/comment";
import ThumbsUp from "@phosphor-icons/react/dist/icons/ThumbsUp";
import Avatar from "./avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export default function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }
  return (
    <StyledDivComment>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

      <StyledDivCommentBox>
        <StyledDivCommentContent>
          <header>
            <StyledDivAuthorAndTime>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                Cerca de 1h atrás
              </time>
            </StyledDivAuthorAndTime>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </StyledDivCommentContent>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </StyledDivCommentBox>
    </StyledDivComment>
  );
}
