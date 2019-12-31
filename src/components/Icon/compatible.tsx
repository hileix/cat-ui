
import {IconType} from './IconTypeEnum'

/** 老type映射成新的 */
 enum TypeMap {
    "question-circle"= "question",
    "share3"= "share",
    "share1"= "share",
    "share2"= "share",
    "ins"= "instagram",
    "drag1"="drag-mouse",
    "drag2"="drag",
    "prev"="left",
    "next"="right",
    "eye-close"="invisible",
    "eye-open"="visible"
 }

 /**
 * icon type 兼容处理
 *  
 */
 export function compatible (type: any) {
    return TypeMap[type as keyof typeof TypeMap] || type;
 }
 


 
 
 