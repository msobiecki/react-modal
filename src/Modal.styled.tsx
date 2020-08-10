import styled, { css } from 'styled-components';

type WrapperPropsType = {
  isOverlay: boolean;
  zIndex: number;
};
export const Wrapper = styled.div<WrapperPropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: ${(props) => props.zIndex};
  height: 100%;

  ${(props) =>
    !props.isOverlay &&
    css`
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      overflow: auto;
    `}

  ${(props) =>
    props.isOverlay &&
    css`
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
    `}
`;

type OverlayPropsType = {
  isVisible: boolean;
  isOpening: boolean;
  isClosing: boolean;
  padding: string;
  background: string;
  openingDuration: number;
  closingDuration: number;
};
export const Overlay = styled.div<OverlayPropsType>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: ${(props) => props.padding};
  overflow: auto;
  opacity: 0;
  background: ${(props) => props.background};


    ${(props) =>
      props.isVisible &&
      css`
        opacity: 1;
      `}
    ${(props) =>
      props.isOpening &&
      css`
        transition: all ${(props: OverlayPropsType) => props.openingDuration}ms;
      `}
      ${(props) =>
        props.isClosing &&
        css`
          transition: all
            ${(props: OverlayPropsType) => props.closingDuration}ms;
        `};
`;

type PanelPropsType = {
  borderRadius: string;
  border: string;
  background: string;
  boxShadow: string;
};
export const Panel = styled.div<PanelPropsType>`
  position: relative;
  display: block;
  margin: auto;
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  background: ${(props) => props.background};
  box-shadow: ${(props) => props.boxShadow};
`;

export const PanelInner = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Close = styled.div``;

export const CloseIcon = styled.div``;
