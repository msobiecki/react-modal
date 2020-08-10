import React, {
  useReducer,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from 'react';
import PropTypes, { InferProps } from 'prop-types';

import {
  reducer as modalReducer,
  initialValues as modalInitialValues,
} from './Modal.reducer';

import {
  Wrapper,
  Holder,
  Panel,
  PanelInner,
  Close,
  CloseIcon,
} from './Modal.styled';

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
  }),
  onOpenStart: PropTypes.func,
  onOpenEnd: PropTypes.func,
  onCloseStart: PropTypes.func,
  onCloseEnd: PropTypes.func,
};

const modalDefaultProps = {
  options: {
    openingDuration: 200,
    closingDuration: 200,
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
      if (modalState.isOpened) modalDispatch({ type: 'CLOSE_START' });
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

    useImperativeHandle(forwardedRef, () => ({
      openModal: () => openModal(),
      closeModal: () => closeModal(),
    }));

    return (
      <>
        {!modalState.isClosed ? (
          <Wrapper>
            <Holder
              isVisible={
                modalState.isOpening ||
                modalState.isOpened ||
                modalState.isClosing
                  ? true
                  : false
              }
              isOpening={modalState.isOpening ? true : false}
              isClosing={modalState.isClosing ? true : false}
              background={'rgba(0,0,0,.25)'}
              openingDuration={modalState.openingDuration}
              closingDuration={modalState.closingDuration}
            >
              <Panel>
                {/* <Close>
                  <CloseIcon></CloseIcon>
                </Close> */}
                <PanelInner>{children}</PanelInner>
              </Panel>
            </Holder>
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
