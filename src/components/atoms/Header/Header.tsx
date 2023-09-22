import { Box, Typography, styled } from "@mui/material";
import EditableText from "./EditableText/EditableText";
import { useState } from "react";

const HeaderContainer = styled(Box)`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    align-items: center;
    height: 100px;
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacing(3)};
`

type HeaderTitleProps = {
    alignItems?: string;
    headerValue?: string;
}

const HeaderTitleContainer = styled(Box) <HeaderTitleProps>`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(1)};
    align-items: ${({ alignItems }) => alignItems ?? "flex-start"};
`

const Header = ({ headerValue = "NYC Conference" }: HeaderTitleProps) => {
    const [textValue, setTextValue] = useState(headerValue)
    const handleTextChange = (newValue: string) => {
        setTextValue(newValue)
    }
    return (

        <HeaderContainer>
            <HeaderTitleContainer>
                <EditableText label={"Program title"} value={textValue} onChange={handleTextChange} />
            </HeaderTitleContainer>
            <HeaderTitleContainer alignItems={"flex-end"}>

                <Typography variant="caption">STATUS</Typography>
                <Typography variant="h5" fontWeight="bold">Upcoming</Typography>
            </HeaderTitleContainer>
        </HeaderContainer>

    )
}




export default Header;