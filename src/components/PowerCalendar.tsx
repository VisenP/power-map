import { FC } from "react";
import styled from "styled-components";

import PowerDay from "./PowerDay";

const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 1rem;
    padding: 1rem;
    width: 100%;
    max-width: 1200px;
    overflow: hidden;
`;

const PowerCalendar: FC = () => {
    return (
        <ContentContainer>
            <Container>
                {new Array(30).fill(0).map((_, i) => <PowerDay key={i} day={i + 1}/>)}
            </Container>
        </ContentContainer>
    );
};

export default PowerCalendar;