/**
 * 显示一个小方块到页面上
 * 我们要知道什么？
 * 小方块 square，
 * 容器 container
 * 显示者和小方块都实现了IViewer 这个契约，把两者就联系起来了。
 * 
 */
import { Square } from './../Square'
import { IViewer } from '../types';
import PageConfig from './PageConfig';
import $ from 'jquery'

// 显示者
export class SquarePageViewer implements IViewer {
     private dom?:JQuery<HTMLElement>
     private isRemove:boolean = false

     show(): void {
         if(this.isRemove){
             return;
         }
         if(!this.dom){
            this.dom = $("<div>").css({
                position:'absolute',
                width: PageConfig.SquareSize.width,
                height: PageConfig.SquareSize.height,
                border: PageConfig.SquareSize.border,
                boxSizing: PageConfig.SquareSize.boxSizing,   
            }).appendTo(this.container)
         }
         this.dom.css({
             left: this.square.point.x * PageConfig.SquareSize.width,
             top: this.square.point.y * PageConfig.SquareSize.height,
             background: this.square.color
         })
     }

     remove(): void {
         if(!this.isRemove && this.dom){
             this.dom.remove();
         }
     }

     constructor(
         private square:Square,
         private container:JQuery<HTMLElement>
     ) { }
 }