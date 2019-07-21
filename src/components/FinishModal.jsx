// @flow
import React, { useState } from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom';

type Props = {
  isOpen: Boolean,
  finishTask: (e: Event) => void,
  closeModal: (e: Event) => void,
  history: Object
}

const FinishModal = ({
  isOpen, finishTask, history, closeModal,
}: Props) => {
  const [checker, register] = useState('');
  const updateCheckedBy = (e) => {
    register(e.target.value);
  };
  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Finish Modal"
      className="modal"
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick
    >
      <input type="text" onChange={updateCheckedBy} />
      {' '}
checked this task
      <button
        className="modal__button"
        type="button"
        onClick={() => {
          finishTask(checker);
          history.push({
            pathname: '/finished',
            state: {
              message: 'Congratulation! you finished task!',
            },
          });
        }}
      >
checked and finish this
      </button>
    </Modal>
  );
};

export default withRouter(FinishModal);
