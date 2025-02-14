---
sidebar_position: 12
---
# Configuring MS SQL Server Admin Password

After successfully provisioning the VM, the next step is to configure SQL Server Account of System Administrator, which has full control and administrative rights. You can log in to the SQL Server using the OS credentials you received in the email.

## Logging In and Setting Password

To log in to MS SQL, follow these steps:

1. Open **SQL Server Management Studio (SSMS)**, enable the **Trust server certificate** option and click **Connect**.
   ![SQL Server ](img/SQL1.png)
2. Once connected, the following **SQL Server** screen appears.
   ![SQL Server Management Studio Screen](img/SQL2.png)
3. Navigate to the **Object Explorer** window, right-click on **SQL Server Agent**, and click **Start**.
   ![SQL SERVER Agent](img/SQL3.png)
4. Navigate to **Security > Logins**, right-click on **sa**, and click on the **Properties** option.
   ![SQL SERVER Security](img/SQL4.png)
   ![SQL SERVER Properties](img/SQL5.png)
6. In the **General** tab, set the password in the **Password** and **Confirm Password** fields. Then, disable the **Enforce password policy** option.
   ![Confirm Password](img/SQL6.png)

