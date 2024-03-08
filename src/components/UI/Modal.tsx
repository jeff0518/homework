import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import style from "./Modal.module.scss";

interface ModalProps {
  children: ReactNode;
  modalStyle: string;
  open: boolean;
  onClose: () => void;
}

function Modal({ children, modalStyle = "", open, onClose }: ModalProps) {
  const dialog = useRef<HTMLDialogElement | null>(null);

  const backdropClickHandler = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const modal = dialog.current;

    if (!modal) return;

    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);
  return createPortal(
    <dialog
      className={`${style.modal} ${style[modalStyle]}`}
      ref={dialog}
      onClose={onClose}
      onClick={backdropClickHandler}
    >
      {children}
    </dialog>,
    document.getElementById("modal")!
  );
}
export default Modal;
