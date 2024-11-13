---
sidebar_position: 4
---
# Using Static Password In Autoscale Group’s VMs

1. Create a VPC and add a network tier inside the VPC.
   ![Using Static Password In AutoScale Group’s VMs](img/autoscalegrpvm1.png)

3. Create a Virtual Machine using the standard templates.
   ![Using Static Password In AutoScale Group’s VMs](img/autoscalegrpvm2.png)

4. Launch the console and login with the initial password (Generated at the time of VM Creation).
5. Run the following commands. 
	1. Create own password. <br />`sudo passwd <yourusername>` (ubuntu/root)
	2. Disable the password expiry. <br />`sudo chage -I -1 -m 0 -M 99999 -E -1 <yourusername>` (ubuntu/root)
	3. Ensure password Authentication is enabled (If using SSH). <br />`sudo vi /etc/ssh/sshd_config`
	4. Make sure the following lines are set correctly. <br />`PasswordAuthentication yes` 
	5. Restart the SSH Service. <br />`sudo systemctl restart ssh`   
	6. Stop the cloud-init service.  <br />`sudo systemctl stop cloud-init` 
	7. Uninstall cloud-init. <br />`sudo apt purge cloud-init -y`<br />`sudo rm -rf /etc/cloud`  
	9. Remove cloud-init data and configuration.  <br />`sudo rm -rf /var/lib/cloud` <br /> `sudo sed -i '/cloud-init/d' /etc/default/grub`
	11. Remove any cloud-init entry from the grub. <br />`sudo update-grub`
	12. Reboot the system. <br />`sudo reboot`

6. Stop The VM from the Ananta portal and create a Root snapshot of that VM.
   ![Using Static Password In AutoScale Group’s VMs](img/autoscalegrpvm3.png)

6. Create Image using the Snapshot. (After creation, it will be visible in the **My Image** section).
   ![Using Static Password In AutoScale Group’s VMs](img/autoscalegrpvm4.png)

7. Navigate to the VPC section, purchase an IPv4 address, and create a load balancing rule using the acquired IPv4 address.
   ![Using Static Password In AutoScale Group’s VMs](img/autoscalegrpvm5.png)

8. Create the Auto Scale Group using the custom template (**My Image**).
   ![Using Static Password In AutoScale Group’s VMs](img/autoscalegrpvm6.png)

9. You can now log in to the initial VM using the static password (the same one used for the standard VM). Additionally, you can successfully log in to the secondary VM using the same static password.

