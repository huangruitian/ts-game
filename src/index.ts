import Square from "./core/Square";
import SquarePageViewer from "./core/viewer/SquarePageViewer";
import $ from "jquery";

const sq = new Square()
sq.viewer = new SquarePageViewer(sq, $('#root'))

$('#btnDown').click(() => {
   sq.point = {
       x:sq.point.x,
       y:sq.point.y + 1
   }
})

$('#btnRemove').click(() => {
    if(sq.viewer){
      sq.viewer.remove()
    }
})

$('#btnShow').click(() => {
    sq.viewer = new SquarePageViewer(sq, $('#root'))
})