import { Box, Typography, styled } from "@mui/material"
import EditableText from "../../../atoms/Header/EditableText/EditableText"
import { useState } from "react";
import TimeButton from "../../../molecules/TimeButton/TimeButton";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';

const SubjectDetailsContainer = styled(Box)`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding:${({ theme }) => theme.spacing(3)};

`

const TextAreaContainer = styled(Box)`
        display:flex;
        width: 100%;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        padding:${({ theme }) => theme.spacing(2)};

`

type SubjectDetailsProps = {
    subjectTitle?: string;
}

const SubjectDetails = ({ subjectTitle = "Some subject title" }: SubjectDetailsProps) => {
    const [title, setTitle] = useState(subjectTitle);
    const handleTitleChange = (newTitle: string) => {
        setTitle(newTitle)
    }
    return (
        <SubjectDetailsContainer>
            <EditableText label={"Subject title"} value={title} onChange={handleTitleChange} />

            <TimeButton />

            <TextAreaContainer>
                <Typography variant="caption">{"Subject description"}</Typography>
                <TextareaAutosize aria-label="minimum height"
                    minRows={3}
                    placeholder="Minimum 3 rows"
                    style={{ width: "100%" }}

                />
            </TextAreaContainer>
        </SubjectDetailsContainer>
    )
}

export default SubjectDetails;
