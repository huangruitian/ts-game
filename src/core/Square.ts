import { IPoint, IViewer } from "./types"

/**
 * 小方块类
 */
class Square {
    private _point: IPoint = { x: 0, y: 0 }
    private _color: string = 'red'
    // class SquarePageViewer implements IViewer，具体怎么显示抛给外面处理；
    private _viewer?: IViewer
    get point() {
        return this._point
    }
    set point(val) {
        this._point = val
        // 显示不是小方块的职责，但是它知道什么时候该去显示
        if (this._viewer) {
            this._viewer.show()
        }
    }
    get color() {
        return this._color
    }
    set color(val) {
        this._color = val
    }
    get viewer() {
        return this._viewer
    }
    set viewer(val) {
        this._viewer = val
        // 设置了显示着就自动显示出来
        if(val){
            val.show()
        }
    }
}

export default Square