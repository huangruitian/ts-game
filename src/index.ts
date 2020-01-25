import { Square } from "./core/Square";
import { SquarePageViewer } from './core/viewer/SquarePageViewer'
import $ from 'jquery'

const sq = new Square()
sq.viewer = new SquarePageViewer(sq, $("#root"))

sq.color = 'red';

sq.point = {
    x:3,
    y:4
}