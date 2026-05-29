---
sidebar_position: 4
---
# Managing Custom Templates and Images

You can create custom OS templates from a Restore Point. To locate these custom templates, navigate to **Tools and Utilities > My Images** with the following details:

- Image Name
- Operating System
- Availability Zone
- Password Enabled
- Format
- Created On

![My Images dashboard](img/MyImages.png)

## Creating Custom Images

To create custom images, follow these steps:

1. Navigate to **Compute** > **Linux Instances**. The following screen appears:![New Linux Instance](img/NewLinuxInstance.png)
2. Click the **Instance Name**. 
3. Click **Volumes** to view the attached volumes or data disks.
4. Click the **CREATE RESTORE POINT** icon to create a restore point for the selected volume.
	 ![Restore Point](img/RestorePoint1.png)
5. Navigate to **TOOLS AND UTILITIES** > **Restore Points**.
6. Navigate to **Disk Restore Point** to view the newly created restore point. The following screen appears: ![Disk Restore Point](img/DiskRestorePoint.png)
7. Click the **Create Image** icon for the newly created **Disk Restore Point**. The following screen appears: ![Image Creation](img/ImageCreation.png)
8. Provide the following details:
	- **Image Name**
    - **Description**  
9. Click **Yes** to confirm and create the image.
10. Navigate to **TOOLS AND UTILITIES** > **My Images** to view the newly created custom image.![My Images](img/Myimages1.png)
## Deleting a Custom Image

You can delete an image by clicking the **delete** icon. 
![Delete Icon](img/Delete.png)
You can also check the status by clicking the image name.
![Status Check](img/StatusCheck.png)
You can use these Images while creating new Linux or Windows Instances.