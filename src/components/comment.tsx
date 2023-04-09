import Trash from "@phosphor-icons/react/dist/icons/Trash";
import { StyledDivAuthorAndTime, StyledDivComment, StyledDivCommentBox, StyledDivCommentContent } from "../styles/components/comment";
import ThumbsUp from "@phosphor-icons/react/dist/icons/ThumbsUp";
import Avatar from "./avatar";

export default function Comment() {
    return (
    <StyledDivComment>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

      <StyledDivCommentBox>
        <StyledDivCommentContent>
          <header>
            <StyledDivAuthorAndTime>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </StyledDivAuthorAndTime>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </StyledDivCommentContent>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </StyledDivCommentBox>
    </StyledDivComment>
    )
}