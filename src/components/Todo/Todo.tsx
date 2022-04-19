import { Todo, TodoStates } from '../../models/todo.model';
import './Todo.less';
import PriorityBadge from '../common/PriorityBadge/PriorityBadge';
import getTodoColorClassByStateKey from '../services/todo.service';
import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { removeTodo, updateTodo } from '../../store/actions/todosAction';
import TodoInfoPopup from '../common/TodoInfoPopup/TodoInfoPopup';
import { TodoCreateInput } from '../Header/Header';
import { useTranslation } from 'react-i18next';

interface TodoProps {
    todo: Todo;
    dispatch: Dispatch;
}

function TodoComponent(props: TodoProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);
    const { t } = useTranslation();
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>,
                                 index: number) => {
        if (index === 0) {
            setDialogOpen(true);
        } else if (index === 1) {
            props.dispatch(removeTodo(props.todo.id))
        } else if (index === 2) {
            const nextState = props.todo.state === TodoStates.TODO ? TodoStates.IN_PROGRESS : TodoStates.DONE;
            props.dispatch(updateTodo({ ...props.todo, state: nextState }))
        }
        setAnchorEl(null);
    }
    const handleDialogSubmit = (inputs: TodoCreateInput) => {
        if (!!inputs && !!inputs.name && !!inputs.comment && !!inputs.priority) {
            props.dispatch(updateTodo({
                id: props.todo.id,
                state: props.todo.state,
                name: inputs.name,
                comment: inputs.comment,
                priority: inputs.priority
            }))
        }
        setDialogOpen(false);
    }
    const handleDialogClose = () => {
        setDialogOpen(false);
    }
    const getNextState = (prevState: TodoStates): string => {
        if (prevState === TodoStates.TODO) {
            return t('todo.to_in_progress');
        } else if (prevState === TodoStates.IN_PROGRESS) {
            return t('todo.to_done')
        }
        return '';
    }

    const options: (string | Function)[] = [
        'Edit',
        'Delete',
        getNextState
    ];

    return (
        <div className={'todo ' + getTodoColorClassByStateKey(props.todo.state, 'todo')}>
            <div className="todo__header">
                <span className="todo__name">{props.todo.name}</span>
                <PriorityBadge priority={props.todo.priority}></PriorityBadge>
                <IconButton
                    aria-label="more"
                    aria-controls={open ? 'menu' : undefined}
                    id="long-button"
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <MoreVertIcon/>
                </IconButton>
                <Menu
                    id="menu"
                    MenuListProps={{
                        'aria-labelledby': 'button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: 216,
                            width: '20ch',
                        },
                    }}
                >
                    {options.map((option, index) => (
                        <MenuItem key={index}
                                  onClick={(event) => handleMenuItemClick(event, index)}>
                            {typeof option === 'function' ? option(props.todo.state) : option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
            <div className="todo__content">
                {props.todo.comment}
            </div>
            {dialogOpen ? <TodoInfoPopup open={dialogOpen} todo={props.todo}
                                         handleClose={handleDialogClose}
                                         handleSubmit={handleDialogSubmit}></TodoInfoPopup> : null}
        </div>
    );
}

export default connect()(TodoComponent);
