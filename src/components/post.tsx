import { useEffect, useState } from "react";
import { StyledArticle, StyledDivAuthor, StyledDivAuthorInfo, StyledDivContent, StyledDivHeader, StyledDivListComments, StyledForm } from "../styles/components/post";
import Avatar from "./avatar";
import Comment from "./comment";
import axios from "axios";

interface propsType {
    author: string,
    content: string,
    publishedAt: Date,
}

export default function Post({...props}: propsType) {

    return (
        <StyledArticle>
            <StyledDivHeader>
                <StyledDivAuthor>
                    <Avatar src="https://github.com/diego3g.png" hasBorder={true} />
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