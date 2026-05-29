---
sidebar_position: 4
---
# Managing Custom Templates and Images

You can create custom OS templates from a Volume Snapshot. To locate these custom templates, navigate to **Tools and Utilities > My Images** with the following details:

- Image Name
- Operating System
- Availability Zone
- Password Enabled
- Format
- Created On

You can delete the image by clicking on the delete icon present and the rightmost corner. You can also check the status by clicking on the image name.

These Images can be used while creating new Linux or Windows Instances and found under the **MY IMAGES** tab in the OS Collection section.

## Creating Custom Images

To create custom images, follow these steps:

1. Navigate to **Compute** > **Linux Instances**. The following screen appears:
2. Click an instance under **Linux Instances**.
3. Click **Volumes** to view the attached volumes or data disks.
4. Click the **CREATE RESTORE POINT** icon to create a restore point for the selected volume.
5. Navigate to **TOOLS AND UTILITIES** > **Restore Points**.
6. Navigate to **Disk Restore Point** to view the newly created restore point. The following screen appears:
7. Click the **Create Image** icon for the newly created **Disk Restore Point**. The following screen appears where you enter the following details:
    - **Image Name**
    - **Description**  
8. Click **Yes** to confirm and create the image.
9. Navigate to **TOOLS AND UTILITIES** > **My Images** to view the newly created custom image.!

## Deleting a Custom Image

You can delete an image by clicking the delete icon. You can also check the status by clicking the image name.

You can use these Images while creating new Linux or Windows Instances.