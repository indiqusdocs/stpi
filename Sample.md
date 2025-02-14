---
sidebar_position: 9
---
# Sample

Apiculus CloudConsole is the topmost layer on a technology stack that is fine-tuned and optimised for performance, features and experience. The Apiculus solution uses Enterprise-grade components to handle various facets of infrastructure management and service delivery.

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::warning

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

In short, the building blocks of Apiculus are:

- [Apiculus CloudConsole and Admin Console](https://apiculus.com/) - service provider administration, subscriber CMP, billing, service catalogues, platform administration
- [Apache CloudStack](https://cloudstack.apache.org/) - orchestrator to facilitate virtual infrastructure and asset provisioning
- [Zabbix](https://zabbix.com/) - monitoring of guest and management clusters, physical asset monitoring
- [OTRS](https://otrs.com/) - support and ticket operations with ITIL v5 compliance
- [Metabase](https://metabase.com/) - business intelligence and reporting dashboards
- [StorPool](https://storpool.com/) - software-defined storage solution for reliability and underlying performance
- [Cloudian HyperStore](https://cloudian.com/products/hyperstore/) - S3-compatible object storage
- Hypervisors - [KVM virtualisation](https://www.linux-kvm.org/page/Main_Page) with support for [ESXi](https://www.vmware.com/in/products/esxi-and-esx.html) and [Xenserver](https://www.citrix.com/products/citrix-hypervisor/)
- Networking - firewalls, switches and routers from industry-leading providers
- High-performance Servers - [HPE preference hardware](https://www.hpe.com/greenlake), with support for other leading (Dell, Huawei etc.) or commodity providers.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="Body" label="Body" default>
      ```jsx title="JSON"
{ 
"email": "sample@gmail.com", 
"password": "Py%@hTff3"
}
```
  </TabItem>
  <TabItem value="ResponseJSON" label="Response JSON">
      ```jsx title="JSON"
{
   "httpStatus": 200,
   "success": true,
   "result": {
       "token": "<user_token>",
       "onboarded": true,
       "account_type": 0,
       "currency": "INR",
       "last_logged_in": "2022-12-09T06:36:51.000Z",
       "paymentCurrency": "INR"
   }
}
```
  </TabItem>
  <TabItem value="AccountTypes" label="Account Types">
  ```jsx title="JSON"
0: Retail user (subscriber), created from the self-service signup UI
1: Enterprise user (subscriber), created using API or with admin intervention on the UI
11: Admin user, can be created from the SP admin UI.
12: Superadmin user, can not be created from the UI or using API.
```
  </TabItem>
</Tabs>


```
  </TabItem>
</Tabs>

Links

Refer to the [Apiculus Datasheet](apioverview.md) for a [complete list of Service modules](apioverview.md#services-catalogue).


<div className="custom-block-green">
  This is a custom-styled block with a light blue background and a blue border.
</div>