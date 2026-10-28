---
sidebar_position: 1
---
# Creating Data Disk

A data disk is an additional storage attached to a cloud instance for storing application data, files, databases, and other workloads separately from the system disk. Creating a data disk in Ananta Cloud helps improve data management, provides flexibility to scale storage as needed, and ensures better performance and organization of your cloud resources.

Each Instance(Linux or Windows) on Ananta includes a root disk or volume. This is the primary disk partition on the Instance, and by default, all operating systems, data, components and files reside on the root disk.

Additional Instances can have add-on or data disks attached to them, which act as additional disk partitions. These data disks are modular and can be moved between multiple Instances.

Apart from this, there is no difference between a root disk and a data disk. Both types of Volumes are managed using the Block Volumes Service. However, based on the volume type, certain operations may not be available.

| Operations                    | Root Disks                      | Data Disks |
| ----------------------------- | ------------------------------- | ---------- |
| Overview & Volume Information | Available                       | Available  |
| Snapshot Management           | Available                       | Available  |
| Recurring Snapshot Schedules  | Available                       | Available  |
| Resizing Volumes              | Available (via parent Instance) | Available  |
| Volume Operations             | Not Available                   | Available  |


To create a data disk, follow these steps:

1. Navigate to **Storage > Block Volumes.** The following screen appears:
	![New Block Volume](img/BlockVolume1.png)
2. Click the **New Block Volume** button. The following screen appears:   ![Create Data Disk](img/BlockVolume2.png)
3. Select Availability Zone.
4. Select an Instance from the dropdown to attach the disk to.
5. In the **Choose Disk Configuration** section:
    - Click the **Custom Disk** option and adjust the disk size using the plus (+) or minus (–) controls as per requirement.
    - Click the **Select Pack** to choose the configured disk pack.
	![Name your data disk](img/BlockVolume3.png)
6. Enter the name of data disk in **Name Your Data Disk**.
7. Select the **I have read and agreed to the Cloud Terms and Conditions Privacy Policy** option, and click the **Buy Monthly** button.
8. Click the **Confirm** button.

:::note
	This might take up to 5-8 minutes. You may use the Cloud Console during this time, but it is advised that you do not refresh the browser window.
:::

Once ready, you will be be notified of this purchase on your registered email address. You can access the newly created Data Disk by navigation to **Storage >** **Block Volumes** on the main navigation panel.

![Working with Instance Volumes](img/WorkingwithInstanceVolumes2.png)