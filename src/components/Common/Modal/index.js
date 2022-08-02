import Modal from 'react-modal'

import styles from './Modal.module.scss'

export const ModalComponent = ({ isOpen, afterOpen, closeModal, children }) => {
  if (!isOpen) return null

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpen || undefined}
      onRequestClose={closeModal}
      overlayClassName={styles.Overlay}
      className={styles.Modal}
      ariaHideApp={false}
    >
      {children}
    </Modal>
  )
}
