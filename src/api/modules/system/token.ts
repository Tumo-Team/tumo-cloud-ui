import { defHttp } from '/@/utils/http/axios';
import { ApiPrefix } from '/@/api/model/baseModel';

const Api = {
  TokenPageApi: `${ApiPrefix.UPMS_PREFIX}/token/page`,
  DeleteTokenApi: `${ApiPrefix.UPMS_PREFIX}/token`,
};

/**
 * 分页、条件查询
 */
export function getTokenPage(params: any) {
  return defHttp.get({
    url: Api.TokenPageApi,
    params,
  });
}

/**
 * 强制下线
 */
export function deleteToken(token: string) {
  return defHttp.delete({
    url: `${Api.DeleteTokenApi}/${token}`,
  });
}
