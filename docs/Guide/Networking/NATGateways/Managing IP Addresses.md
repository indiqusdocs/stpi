---
sidebar_position: 5
---
# Managing IP Addresses

Each virtual gateway comes with a default IPv4 address that belongs to the Virtual Gateway governing the network. The default (source - NAT) IPv4 address can be used to access the Virtual Gateway publicly or via Remote Access (RA) VPN.

## Adding Public IPv4 Addresses

A public IPv4 address uniquely identifies a resource on the internet and enables communication with external networks. Add a public IPv4 address to a NAT Gateway to allow private instances to access the internet and external services while keeping them protected from direct inbound internet traffic.

To add a public IPv4 address, follow these steps:

1. Navigate to **Networking > NAT Gateways**. The following screen appears:![Viewing NAT Gateway](img/ViewingNATGateways.png)
2. Click a NAT Gateway name from the list. The following screen appears:![NAT Gateway](img/NATGatewayOverview.png)
3. Click **IP Addresses**. The following screen appears:![IP Addresses](img/IPAddresses1.png)
4. Click the **Add Public IPv4 Address** button. The following screen appears: ![IP Address button](img/IPAddressbutton.png)
5. Select the **Monthly** option and click the **Confirm Purchase** button. The following screen appears:![Confirm Screen](img/ConfirmScreen.png)
6. Click the **Confirm** button.

The public IPv4 address is added where you can perform the following actions:


## Adding Firewall Rules

A firewall rule defines how a NAT Gateway allows or blocks network traffic based on specified criteria, such as IP addresses, ports, and protocols. Adding firewall rules helps control network access, enhance security, and ensure that only authorized traffic passes through the NAT Gateway.

To add a firewall rule, follow these steps:

1. Navigate to **Networking > NAT Gateways**. The following screen appears:![Viewing NAT Gateway](img/ViewingNATGateways.png)
2. Click a NAT Gateway name from the list. The following screen appears:![NAT Gateway](img/NATGatewayOverview.png)
3. Click **IP Addresses**. The following screen appears:![IP Addresses](img/IPAddresses1.png)
4. Click the **Add Public IPv4 Address** button. The following screen appears: ![IP Address button](img/IPAddressbutton.png)
5. Select the **Monthly** option and click the **Confirm Purchase** button. The following screen appears:![Confirm Screen](img/ConfirmScreen.png)
6. Click the **Confirm** button. The following screen appears: ![Confirm buton](img/ConfirmButton.png)
7. Click the **Firewall Rule** icon (highlighted in red). The following screen appears where you provide the required details:![Firewall Rule](img/FirewallRule.png)
8. Click the **Add Rule** button. The firewall rule is added.

## Adding Port Forwarding Rules

A port forwarding rule maps incoming traffic on a specific public IP address and port to a private instance and port within your virtual network. Adding port forwarding rules enables external users or services to securely access applications running on private instances through the NAT Gateway.

To add a port forwarding rule, follow these steps:

1. Navigate to **Networking > NAT Gateways**. The following screen appears:![Viewing NAT Gateway](img/ViewingNATGateways.png)
2. Click a NAT Gateway name from the list. The following screen appears:![NAT Gateway](img/NATGatewayOverview.png)
3. Click **IP Addresses**. The following screen appears:![IP Addresses](img/IPAddresses1.png)
4. Click the **Add Public IPv4 Address** button. The following screen appears: ![IP Address button](img/IPAddressbutton.png)
5. Select the **Monthly** option and click the **Confirm Purchase** button. The following screen appears:![Confirm Screen](img/ConfirmScreen.png)
6. Click the **Confirm** button. ![Port Forwarding Icon Highlighted](img/PortForwardingIcon.png)
7. Click the **Port Forwarding Rule** icon (highlighted in red). The following screen appears:
   ![Add Rule button](img/AddRulebutton.png)
8. Click **Add Rule**. The following screen appears where you provide the required details:![Add Rule Form](img/AddRuleForm.png)
9. Click the **Add Port Forwarding Rule** button. The port forwarding rule is added.

