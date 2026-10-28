---
sidebar_position: 7
---
# Managing Operations

Managing block volume operation enables you to control the lifecycle and availability of storage volumes throughout your environment. You can perform essential volume management tasks, such as attaching or detaching volumes from instances, downloading volume data when needed, and removing volumes that are no longer required. These operations help maintain storage efficiency, support changing workload requirements, and ensure that storage resources remain organized and available.

This section comprises of the following sub-sections:
- [Detaching Volume from an Instance](#detaching-volume-from-an-instance)
- [Attaching Volume to an Instance](#attaching-volume-to-an-instance)
- [Downloading a Volume](#downloading-a-volume)
- [Deleting a Volume](#deleting-a-volume)

## Detaching Volume from an Instance

Detaching a volume from an instance disconnects the block storage volume while preserving the data stored on it. You can detach a volume when it is no longer required by an instance, before attaching it to another instance, or as part of storage maintenance and resource management. This operation helps ensure flexible storage allocation and enables you to manage volumes independently of compute instances.

To detach volume from an instance, follow these steps:

1. Navigate to **Storage > Block Volumes.** The following screen appears:![New Block Volume](img/BlockVolume1.png)
2. Click on your created block volume name from the list.
3. Navigate to **Operations**. The following screen appears:  ![Operations](img/Operations.png)
4. Click the **Detach from Instance**. The following screen appears: ![Detach from Instance](img/DetachFromInstance.png)
5. Click the **Yes** button. The following screen appears: ![Detach from instance](img/DetachFromInstance1.png)

## Attaching Volume to an Instance

Attaching a volume to an instance makes the block storage volume available for use by the selected compute instance. You can attach a volume to provide additional storage capacity, store application data, or support changing workload requirements. This operation enables the instance to access the volume while allowing storage resources to be managed independently of the instance lifecycle.

To attach volume to an instance, follow these steps:

1. Navigate to **Storage > Block Volumes.** The following screen appears:![New Block Volume](img/BlockVolume1.png)
2. Click on your created block volume name from the list.
3. Click **Operations**. The following screen appears:![Operations](img/Operations.png)
4. Click the **Attach to Instance**. The following screen appears:![Attach from Instance](img/AttachfromInstance.png)
5. Click the **Yes** button. The following screen appears: ![Attach from instance](img/Attachfrominstance1.png)

## Downloading a Volume

Downloading a volume creates a copy of the block storage volume that you can save for backup, migration, or offline access. You can download a volume to preserve its data, transfer it to another environment, or maintain a local copy for recovery purposes. This operation helps ensure data portability and provides additional protection against data loss.

To download a volume, follow these steps:
1. Navigate to **Storage > Block Volumes.** The following screen appears:![New Block Volume](img/BlockVolume1.png)
2. Click on your created block volume name from the list.
3. Navigate to **Operations**. The following screen appears:  ![Operations](img/Operations.png)
4. Click the **Download Volume** button. The following screen appears:   ![Downloading Volume](img/DownloadingVolume.png)
5. Click the **Ok** button.
## Deleting a Volume

Deleting a volume permanently removes the block storage volume and its associated data from the environment. You can delete a volume when it is no longer required and is no longer attached to any instance. This operation helps reclaim storage resources, maintain an organized storage environment, and prevent unnecessary resource usage. Before deleting a volume, ensure that any required data has been backed up, as the operation cannot be undone.

:::warning
	You can schedule deletion to continue using the resource until the end of the current billing cycle and cancel the deletion before it takes effect. Alternatively, you can delete the resource immediately, which is permanent and cannot be undone.
:::

To delete a volume, follow these steps:

1. Navigate to **Storage > Block Volumes.** The following screen appears:![New Block Volume](img/BlockVolume1.png)
2. Click on your created block volume name from the list.
3. Navigate to **Operations**. The following screen appears:  ![Operations](img/Operations.png)
4. Click the **Delete Volume**. The following screen appears, where you can choose to delete the volume instantly or schedule it to be deleted at a later stage:![Downloading Volume](img/DowloadingVolume1.png)
	- To delete the volume instantly, enter **DELETE** and click the **Delete Now** button. The volume is deleted.
    - To schedule the volume to be deleted at a later stage, enter **DELETE** and click the **Schedule Deletion** button.