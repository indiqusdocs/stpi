---
sidebar_position: 3.1
---
# Modifying Configurations

The modifying configurations allows you to update the settings of an existing Autoscale group. You can disable the group, access its configuration settings, update the required parameters, and apply the changes. The available configurations include compute resources, OS image, and disk settings. After reviewing the updates, you can confirm the changes to save and apply the new configuration.

To modify the Autoscale group configuration settings, follow these steps:

1. Navigate to **Compute > Autoscale Groups**. The following screen appears:![AutoScale Created](img/AutoscaleCreated.png)
2. Click the **Disable** icon. The following screen appears:  ![Disable Screen](img/DisableScreen.png)
3. Click the **Disable** button. The following screen appears: ![Enable Screen](img/EnableScreen.png)
4. Click on your created Autoscale group name. The following screen appears:![Modifying Screen](img/ModifyingScreen1.png)
   ![Modifying Screen](img/ModifyingScreen2.png)
   ![Modifying Screen3](img/ModifyingScreen3.png)
   ![Modifying Screen](img/ModifyingScreen4.png)
5. You can modify the following configurations:
	- OS image (must belong to the same zone)
	- Compute offering (CPU/RAM)
	- Disk size (≥ template minimum)
	- Configure Autoscale Group
	- Scale Up Policy
	- Scale Down Policy
	- Email Notification
	- Autoscale Group Name
:::note
	When using custom images to create or update an Autoscale group, the root disk settings are applied based on the image configuration. Images with a fixed disk size use the default value, images that support overrides display the minimum size by default, and images without a defined disk size require you to select a disk offering or enter a custom size.
:::
6. Click **Update and Enable This Group** button. The following screen appears:![Modifying Screen](img/ModifyingScreen5.png)
7. Click the **Confirm and Update** button to save and apply the updated configuration.