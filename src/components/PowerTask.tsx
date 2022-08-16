import { FC,useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const TaskName = styled.span<{ $completed: boolean }>`
    text-decoration: ${({ $completed }) => $completed ? "line-through" : "unset"};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

type Props = {
    children: string,
    onDelete: () => void
}

const PowerTask: FC<Props> = ({ onDelete, children }) => {
    const [completed, setCompleted] = useState(false);

    return (
        <Container>
            <TaskName $completed={completed}>{children}</TaskName>
            <div style={{display: "flex"}}>
                <button type={"button"} onClick={() => setCompleted((cur) => !cur)}>Mark</button>
                <button type={"button"} onClick={onDelete}>Delete</button>
            </div>
        </Container>
    );
};

export default PowerTask;