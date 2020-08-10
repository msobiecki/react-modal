import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
`;

type HolderPropsType = {
  isVisible: boolean;
  isOpening: boolean;
  isClosing: boolean;
  background: string;
  openingDuration: number;
  closingDuration: number;
};
export const Holder = styled.div<HolderPropsType>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;
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
        transition: all ${(props: HolderPropsType) => props.openingDuration}ms;
      `}
      ${(props) =>
        props.isClosing &&
        css`
          transition: all ${(props: HolderPropsType) => props.closingDuration}ms;
        `};
`;

export const Panel = styled.div``;

export const PanelInner = styled.div``;

export const Close = styled.div``;

export const CloseIcon = styled.div``;
