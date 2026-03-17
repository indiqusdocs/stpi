---
sidebar_position: 2
---
# Creating a Kubernetes Cluster

To create a Kubernetes cluster on an advanced VPC AZ, follow these steps:
1. Navigate to **Compute > Kubernetes**.
	![New Kubernetes Cluster](img/KubernetesCluster1.png)
2. Click the **NEW KUBERNETES CLUSTER** button.
3. Choose an Availability Zone, which is the geographical region where your Kubernetes cluster will be deployed. Kubernetes Clusters can be created only in Availability Zones that support VPC Networking.   ![Availability Zone](img/KubernetesCluster2.png)
4. Choose a **Cluster Pack** from any of the available VPC Network Collections to set up the Kubernetes Cluster.
5. **Public IP** will be selected by default.
6. Choose a **Compute Pack** from the available compute collections.   ![Compute Pack](img/ComputePack.png)
7. You need to define the various cluster options listed below:
    1. You can enable the high availability HA for the cluster.
    2. Specify the cluster size, i.e., the no. of worker nodes. 
    3. Specify the node root disk size; a minimum of 8GB is required.
    4. Choose Kubernetes version (To learn how to access the dashboard from version 1.24 onwards, refer to [Accessing the Dashboard](Accessingthekubernetesdashboard.md)).
	![Cluster Options](img/ClusterOptions.png)
9. Verify the Estimated Cost of your Kubernetes Cluster based on the specifications you have chosen from the Summary and Estimated Costs Section (Here, both the Hourly and Monthly Prices summary will be displayed)
10. Select the **I have read and agreed to the End User License Agreement and Privacy Policy** option.
11. Click the **BUY HOURLY** or **BUY MONTHLY** button and click **CONFIRM** to create the Kubernetes Cluster.
    ![Summary](img/Summary.png)
	:::note
	This might take up to 5-8 minutes. You may use the Cloud Console during this time, but it is advised that you do not refresh the browser window.
	:::
Once ready, you get the notification of this purchase on your email address on record. The newly created Kubernetes cluster can be accessed from **Compute >** **Kubernetes** on the main navigation panel.


