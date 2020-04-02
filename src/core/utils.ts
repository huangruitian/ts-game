import { IPoint } from "./types";

export const getRandom = (min:number, max:number):number => {
    const dec = max - min;
    return Math.floor(Math.random() * dec) + min
}

/**
 * 类型保护函数，判断一个类型是不是 IPoint，注意target 要是 any 类型
 * @param target 
 */
export const isPoint = (target:any): target is IPoint => {
    if(typeof target.x === 'undefined'){
        return false
    }
    return true
}