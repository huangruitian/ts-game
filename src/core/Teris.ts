import { IPoint, Shape } from "./types"
import { getRandom } from "./utils"
import SquareGroup from "./SquareGroup"
/**
 * 田字形 不需要旋转，咋办呢？直接重写方法
 */
class SquareShape extends SquareGroup {
  constructor(
    centerPoint: IPoint,
    color: string,
  ) {
    const shape: Shape = [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
    ]
    super(centerPoint, color, shape)
  }
  // 不需要旋转，咋办呢？直接重写方法; 返回圆形状
  afterRotateShape(): Shape {
    return this.shape
  }
}

class TShape extends SquareGroup {
  constructor(
    centerPoint: IPoint,
    color: string,
  ) {
    const shape: IPoint[] = [
      { x: 0, y: 0 },
      { x: 0, y: -1 },
      { x: -1, y: 0 },
      { x: 1, y: 0 },
    ]
    super(centerPoint, color, shape)
  }
}
// 线形状只需要两种形态，一下顺时针，一下逆时针
class LineShape extends SquareGroup {
  constructor(
    centerPoint: IPoint,
    color: string,
  ) {
    const shape: IPoint[] = [
      { x: 0, y: 0 },
      { x: 0, y: -1 },
      { x: 0, y: 1 },
      { x: 0, y: -2 },
    ]
    super(centerPoint, color, shape)
  }
  rotate() {
    super.rotate()
    this.isClock = !this.isClock
  }
}

class LShape extends SquareGroup {
  constructor(
    centerPoint: IPoint,
    color: string,
  ) {
    const shape: IPoint[] = [
      { x: 0, y: 0 },
      { x: -1, y: 0 },
      { x: 1, y: 0 },
      { x: -1, y: -1 },
    ]
    super(centerPoint, color, shape)
  }
  rotate() {
    super.rotate()
    this.isClock = !this.isClock
  }
}
class LMirrorShape extends SquareGroup {
  constructor(
    centerPoint: IPoint,
    color: string,
  ) {
    const shape: IPoint[] = [
      { x: 0, y: 0 },
      { x: -1, y: 0 },
      { x: -2, y: 0 },
      { x: 0, y: -1 },
    ]
    super(centerPoint, color, shape)
  }
  rotate() {
    super.rotate()
    this.isClock = !this.isClock
  }
}

class SShape extends SquareGroup {
  constructor(
    centerPoint: IPoint,
    color: string,
  ) {
    const shape: IPoint[] = [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: -1, y: 0 },
      { x: -1, y: -1 },
    ]
    super(centerPoint, color, shape)
  }
  rotate() {
    super.rotate()
    this.isClock = !this.isClock
  }
}

class SMirrorShape extends SquareGroup {
  constructor(
    centerPoint: IPoint,
    color: string,
  ) {
    const shape: IPoint[] = [
      { x: 0, y: 0 },
      { x: -1, y: 0 },
      { x: -1, y: 1 },
      { x: 0, y: -1 },
    ]
    super(centerPoint, color, shape)
  }
  rotate() {
    super.rotate()
    this.isClock = !this.isClock
  }
}

class OShape extends SquareGroup {
  constructor(
    centerPoint: IPoint,
    color: string,
  ) {
    const shape: IPoint[] = [
      { x: 0, y: 0 }
    ]
    super(centerPoint, color, shape)
  }
  // 不需要旋转，咋办呢？直接重写方法; 返回圆形状
  afterRotateShape(): Shape {
    return this.shape
  }
}

const squares = [
  SquareShape,     //田字型
  TShape,            
  LineShape,       //线型
  LShape,
  LMirrorShape,       //反L形
  SShape,
  SMirrorShape,
  OShape,
]

const colors: string[] = [
  'red',
  'blue',
  'green',
  '#ffffff',
  'pink',
]

const createTeris = (centerPoint: IPoint) => {
  let index: number = getRandom(0, squares.length)
  const shape = squares[index]
  index = getRandom(0, colors.length)
  const color: string = colors[index]
  return new shape(centerPoint, color)
}

export default createTeris


