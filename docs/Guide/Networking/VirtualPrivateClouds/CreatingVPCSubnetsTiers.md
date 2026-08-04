---
sidebar_position: 4
---
# Creating VPC Subnets/Tiers

VPCs follow the convention of 3-tiered network architecture, with web, app, and DB tiers forming the norm. You can, however, configure these tiers to suit your application architecture or just follow the common convention.
## Subnet and Tiers 

In a VPC, subnets define IP-based network segments, and tiers represent logical layers of your application architecture. You can design networking tiers within this VPC based on the overall network size and the allocated Super CIDR range. 
![Subnet and Tier](img/SubnetandTier1.png)

To add a tier to your VPC, navigate to the VPC, select the **Subnets and Tiers** section. The following details are displayed:
- **Name** of the tier.
- <span class="tooltip-wrapper">**Gateway**<span class="tooltip-box">A gateway for a subnet in a VPC is a device that routes traffic between the subnet and external networks, allowing internet access.</span></span>for the subnet. 
- <span class="tooltip-wrapper">**Netmask**<span class="tooltip-box">A netmask defines the number of IP addresses available in a subnet or tier within a VPC.</span></span>for the tier/subnet.
- <span class="tooltip-wrapper">**Tier CIDR**<span class="tooltip-box">It is the IP address range assigned to a particular application tier within a VPC.</span></span> for this tier.
- **Tier IPv6 Gateway** of this tier.
- **Tier IPv6 CIDR** of this tier.
- **Access Control** of this tier.

![subnet](img/subnet.png)

There are three icons available on the right side for quick actions:
- Restarting the network
- Replacing the access control list
- Deleting the tier
### Adding a Tier

To add a tier, follow these steps:
1. Click the **Add Tier** button.![Adding Tier](img/AddTier.png)
2. Enter the following details:
	- **Tier Name:** Name of the network tier you are creating.
	- **Gateway:**  IP address for the gateway of the tier.
	- **Netmask:** Subnet mask defining the IP range.
	- **Access Control:** Choose rules for network traffic control.
	- **Load Balancing Type**: Select the load balancing type (Internal load balancer, Public load balancer, No load balancer)
3. Click the **Add Network Tier** button.

:::note
	 You can attach the network tier to the instance as a Network Interface Card (NIC).
:::

## Replacing an ACL

To  replace an ACL, follow these steps:

1. Click the **Replace Access Control List** (highlighted in red) icon.![Replace ACL](img/ReplaceACL.png)
   The following screen appears:![Replace ACL](img/ReplaceACL1.png)
2. Select a different **ACL** from the dropdown list.
3. Click the **Replace Tier ACL** button.

The tier is attached with selected ACL.
