import { Box, Typography, styled } from "@mui/material";
import SpeakerButton from "../../atoms/SpeakerButton/SpeakerButton";

const SpeakersComponentContainer = styled(Box)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  flex-direction: column;
`;

const ButtonsContainer = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SpeakersComponent = () => (
  <SpeakersComponentContainer>
    <Typography
      variant="caption"
      fontWeight="bold"
      sx={{ paddingBottom: "10px" }}>
      Speaker(s)
    </Typography>
    <ButtonsContainer>
      <SpeakerButton speakerName="Anna Smith" />
      <SpeakerButton />
    </ButtonsContainer>
  </SpeakersComponentContainer>
);

export default SpeakersComponent;
