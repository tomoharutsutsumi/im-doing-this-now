// @flow
import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom';

type Props = {
  isOpen: Boolean,
  finishTask: (e: Event) => void,
  history: Object
}

const FinishModal = ({ isOpen, finishTask, history }: Props) => (
  <Modal
    isOpen={isOpen}
    contentLabel="Finish Modal"
  >
    <button
      type="button"
      onClick={() => {
        finishTask();
        history.push('/finished');
      }}
    >
Do you finish this task?
    </button>
  </Modal>
);

export default withRouter(FinishModal);
