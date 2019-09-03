import { NgModule } from '@angular/core';
import { PricePipe } from './price.pipe';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [],
  declarations: [PricePipe, FilterPipe],
  exports: [PricePipe, FilterPipe],
})

export class PipeModule {

  static forRoot() {
    return {
      ngModule: PipeModule,
      providers: [],
    };
  }
}
