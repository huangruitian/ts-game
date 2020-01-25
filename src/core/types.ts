/**
 * 坐标
 */
export interface Point {
    readonly x:number,
    readonly y:number
}

export interface IViewer {
    /**
     * 显示
     */
    show():void
    /**
     * 移除
     */
    remove():void
}

/**
 * 形状
 */
export type Shape = Point []

/**
 * 移动的方向
 */
export enum MoveDirection {
  letf,
  right,
  down
}