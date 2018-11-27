import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'colorpickerstencil',
  outputTargets:[
    { type: 'docs' },
    {
      type: 'dist',
      dir: '../../build/stencil'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
