import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import PowerTask from "./PowerTask";

const Container = styled.div`
    border: 1px solid black;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const DayTitle = styled.span`
    font-size: 2rem;
    font-weight: 600;
`;


type Props = {
    day: number,
}

const PowerDay: FC<Props> = ({day}) => {

    const [tasks, setTasks] = useState<string[]>([]);

    const { register, handleSubmit, setValue } = useForm<{ task: string }>();

    const onSubmit = handleSubmit(({ task }) => {
        if(task.length === 0) return;
        setTasks(curr => [ ...curr, task ]);
        setValue("task", "");
    });

    return (
        <Container>
            <DayTitle>{day}</DayTitle>
            
            {tasks.map(task =>
                <PowerTask key={task} onDelete={() => 
                    setTasks(curr => curr.filter(it => it !== task))
                }>{task}</PowerTask>
            )}

            <form onSubmit={onSubmit}>
                <input type="text" style={{ width: "100%" }} {...register("task")}/>
            </form>
        </Container>
    );
};

export default PowerDay;