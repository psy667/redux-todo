import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const { tasks: { byId, allIds } } = state;
  const { filterVal } = state;
  const tasks = allIds.map(id => byId[id]).filter(item => filterVal ? item.state === 'active' : true);
  return { tasks };
}

const actionCreators = {
  removeTask: actions.removeTask,
  toggleTaskState: actions.toggleTaskState,
};

class Tasks extends React.Component {
  handleRemoveTask = id => () => {
    const { removeTask } = this.props;
    removeTask({ id });
  };

  handleToggleTaskState = id => () => {
    const { toggleTaskState } = this.props;
    toggleTaskState({ id });
  }

  render(){
    const { tasks } = this.props;

    if (tasks.length === 0) {
      return null;
    }

    return (
      <div className="mt-3">
          <ul className="list-group">
            {tasks.map(({ id, text, state }) => (
              <li key={id} className="list-group-item d-flex">
                <span className="mr-auto">
                  <a href="#" data-test="task-toggle-state" onClick={this.handleToggleTaskState(id)}>
                    {state === 'active' ? text : <s>{text}</s>}
                  </a>
                </span>
                <button type="button" data-test="task-remove" className="close" onClick={this.handleRemoveTask(id)}>
                  <span>&times;</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
    );
  }
};

export default connect(mapStateToProps, actionCreators)(Tasks);
