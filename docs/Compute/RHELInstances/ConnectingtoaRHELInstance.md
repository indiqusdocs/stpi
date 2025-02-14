---
sidebar_position: 2
---
# Connecting to a RHEL Instance

You can connect to RHEL Instances via SSH sessions using passwords (less secure) or [SSH key pairs](/docs/ToolsandUtilities/ManagingSSHKeysandKeyPairs) (most secure)

## Connecting from a Windows Machine

To connect to your RHEL Instance from a Windows machine, you will need to use an application called PuTTy, an SSH client.

1. [Download and install PuTTy.](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)
2. To launch PuTTY on your computer, open the PuTTY application.
3. To enter your instance’s IP address, type it in the Hostname field. Then, navigate to **Connection** > **SSH** > **Auth**.
4. To select the private key file, click the **Browse** button and choose the key file you previously generated.
5. To open a connection to the instance, click **Open** at the bottom of the screen. PuTTY will prompt you to allow the connection to the host.
6. To confirm the connection, click **OK**, and the terminal window will appear.
7. To authenticate using your SSH key, enter the default root username (**root**) and press **Enter**.

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


