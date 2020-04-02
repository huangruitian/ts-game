import { IPoint, Shape } from "./types";
import { PanelSize, MoveDirection } from "./viewer/PageConfig";
import SquareGroup from "./SquareGroup";
import { isPoint } from "./utils";

/**
 * 小方块规则类
 */

class TerisRule {
  /**
   * 判断小方块能不能移动
   * @param targetPoint 目标点坐标
   * @param shape       形状
   */
  static canIMove(targetPoint: IPoint, shape: Shape): boolean {
    // 根据形状和目标点坐标，可以判断相对面板的位置，如果有一个超出面板边界，就不能移动 
    const shapes: Shape = shape.map(p => {
      return {
        x: p.x + targetPoint.x,
        y: p.y + targetPoint.y
      }
    })
    // 得到相对于面板的 shapes 形状之后判断有没有超出面板，怎么判断，盘点x/y有没有超出游戏面板
    const { width, height } = PanelSize
    const isMove = shapes.some(p => {
      const { x, y } = p
      if (x < 0 || x >= width || y < 0 || y >= height) {
        return true
      }
    })
    // 至少有一个面板超出了   
    if (isMove) {
      return false
    }
    return true;
  }
  /**
   * @param target  // 有可能是一个IPoint 坐标，有个能是个方向
   * @param squares 
   */
  static move(target: MoveDirection, squares: SquareGroup): boolean;
  static move(target: IPoint, squares: SquareGroup): boolean;
  static move(target: IPoint | MoveDirection, squares: SquareGroup): boolean {
    // 如果是坐标，直接移动
    if (isPoint(target)) {
      // 怎么移动呢？先判断能不能移动，再移动； 
      if (this.canIMove(target, squares.shape)) {
        squares.centerPoint = target
        return true
      }
      return false
    } else {
      // 否则是个方向，就根据方向来设置移动的 targetPoint 坐标
      let targetPoint: IPoint;
      let direction = target
      if (direction === MoveDirection.Up) {
        targetPoint = {
          x: squares.centerPoint.x,
          y: squares.centerPoint.y - 1,
        }
      } else if (direction === MoveDirection.Down) {
        targetPoint = {
          x: squares.centerPoint.x,
          y: squares.centerPoint.y + 1,
        }
      }else if(direction === MoveDirection.Left){
        targetPoint = {
          x: squares.centerPoint.x - 1,
          y: squares.centerPoint.y,
        }
      }else{
        targetPoint = {
          x: squares.centerPoint.x + 1,
          y: squares.centerPoint.y,
        }
      }
      // 巧妙的直接 return this.move(targetPoint, squares)
      // 让俄罗斯方块去运动；
      return this.move(targetPoint, squares)
    }

  }
  static moveDirectly(direction:MoveDirection, teris:SquareGroup) {
    while(this.move(direction, teris)){ }
  }
  /**
   * 判断能不能旋转，简单的加个判断；
   * 为什么能这么的简单？因为之前分得很清楚， 单一职责清晰；
   * @param teris 俄罗斯方块类
   */
  static rotate(teris:SquareGroup):boolean {
    const newShape = teris.afterRotateShape()
    if(this.canIMove(teris.centerPoint, newShape)){
      teris.rotate()
      return true
    }
    return false
  }
}
export default TerisRule