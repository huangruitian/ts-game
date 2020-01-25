import { Shape, Point, MoveDirection } from './types'
import { SquareGroup } from './SquareGroup'
import GameConfig from './GameConfig'
import { isPoint } from './utils'
export class TerisRule {
  /**
   * 
   * @param shape 形状
   * @param targetPoint 中心点坐标
   */
  static canIMove(shape: Shape, targetPoint: Point): boolean {
    //假设已经移动了，中心点已经移动到目标位置，算出小方块的坐标
    const targetSquarePoints: Point[] = shape.map(d => {
      return {
        x: d.x + targetPoint.x,
        y: d.y + targetPoint.y
      }
    })
    const result = targetSquarePoints.some(d => {
      // 是否超出了边界
      return d.x < 0 || d.x > GameConfig.panelSize.width - 1 || d.y < 0 || d.y > GameConfig.panelSize.height - 1;
    })
    //边界判断
    if (result) {
      return false
    }
    return true
  }
  /**
   * 函数重载只是生命，编译结果就不在了
   * @param teris 俄罗斯方块
   * @param targetPointOrDirection 方向或者坐标
   */
  static move(teris: SquareGroup, targetPoint: Point): boolean
  static move(teris: SquareGroup, direction: MoveDirection): boolean
  static move(teris: SquareGroup, targetPointOrDirection: Point | MoveDirection): boolean {
    if (isPoint(targetPointOrDirection)) {
      if (this.canIMove(teris.shape, targetPointOrDirection)) {
        teris.centerPoint = targetPointOrDirection
        return true
      }
      return false
    } else {
      const direction = targetPointOrDirection
      let targetPoint: Point;
      if (direction === MoveDirection.down) {
        targetPoint = {
          x: teris.centerPoint.x,
          y: teris.centerPoint.y + 1
        }
      } else if (direction === MoveDirection.letf) {
        targetPoint = {
          x: teris.centerPoint.x - 1,
          y: teris.centerPoint.y
        }
      } else if (direction === MoveDirection.right) {
        targetPoint = {
          x: teris.centerPoint.x + 1,
          y: teris.centerPoint.y
        }
      }
      return this.move(teris, targetPoint)
    }
  }
  /**
   * 移动到不能移动位置
   * @param teris 方块
   * @param direction 方向
   */
  static moveDirectly(teris:SquareGroup, direction:MoveDirection){
     while(this.move(teris, direction)){}
  }

  static rotate(teris:SquareGroup):boolean{
    const newShape = teris.afterRotateShape();
    if(this.canIMove(newShape, teris.centerPoint)){
      teris.rotate()
      return true;
    }else{
      return false;
    }
  }
}