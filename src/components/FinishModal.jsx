// @flow
import React, { useState } from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom';

type Props = {
  isOpen: Boolean,
  finishTask: (e: Event) => void,
  history: Object
}

const FinishModal = ({ isOpen, finishTask, history }: Props) => {
  const [checker, register] = useState('');
  const updateCheckedBy = (e) => {
    register(e.target.value);
  };
  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Finish Modal"
    >

      <input type="text" onChange={updateCheckedBy} />
      {' '}
checked this task
      <button
        type="button"
        onClick={() => {
          finishTask(checker);
          history.push('/finished');
        }}
      >
Do you finish this task?
      </button>
    </Modal>
  );
};

export default withRouter(FinishModal);
