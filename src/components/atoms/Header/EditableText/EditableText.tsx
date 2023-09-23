import { Edit } from "@mui/icons-material";
import { Box, TextField, Typography, styled } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const Container = styled(Box)`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    gap: ${({ theme }) => theme.spacing(1)};
`

const EditContainer = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #e5e5e5;
    padding: ${({ theme }) => theme.spacing(1)};
    transition: all 0.1s ease-out;
    
    &:hover {
        background-color: #dddddd;
        cursor: pointer;
    }
`

const InputAndIconContainer = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(2)};
`

type EditableTextProps = {
    value: string | "NYC Conference";
    label?: string;
    onChange?: (value: string) => void;
}

const EditableText = ({ value, label, onChange }: EditableTextProps) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleStartEditing = () => {
        setEditing(true);
    }

    useEffect(() => {
        editing && inputRef.current?.focus();
    }, [editing]);

    return (<Container>
        <Typography variant="caption">{label}</Typography>
        <InputAndIconContainer>
            {editing ? (
                <TextField value={value} variant="standard" disabled={!editing} inputRef={inputRef} onBlur={() => {
                    setEditing(false);
                    if (onChange) {
                        onChange(inputRef.current?.value || '')
                    }

                }} onChange={(e) => {
                    if (onChange) {
                        onChange(e.target.value)
                    }
                }} />
            ) :
                <Typography variant="body1">{value}</Typography>
            }
            {!editing && (
                <EditContainer onClick={handleStartEditing}>
                    <Edit fontSize="small" />
                </EditContainer>
            )}
        </InputAndIconContainer>
    </Container>)
}

export default EditableText;