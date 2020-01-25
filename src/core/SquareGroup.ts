import { Square } from './Square'
import { Shape, Point } from './types'
/**
 * 组合的俄罗斯方块
 */
export class SquareGroup {
    private _squares: readonly Square[];
    public get squares() {
        return this._squares;
    }
    public get centerPoint() {
        return this._centerPoint;
    }
    public get shape() {
        return this._shape;
    }
    public set centerPoint(v: Point) {
        this._centerPoint = v;
        // 同时设置其它小方块的坐标，就达到了设置中心点就设置了整个形状的坐标
        this.setSquarePoints()
    }
    /**
     * 根据中心点坐标，已经形状设置每个小方块的坐标
     */
    private setSquarePoints(){
        this._shape.forEach((d, i) => {
            this._squares[i].point = {
                x: this._centerPoint.x + d.x,
                y: this._centerPoint.y + d.y
            }
        })
    }
    constructor(
        private _shape: Shape,
        private _centerPoint: Point,
        private _color: string
    ) {
        const arr: Square[] = []
        //设置小方块数组，_shape相对位置的坐标可以设置小方块数组(中心点是0，0)
        this._shape.forEach(d => {
            const sq = new Square()
            sq.color = this._color
            // sq.point = {
            //     x: this._centerPoint.x + d.x,
            //     y: this._centerPoint.y + d.y
            // }
            arr.push(sq)
        })
        this._squares = arr;
        this.setSquarePoints()
    }
    //旋转的方向是否为顺时针, 通过继承父类的子类，来重写rotate方法
    protected isClock = true
    /**
     * 根据当前形状，计算返回新的形状
     */
    afterRotateShape(): Shape {
        if (this.isClock) {
            return this.shape.map(p => {
                const newPoint: Point = {
                    x: -p.y,
                    y: p.x
                }
                return newPoint
            })
        } else {
            return this.shape.map(p => {
                const newPoint: Point = {
                    x: p.y,
                    y: -p.x
                }
                return newPoint
            })
        }
    }
    //旋转
    rotate(){
        const newShape = this.afterRotateShape()
        this._shape = newShape;
        this.setSquarePoints()
    }
}