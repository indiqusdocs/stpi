---
sidebar_position: 9
---
# Managing Instance Restore Points

Instance restore points help protect your Window instances by creating point-in-time recovery restore points. You can create restore points before performing maintenance, configuration changes, or updates, and restore the instance to a previous state if required. You can also delete restore points that are no longer needed to optimize resource usage. This section explains how to create, restore, and delete instance restore points for a Window instance.

This section comprises of the following sub-sections:
- [Creating an Instance Restore Point](#creating-an-instance-restore-point)
- [Restoring an Instance Restore Point](#restoring-an-instance-restore-point)
- [Deleting an Instance Restore Point](#deleting-an-instance-restore-point)
## Creating an Instance Restore Point
Create an instance restore point to capture the current state of your Windows instance. You can use the restore point to recover the instance to a previous state when needed, helping protect data and simplify recovery during maintenance or unexpected issues.

To create an instance restore point, follow these steps:

1. Navigate to **Compute > Windows Instances**. The following screen appears:![Windows Instance creation](img/WindowsInstance2.png)
2. Click on your created Window instance name from the list.
3. Click **Restore Points**. The following screen appears:![Restore Points](img/RestorePointDashboard.png)
4. Click the **Create Instance Restore Point** button. The following screen appears where you provide the required details: ![Restore Point](img/RestorePoint1.png)
5. Click the **Create** button. The following screen appears:

## Restoring an Instance Restore Point

Restoring an instance from a restore point reverts the Window instance to a previously saved state. This operation restores the instance configuration and data captured at the selected restore point, allowing you to recover from configuration errors, failed updates, or other unexpected issues. Restoring a restore point helps minimize service disruption, ensures business continuity, and provides a reliable method to recover the Window instance to a known working state.

To restore an instance restore point, follow these steps:

1. Navigate to **Compute > Windows Instances**. The following screen appears:![Windows Instance creation](img/WindowsInstance2.png)
2. Click on your created Window instance name from the list.
3. Click **Restore Points**. The following screen appears:![Restore Points](img/RestoreInstanceRestorePoint.png)
4. Click the **Restore from Instance Restore Point** icon (highlighted in red). The following screen appears: ![Restoring](img/RestoringInstancePoint.png)
5. Click the **Yes** button.

## Deleting an Instance Restore Point

Deleting a restore point permanently removes a saved recovery point from the Window instance. You can delete restore points that are no longer required to free up storage and keep your restore point list organized. Before deleting a restore point, ensure that it is no longer needed for future recovery, as the action is irreversible and the restore point cannot be recovered once deleted.

:::warning
	This action can not be reversed.
:::

To delete an instance restore point, follow these steps:

1. Navigate to the **Compute > Windows Instances**. The following screen appears:![Windows Instance creation](img/WindowsInstance2.png)
2. Click on your created Window instance name from the list.
3. Click **Restore Points**. The following screen appears:![Restore Points](img/DeletingInstanceRestorePoint.png)
4. Click the **Delete Restore Point** icon (highlighted in red). The following screen appears:![Deleting Instance Restore Point](img/DeletingRestorePoint.png)
5. Click the **Yes** button. The restore point is deleted.

:::note
An Instance Restore Point can only be created when the instance is powered on.
:::
