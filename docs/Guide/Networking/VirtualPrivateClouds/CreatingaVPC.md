---
sidebar_position: 1
---
# Creating a VPC

A Virtual Private Cloud (VPC) is a private virtual network that provides a secure environment for your cloud resources. It helps you organize and manage your network while controlling communication between resources.

To create a VPC, follow these steps:

1. Navigate to **Networking > Virtual Private Clouds**. The following screen appears:![VPC Creation](img/VPCCreation.png)
2. Click the **New Virtual Private Cloud** button. The following screen appears:![Click here](img/Clickhere1.png)
3. Choose the **Availability Zone** where you want to configure the VPC.
4. In the **Configure Network and Size** section, specify **Network Address Base** and select **Size** from the dropdown. For example: The <span class="tooltip-wrapper">**super CIDR**<span class="tooltip-box">It is the method of combining multiple continuous smaller CIDR blocks into a larger block to reduce the number of routes.</span></span> for the internal IP allocation in an x.x.x.x/x format).
	:::note
	To know allowed IP address ranges for VPC creation, select the **click here** link (highlighted in red).
	:::
	![Click here](img/Clickherelink.png)
	![Allowed IP addresses range](img/VPCIPAddresses.png)
5. Choose a **IPv4** or **IPv6** networking pack.
	:::note
	To configure IPv6 under a **VPC,** you must create a ticket with our support team for assistance.
    :::
6. To create the VPC with a new NICNET IP address, select **Default IP Address for VPC Networking**.
7. Enter the valid name in the **Name your Virtual Private Cloud** field.
   	![Selecting a networking pack](img/VPCNew1.png)
8. Verify the **Summary and Estimated Costs** section (Here, both the hourly and monthly price summaries are displayed).
9. Select the **I have read and agreed to the End User License Agreement and Privacy Policy** option.
10. Click the **Buy Hourly** or **Buy Monthly** button, a confirmation screen appears, where you can apply discount code (if available):
	![Select IP address](img/VPCNew2.png)
11. Click **Confirm**.

Once ready, you get the notification of this purchase on your email address on record. 


:::note
This might take up to 5-8 minutes. You may use the Cloud Console during this time, but it is advised that you do not refresh the browser window.
:::