## Changing the Source NAT

A Source NAT (SNAT) IPv4 address is the public IP address that the NAT Gateway uses for outbound traffic from private instances. Changing the Source NAT IPv4 address allows you to route outbound traffic through a different public IP, helping you meet network, security, or connectivity requirements.

:::warning
	Changing the Source NAT IPv4 address of a network interrupts connectivity for instances that use NICs attached to that network. Plan this change carefully to minimize service disruption.
:::

To change the source NAT, follow these steps:

1. Navigate to **Networking > NAT Gateways**. The following screen appears:![Viewing NAT Gateway](img/ViewingNATGateways.png)
2. Click a NAT Gateway name from the list. The following screen appears:![NAT Gateway](img/NATGatewayOverview.png)
3. Click **IP Addresses**. The following screen appears:![IP Addresses](img/IPAddresses1.png)
4. Click the **Add Public IPv4 Address** button. The following screen appears: ![IP Address button](img/IPAddressbutton.png)
5. Select the **Monthly** option and click the **Confirm Purchase** button. The following screen appears:![Confirm Screen](img/ConfirmScreen.png)
6. Click the **Confirm** button.   ![Changing Source NAT](img/ChangingSourceNAT.png)
7. Click the **Source NAT** icon (highlighted in red). The following screen appears:![Changing Source NAT](img/WarningChangingSourceNAT.png)
8. Click the **Okay** button.

## Adding a Static NAT

Static NAT maps a dedicated public IP address to a private instance within your virtual network using a one-to-one association. Adding a Static NAT rule enables external users or services to securely access the private instance by assigning it a persistent public IP address while maintaining network isolation.

To add a static NAT, follow these steps:

1. Navigate to **Networking > NAT Gateways**. The following screen appears:![Viewing NAT Gateway](img/ViewingNATGateways.png)
2. Click a NAT Gateway name from the list. The following screen appears:![NAT Gateway](img/NATGatewayOverview.png)
3. Click **IP Addresses**. The following screen appears:![IP Addresses](img/IPAddresses1.png)
4. Click the **Add Public IPv4 Address** button. The following screen appears: ![IP Address button](img/IPAddressbutton.png)
5. Select the **Monthly** option and click the **Confirm Purchase** button. The following screen appears:![Confirm Screen](img/ConfirmScreen.png)
6. Click the **Confirm** button. ![Static NAT](img/StaticNAT.png)
7. Click t he **Static NAT** icon (highlighted in red). The following screen appears where you provide the required details:
   ![Static NAT](img/StaticNATForm.png)
	- **Instance**: Select the instance to associate with the Static NAT from the **Instance** dropdown.
	- **IP Address**: Select the instance IP address to map with the Static NAT from the **Select IP Address** dropdown.
8. Click the **Add Static NAT** button. The static NAT is added.

## Deleting an IP Address

A public IP address enables a NAT Gateway to communicate with external networks and the internet. Delete a public IP address when it is no longer required to free up network resources, simplify configuration, and maintain an organized and efficient network environment.

:::warning
	This is an irreversible action.
:::

To delete an IP address, follow these steps:

1. Navigate to **Networking > NAT Gateways**. The following screen appears:![Viewing NAT Gateway](img/ViewingNATGateways.png)
2. Click a NAT Gateway name from the list. The following screen appears:![NAT Gateway](img/NATGatewayOverview.png)
3. Click **IP Addresses**. The following screen appears:![IP Addresses](img/IPAddresses1.png)
4. Click the **Add Public IPv4 Address** button. The following screen appears: ![IP Address button](img/IPAddressbutton.png)
5. Select the **Monthly** option and click the **Confirm Purchase** button. The following screen appears:![Confirm Screen](img/ConfirmScreen.png)
6. Click the **Confirm** button. ![Deleting IP Address](img/DeletingIPAddress.png)
7. Click the **Delete IP** icon (highlighted in red). The following screen appears:  ![Delete IP](img/DeleteIP.png)
8. Select the **I confirm that I have removed everything from this IP Address.** option, and click the **Delete Now** button.