import { UnorderedListOutlined } from '@ant-design/icons'

import RequestCreate from '../../page/student/requests/RequestCreate'
import RequsetList from '../../page/student/requests/RequestsList'

import { studentRoutes as routes } from '.'

export default [
  {
    path: routes.requests.create,
    component: RequestCreate,
    breadcrumb: 'Create Request',
    isNavigation: true,
  },
  {
    path: routes.requests.list,
    component: RequsetList,
    breadcrumb: 'Requests List',
    description: 'Requests management',
    navigation: {
      label: 'Requests List',
      icon: UnorderedListOutlined,
    },
  },
]
