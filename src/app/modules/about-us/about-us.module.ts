import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutUsRoutingModule } from './about-us-routing.module'; // Add this line

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, AboutUsRoutingModule],
})
export class AboutUsModule {}
