---
sidebar_position: 8
---
# Networking Management on Windows Instances

From [Operating Windows Instances](AboutWindowsInstances), navigate into a Windows Instance and access the **Networking** tab to see the networks that this Instance is attached to.

The Networking and NICs section will list all the networks that a Windows Instance is attached to.

![Networking Management](img/NetworkingManagement.png)

The following actions are available:

- If the Instance is inside a VPC, you can associate the Instance to multiple tiers within the VPC or share the Instance with other VPC networks in the same Availability Zone by using the **ADD NETWORK** option.
- Network/tier associations can be removed from this section by using the _unlink_ action.
- If the Instance is in a Basic/Flat Networking AZ, you'll see the NIC details. Presently, only one NIC is supported on Basic/Flat Networking Instances.

:::note
Advanced networking configurations can be done using the [Virtual Private Clouds](/docs/Networking/VirtualPrivateClouds/AboutVirtualPrivateClouds) service.
:::

