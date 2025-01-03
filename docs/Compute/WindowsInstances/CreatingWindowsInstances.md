---
sidebar_position: 2
---
# Creating Windows Instances

Before creating a Windows Instance, it is important to plan the architecture, networking and access to the Windows Instances. As a thumb rule:

- You can use a Windows Instance to get started quickly and set up your Linux Instances behind Ananta-powered cloud’s global server load balancer (GSLB) and control access by setting up virtual firewall rules; or;
- You can use a ‘tiered’ network (or Advanced VPC, virtual private cloud) Windows Instances to configure advanced networking and application architectures and control access by setting up access control lists.
## Creating a Windows Instance

To create a Windows instance, follow these steps:

1. Navigate to **Compute > Windows** Instances.
2. Click on the **+ NEW WINDOWS INSTANCE** from the top right.
	![Windows Instance creation](img/WindowsInstance2.png)
3. Enter the name for your Windows instance by following the naming convention mentioned below in the helper text.
4.  Choose an Availability Zone, which is the geographical region where your Instance will be deployed. The chosen option should be the **advanced VPC** from all available AZs.
5.  Select a VPC network from the **Select Network** Dropdown and select the appropriate tier listed in **Select a Network Tier**.
	:::note
	To add a Windows Instance to a VPC, you need to have a VPC configured with at least one tier.
	:::
	![Windows Instance](img/WindowsInstance4.png)
4. Choose an Image to run on your Instance. This can be an operating system or a custom image that is available under **MY IMAGES.**
5. Choose a compute pack from the available compute collections.
   ![Compute Pack](img/ComputePack.png)
6. Choose a Root disk from the available Disk packs, or you can use the free size option to specify the Root Disk.
   ![Root Disk](img/RootDisk.png)
7. Verify the Estimated Cost of your Windows Instance based on the specifications you have   chosen from the Summary and Estimated Costs Section (Here, both Hourly and Monthly Prices summary will be displayed)
8. After reviewing the policies provided by your cloud service provider, click the checkbox.
9. To view the price summary and any discount codes in your account, click the **BUY HOURLY** or **BUY MONTHLY** button.
    - You can apply any of the discount codes listed by clicking on the **APPLY** button. 
    - You can also remove the applied discount code by clicking the **REMOVE** button. 
    - Clicking on the **CANCEL** button, this action will be canceled.
10. Click the **CONFIRM**  button to create the Windows Instance.
    ![Summary and Estimated ](img/WindowsInstance5.png)

:::note 
This might take up to 5-8 minutes. You may use the Cloud Console during this time, but it is advised that you do not refresh the browser window.
:::

Once ready, you’ll be notified of this purchase on your email address on record. The newly created Windows Instances can be accessed from **Compute >** **Windows Instances** on the main navigation panel.


