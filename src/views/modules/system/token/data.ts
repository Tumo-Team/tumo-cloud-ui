import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '用户名',
    dataIndex: 'username',
  },
  {
    title: 'Token令牌',
    dataIndex: 'value',
  },
  {
    title: '令牌类型',
    dataIndex: 'tokenType',
    width: 90,
  },
  {
    title: '过期时间',
    dataIndex: 'expiration',
    width: 180,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'username',
    label: '用户名',
    component: 'Input',
    colProps: { span: 8 },
  },
];
