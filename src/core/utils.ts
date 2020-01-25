import { Point } from './types'
/**
 * 得到范围的随机数，无法得到最大值
 * @param min 
 * @param max 
 */
export function getRandom(min:number, max:number){
    const dec = max - min
    return Math.floor(Math.random() * dec + min)
}
/**
 * 
 * @param obj 判断obj是不是Point类型
 */
export function isPoint(obj: any): obj is Point{
  if(typeof obj.x === 'undefined'){
      return false
  }
  return true
}