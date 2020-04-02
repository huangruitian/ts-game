import { Shape, IPoint } from "./types"
import Square from "./Square"
import TerisRule from "./TerisRule"

/**
 * 小方块组合类
 * 通过形状，和中心点就可以描述出形状；
 */
class SquareGroup {
  private _squares: Square[]
  constructor(
    private _centerPoint: IPoint,
    private _color: string,
    private _shape: Shape
  ) {
    const arr: Square[] = []
    this._shape.forEach((p) => {
      const sq = new Square()
      sq.color = this._color
      // sq.point = {
      //   x: this._centerPoint.x + p.x,
      //   y: this._centerPoint.y + p.y,
      // }
      arr.push(sq)
    })
    this._squares = arr
    // 初始化完再设置一下中心点坐标
    this.setSquarePoints()
  }
  /**
   * 根据形状和中心点设置坐标，squares设置坐标的时候会自动调用显示者的 show()
   */
  private setSquarePoints() {
    this._shape.forEach((p, i) => {
      this._squares[i].point = {
        x: this._centerPoint.x + p.x,
        y: this._centerPoint.y + p.y,
      }
    })
  }
  // 是否是顺时针旋转
  protected isClock: boolean = true
  // 旋转之后得到的新形状
  // 如果是顺时针旋转，(x, y) -> (-y, x)；逆时针就是 (x, y) -> (y, -x)；
  afterRotateShape(): Shape {
    if (this.isClock) {
      return this._shape.map((item) => {
        const p: IPoint = {
          x: -item.y,
          y: item.x,
        }
        return p
      })
    } else {
      return this._shape.map((item) => {
        const p: IPoint = {
          x: item.y,
          y: -item.x,
        }
        return p
      })
    }
  }
  // 通用的方法，子类不需要这样旋转可以覆盖这个方法
  rotate() {
    const newShape = this.afterRotateShape()
    // 得到新的形状之后再设置坐标
    this._shape = newShape
    this.setSquarePoints()
  }
  // 设置新的中心点，形状会跟着中心点变化，达到下落效果
  set centerPoint(val) {
    this._centerPoint = val
    // 注意是根据形状，重新设置小方块的当前坐标
    this.setSquarePoints()
  }
  get centerPoint() {
    return this._centerPoint
  }
  get squares() {
    return this._squares
  }
  get shape() {
    return this._shape
  }
  set shape(val) {
    this._shape = val
  }
}
export default SquareGroup