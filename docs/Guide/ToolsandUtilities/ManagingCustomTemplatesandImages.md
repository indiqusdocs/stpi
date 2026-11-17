---
sidebar_position: 4
---
# Managing Custom Templates and Images

Custom templates and images help standardize and simplify the deployment of cloud resources. You can create custom images from existing instances for future reuse and delete custom images that are no longer required. Managing custom templates and images enables consistent deployments while keeping your image repository organized and up to date.

This section comprises of the following sub-sections:
- [Creating a Custom Image or My Image](#creating-a-custom-image-or-my-image)
- [Deleting a Custom Image or My Image](#deleting-a-custom-image-or-my-image)

![My Images dashboard](img/MyImages.png)

## Creating a Custom Image or My Image

Creating custom images or My Image allows you to create a reusable image from an existing instance by using a disk restore point. The custom image captures the current state and configuration of the instance, making it easier to deploy new instances with the same setup.

To create a custom image or My Image, follow these steps:

1. Navigate to **Compute** > **Linux Instances**. The following screen appears:![New Linux Instance](img/NewLinuxInstance.png)
2. Click on your created Linux instance name from the list.
3. Click **Volumes**. The following screen appears:
4. Click the **Create Restore Point** icon (highlighted in red). The following screen appears:
	 ![Restore Point](img/RestorePoint1.png)
5. Click the **Create Restore Point**. The disk restore point is created.
6. Navigate to **Tools and Utilities > Restore Points**. The following screen appears![Disk Restore Point](img/DiskRestorePoint.png)
7. Click the **Create Image** icon (highlighted in red). The following screen appears where you provide the required details:![Image Creation](img/ImageCreation.png)
8. Click the **Yes** button.
9. Navigate to **Tools and Utilities > My Images**. The following screen appears:![My Images](img/Myimages1.png)
## Deleting a Custom Image

Deleting custom images or My Image allows you to remove custom images that are no longer required. This helps keep the image repository organised and ensures that only relevant images are available for future use.

To delete a custom image or My Image, follow these steps:

1. Navigate to **Tools and Utilities > My Images**. The following screen appears:![Delete Icon](img/Delete.png)
2. Click the **Delete** icon. The following screen appears:
3. Click the **Yes** button. The custom image or My Image is deleted.
	
You can also check the status by clicking the image name.
	![Status Check](img/StatusCheck.png)
You can use these Images while creating new Linux or Windows Instances.

## Uploading Custom Image
You can upload your own instance image to the Ananta Cloud by submitting a request to the support team. Prepare the instance image in the QCOW/QCOW2 format and make it accessible through a downloadable URL.

You can raise a support request by any of the following methods:
- Email: [support@ananta.stpi.in](mailto:support@ananta.stpi.in)
- Toll-Free Support Number
- Raise a ticket to the support team ([Account Centre > Support & Tickets](/docs/Guide/AccountCentre/SupportandTickets))

Include the instance image URL and the required details in the request. 

After the support team validates and uploads the image, the system adds it as a template and makes it available under the **My Images** tab in the Ananta Cloud portal for the instance creation.

![](img/OSimage.png)