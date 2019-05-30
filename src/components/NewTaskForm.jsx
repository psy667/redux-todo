import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  const props = {
    text: state.text,
    filterText: state.filterVal ? 'Active' : 'All',
  };

  return props;
};

const actionCreators = {
  updateNewTaskText: actions.updateNewTaskText,
  addTask: actions.addTask,
  active: actions.active,
};

class NewTaskForm extends React.Component {
  handleAddTask = (e) => {
    e.preventDefault();
    const { addTask, text } = this.props;
    const task = {text, id: _.uniqueId(), state: 'active'};
    addTask({ task });
  };

  filter = (e) => {
    e.preventDefault();
    this.props.active({ mode: true });
  }

  handleUpdateNewTaskText = (e) => {
    const { updateNewTaskText } = this.props;
    updateNewTaskText({ text: e.target.value });
  };

  render() {
    const { text } = this.props;

    return (
      <form action="" className="form-inline mt-4" onSubmit={this.handleAddTask}>
        <div className="form-group col-9 pl-0 pr-0">
          <input
            type="text"
            required
            value={text}
            onChange={this.handleUpdateNewTaskText}
            className='w-100'
          />
        </div>

        <input type="submit" className="btn btn-primary btn-sm col-3 pl-2" value="Add" />

        <label className='mr-3'>Show: </label><input type="submit" className="btn btn-secondary btn-sm col-2 mt-2" value={this.props.filterText} onClick = {this.filter} />

      </form>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(NewTaskForm);
