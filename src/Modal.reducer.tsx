type State = {
  openingDuration: number;
  closingDuration: number;
  isOpening: boolean;
  isOpened: boolean;
  isClosing: boolean;
  isClosed: boolean;
};

enum Type {
  OPEN_START = 'OPEN_START',
  OPEN_END = 'OPEN_END',
  CLOSE_START = 'CLOSE_START',
  CLOSE_END = 'CLOSE_END',
}
export type TypeKey = keyof typeof Type;

type Action = {
  type: TypeKey;
};

const initialValues = {
  openingDuration: 200,
  closingDuration: 200,
  isOpening: false,
  isOpened: false,
  isClosing: false,
  isClosed: true,
};

const reducer = (state: State, action: Action) => {
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
