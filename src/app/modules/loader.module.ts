import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgxUiLoaderConfig,
  NgxUiLoaderModule,
  PB_DIRECTION,
  POSITION,
  SPINNER,
} from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  blur: 5,
  delay: 0,
  fastFadeOut: true,
  fgsColor: '#46c8f5',
  fgsPosition: 'center-center',
  fgsSize: 60,
  fgsType: 'square-loader',
  gap: 24,
  logoPosition: 'center-center',
  logoSize: 120,
  logoUrl: '',
  masterLoaderId: 'master',
  overlayBorderRadius: '0',
  overlayColor: 'rgba(40, 40, 40, 0.8)',
  pbColor: 'red',
  pbDirection: 'ltr',
  pbThickness: 3,
  hasProgressBar: false,
  text: '',
  textColor: '#FFFFFF',
  textPosition: 'center-center',
  maxTime: -1,
  minTime: 300,
};

@NgModule({
  declarations: [],
  imports: [CommonModule, NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)],
})
export class LoaderModule {}
