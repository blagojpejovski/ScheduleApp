import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Switch, Typography, styled } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useState } from "react";


const ExpandComponentContainer = styled(Box)`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    
`

const ContentWrapper = styled(Box)`
    display: flex;
    align-items:center;
    width: 100%;
    justify-content: flex-start;
`

const QRContainer = styled(Box)`
    display:flex;
    width:100%;
    align-items: center;
    justify-content: flex-start;
    gap:${({ theme }) => theme.spacing(1)};

`



const ExpandComponent = () => {
    const [expanded, setExpanded] = useState(false);

    const handleExpand = () => {
        setExpanded(!expanded);
    };
    return (
        <ExpandComponentContainer>
            <Accordion expanded={expanded} sx={{ boxShadow: "none", backgroundColor: "#e7ebf8" }}>

                <AccordionSummary
                >
                    <ContentWrapper>
                        <Switch checked={expanded} onChange={handleExpand} />
                        <Typography color={expanded ? "primary" : "default"}>Required attendance</Typography>
                    </ContentWrapper>

                </AccordionSummary>
                <Divider sx={{ color: "1px solid black" }} />
                <AccordionDetails >
                    <QRContainer>
                        <Typography >
                            Attendance tracking QR code
                        </Typography>

                        <OpenInNewIcon fontSize="small" />
                    </QRContainer>

                </AccordionDetails>
            </Accordion>

        </ExpandComponentContainer>

    )
}


export default ExpandComponent
