import { defHttp } from '/@/utils/http/axios';
import { ApiPrefix } from '/@/api/model/baseModel';

const Api = {
  BasePageApi: `${ApiPrefix.UPMS_PREFIX}/oss/page`,
  OssAddList: `${ApiPrefix.UPMS_PREFIX}/oss/put-list`,
  BaseApi: `${ApiPrefix.UPMS_PREFIX}/oss`,
};

/**
 * 分页、条件查询
 */
export function getOssPage(params: any) {
  return defHttp.get({
    url: Api.BasePageApi,
    params,
  });
}

/**
 * 根据ID查询
 */
export function getOss(id: string | number) {
  return defHttp.get({
    url: `${Api.BaseApi}/${id}`,
  });
}

/**
 * 新增
 */
export function addOss(params: any) {
  return defHttp.post({
    url: `${Api.BaseApi}`,
    params,
  });
}

/**
 * 新增（批量）
 */
export function addOssList(params: any) {
  return defHttp.post({
    url: `${Api.OssAddList}`,
    params,
  });
}

/**
 * 修改
 */
export function updateOss(params: any) {
  return defHttp.put({
    url: `${Api.BaseApi}`,
    params,
  });
}

/**
 * 删除
 */
export function deleteOss(id: string | number) {
  return defHttp.delete({
    url: `${Api.BaseApi}/${id}`,
  });
}
