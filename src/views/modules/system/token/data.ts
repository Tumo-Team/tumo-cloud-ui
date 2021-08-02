import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { DescItem } from '/@/components/Description';

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

export const infoSchema: DescItem[] = [
  {
    field: 'username',
    label: '用户名',
  },
  {
    field: 'value',
    label: 'Token令牌',
  },
  {
    field: 'tokenType',
    label: '令牌类型',
  },
  {
    field: 'expiration',
    label: '过期时间',
  },
  {
    field: 'scope',
    label: 'Scope',
  },
];
