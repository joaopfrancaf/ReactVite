import { StyledArticle, StyledDivAuthor, StyledDivAuthorInfo, StyledDivContent, StyledDivHeader, StyledDivListComments, StyledForm } from "../styles/components/post";
import Comment from "./comment";

export default function Post() {
    return (
        <StyledArticle>
            <StyledDivHeader>
                <StyledDivAuthor>
                    <img src="https://avatars.githubusercontent.com/u/78824866?v=4"/>
                    <StyledDivAuthorInfo>
                        <strong>João Pedro França Freitas</strong>
                        <span>Full - Stack</span>
                    </StyledDivAuthorInfo>
                </StyledDivAuthor>

                <time title="11 de maio" dateTime="2023-05-11 08:00">Publicado a 1h</time>
            </StyledDivHeader>

            <StyledDivContent>
                <p>asdasdfgfbhgbhg</p>
            </StyledDivContent>

            <StyledForm>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder="deixe um comment"/>

                <footer><button type="submit">Publicar</button></footer>
            </StyledForm>

            <StyledDivListComments>
                <Comment />
                <Comment />
                <Comment />
            </StyledDivListComments>
        </StyledArticle>
    )
}