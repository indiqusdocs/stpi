---
sidebar_position: 11
---
# Managing Linux Instance Operations

You can manage the lifecycle of Linux instance by restarting, force stopping, renaming, or deleting. These operations help you maintain service availability, resolve operational issues, organize resources, and manage your cloud infrastructure efficiently.

Ananta Cloud provides the following operations on Linux instances:
- [Restarting an Instance](#restarting-an-instance)
- [Force Stopping an Instance](#force-stopping-an-instance)
- [Resetting Password of an Instance](#restarting-password-of-an-instance)
- [Resetting SSH key](#resetting-ssh-key)
- [Renaming an Instance](#renaming-an-instance)
- [Migrating Network](#migrating-network)
- [Reinstalling Linux Instance](#reinstalling-linux-instance)
- [Deleting an Instance](#deleting-an-instance)

## Restarting an Instance

Restart a Linux instance to refresh its operating state, apply certain configuration changes, or resolve temporary issues without changing its existing settings. This action helps restore normal operation, improve service reliability, and ensure efficient traffic distribution across backend resources.

To restart a Linux instance, follow these steps:

1. Navigate to **Compute > Linux Instances**. The following screen appears:![Linux](img/LinuxView.png)
2. Click on your created Linux instance name from the list.   
3. Navigate to **Operations**. The following screen appears:![Restarting an Instance](img/RestartinganInstance.png)
4. Click the **Restart Instance** button.
5. Click the **Yes** button.

## Force Stopping an Instance

Force stop a Linux instance to immediately terminate its operations when it becomes unresponsive or cannot be shut down through a normal stop operation. This action helps recover from critical issues, restore control of the instance, and prepare it for troubleshooting or restart.

To force stop a Linux instance, follow these steps:

1. Navigate to **Compute > Linux Instances**. The following screen appears:![Linux](img/LinuxView.png)
2. Click on your created Linux instance name from the list.
3. Navigate to **Operations**. The following screen appears:![Restarting an Instance](img/RestartinganInstance.png)
4. Click the **Force Stop Instance** button.
5. Click the **Yes** button.

## Resetting Password of an Instance

Resetting the password allows you to regain access to your Linux instance if you have forgotten the current password or need to update it for security purposes. You can generate a new administrator password and use it to securely sign in to your Linux instance.

To reset password of a Linux instance, follow these steps:

1. Navigate to **Compute > Linux Instances**. The following screen appears:![Linux](img/LinuxView.png)
2. Click on your created Linux instance name from the list.
3. Click the **Stop Instance** button. The following screen appears: ![Stop Instance](img/StopInstance.png)
4. Click the **Yes** button. The following screen appears: ![Start Instance](img/StartInstance.png)
5. Navigate to **Operations**, and click the **Reset Password**. The following screen appears:![Reset Password](img/ResetPwd.png)
6. Select the **Send the Password via Email** or **Send the Password via SMS** option.
7. Click the **Yes** button.

A password reset link is sent to your registered email address or mobile number.

## Resetting SSH key

Resetting the SSH key allows you to replace the existing key pair associated with your Linux instance. This is useful if the current SSH key is lost, compromised, or needs to be updated for secure administrative access.

To reset SSH key of a Linux instance, follow these steps:

1. Navigate to **Compute > Linux Instances**. The following screen appears: ![Linux](img/LinuxView.png)
2. Click on your created Linux instance name from the list.
3. Click the **Stop Instance** button. The following screen appears: ![Stop Instance](img/StopInstance.png)
4. Click the **Yes** button. The following screen appears: ![Start Instance](img/StartInstance.png)
5. Navigate to **Operations**. The following screen appears: ![Reset SSH Key](img/ResetSSHKey.png)
6. Click the **Reset SSH key** button. The following screen appears: ![Reset SSH Key](img/ResetSSHKey1.png)
7. Select an SSH key from the dropdown and select the **Send new password for this instance on my email** option.
8. Click **Confirm SSH Key Pair Reset** button.

A password reset link is sent to your registered email address.

## Renaming an Instance

Rename a Linux instance to assign a more meaningful or recognizable name without affecting its configuration or functionality. This action helps improve resource identification, simplifies instance management, and makes it easier to locate the instance in cloud environment.

To rename an instance, follow these steps:
1. Navigate to **Compute > Linux Instances**. The following screen appears:![Linux](img/LinuxView.png)
2. Click on your created Linux instance name from the list. 
3. Navigate to **Operations**. The following screen appears:![Reset SSH Key](img/ResetSSHKey.png)
4. Click the **Rename Instance** button. The following screen appears where you can update the Linux instance name in **Instance Name**.![Renaming Instance](img/RenamingInstance.png)
5. Click the **Done** button. 

## Migrating Network

Migrating a Linux instance between networks allows you to move the instance from its current network to a different target network while retaining the instance and its data. This is useful when reorganizing network infrastructure, improving connectivity, or aligning the instance with a different network environment.

:::note
	Remove any **Port Forwarding**, **Load Balancing**, or **Static NAT** configurations from the selected NIC before migrating the instance to another network.
:::

To migrate Linux instance between networks, follow these steps:
1. Navigate to **Compute > Other Linux Instances**. The following screen appears:![Linux](img/LinuxView.png)
2. Click on your created Linux instance name from the list.
3. Navigate to **Operations**.
4. Click the **Migrate Network** button. The following screen appears:![Migrate Network](img/MigrateNetwork.png)
5. Select the target network from the dropdown, and select the **I Agree to Migrate Network for the Instance** option.
6. Click the **Migrate Network** button.

## Reinstalling Linux Instance

Reinstalling a Linux instance replaces the existing operating system with a fresh installation while preserving the instance configuration. This is useful for recovering from system issues, restoring a clean operating system, or resolving configuration problems.


:::note
	Reinstalling the operating system permanently erases all data on the root disk, including system files, installed applications, and any data stored on the root partition (/ or C drive). Attached data disks remain unaffected. Before proceeding, create a restore point or backup of the instance and ensure that you have saved all important data to another location.
:::

To reinstalling a Linux instance, follow these steps:

1. Navigate to **Compute > Linux Instances**. The following screen appears:![Linux](img/LinuxView.png)
2. Click on your created Linux instance name from the list.
3. Navigate to **Operations**.
4. Click the **Reinstall Instance** button. The following screen appears: ![Reinstall Instance](img/ReinstallInstance.png)
5. Select a Reinstall Mode from the dropdown and select the **Send the Password via Email** or **Send the Password via SMS** option.
6. Click the **Reinstall Instance** button.

## Deleting an Instance

Delete a Linux instance when it is no longer required to remove it permanently from cloud environment. This action helps free up resources, reduce unnecessary costs, and keep your infrastructure organized by eliminating unused instances.

:::warning
	You can schedule deletion to continue using the resource until the end of the current billing cycle and cancel the deletion before it takes effect. Alternatively, you can delete the resource immediately, which is permanent and cannot be undone.
:::

To delete an instance, follow these steps:

1. Navigate to **Compute > Linux Instances**. The following screen appears:![Linux](img/LinuxView.png)
2. Click on your created Linux instance name from the list.
3. Navigate to **Operations**.
4. Click the **Delete Instance** button. The following screen appears, where you can choose to delete the Linux instance instantly or schedule it to be deleted at a later stage:
   ![Deletiob](img/Deletion.png)
	 - To delete the Linux instance instantly, enter **DELETE** and click the **Delete Now** button. The Linux instance is deleted.
	- To schedule the Linux instance to be deleted at a later stage, enter **DELETE** and click the **Schedule Deletion** button.