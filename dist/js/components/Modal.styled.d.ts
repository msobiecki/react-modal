declare type WrapperPropsType = {
    isOverlay: boolean;
    zIndex: number;
};
export declare const Wrapper: import("styled-components").StyledComponent<"div", any, WrapperPropsType, never>;
declare type OverlayPropsType = {
    isVisible: boolean;
    isOpening: boolean;
    isClosing: boolean;
    openingDuration: number;
    closingDuration: number;
    padding: string;
    background: string;
};
export declare const Overlay: import("styled-components").StyledComponent<"div", any, OverlayPropsType, never>;
declare type PanelPropsType = {
    isVisible: boolean;
    isOpening: boolean;
    isClosing: boolean;
    openingDuration: number;
    closingDuration: number;
    isRestrictedSize: boolean;
    restrictedWidth: string;
    restrictedHeight: string;
    width: string;
    height: string;
    borderRadius: string;
    border: string;
    padding: string;
    background: string;
    boxShadow: string;
};
export declare const Panel: import("styled-components").StyledComponent<"div", any, PanelPropsType, never>;
export declare const Close: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const CloseIcon: import("styled-components").StyledComponent<"img", any, {}, never>;
export {};
