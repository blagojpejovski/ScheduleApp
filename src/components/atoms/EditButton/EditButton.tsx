import { ChangeCircleOutlined } from "@mui/icons-material";
import { Button, Typography, styled } from "@mui/material";

const EditImageButton = styled(Button)`
  position: absolute;
  bottom: 6%;
  right: 3%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.5)};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  background-color: white;
  color: black;
  box-shadow: none;
  text-transform: none;
`;

type EditButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};

const EditButton = ({ children, onClick }: EditButtonProps) => (
  <EditImageButton variant="contained" onClick={onClick}>
    <ChangeCircleOutlined />
    <Typography fontSize={"small"} fontWeight={600}>
      {children}
    </Typography>
  </EditImageButton>
);

export default EditButton;
