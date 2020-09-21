import { UnorderedListOutlined } from '@ant-design/icons'

import MarksList from '../../page/courseManager/marks/MarksList'
import MarkInfo from '../../page/courseManager/marks/MarkInfo'
import ManageTasks from '../../page/courseManager/tasks/ManageTasks'

import { courseManagerRoutes as routes } from '.'

export default [
  {
    path: routes.marks.info,
    component: MarkInfo,
    breadcrumb: 'Mark Info',
  },
  {
    path: routes.marks.list,
    component: MarksList,
    breadcrumb: 'Marks List',
    description: 'Marks management',
    navigation: {
      label: 'Marks List',
      icon: UnorderedListOutlined,
    },
  },
  {
    path: routes.tasks.list,
    component: ManageTasks,
    breadcrumb: 'Manage Tasks List',
    description: 'Tasks management',
    navigation: {
      label: 'Tasks List',
      icon: UnorderedListOutlined,
    },
  },
]
