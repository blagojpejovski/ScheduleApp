import { Accordion, AccordionDetails, AccordionSummary, Box, Switch, Typography, styled } from "@mui/material";
import { useState } from "react";


const ExpandComponentContainer = styled(Box)`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100%;

`

const ContentWrapper = styled(Box)`
    display: flex;
    align-items: center;
    width: 100%;
`

const ExpandComponent = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    };
    return (
        <ExpandComponentContainer>
            <Accordion expanded={expanded}>

                <AccordionSummary

                    aria-controls="panel-content"
                    id="panel-header"
                >
                    <ContentWrapper>
                        <Switch checked={expanded} onChange={handleExpand} />
                        <Typography>Required attendance</Typography>
                    </ContentWrapper>

                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Attendance tracking QR code
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </ExpandComponentContainer>

    )
}


export default ExpandComponent
