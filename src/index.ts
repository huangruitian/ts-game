
import SquarePageViewer from "./core/viewer/SquarePageViewer";
import $ from "jquery";
import createTeris from "./core/Teris";
import { IPoint } from "./core/types";
import TerisRule from "./core/TerisRule";
import { MoveDirection } from "./core/viewer/PageConfig";

const teris = createTeris({x:3, y:3})

teris.squares.forEach(sq => {
  sq.viewer = new SquarePageViewer(sq, $('#root'))
}) 

$('#btnDown').click(() => {
    TerisRule.move(MoveDirection.Down, teris)
})

$('#btnUp').click(() => {
    TerisRule.move(MoveDirection.Up, teris)
})

$('#btnLeft').click(() => {
    TerisRule.move(MoveDirection.Left, teris)
})

$('#btnRight').click(() => {
    TerisRule.move(MoveDirection.Right, teris)
})


$('#rotate').click(() => {
    TerisRule.rotate(teris)
})