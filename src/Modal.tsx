import React, {
  useReducer,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import PropTypes, { InferProps } from 'prop-types';

import {
  reducer as modalReducer,
  initialValues as modalInitialValues,
} from './Modal.reducer';

import { Wrapper, Overlay, Panel, Close, CloseIcon } from './Modal.styled';

type InferPropType<
  PropTypes,
  DefaultProps = {},
  Props = InferProps<PropTypes>
> = {
  [Key in keyof Props]: Key extends keyof DefaultProps
    ? Props[Key] | DefaultProps[Key]
    : Props[Key];
};

const modalPropTypes = {
  children: PropTypes.node,
  options: PropTypes.shape({
    openingDuration: PropTypes.number,
    closingDuration: PropTypes.number,
    zIndex: PropTypes.number,
    isOverlay: PropTypes.bool,
    isOverlayClosing: PropTypes.bool,
    overlayPadding: PropTypes.string,
    overlayBackground: PropTypes.string,
    isPanelRestrictedSize: PropTypes.bool,
    panelRestrictedWidth: PropTypes.string,
    panelRestrictedHeight: PropTypes.string,
    panelWidth: PropTypes.string,
    panelHeight: PropTypes.string,
    panelBorderRadius: PropTypes.string,
    panelBorder: PropTypes.string,
    panelBackground: PropTypes.string,
    panelBoxShadow: PropTypes.string,
    panelPadding: PropTypes.string,
  }),
  onOpenStart: PropTypes.func,
  onOpenEnd: PropTypes.func,
  onCloseStart: PropTypes.func,
  onCloseEnd: PropTypes.func,
};

const modalDefaultProps = {
  options: {
    openingDuration: modalInitialValues.openingDuration,
    closingDuration: modalInitialValues.closingDuration,
    zIndex: modalInitialValues.zIndex,
    isOverlay: modalInitialValues.isOverlay,
    isOverlayClosing: modalInitialValues.isOverlayClosing,
    overlayPadding: modalInitialValues.overlayPadding,
    overlayBackground: modalInitialValues.overlayBackground,
    isPanelRestrictedSize: modalInitialValues.isPanelRestrictedSize,
    panelRestrictedWidth: modalInitialValues.panelRestrictedWidth,
    panelRestrictedHeight: modalInitialValues.panelRestrictedHeight,
    panelWidth: modalInitialValues.panelWidth,
    panelHeight: modalInitialValues.panelHeight,
    panelBorderRadius: modalInitialValues.panelBorderRadius,
    panelBorder: modalInitialValues.panelBorder,
    panelBackground: modalInitialValues.panelBackground,
    panelBoxShadow: modalInitialValues.panelBoxShadow,
    panelPadding: modalInitialValues.panelPadding,
  },
  onOpenStart: () => {},
  onOpenEnd: () => {},
  onCloseStart: () => {},
  onCloseEnd: () => {},
};

type ModalPropsType = InferPropType<
  typeof modalPropTypes,
  typeof modalDefaultProps
>;

type ForwardedRefType = {
  openModal: () => void;
  closeModal: () => void;
};

const Modal = forwardRef<ForwardedRefType, ModalPropsType>(
  (
    { children, options, onOpenStart, onOpenEnd, onCloseStart, onCloseEnd },
    forwardedRef
  ) => {
    const panelRef = useRef<HTMLDivElement>(null);
    const [modalState, modalDispatch] = useReducer(
      modalReducer,
      Object.assign({}, modalInitialValues, options)
    );

    const handleActionOnOpenStart = () =>
      typeof onOpenStart === 'function' && onOpenStart();
    const handleActionOnOpenEnd = () =>
      typeof onOpenEnd === 'function' && onOpenEnd();
    const handleActionOnCloseStart = () =>
      typeof onCloseStart === 'function' && onCloseStart();
    const handleActionOnCloseEnd = () =>
      typeof onCloseEnd === 'function' && onCloseEnd();

    const openModal = () => {
      if (modalState.isClosed) modalDispatch({ type: 'OPEN_START' });
    };

    const closeModal = () => {
      if (modalState.isOpening || modalState.isOpened)
        modalDispatch({ type: 'CLOSE_START' });
    };

    const handleClickDocumentEventListener = (event: MouseEvent) => {
      if (
        !(
          panelRef &&
          panelRef.current &&
          panelRef.current.contains(event.target as Element)
        )
      ) {
        closeModal();
      }
    };

    useEffect(() => {
      let timeout: number;
      if (modalState.isOpening) {
        handleActionOnOpenStart();
        timeout = setTimeout(() => {
          modalDispatch({ type: 'OPEN_END' });
        }, modalState.openingDuration);
      }
      return () => {
        if (timeout) clearTimeout(timeout);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalState.isOpening]);

    useEffect(() => {
      if (modalState.isOpened) handleActionOnOpenEnd();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalState.isOpened]);

    useEffect(() => {
      let timeout: number;
      if (modalState.isClosing) {
        handleActionOnCloseStart();
        timeout = setTimeout(() => {
          modalDispatch({ type: 'CLOSE_END' });
        }, modalState.closingDuration);
      }

      return () => {
        if (timeout) clearTimeout(timeout);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalState.isClosing]);

    useEffect(() => {
      if (modalState.isClosed) handleActionOnCloseEnd();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalState.isClosed]);

    useEffect(() => {
      if (modalState.isOverlay && modalState.isOverlayClosing)
        document.addEventListener('click', handleClickDocumentEventListener);
      return () => {
        if (modalState.isOverlay && modalState.isOverlayClosing)
          document.removeEventListener(
            'click',
            handleClickDocumentEventListener
          );
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modalState.isOpening, modalState.isOpened]);

    useImperativeHandle(forwardedRef, () => ({
      openModal: () => openModal(),
      closeModal: () => closeModal(),
    }));

    const renderPanel = () => {
      return (
        <Panel
          ref={panelRef}
          padding={modalState.panelPadding}
          isRestrictedSize={modalState.isPanelRestrictedSize}
          restrictedWidth={modalState.panelRestrictedWidth}
          restrictedHeight={modalState.panelRestrictedHeight}
          width={modalState.panelWidth}
          height={modalState.panelHeight}
          borderRadius={modalState.panelBorderRadius}
          border={modalState.panelBorder}
          background={modalState.panelBackground}
          boxShadow={modalState.panelBoxShadow}
        >
          {/* <Close>
      <CloseIcon></CloseIcon>
    </Close> */}

          {children}
        </Panel>
      );
    };

    return (
      <>
        {!modalState.isClosed ? (
          <Wrapper
            isOverlay={modalState.isOverlay ? true : false}
            zIndex={modalState.zIndex}
          >
            {modalState.isOverlay ? (
              <Overlay
                isVisible={
                  modalState.isOpening ||
                  modalState.isOpened ||
                  modalState.isClosing
                    ? true
                    : false
                }
                isOpening={modalState.isOpening ? true : false}
                isClosing={modalState.isClosing ? true : false}
                padding={modalState.overlayPadding}
                background={modalState.overlayBackground}
                openingDuration={modalState.openingDuration}
                closingDuration={modalState.closingDuration}
              >
                {renderPanel()}
              </Overlay>
            ) : (
              <>{renderPanel()}</>
            )}
          </Wrapper>
        ) : (
          ''
        )}
      </>
    );
  }
);

Modal.defaultProps = modalDefaultProps;

export default Modal;
