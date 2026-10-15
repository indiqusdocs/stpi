---
sidebar_position: 12
---
# Connecting to a RHEL Instance

Connecting to a RHEL instance allows you to securely access and manage your virtual machine remotely. You can connect using either a password or an SSH key pair. SSH key-based authentication is recommended as it provides a more secure way to access your instance.

This section comprises of the following sub-sections:
- [Connecting from a Windows Machine](#connecting-from-a-windows-machine)
- [Connecting from a macOS or Linux Machine](#connecting-from-a-macos-or-linux-machine)
## Connecting from a Windows Machine

You can connect to your RHEL instance from a Windows machine using an SSH client such as PuTTY. This allows you to securely access and manage your instance for administration and configuration tasks.

To connect a RHEL instance from a Windows machine, follow these steps:

1. [Download and install PuTTy.](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)
2. Launch PuTTy on your computer.
3. Enter your Instance’s IP address in the Hostname field.
4. Navigate to **Connection > SSH** > **Auth**.
5. Click the **Browse** button and select the private key file you previously generated.
6. Click **Open** at the bottom of the screen to open a connection to the Instance. PuttY prompts you to allow the connection to the host.
7. Click **OK** to confirm and the terminal window will be displayed.
8. Enter the default root user name (**root**) and press **Enter** to authenticate against the server with your SSH key.

You are now connected to your Instance

## Connecting from a macOS or Linux Machine

1. Open any terminal program.
2. Enter the following command into the terminal. Make sure you replace `your_private_key` with the filename of your private key; `your_instance_ip` with the IP address of your Instance; and username with the default root user name (_**root**_).

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


