import Square from "../Square";
import { IViewer } from "../types";
import PageConfig from "./PageConfig";
import $ from "jquery";

/**
 * 页面显示类，需要知道两个东西，你要显示什么？小方块
 * 你要在哪里显示，容器container
 */
class SquarePageViewer implements IViewer {
  private dom?: JQuery<HTMLElement>
  private isRemove: boolean = false
  constructor(
    private square: Square,
    private container: JQuery<HTMLElement>
  ) { }
  show() {
    if(this.isRemove){
      return
    }
    if (!this.dom) {
      this.dom = $('<div>').css({
        position: 'absolute',
        width: PageConfig.SquareSize.width,
        height: PageConfig.SquareSize.height,
        border: '1px solid #3c3c3c',
        boxSizing: 'border-box'
      }).appendTo(this.container)
    }
    // 注意这里的坐标，是根据容器的逻辑坐标
    this.dom.css({
      top: this.square.point.y * PageConfig.SquareSize.height,
      left: this.square.point.x * PageConfig.SquareSize.width,
      background: this.square.color,
    })
  }
  remove() {
    if(this.dom && !this.isRemove){
      this.dom.remove()
      this.isRemove = true
    }
  }
}

export default SquarePageViewer