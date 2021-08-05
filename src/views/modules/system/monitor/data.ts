import { urls } from '/@/settings/constants/common';

export const cardList = (() => {
  return [
    {
      title: 'Nacos',
      icon: 'icon-park:monitor-one',
      des: '微服务注册中心',
      infoList: [
        {
          text: '访问地址',
          link: urls.nacos,
        },
        {
          text: '官方文档',
          link: 'https://nacos.io/zh-cn/index.html',
        },
        {
          text: '开源地址',
          link: 'https://github.com/alibaba/nacos',
        },
      ],
    },
    {
      title: 'SpringBoot Admin',
      icon: 'logos:spring-icon',
      des: '服务监控组件',
      infoList: [
        {
          text: '访问地址',
          link: urls.admin,
        },
        {
          text: '官方文档',
          link: 'https://haozi4go.github.io/Spring-Boot-Admin-Reference-Guide/',
        },
        {
          text: '开源地址',
          link: 'https://github.com/codecentric/spring-boot-admin',
        },
      ],
    },
    {
      title: 'Sentinel',
      icon: 'logos:flowxo',
      des: '服务流量监控组件',
      infoList: [
        {
          text: '访问地址',
          link: urls.sentinel,
        },
        {
          text: '官方文档',
          link: 'https://sentinelguard.io/zh-cn/',
        },
        {
          text: '开源地址',
          link: 'https://github.com/alibaba/Sentinel',
        },
      ],
    },
    {
      title: 'Swagger',
      icon: 'logos:swagger',
      des: '基于Swagger的扩展组件：Knife4j',
      infoList: [
        {
          text: '访问地址',
          link: urls.swagger,
        },
        {
          text: '官方文档',
          link: 'https://doc.xiaominfo.com/',
        },
        {
          text: '开源地址',
          link: 'https://gitee.com/xiaoym/knife4j',
        },
      ],
    },
  ];
})();
