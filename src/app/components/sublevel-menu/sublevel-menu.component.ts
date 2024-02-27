import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { INavbarData } from '../sidenav/helper';

@Component({
  selector: 'app-sublevel-menu',
  templateUrl: './sublevel-menu.component.html',
  styleUrl: './sublevel-menu.component.scss'
})
export class SublevelMenuComponent {
  @Input() data: INavbarData = {
    routeLink: '',
    label: '',
    icon: '',
    expanded: false,
    items: []
  }

  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;


  constructor (public router: Router) {

  }

  ngOnInit(): void {

  }


  handleClick(item: any): void {
    if (!this.multiple) {
      if (this.data.items && this.data.items.length > 0) {
        for (let modelItem of this.data.items) {
          if (item !== modelItem && modelItem.expanded) {
            modelItem.expanded = false;
          }
        }
      }
    }

    item.expanded = !item.expanded;
  }

  getActiveClass(item:INavbarData): string {
    return item.expanded && this.router.url.includes(item.routeLink) ? 'active-sublevel' : ''
  }


}
