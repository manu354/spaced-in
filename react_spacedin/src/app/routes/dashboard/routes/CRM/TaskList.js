import React from "react";

import Widget from "components/Widget";

import TaskItem from "./TaskItem";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const taskList = [
  {
    id: 1,
    title: 'Make the home page dynamic',
    completed: false,
    user: {
      projectName: 'Chatbull',
      avatar: 'https://via.placeholder.com/150x150'
    },
    dueDate: 'Today',
    tags: [1, 2]
  }, {
    id: 2,
    title: 'Design wireframes based on the requirements',
    completed: false,
    user: {
      projectName: 'Flexile',
      avatar:'https://via.placeholder.com/150x150'
    },
    dueDate: 'Today',
    tags: [2, 4]
  }, {
    id: 3,
    title: 'Need to define microinteraction on click of signin button',
    completed: false,
    user: {
      projectName: 'Jumbo',
      avatar: 'https://via.placeholder.com/150x150'
    },
    dueDate: '21 July',
    tags: [1, 2, 3]
  }, {
    id: 4,
    title: 'New page need to be designed for property listing',
    completed: false,
    user: {
      projectName: 'Flexile',
      avatar:'https://via.placeholder.com/150x150'
    },
    dueDate: '23 July',
    tags: [2, 3, 4]
  }, {
    id: 5,
    title: 'Design wireframes based on the requirements',
    completed: false,
    user: {
      projectName: 'Flexile',
      avatar: 'https://via.placeholder.com/150x150'
    },
    dueDate: '1 Aug',
    tags: [2, 4]
  }];

class TaskList extends React.Component {
  state = {
    taskList,
    value: 0,
  };


  handleChange = (event, value) => {
    this.setState({value});
  };
  onChange = (data, index) => {
    this.setState((prevState) => ({
      taskList: prevState.taskList.map(task => {
        if (task.id === data.id) {
          task.completed = !data.completed;
        }
        return task;
      })
    }))
  };

  render() {
    const {value, taskList} = this.state;
    return (
      <Widget>
        <div className="d-flex flex-row">
          <h4 className="mb-0"> Task List</h4>
          <span className="text-primary font-weight-medium pointer ml-auto"><i
            className="zmdi zmdi-search jr-fs-xxl ml-2 d-inline-block align-middle"/> </span>
        </div>
        <div className="jr-tabs-classic">
          <Tabs className="jr-tabs-up" value={value} onChange={this.handleChange} centered>
            <Tab className="jr-tabs-label" label="All Tasks"/>
            <Tab className="jr-tabs-label" label="My Tasks"/>
          </Tabs>
          <div className="jr-tabs-content jr-task-list">
            {value === 0 && taskList.map((task, index) => <TaskItem key={index} data={task} onChange={this.onChange}/>)}
            {value === 1 && taskList.map((task, index) => <TaskItem key={index} data={task} onChange={this.onChange}/>)}
          </div>
        </div>
      </Widget>
    );
  }
}


export default TaskList;
