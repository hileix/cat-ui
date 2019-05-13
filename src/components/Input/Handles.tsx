import * as React from 'react'
import { InputProps, InputStates, inputStates } from './Input'
import TextArea, { TextAreaProps, TextAreaStates } from './TextArea'
import { THandleDOM } from './Input.d'

type HandlesProps = InputProps | TextAreaProps
type HandlesStates = InputStates | TextAreaStates

const Handles = (WrappedComponent: React.ComponentType<HandlesProps>) => {
  return class Input extends React.PureComponent<HandlesProps, HandlesStates> {
    static TextArea: typeof TextArea

    public handleFocus (e: React.FocusEvent<THandleDOM>): void {
      const { inputState } = this.state
      // set input active state
      inputState !== inputStates.error && this.setState({
        inputState: inputStates.active
      })
  
      const { onFocus } = this.props
      onFocus && onFocus(e as any)
    }
  
    public handleBlur (e: React.FocusEvent<THandleDOM>): void {
      const { inputState } = this.state
      // set input default state
      inputState !== inputStates.error && this.setState({
        inputState: inputStates.default
      })
  
      const { onBlur } = this.props
      onBlur && onBlur(e as any)
    }
  
    public handleChange (e: React.ChangeEvent<THandleDOM>): void {
      const value = e.target.value
      if (!('value' in this.props)) {
        this.setState({ value })
      }

      const { onChange } = this.props
      onChange && onChange(e as any)
    }
  
    public handleKeyDown (e: React.KeyboardEvent<THandleDOM>): void {
      const { onPressEnter, onKeyDown } = this.props
      if (e.keyCode === 13 && onPressEnter) {
        onPressEnter(e as any)
      }
      if (onKeyDown) {
        onKeyDown(e as any)
      }
    }
  
    public handleMouseEnter (e: React.MouseEvent<THandleDOM>): void  {
      const { inputState } = this.state
      inputState === inputStates.default && this.setState({
        inputState: inputStates.hover
      })
    }
  
    public handleMouseLeave (e: React.MouseEvent<THandleDOM>): void  {
      const { inputState } = this.state
      inputState === inputStates.hover && this.setState({
        inputState: inputStates.default
      })
    }
  
    public handleClipboard (e: React.MouseEvent<THandleDOM, MouseEvent> | React.ClipboardEvent<THandleDOM>): void {
      const { onPaste, onContextMenu, onCopy, onCut, clipboardFree, copyFree, pasteFree, cutFree } = this.props
  
      switch (('' + e.type).toLowerCase()) {
        case 'copy':
          onCopy && onCopy(e as any)
          !copyFree && notFree()
          break
        case 'paste':
          onPaste && onPaste(e as any)
          !pasteFree && notFree()
          break
        case 'cut':
          onCut && onCut(e as any)
          !cutFree && notFree()
          break
        case 'contextmenu':
          onContextMenu && onContextMenu(e as any)
          break
      }
  
      !clipboardFree && notFree()
  
      function notFree () {
        if (e && e.preventDefault) {
          e.preventDefault()
        } else {
          window.event.returnValue = false
        }
      }
    }

    render () {
      return <WrappedComponent
        {...this.props}
        handleFocus={this.handleFocus}
        handleBlur={this.handleBlur}
        handleChange={this.handleChange}
        handleKeyDown={this.handleKeyDown}
        handleMouseEnter={this.handleMouseEnter}
        handleMouseLeave={this.handleMouseLeave}
        handleClipboard={this.handleClipboard}
      />
    }
  }
}

export default Handles
