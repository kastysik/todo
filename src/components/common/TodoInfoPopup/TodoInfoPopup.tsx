import { Todo, TodoPriorities } from '../../../models/todo.model';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField
} from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './TodoInfoPopup.less';
import { TodoCreateInput } from '../../Header/Header';

interface TodoInfoPopupProps {
    open: boolean;
    handleClose: () => void;
    handleSubmit: (inputs: TodoCreateInput) => void;
    todo?: Todo;
}

function TodoInfoPopup(props: TodoInfoPopupProps) {
    const [inputs, setInputs] = useState({
        name: props?.todo?.name ?? undefined,
        priority: props?.todo?.priority ?? undefined,
        comment: props?.todo?.comment ?? undefined
    });
    const { t } = useTranslation();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event?.target?.id;
        const value = event?.target?.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSelectChange = (event: SelectChangeEvent) => {
        const name = event?.target?.name;
        const value = event?.target?.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleClose = () => {
        props.handleClose();
    }

    const handleSubmit = () => {
        props.handleSubmit(inputs);
    }

    return (
        <Dialog className="dialog" fullWidth={true} maxWidth={'xs'} open={props.open} onClose={handleClose}>
            <DialogTitle>{t('popup.create_todo')}</DialogTitle>
            <DialogContent>
                <TextField
                    className="dialog__name"
                    autoFocus
                    margin="dense"
                    id="name"
                    name="name"
                    label="Todo name"
                    type="text"
                    fullWidth
                    variant="standard"
                    helperText={!inputs.name ? 'Field can\'t be empty' : ''}
                    error={!inputs.name}
                    value={inputs.name}
                    onChange={handleChange}
                />
                <TextField
                    className="dialog__task"
                    id="comment"
                    name="comment"
                    label="Task"
                    multiline
                    rows={3}
                    helperText={!inputs.comment ? 'Field can\'t be empty' : ''}
                    error={!inputs.comment}
                    value={inputs.comment}
                    onChange={handleChange}
                />
                <FormControl fullWidth error={!inputs.priority}>
                    <InputLabel id="priority-label">{t('popup.priority')}</InputLabel>
                    <Select
                        id="priority"
                        label="Priority"
                        labelId="priority-label"
                        className="dialog__priority"
                        name="priority"
                        value={inputs.priority ?? ''}
                        onChange={handleSelectChange}
                    >
                        <MenuItem value={TodoPriorities.MINOR}>
                            <div className="dialog__priority-option">
                                <div className="dialog__priority-option-minor"></div>
                                <span className="dialog__priority-option-name">{t('common.minor')}</span>
                            </div>
                        </MenuItem>
                        <MenuItem value={TodoPriorities.MEDIUM}>
                            <div className="dialog__priority-option">
                                <div className="dialog__priority-option-medium"></div>
                                <span className="dialog__priority-option-name">{t('common.medium')}</span>
                            </div>
                        </MenuItem>
                        <MenuItem value={TodoPriorities.CRITICAL}>
                            <div className="dialog__priority-option">
                                <div className="dialog__priority-option-critical"></div>
                                <span className="dialog__priority-option-name">{t('common.critical')}</span>
                            </div>
                        </MenuItem>
                    </Select>
                    <FormHelperText>{!inputs.priority ? 'Field can\'t be empty' : ''}</FormHelperText>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>{t('common.cancel')}</Button>
                <Button onClick={handleSubmit}
                        disabled={!inputs.priority || !inputs.name || !inputs.comment}>
                    {t('common.confirm')}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default TodoInfoPopup;
