import * as React from 'react'
import { Component } from 'react'
import { pick } from 'lodash'
import classnames from '../../utils/classnames'
import { StyledUpload } from './styled'

// const presetAccept = {
//   all: '',
//   'all-image': 'image/*',
//   'all-audio': 'audio/*',
//   'all-video': 'video/*',
//   audio: 'audio/aiff,audio/aif,audio/mp4,audio/3gp,audio/avi,audio/wmv,audio/mpg,audio/vob,audio/flv,audio/mov,audio/rmvb,audio/rm,audio/mpeg,audio/mp3,audio/wma,audio/wav,audio/flac,audio/ogg,audio/mp2,audio/aac,audio/amr,audio/m4a,audio/x-m4a',
//   image: 'image/png,image/gif,image/bmp,image/jpeg,image/jpg'
// }

// const presetSize = {
//   all: 0, // without restrict
//   video: 209715200, // upload video,file size <= 200M
//   audio: 209715200, // upload audio,file size <= 200M
//   image: 2097152 // upload image,file size <= 2M
// }
enum errorTypes {
  'overCount',
  'overSize',
  'unmatchAccept',
  'trycatch'
}

export interface IUploadProps {
  id?: string;
  className?: string;
  style?: object;
  multiple?: boolean;
  disabled?: boolean;
  name?: string | string[];
  filesize?: number;
  accept?: string;
  theme?: string;
  maxCount?: number;
  concurrent?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  onError?: (type: number, e?: any) => any;
}

export interface IUploadStates {
  isMounted: boolean;
}

interface IdomProps {
  id?: string;
  style?: object;
  multiple?: boolean;
  disabled?: boolean;
  accept?: string;
}

const domProps: IdomProps = {
  id: '',
  style: {},
  multiple: false,
  disabled: false,
  accept: ''
}

class Upload extends Component<IUploadProps, IUploadStates> {
  static defaultProps = {
    theme: 'default',
    style: {},
    multiple: false,
    disabled: false
  }

  private file: React.RefObject<HTMLInputElement>;

  constructor (props: IUploadProps) {
    super(props)

    this.state = {
      isMounted: false
    }

    this.file = React.createRef()
    // const { name } = this.props
    // this.name = name ? (typeof name === 'string' ? [name] : [...name]) : '' // define the name of uploading file
    // this.addData = [] // temporary storage new data container
    // this.isRequesting = false // whether or not in request process
    // this.counter = 0 // one by one upload files counter
  }

  componentDidMount () {
    this.setState({ isMounted: true })
  }

  private handleChange () {
    const { isMounted } = this.state
    const { onChange, multiple, maxCount, concurrent, disabled } = this.props
    if (!isMounted && disabled) return false
    const fileDOM = this.file.current
    const files = fileDOM.files
    console.log(files, 222)
    const data = []
    if (files.length > 0) {
      // there is files upload
      // if ((!multiple && files.length > 1) || files.length > maxCount) {
      //   // over count limit
      //   console.error(`[UPLOAD ERROR - count]: The upload total count over limit`)
      //   overCount && overCount()
      //   fileDOM.value = ''
      //   return false
      // }
      // for (let i = 0; i < files.length; i++) {
      //   if (!this._disposeAccept(files[i].type)) {
      //     // file type is invalid
      //     console.error(`[UPLOAD ERROR - type]: The ${files[i].name} type is ${files[i].type} which unmatch the accept`)
      //     unmatchAccept && unmatchAccept()
      //     fileDOM.value = ''
      //     return false
      //   }
      //   if (this.size !== 0 && files[i].size > this.size) {
      //     // file size exceed the limit
      //     console.error(`[UPLOAD ERROR - size]: The ${files[i].name} size exceed the limit`)
      //     overSize && overSize()
      //     fileDOM.value = ''
      //     return false
      //   }
      //   const timeStamp = new Date().getTime()
      //   const fileObj = {
      //     label: `${timeStamp}${i}`,
      //     file: files[i]
      //   }
      //   data.push(fileObj)
      // }
      // onChange && onChange(data)
      // if (concurrent === false) {
      //   if (this.isRequesting === false) {
      //     // permit upload
      //     this.file.value = '' // clear upload object
      //     return this._handleAsync(data)
      //   } else {
      //     this.addData = [...this.addData, ...data]
      //   }
      // } else {
      //   this.file.value = ''
      //   return this._handleAsync(data)
      // }
    } else {
      // without file upload
      return console.error(`[UPLOAD ERROR - onChange]: Without any files upload`)
    }
    fileDOM.value = '' // clear upload object

    function handleError (errType: number) {
      const { onError } = this.props
      onError && onError(errType)
      console.error(`[UPLOAD ERROR - ${errorTypes[errType]}]`)
      fileDOM.value = ''
      return false
    }
  }

  private _disposeAccept (type: string) {
    // const acceptArr = this.accept.toLowerCase().split(',')
    // const acceptFilter = /\//g
    // const fileType = type.toLowerCase().split('/')[1]
    // for (var k = 0; k < acceptArr.length; k++) {
    //   let compareAccept = acceptArr[k].split('.')[1]
    //   if (acceptFilter.test(acceptArr[k])) {
    //     compareAccept = acceptArr[k].split('/')[1]
    //   }
    //   const regExp = new RegExp(compareAccept, 'g')
    //   if (compareAccept === fileType || regExp.test(fileType)) {
    //     break
    //   }
    // }
    // if (k === acceptArr.length) return false
    // return true
  }

  render() {
    const { className, theme } = this.props
    const props = pick(this.props, Object.keys(domProps)) as IdomProps
    const classes = classnames({
      prefix: 'hmly-upload',
      theme
    })

    return (
      <StyledUpload
        type='file'
        className={classes('', className)}
        ref={this.file}
        onChange={this.handleChange.bind(this)}  
        {...props}
      />
    )
  }
}

export default Upload
