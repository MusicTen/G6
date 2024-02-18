import type { G6Spec } from '../spec';
import type { Canvas } from './canvas';
import type { DataController } from './data';
import type { ElementController } from './element';
import type { Graph } from './graph';
import type { ViewportController } from './viewport';

export interface RuntimeContext {
  /**
   * <zh/> 画布实例
   *
   * <en/> Canvas instance
   */
  canvas: Canvas;
  /**
   * <zh/> G6 实例
   *
   * <en/> G6 instance
   */
  graph: Graph;
  /**
   * <zh/> G6 配置项
   *
   * <en/> G6 options
   */
  options: G6Spec;
  /**
   * <zh/> 数据模型
   *
   * <en/> Data model
   */
  model: DataController;
  /**
   * <zh/> 元素控制器
   *
   * <en/> Element controller
   * @description
   * <zh/> 仅在绘制开始后才可用
   *
   * <en/> Only available after drawing starts
   */
  element?: ElementController;
  /**
   * <zh/> 视口控制器
   *
   * <en/> Viewport controller
   */
  viewport?: ViewportController;
}
