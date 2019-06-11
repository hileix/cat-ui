export interface MessageTypeProps {
    /** 类名 */
    className?: string;
    /** 样式 */
    style?: object;
}
/**
 * 全局提示
 */
declare class Message {
    static success(text: string, duration?: number, callback?: () => void): void;
    static error(text: string, duration?: number, callback?: () => void): void;
    static info(text: string, duration?: number, callback?: () => void): void;
    static warn(text: string, duration?: number, callback?: () => void): void;
    static loading(text: string, duration?: number, callback?: () => void): void;
    static show(type?: string, text?: string, duration?: number, callback?: any): void;
}
export default Message;
