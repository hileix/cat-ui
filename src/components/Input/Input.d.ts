export type Ttheme = 'line' | 'line-pwd' | 'box' | 'box-pwd' | 'textarea';
export type TSize = 'large' | 'normal' | 'small';
export type TinputState = number;
export type THandleDOM = HTMLInputElement | HTMLTextAreaElement

export interface HandleProps {
  handleFocus?: (e: React.FocusEvent<THandleDOM>) => void;
  handleBlur?: (e: React.FocusEvent<THandleDOM>) => void;
  handleChange?: (e: React.ChangeEvent<THandleDOM>) => void;
  handleKeyDown?: (e: React.KeyboardEvent<THandleDOM>) => void;
  handleMouseEnter?: (e: React.MouseEvent<THandleDOM>) => void;
  handleMouseLeave?: (e: React.MouseEvent<THandleDOM>) => void;
  handleClipboard?: (e: React.MouseEvent<THandleDOM, MouseEvent> | React.ClipboardEvent<THandleDOM>) => void;
}

declare const enum inputStates {
  default,
  hover,
  active,
  error
}
