import { TodoPriorities } from '../../../models/todo.model';
import { useTranslation } from 'react-i18next';
import './PriorityBadge.less';

interface PriorityBadgeProps {
    priority: TodoPriorities;
}

function PriorityBadge(props: PriorityBadgeProps) {
    const { t } = useTranslation();

    function getBadgeClassName(priority: TodoPriorities): string {
        switch (priority) {
            case TodoPriorities.MINOR: {
                return 'priority-badge__minor';
            }
            case TodoPriorities.MEDIUM: {
                return 'priority-badge__medium';
            }
            case TodoPriorities.CRITICAL: {
                return 'priority-badge__critical';
            }
        }
    }

    function getTitleByPriority(priority: TodoPriorities): string {
        switch (priority) {
            case TodoPriorities.MINOR: {
                return t('common.minor');
            }
            case TodoPriorities.MEDIUM: {
                return t('common.medium');
            }
            case TodoPriorities.CRITICAL: {
                return t('common.critical');
            }
        }
    }

    return (
        <div className="priority-badge">
            <div className={getBadgeClassName(props.priority)}></div>
            <div className="priority-badge__name">{getTitleByPriority(props.priority)}</div>
        </div>
    );
}

export default PriorityBadge;
