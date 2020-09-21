import React, { useState, useEffect, useCallback } from 'react'
import { Table, Spin } from 'antd'
import taskService from '../../../services/tasks.service'

const { Column } = Table

const ManageTasks = () => {
  const [loading, setLoading] = useState(true)

  const [tasks, setTasks] = useState([])

  const fetchMarks = useCallback(() => {
    taskService.getAll().then((data) => {
      setTasks(data)
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    fetchMarks()
  }, [fetchMarks])

  return (
    <div className="mark-view-page">
      {loading ? (
        <div className="content-loading">
          <Spin tip="Loading..." />
        </div>
      ) : (
        <Table dataSource={tasks} rowKey="id" loading={loading}>
          <Column width={60} title="#" dataIndex="id" key="id" />
        </Table>
      )}
    </div>
  )
}

export default ManageTasks
