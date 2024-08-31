import {ChangeDetectionStrategy, Component, output, signal} from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent {
  page = output<number>()
  pageLocal = signal<number>(1)

  changePage(page:number){
    if(page < 1) return
    this.pageLocal.set(page)

    this.page.emit(page)
  }

}
