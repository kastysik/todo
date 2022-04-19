import { TodoStates } from '../../../models/todo.model';
import { useTranslation } from 'react-i18next';
import './StateBadge.less';
import getTodoColorClassByStateKey from '../../services/todo.service';

interface StateBadgeProps {
    stateKey: TodoStates;
}

function StateBadge(props: StateBadgeProps) {
    const { t } = useTranslation();

    function getTitleByStateKey(stateKey: TodoStates): string {
        switch (stateKey) {
            case TodoStates.TODO: {
                return t('common.todo');
            }
            case TodoStates.IN_PROGRESS: {
                return t('common.in_progress');
            }
            case TodoStates.DONE: {
                return t('common.done');
            }
        }
    }

    return (
        <div className={getTodoColorClassByStateKey(props.stateKey, 'state-badge')}>
            {getTitleByStateKey(props.stateKey)}
        </div>
    );
}

export default StateBadge;
