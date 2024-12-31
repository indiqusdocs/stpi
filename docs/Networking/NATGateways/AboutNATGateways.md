---
sidebar_position: 1
---
# About NAT Gateways

A Network Address Translation (NAT) gateway is a networking component in cloud and on-premises environments that enables resources within a private subnet (such as virtual machines or containers) to connect to the internet or other external networks, without exposing these resources directly to incoming connections from those external networks. This helps in enhancing security in cloud infrastructure by keeping resources in private subnets isolated from direct public access.

NAT gateways work as follows:

- NAT gateways allow resources in private subnets to initiate outbound connections to the internet for tasks like software updates, data backups, or API calls. However, they block any unsolicited inbound traffic, preventing external actors from directly accessing private resources. 
- When a resource (for example, a virtual machine) in a private subnet sends a request to the internet, the NAT gateway translates the private IP address of the resource into a public IP address, making the resource appear as if it is on the internet. Responses to these requests are then routed back through the NAT gateway to the initiating resource.
- NAT gateways are managed services that are highly available and scalable by default. They can handle large volumes of traffic without requiring manual setup for failover or redundancy.
- By keeping resources in private subnets and restricting internet exposure, NAT gateways enhance security for sensitive data and applications.


**Sample Setup**: A NAT gateway can be deployed in a public subnet within a Virtual Private Cloud (VPC). Resources in private subnets route their outbound internet-bound traffic to this NAT gateway, which forwards it to the internet.


