import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Switch,
  Typography,
  styled,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useState } from "react";

import Image from "../../../assets/images/business-meeting.png";
import EditButton from "../../atoms/EditButton/EditButton";

const ExpandComponentContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 100%;
  width: 40%;
  box-sizing: border-box;
  padding-left: ${({ theme }) => theme.spacing(6)};
  gap: ${({ theme }) => theme.spacing(4)};

  @media (max-width: 1080px) {
    width: 80%;
    padding-top: ${({ theme }) => theme.spacing(2)};
    align-items: center;
    padding-left: 0;
  }
`;

const ImageContainer = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledImage = styled("img")`
  height: auto;
  width: 100%;
  border-radius: ${({ theme }) => theme.spacing(2)};
`;

const AttendanceContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 40%;
  width: 100%;
`;

const ContentWrapper = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
`;

const QRContainer = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
`;

const StyledAccordion = styled(Accordion)`
  width: 100%;
  box-shadow: none;
  background-color: #e7ebf8;
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 75px;
`;

const ExpandComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <ExpandComponentContainer>
      <ImageContainer>
        <StyledImage
          src={Image}
          alt="Business meeting"
          height={200}
          width={200}
        />
        <EditButton>Change subject image</EditButton>
      </ImageContainer>
      <AttendanceContainer>
        <StyledAccordion expanded={expanded}>
          <AccordionSummary sx={{ height: "75px" }}>
            <ContentWrapper>
              <Switch checked={expanded} onChange={handleExpand} />
              <Typography
                color={expanded ? "primary" : "default"}
                fontWeight={600}>
                Required attendance
              </Typography>
            </ContentWrapper>
          </AccordionSummary>
          <Divider sx={{ color: "1px solid black" }} />
          <StyledAccordionDetails>
            <QRContainer>
              <Typography fontWeight={600}>
                Attendance tracking QR code
              </Typography>
              <OpenInNewIcon fontSize="small" />
            </QRContainer>
          </StyledAccordionDetails>
        </StyledAccordion>
      </AttendanceContainer>
    </ExpandComponentContainer>
  );
};

export default ExpandComponent;
