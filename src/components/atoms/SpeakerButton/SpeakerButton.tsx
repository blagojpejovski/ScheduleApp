import { Add, Circle, Edit } from "@mui/icons-material";
import { Avatar, Box, Typography, styled } from "@mui/material";

const AddButtonContainer = styled(Box)<{ hasSpeaker?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ hasSpeaker }) =>
    hasSpeaker ? "flex-start" : "center"};
  gap: ${({ theme }) => theme.spacing(1)};
  padding: ${({ theme }) => theme.spacing(2)};
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  border: 0.1px solid #ccc;
  transition: all 0.1s ease-out;
  height: 15px;
  width: 50%;

  &:hover {
    cursor: pointer;
  }

  &:hover svg {
    color: ${({ theme }) => theme.palette.grey[600]};
  }

  &:hover span {
    color: ${({ theme }) => theme.palette.primary.light};
  }

  @media (max-width: 768px) {
    box-sizing: border-box;
    width: 100%;
    padding: ${({ theme }) => theme.spacing(2)};
    height: 60px;
  }
`;

const EditIconsContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)};
  margin-left: auto;
`;

type SpeakerButtonProps = {
  speakerName?: string;
};

const SpeakerButton = ({ speakerName }: SpeakerButtonProps) => (
  <AddButtonContainer hasSpeaker={!!speakerName}>
    {speakerName ? (
      <>
        <Avatar
          alt={speakerName}
          src="https://i.pravatar.cc/150?img=21"
          sx={{
            width: 30,
            height: 30,
            "@media (max-width: 768px)": {
              width: 40,
              height: 40,
            },
          }}
        />
        <Typography variant="caption" fontWeight="bold">
          {speakerName}
        </Typography>
        <EditIconsContainer>
          <Circle fontSize="small" />
          <Edit fontSize="small" />
        </EditIconsContainer>
      </>
    ) : (
      <>
        <Add />
        <Typography variant="caption" fontWeight="bold" color="primary">
          Add speaker
        </Typography>
      </>
    )}
  </AddButtonContainer>
);

export default SpeakerButton;
