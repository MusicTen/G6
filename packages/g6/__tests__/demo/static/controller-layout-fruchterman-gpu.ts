import { FruchtermanLayout } from '@antv/layout-gpu';
import type { G6Spec } from '../../../src';
import { register } from '../../../src';
import { DataController } from '../../../src/runtime/data';
import { ElementController } from '../../../src/runtime/element';
import { LayoutController } from '../../../src/runtime/layout';
import data from '../../dataset/soccer.json';
import type { StaticTestCase } from '../types';

register('layout', 'fruchterman-gpu', FruchtermanLayout);

export const controllerLayoutFruchtermanGPU: StaticTestCase = async ({ canvas, animation }) => {
  const options: G6Spec = {
    animation,
    data,
    theme: 'light',
    layout: {
      type: 'fruchterman-gpu',
      maxIteration: 1000,
      minMovement: 0.4,
      distanceThresholdMode: 'mean',
      gravity: 1,
      speed: 5,
      animation,
    },
    node: { style: { width: 20, height: 20 } },
  };

  const graph = {
    emit: () => {},
  };

  const model = new DataController();

  model.addData(options?.data || {});

  const context: any = { options, model, graph, canvas, viewport: { getCanvasSize: () => [500, 500] } };

  const element = new ElementController(context);

  await element.render(context);

  const layout = new LayoutController({ ...context, element });

  await layout.layout();
};
