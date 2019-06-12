"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var lodash_1 = require("lodash");
var classnames_1 = require("../../utils/classnames");
var styled_1 = require("./styled");
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
var errorTypes;
(function (errorTypes) {
    errorTypes[errorTypes["overCount"] = 0] = "overCount";
    errorTypes[errorTypes["overSize"] = 1] = "overSize";
    errorTypes[errorTypes["unmatchAccept"] = 2] = "unmatchAccept";
    errorTypes[errorTypes["trycatch"] = 3] = "trycatch";
})(errorTypes || (errorTypes = {}));
var domProps = {
    id: '',
    style: {},
    multiple: false,
    disabled: false,
    accept: ''
};
var Upload = /** @class */ (function (_super) {
    __extends(Upload, _super);
    function Upload(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isMounted: false
        };
        _this.file = React.createRef();
        return _this;
        // const { name } = this.props
        // this.name = name ? (typeof name === 'string' ? [name] : [...name]) : '' // define the name of uploading file
        // this.addData = [] // temporary storage new data container
        // this.isRequesting = false // whether or not in request process
        // this.counter = 0 // one by one upload files counter
    }
    Upload.prototype.componentDidMount = function () {
        this.setState({ isMounted: true });
    };
    Upload.prototype.handleChange = function () {
        var isMounted = this.state.isMounted;
        var _a = this.props, onChange = _a.onChange, multiple = _a.multiple, maxCount = _a.maxCount, concurrent = _a.concurrent, disabled = _a.disabled;
        if (!isMounted && disabled)
            return false;
        var fileDOM = this.file.current;
        var files = fileDOM.files;
        console.log(files, 222);
        var data = [];
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
        }
        else {
            // without file upload
            return console.error("[UPLOAD ERROR - onChange]: Without any files upload");
        }
        fileDOM.value = ''; // clear upload object
        function handleError(errType) {
            var onError = this.props.onError;
            onError && onError(errType);
            console.error("[UPLOAD ERROR - " + errorTypes[errType] + "]");
            fileDOM.value = '';
            return false;
        }
    };
    Upload.prototype._disposeAccept = function (type) {
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
    };
    Upload.prototype.render = function () {
        var _a = this.props, className = _a.className, theme = _a.theme;
        var props = lodash_1.pick(this.props, Object.keys(domProps));
        var classes = classnames_1.default({
            prefix: 'hmly-upload',
            theme: theme
        });
        return (React.createElement(styled_1.StyledUpload, __assign({ type: 'file', className: classes('', className), ref: this.file, onChange: this.handleChange.bind(this) }, props)));
    };
    Upload.defaultProps = {
        theme: 'default',
        style: {},
        multiple: false,
        disabled: false
    };
    return Upload;
}(react_1.Component));
exports.default = Upload;
