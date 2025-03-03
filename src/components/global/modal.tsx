// app/components/Modal.js
"use client";

import { useState, useEffect, FC } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

/**
 * Modal component that renders its children inside a portal.
 * It is displayed only when `isOpen` is true and the component is rendered in the browser.
 *
 * @param {boolean} isOpen - Determines whether the modal is open or not.
 * @param {() => void} onClose - Function to call when the modal is requested to be closed.
 * @param {React.ReactNode} children - The content to be displayed inside the modal.
 *
 * @returns {React.ReactPortal | null} The modal content rendered in a portal or null if not open or not in the browser.
 */
const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isOpen || !isBrowser) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          &#10005;
        </button>
        <div className="p-6">{children}</div>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
