import {ChangeDetectionStrategy, Component, input, output, signal} from '@angular/core';
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent {
  page = output<number>()
  pageLocal = signal<number>(1)

  marginNumber = input.required<string>()
  withNumber = input.required<string>()


  changePage(page:number){
    if(page < 1) return
    this.pageLocal.set(page)

    this.page.emit(page)
  }

}
