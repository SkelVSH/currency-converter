import { useClickOutside } from '@/hooks/useClickOutside';
import { useEffect, useRef } from 'react';
import closeIcon from '@assets/x.svg';
import { createPortal } from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

export const Modal = ({ isOpen, onClose, children, title }: ModalProps) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  useClickOutside(modalRef, onClose);

  if (!isOpen) return null;

  return createPortal(
    <div className="z-10 fixed top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center">
      <div ref={modalRef} className="p-4 w-110 bg-white rounded-2xl">
        <div className="flex items-center justify-between mb-3">
          <p className="font-semibold text-base">{title}</p>
          <button
            className="size-5 flex items-center justify-center"
            onClick={onClose}>
            <img src={closeIcon} alt="Close button" />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
};
