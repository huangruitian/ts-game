import { Point, IViewer } from "./types"

/**
 * 小方块类
 */
export class Square {
    // private _x:number //逻辑坐标，不要去想界面！！！
    // private _y:number

    // 属性：显示者
    private _viewer?:IViewer
    private _point: Point = {
        x:0,
        y:0
    }
    private _color: string = ''
    // constructor(
    //     private _point: Point,
    //     private _color: string
    // ) {}

    public get viewer() {
        return this._viewer
    }

    public set viewer(val) {
        this._viewer = val
        //完成显示
        if(val){
            this._viewer?.show()
        }
    }

    public get point() {
        return this._point
    }

    public set point(val: Point) {
        this._point = val
        //完成显示
        if(this._viewer){
            this._viewer.show()
        }
    }

    public get color() {
        return this._color
    }

    public set color(val) {
        this._color = val
    }
}