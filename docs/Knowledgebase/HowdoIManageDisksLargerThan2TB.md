---
sidebar_position: 5
---
# How do I Manage Disks Larger Than 2 TB?

Disks larger than 2 TB need a specific configuration to utilize their full capacity in cloud environments. Traditional **Master Boot Record** (MBR) partitioning supports only up to 2 TB, which can result in errors or partial disk recognition. Using **GUID Partition Table** (GPT) partitioning along with a suitable filesystem ensures optimal performance, reliability, and compatibility.  

## Attaching a Disk Larger Than 2 TB  
To attach a disk larger than 2 TB to an Instance in the cloud console, follow these steps:

1. Navigate to the **Storage/Disks** section.
2. Click **+ ADD DISK** and select a disk size larger than 2 TB.
3. Attach the disk to your desired Instance.
4. Confirm the disk attachment before proceeding to partitioning.

## Partitioning the Disk  
To partition a disk larger than 2 TB and make its full capacity available in the instance, follow these steps:

1. Open the disk management tool in your Instance.
2. Select the newly attached disk.
3. Choose **GPT Partition Table** (instead of MBR).
4. Create a new partition on the disk.
5. Verify the entire disk capacity is detected.

## Formatting the Disk  

To format the disk, follow these steps:

1. Select the partition you created.
2. Choose your filesystem (XFS or ext4).
3. Format the disk.
4. Confirm the disk is mounted and accessible.

 :::note
	To format a disk after partitioning using the following recommended filesystem: 
	 Extended File System (XFS): Best choice for performance and reliability on large volumes.
	 Fourth Extended File System (ext4): Alternative option if compatibility is required.
:::

