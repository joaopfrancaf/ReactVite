import {
  ChangeEvent,
  FormEvent,
  InvalidEvent,
  useEffect,
  useState,
} from "react";
import {
  StyledArticle,
  StyledDivAuthor,
  StyledDivAuthorInfo,
  StyledDivContent,
  StyledDivHeader,
  StyledDivListComments,
  StyledForm,
} from "../styles/components/post";
import Avatar from "./avatar";
import Comment from "./comment";
import axios from "axios";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  post: PostType;
}

interface comment {
  comment: string[];
}

export default function Post({ post }: PostProps) {
  const [comments, setComments] = useState<any[]>([]);

  const [newCommentText, setNewCommentText] = useState<any>("");

  function handleCrateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;
  return (
    <StyledArticle>
      <StyledDivHeader>
        <StyledDivAuthor>
          <Avatar src={post.author.avatarUrl} hasBorder={true} />
          <StyledDivAuthorInfo>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </StyledDivAuthorInfo>
        </StyledDivAuthor>

        <time title="11 de maio" dateTime="2023-05-11 08:00">
          Publicado a 1h
        </time>
      </StyledDivHeader>

      <StyledDivContent>
        {post.content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </StyledDivContent>

      <StyledForm onSubmit={handleCrateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </StyledForm>

      <StyledDivListComments>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </StyledDivListComments>
    </StyledArticle>
  );
}
