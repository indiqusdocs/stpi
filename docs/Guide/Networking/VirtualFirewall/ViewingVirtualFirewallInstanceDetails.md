---
sidebar_position: 3
---
# Viewing Virtual Firewall Instance Details

Firewall instance details give a simple overview of the system. They show its current status, basic identifiers, and network connections. This information is important because it helps you track resources, manage connectivity, and keep communication secure.

This section comprises of the following topics:
- [Launching Virtual Firewall Web Based Console](#launching-virtual-firewall-web-based-console)
- [Stopping and Starting Virtual Firewall Instance](#stopping-and-starting-virtual-firewall-instance)

 Navigate to **Networking** > **Virtual Firewall**. Click the **Virtual Firewall Name** and access the **Overview** tab.![Virtual Firewall Details](img/VirtualFirewallDetails.png)

 **Configuration and Availability**: This displays the following virtual firewall configuration details to help verify its current configuration and operational state:
- The instance's status <span class="green">**Running**</span> or <span class="red">**Stopped**</span>.
- Availability Zone
- Firewall Provider
- Firewall Configuration
- Root Disk

**Internal Information**: This displays the following information that is used for internal identification of the virtual firewall and communication with other internal services:
- Template Name
- Virtual Firewall Internal Name
- Created On

**NIC Information:** This displays the following network interface details associated with the virtual firewall to help identify and manage its network connectivity:

- Network Name
- MAC Address
- IP Address
- Netmask
- Gateway

## Launching Virtual Firewall Web Based Console

The virtual firewall console provides a secure, web‑based interface to manage and monitor your firewall. It allows administrators or you to configure policies, review system activity, and ensure network protection through a centralized dashboard.

To launch virtual firewall web based console, follow these steps:

1. Navigate to **Network and Security > Virtual Firewalls**. The following screen appears:![VPC](img/VirtualFirewallDashboard.png)
2. Click on your created virtual firewall name from the list. The following screen appears:![Overview](img/Overview.png)
3. Click the **Launch Console** button. The FortiGate web-based management interface opens.
4. Enter your username and password, and then click **Login** button to access the FortiGate web-based management interface.

## Stopping and Starting Virtual Firewall Instance

Stop and start the virtual firewall instance to apply updates, perform maintenance, or optimize resource usage. This action suspends firewall operations without deleting configurations and quickly restores protection when restarted.

To stop and start the virtual firewall instance, follow these steps:
1. Navigate to **Network and Security > Virtual Firewalls**. The following screen appears:
2. Click on your created virtual firewall name from the list. The following screen appears:
3. Click the Stop Instance button. The following screen appears: