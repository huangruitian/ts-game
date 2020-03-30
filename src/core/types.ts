/**
 * 逻辑坐标，这里有个小技巧
 * 这里有个小技巧，因为小方块类使用了访问器 get set
 * 所以不设置 readonly 的话是可以绕过访问器设置的
 */
export interface IPoint {
   readonly x:number,
   readonly y:number,
}

/**
 * 显示接口
 */
export interface IViewer {
    show:() => void
    remove:() => void
}