---
sidebar_position: 5
---
# Accessing the VFI Control Panel

The VFI Service on Ananta is delivered as an integration using OS images pre-loaded with pfSense or FortiGate VM. While adding Instances to the VFI-based network is possible from the Ananta Cloud Console UI, networking configurations need to be handled by accessing the VFI control panel UI.

Depending on the software/appliance powering the VFI, the steps needed to activate the VFI control panel are different. These instructions are also sent to Cloud Console users over email when they create a VFI, and all the details required to activate the VFI control panel are available on Ananta Cloud Console.

## Prerequisites and Preparation

Navigate to VFI, click on the **VFI** whose control panel needs to be activated. The [details popover](/docs/Networking/FirewallandSecurity/ViewingVFINetworkDetails) will list the required information, which are:

```
Virtual Firewall: <virtual_firewall_vm_name>
Public/WAN IPv4: <public_ip>
Network Name: <l2_wan_name>
Gateway: <gateway>
Subnet: <subnet_mask>
```

Keeping the above information ready and handy, click on the icon that looks like a **open new tab** to open the VFI/machine's console.

## Activating the Control Panel for pfSense VFI

1. On the VFI/machine's console, you'll be shown an on-screen menu - `use option 2` to enter the `Set Interface(s) IP Address` menu.
2. When prompted, select the WAN interface option. **Do not** use DHCP; instead, assign the Virtual Firewall's Public/WAN IPv4 address as the WAN IP.
3. Specify gateway and subnet details as mentioned in the email and on Ananta Cloud Console.
4. When prompted, **do not** use `https` for the `webconfigurator` module. After completing this, you should be able to access the Virtual Firewall Management UI using the `Public/WAN IPv4` Address. The default login details are:
```
Username: **admin**
Password: **pfsense**
```


## Activating the Control Panel for FortiGate VM VFI

1. On the VFI/machine's console, use **admin** as the username and leave the password field blank to login (note that these are the default credentials).
2. If prompted, create a new password.
3. Use the following command to verify the system interfaces:

```
show system interface
```

port1 will be the default WAN interface.

4. Use the following commands in sequence to configure the **Virtual Firewall Management** UI.

```
config system interface  
edit port1  
set mode static  
set ip {public_ip} {subnet_mask}  
set allowaccess ping http https ssh telnet  
end
```


5. Add a static route from your VFI to the network gateway by using the following commands:
```
config router static  
edit 1  
set gateway {gateway}
```


## Accessing the Control Panel(s)

Once the control panel has been activated and the public IPv4 bound to the management UI, the same can be accessed by typing the public IPv4 in the browser's URL bar, or by clicking on the **open in new tab** icon for the selected VFI.


