---
sidebar_position: 8
---
# Working with VPN Connections in a VPC

The VPC feature on Ananta provides advanced networking capabilities for use with VPN gateways and connections over an IPSec tunnel. Ananta gives the ability to create virtual private networks (VPN) to access virtual machines inside a VPC.

There are two types of VPN connections supported on Ananta Cloud:

1. **[Remote Access VPN](/docs/Networking/IPv4-basedNetworking/UsingRemoteAccessVPNwithVPC) -** To connect securely from your home or office to your VPC on Ananta Cloud. This is mainly used when you have a dynamic IP to connect to the internet, so a VPN connection cannot be pre-configured.
2. **[Site-to-Site VPN](/docs/Networking/IPv4-basedNetworking/ManagingVPNGatewaysandSite-to-SiteVPN) -** To connect a private static network to your VPC on Ananta Cloud using an IPSec tunnel. Site-to-site gateways must be pre-configured on Ananta Cloud.

The underlying SDN on Ananta Cloud provides a L2TP-over-IPsec-based remote access VPN service to VPCs and guest virtual networks. Since each VPC has its own virtual router, VPNs are not shared across the networks.

:::note
All VPN users in your account will get access to all VPNs created in your account.
:::


