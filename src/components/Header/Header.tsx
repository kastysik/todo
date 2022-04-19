import { Button } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TodoInfoPopup from '../common/TodoInfoPopup/TodoInfoPopup';
import './Header.less';
import { connect } from 'react-redux';
import { TodoPriorities, TodoStates } from '../../models/todo.model';
import { Dispatch } from 'redux';
import { addTodo } from '../../store/actions/todosAction';

export interface TodoCreateInput {
    name?: string;
    comment?: string;
    priority?: TodoPriorities;
}

function Header({ dispatch }: { dispatch: Dispatch }) {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }

    const handleSubmit = (inputs: TodoCreateInput) => {
        if (!!inputs && !!inputs.name && !!inputs.comment && !!inputs.priority) {
            dispatch(addTodo({
                id: new Date().getTime(),
                name: inputs.name,
                comment: inputs.comment,
                priority: inputs.priority,
                state: TodoStates.TODO
            }));
        }
        setOpen(false);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="header">
            <div className="header__title">{t('common.todo_list')}</div>
            <Button variant="outlined" onClick={handleOpen}>{t('popup.create_todo')}</Button>
            {open ? <TodoInfoPopup open={open} handleClose={handleClose} handleSubmit={handleSubmit}
                                   todo={undefined}></TodoInfoPopup> : null}
        </div>
    );
}

export default connect()(Header);
