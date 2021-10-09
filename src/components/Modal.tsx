import {
  useReducer,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useRef,
  useCallback,
} from "react";
import PropTypes, { InferProps } from "prop-types";

import {
  reducer as modalReducer,
  initialValues as modalInitialValues,
} from "./Modal.reducer";

import { Wrapper, Overlay, Panel, Close, CloseIcon } from "./Modal.styled";

import CLOSE_ICON from "../assets/images/Close.svg";

type InferPropType<PropTypes, DefaultProps, Props = InferProps<PropTypes>> = {
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
    isPanelCloseButton: PropTypes.bool,
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
    isPanelCloseButton: modalInitialValues.isPanelCloseButton,
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
  onOpenStart: () => null,
  onOpenEnd: () => null,
  onCloseStart: () => null,
  onCloseEnd: () => null,
};

type ModalPropsType = InferPropType<
  typeof modalPropTypes,
  typeof modalDefaultProps
>;

type ForwardedRefType = {
  openModal: () => void;
  closeModal: () => void;
};

export const Modal = forwardRef<ForwardedRefType, ModalPropsType>(
  (
    {
      children,
      options,
      onOpenStart,
      onOpenEnd,
      onCloseStart,
      onCloseEnd,
    }: ModalPropsType,
    forwardedRef
  ) => {
    const panelRef = useRef<HTMLDivElement>(null);
    const [modalState, modalDispatch] = useReducer(
      modalReducer,
      Object.assign({}, modalInitialValues, options)
    );

    const handleActionOnOpenStart = useCallback(
      () => typeof onOpenStart === "function" && onOpenStart(),
      [onOpenStart]
    );
    const handleActionOnOpenEnd = useCallback(
      () => typeof onOpenEnd === "function" && onOpenEnd(),
      [onOpenEnd]
    );
    const handleActionOnCloseStart = useCallback(
      () => typeof onCloseStart === "function" && onCloseStart(),
      [onCloseStart]
    );
    const handleActionOnCloseEnd = useCallback(
      () => typeof onCloseEnd === "function" && onCloseEnd(),
      [onCloseEnd]
    );

    const openModal = useCallback(() => {
      if (modalState.isClosed) modalDispatch({ type: "OPEN_START" });
    }, [modalState.isClosed]);

    const closeModal = useCallback(() => {
      if (modalState.isOpened) modalDispatch({ type: "CLOSE_START" });
    }, [modalState.isOpened]);

    const handleClickDocumentEventListener = useCallback(
      (event: MouseEvent) => {
        if (
          !(
            panelRef &&
            panelRef.current &&
            panelRef.current.contains(event.target as Element)
          )
        ) {
          closeModal();
        }
      },
      [closeModal]
    );

    useEffect(() => {
      let timeout: ReturnType<typeof setTimeout>;
      if (modalState.isOpening) {
        handleActionOnOpenStart();
        timeout = setTimeout(() => {
          modalDispatch({ type: "OPEN_END" });
          handleActionOnOpenEnd();
        }, modalState.openingDuration);
      }
      return () => {
        if (timeout) clearTimeout(timeout);
      };
    }, [
      handleActionOnOpenEnd,
      handleActionOnOpenStart,
      modalState.isOpening,
      modalState.openingDuration,
    ]);

    useEffect(() => {
      let timeout: ReturnType<typeof setTimeout>;
      if (modalState.isClosing) {
        handleActionOnCloseStart();
        timeout = setTimeout(() => {
          modalDispatch({ type: "CLOSE_END" });
          handleActionOnCloseEnd();
        }, modalState.closingDuration);
      }

      return () => {
        if (timeout) clearTimeout(timeout);
      };
    }, [
      handleActionOnCloseEnd,
      handleActionOnCloseStart,
      modalState.closingDuration,
      modalState.isClosing,
    ]);

    useEffect(() => {
      if (modalState.isOverlay && modalState.isOverlayClosing)
        document.addEventListener("click", handleClickDocumentEventListener);
      return () => {
        if (modalState.isOverlay && modalState.isOverlayClosing)
          document.removeEventListener(
            "click",
            handleClickDocumentEventListener
          );
      };
    }, [
      modalState.isOpening,
      modalState.isOpened,
      modalState.isOverlay,
      modalState.isOverlayClosing,
      handleClickDocumentEventListener,
    ]);

    useImperativeHandle(forwardedRef, () => ({
      openModal: () => openModal(),
      closeModal: () => closeModal(),
    }));

    const renderPanel = () => {
      return (
        <Panel
          ref={panelRef}
          isVisible={
            modalState.isOpening || modalState.isOpened || modalState.isClosing
              ? true
              : false
          }
          isOpening={modalState.isOpening ? true : false}
          isClosing={modalState.isClosing ? true : false}
          openingDuration={modalState.openingDuration}
          closingDuration={modalState.closingDuration}
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
          {modalState.isPanelCloseButton && (
            <Close
              onClick={() => {
                closeModal();
              }}
            >
              <CloseIcon src={CLOSE_ICON} />
            </Close>
          )}

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
                openingDuration={modalState.openingDuration}
                closingDuration={modalState.closingDuration}
                padding={modalState.overlayPadding}
                background={modalState.overlayBackground}
              >
                {renderPanel()}
              </Overlay>
            ) : (
              <>{renderPanel()}</>
            )}
          </Wrapper>
        ) : (
          ""
        )}
      </>
    );
  }
);
Modal.displayName = "Modal";
Modal.defaultProps = modalDefaultProps;

export default Modal;
