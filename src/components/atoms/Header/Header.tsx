import { Box, Typography, styled } from "@mui/material";
import EditableText from "../EditableText/EditableText";
import { useState } from "react";
import { ArrowDropDown, MoreHoriz } from "@mui/icons-material";

const HeaderContainer = styled(Box)`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  height: 120px;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(3)};
`;

const StatusContainer = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(0.5)};
  align-items: center;
  justify-content: flex-end;
`;

const HeaderTitleContainer = styled(Box)<HeaderTitleProps>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(0.5)};
  align-items: ${({ alignItems }) => alignItems ?? "flex-start"};
`;

type HeaderTitleProps = {
  alignItems?: string;
  headerValue?: string;
};

const Header = ({ headerValue = "NYC Conference" }: HeaderTitleProps) => {
  const [textValue, setTextValue] = useState(headerValue);
  const handleTextChange = (newValue: string) => {
    setTextValue(newValue);
  };
  return (
    <HeaderContainer>
      <HeaderTitleContainer>
        <EditableText
          label={"Program title"}
          value={textValue}
          onChange={handleTextChange}
          type="program"
        />
      </HeaderTitleContainer>
      <HeaderTitleContainer alignItems={"flex-end"}>
        <Typography variant="caption">STATUS</Typography>
        <StatusContainer>
          <MoreHoriz
            sx={{
              color: (theme) => theme.palette.primary.dark,
            }}
          />
          <Typography variant="h5" fontWeight="bold">
            Upcoming
          </Typography>
          <ArrowDropDown />
        </StatusContainer>
      </HeaderTitleContainer>
    </HeaderContainer>
  );
};

export default Header;
