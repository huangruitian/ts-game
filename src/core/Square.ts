import { IPoint, IViewer } from "./types"

/**
 * 小方块类
 */
class Square {
    private _point: IPoint = { x: 0, y: 0 }
    private _color: string = 'red'
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
        // 有值自动显示出来
        if(val){
            val.show()
        }
    }
}

export default Square