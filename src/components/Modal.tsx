import { useSelector } from "react-redux";
import { selectInfo, setModal } from "../redux/slices/info";
import { useAppDispatch } from "../redux/store"
import { ReactNode, useEffect } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

export const Modal = ({children, onClose}: ModalProps) => {
  const dispatch = useAppDispatch();
  const { modal } = useSelector(selectInfo)

  useEffect(() => {
    if (!modal) {
      onClose(); // Вызываем сброс состояния при закрытии модалки
    }
  }, [modal]);
  
  return (
    <div className={`modal ${modal ? 'active' : ''}`} onClick={() => dispatch(setModal(false))}>
      <div className={`modal__content ${modal ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
