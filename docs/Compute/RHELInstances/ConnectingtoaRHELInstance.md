---
sidebar_position: 2
---
# Connecting to a RHEL Instance

You can connect to RHEL Instances via SSH sessions using passwords (less secure) or [SSH key pairs](/docs/ToolsandUtilities/ManagingSSHKeysandKeyPairs) (most secure)

## Connecting from a Windows Machine

To connect to your RHEL Instance from a Windows machine, you will need to use an application called PuTTy, an SSH client.

1. [Download and install PuTTy.](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)
2. Launch PuTTy on your computer.
3. Enter your Instance’s IP address in the Hostname field. Navigate to **Connection** > **SSH** > **Auth**.
4. Click the **Browse** button and select the private key file you that you had already generated.
5. Click **Open** at the bottom of the screen to open a connection to the Instance. PuttY prompts you to allow the connection to the host.
6. Click **OK** to confirm and the terminal window will be displayed.
7. Then enter the default root user name (**root**) and press **Enter** to authenticate against the server with your SSH key.

You are now connected to your Instance.

## Connecting from a macOS or Linux Machine

1. Open any terminal program.
2. Enter the following command into the terminal. Make sure you replace _your_private_key_ with the filename of your private key; _your_instance_ip_ with the IP address of your Instance; and _username_ with the default root user name (_**root**_).

	```
	ssh -i ~/.ssh/<your_private_key> <username>@<your_instance_ip>
	```

3. When prompted, allow connection to the host by typing **yes**, then press **Enter**.

	```
	The authenticity of host 'myhost.ext (212.47.206.34)' can't be established.  
	RSA key fingerprint is 4f:ba:65:cf:14:64:a7:1e:b6:07:7c:00:71:95:21:fa.
	Are you sure you want to continue connecting (yes/no)?
	
	You are now connected to your Instance.
	```

