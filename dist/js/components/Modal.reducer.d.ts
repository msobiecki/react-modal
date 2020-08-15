declare type State = {
    openingDuration: number;
    closingDuration: number;
    zIndex: number;
    isOverlay: boolean;
    isOverlayClosing: boolean;
    overlayPadding: string;
    overlayBackground: string;
    isPanelCloseButton: boolean;
    isPanelRestrictedSize: boolean;
    panelRestrictedWidth: string;
    panelRestrictedHeight: string;
    panelWidth: string;
    panelHeight: string;
    panelBorderRadius: string;
    panelBorder: string;
    panelBackground: string;
    panelBoxShadow: string;
    panelPadding: string;
    isOpening: boolean;
    isOpened: boolean;
    isClosing: boolean;
    isClosed: boolean;
};
declare enum Type {
    OPEN_START = "OPEN_START",
    OPEN_END = "OPEN_END",
    CLOSE_START = "CLOSE_START",
    CLOSE_END = "CLOSE_END"
}
export declare type TypeKey = keyof typeof Type;
declare type Action = {
    type: TypeKey;
};
declare const initialValues: {
    openingDuration: number;
    closingDuration: number;
    zIndex: number;
    isOverlay: boolean;
    isOverlayClosing: boolean;
    overlayPadding: string;
    overlayBackground: string;
    isPanelCloseButton: boolean;
    isPanelRestrictedSize: boolean;
    panelRestrictedWidth: string;
    panelRestrictedHeight: string;
    panelWidth: string;
    panelHeight: string;
    panelBorderRadius: string;
    panelBorder: string;
    panelBackground: string;
    panelBoxShadow: string;
    panelPadding: string;
    isOpening: boolean;
    isOpened: boolean;
    isClosing: boolean;
    isClosed: boolean;
};
declare const reducer: (state: State, action: Action) => State;
export default reducer;
export { reducer, initialValues };
