type State = {
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

enum Type {
  OPEN_START = "OPEN_START",
  OPEN_END = "OPEN_END",
  CLOSE_START = "CLOSE_START",
  CLOSE_END = "CLOSE_END",
}
export type TypeKey = keyof typeof Type;

type Action = {
  type: TypeKey;
};

const initialValues = {
  openingDuration: 200,
  closingDuration: 200,
  zIndex: 9999,
  isOverlay: false,
  isOverlayClosing: true,
  overlayPadding: "20px",
  overlayBackground: "rgba(0,0,0,.25)",
  isPanelCloseButton: true,
  isPanelRestrictedSize: false,
  panelRestrictedWidth: "100%",
  panelRestrictedHeight: "100%",
  panelWidth: "initial",
  panelHeight: "initial",
  panelBorderRadius: "25px",
  panelBorder: "none",
  panelBackground: "rgba(255,255,255,1)",
  panelBoxShadow: "0 3px 6px 0 rgba(0,0,0,.15)",
  panelPadding: "25px",
  isOpening: false,
  isOpened: false,
  isClosing: false,
  isClosed: true,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Type.OPEN_START:
      return {
        ...state,
        isOpening: true,
        isOpened: false,
        isClosing: false,
        isClosed: false,
      };
    case Type.OPEN_END:
      return {
        ...state,
        isOpening: false,
        isOpened: true,
        isClosing: false,
        isClosed: false,
      };
    case Type.CLOSE_START:
      return {
        ...state,
        isOpening: false,
        isOpened: false,
        isClosing: true,
        isClosed: false,
      };
    case Type.CLOSE_END:
      return {
        ...state,
        isOpening: false,
        isOpened: false,
        isClosing: false,
        isClosed: true,
      };
    default:
      return state;
  }
};

export default reducer;
export { reducer, initialValues };
