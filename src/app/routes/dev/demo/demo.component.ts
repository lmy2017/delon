import { Component } from '@angular/core';
import { NaTableColumn } from '@delon/abc';

@Component({
  selector: 'app-demo',
  template: `
  <button nz-button (click)="st.reset()">重置</button>
  <na-table #st [data]="url" [req]="{params: params}" [columns]="columns" multiSort></na-table>
  `,
})
export class DemoComponent {
  url = `/users?total=200`;
  params = { a: 1, b: 2 };
  columns: NaTableColumn[] = [
    { title: '编号', index: 'id' },
    { title: '头像', type: 'img', width: '50px', index: 'picture.thumbnail' },
    {
      title: '姓名',
      index: 'name.last',
      format: (item: any) => `${item.name.last} ${item.name.first}`,
      sort: true,
    },
    {
      title: '国家',
      index: 'nat',
      filter: {
        menus: [
          { text: '中国', value: 'CH' },
          { text: '美国', value: 'US' },
          { text: '德国', value: 'DE' },
        ],
      },
      sort: true,
    },
    {
      title: '性别',
      index: 'gender',
      filter: {
        menus: [
          { text: 'male', value: 'male' },
          { text: 'female', value: 'female' },
        ],
        multiple: false,
      },
      sort: true,
    },
    { title: '注册时间', type: 'date', index: 'registered' },
  ];
}
