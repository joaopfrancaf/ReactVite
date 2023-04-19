import { StyledAside, StyledCoverImg, StyledDivFooter, StyledDivProfile } from "../styles/components/sidebar";
import { PencilLine } from "@phosphor-icons/react";
import Avatar from "./avatar";

export default function Sidebar() {
    return (
        <StyledAside>
            <StyledCoverImg src="https://images.unsplash.com/photo-1610734287146-94cb52a72718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"/>
            <StyledDivProfile>
                <Avatar src="https://github.com/maykbrito.png" hasBorder={true}/>
                <strong>João Pedro</strong>
                <span>Full-Stack</span>
            </StyledDivProfile>

            <StyledDivFooter>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar Perfil
                </a>
            </StyledDivFooter>
        </StyledAside>
    )
}